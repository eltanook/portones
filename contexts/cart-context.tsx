"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"
import { toast } from "sonner"
import { type CartItem, type CartState, calculateCartTotal, calculateItemCount } from "@/lib/cart"
import type { Product } from "@/lib/products"

interface CartContextType extends CartState {
  addItem: (product: Product, quantity?: number, variations?: Record<string, string>) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number; variations?: Record<string, string> } }
  | { type: "REMOVE_ITEM"; payload: { productId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity, variations } = action.payload
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && JSON.stringify(item.variations) === JSON.stringify(variations),
      )

      let newItems: CartItem[]
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        newItems = [...state.items, { product, quantity, variations }]
      }

      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.product.id !== action.payload.productId)
      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      }
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.product.id !== productId)
        return {
          items: newItems,
          total: calculateCartTotal(newItems),
          itemCount: calculateItemCount(newItems),
        }
      }

      const newItems = state.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item))

      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      }
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
        itemCount: 0,
      }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product: Product, quantity = 1, variations?: Record<string, string>) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity, variations } })
    toast.success(`${product.name} agregado al carrito`, {
      description: `Cantidad: ${quantity}`,
    })
  }

  const removeItem = (productId: string) => {
    const item = state.items.find((item) => item.product.id === productId)
    dispatch({ type: "REMOVE_ITEM", payload: { productId } })
    if (item) {
      toast.success(`${item.product.name} eliminado del carrito`)
    }
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
    toast.success("Carrito vaciado")
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
