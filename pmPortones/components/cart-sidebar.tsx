"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, ShoppingBag, ExternalLink, Trash2, User, Phone, Mail, CreditCard } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/products"
import { generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/cart"
import { toast } from "sonner"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId)
      toast.success("Producto eliminado del carrito")
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (!customerData.name || !customerData.phone || !customerData.email) {
      toast.error("Por favor completa todos los campos")
      return
    }

    if (items.length === 0) {
      toast.error("El carrito está vacío")
      return
    }

    setIsCheckingOut(true)

    try {
      const message = generateWhatsAppMessage(items, customerData)
      const whatsappUrl = getWhatsAppUrl(message)

      window.open(whatsappUrl, "_blank")
      toast.success("Redirigiendo a WhatsApp...")

      setTimeout(() => {
        clearCart()
        setCustomerData({ name: "", phone: "", email: "" })
        onClose()
        setIsCheckingOut(false)
        toast.success("¡Pedido enviado! Te contactaremos pronto.")
      }, 1000)
    } catch (error) {
      toast.error("Error al procesar el pedido")
      setIsCheckingOut(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
  <SheetContent 
        className="w-full max-w-full sm:max-w-md lg:max-w-lg flex flex-col h-full p-0 bg-orange-50/95 backdrop-blur-xl border-l border-orange-300/50 md:rounded-l-xl md:mt-0 mt-0 md:h-full h-screen overflow-y-auto"
        showClose={false}
      >
  <SheetHeader className="p-2 sm:p-4 bg-gradient-to-r from-orange-400/20 to-orange-600/10 border-b border-orange-300/50 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-3 text-lg sm:text-xl font-bold">
              <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-700">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <span>Carrito de Compras</span>
                <div className="text-sm font-normal text-muted-foreground">
                  {items.length} {items.length === 1 ? "producto" : "productos"}
                </div>
              </div>
            </SheetTitle>
            <SheetClose 
              className="inline-flex items-center justify-center rounded-full p-2 text-xl hover:bg-orange-200 transition-colors opacity-70 hover:opacity-100" 
              aria-label="Cerrar carrito"
              onClick={onClose}
            >
              ×
            </SheetClose>
          </div>
        </SheetHeader>

  <div className="flex flex-col h-full min-h-0">
          {items.length === 0 ? (
            /* Enhanced empty state with better design */
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">Tu carrito está vacío</p>
                  <p className="text-sm text-muted-foreground">Agrega productos para comenzar tu compra</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="p-1 sm:p-3 w-full">
                <div className="space-y-2 w-full">
                  {items.map((item, index) => (
                    <div
                      key={`${item.product.id}-${JSON.stringify(item.variations)}`}
                      className="group flex flex-col sm:flex-row gap-2 p-1 sm:p-2 border border-border/50 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 hover:shadow animate-scale-in w-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden min-w-[48px] min-h-[48px]">
                          <Image
                            src={item.product.images[0] || "/placeholder.svg"}
                            alt={item.product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0 w-full">
                          <h4 className="font-semibold text-xs line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-muted-foreground">{item.product.category}</p>
                          {item.variations && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {Object.entries(item.variations).map(([key, value]) => (
                                <Badge key={key} variant="secondary" className="text-xs px-2 py-1">
                                  {value}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="text-right min-w-[60px] w-full sm:w-auto">
                          <p className="font-bold text-xs text-primary">
                            {item.product.price && typeof item.product.price === 'number' 
                              ? formatPrice(item.product.price * item.quantity)
                              : "Precio consultar"
                            }
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {item.product.price && typeof item.product.price === 'number' 
                              ? `${formatPrice(item.product.price)} c/u`
                              : "Consultar precio"
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-between mt-1 gap-1 w-full">
                        <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1 w-full sm:w-auto">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-destructive hover:text-destructive-foreground transition-colors"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors sm:ml-2 ml-0 mt-0 sm:mt-0 self-center"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
                <div className="p-2 sm:p-4 pb-4 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 w-full">
                    <span className="text-base sm:text-lg font-bold">Total:</span>
                    <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mt-2 sm:mt-0">
                      {total > 0 ? formatPrice(total) : "Total a consultar"}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 w-full">
                      <CreditCard className="w-4 h-4 text-orange-600" />
                      <h4 className="font-semibold text-sm">Datos de contacto</h4>
                    </div>

                    <div className="space-y-2 w-full">
                      <div className="space-y-1 w-full">
                        <Label htmlFor="name" className="text-xs font-medium flex items-center gap-1">
                          <User className="w-3 h-3" />
                          Nombre completo
                        </Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre completo"
                          value={customerData.name}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, name: e.target.value }))}
                          className="focus-ring h-8 text-xs w-full"
                        />
                      </div>

                      <div className="space-y-1 w-full">
                        <Label htmlFor="phone" className="text-xs font-medium flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Tu número de teléfono"
                          value={customerData.phone}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="focus-ring h-8 text-xs w-full"
                        />
                      </div>

                      <div className="space-y-1 w-full">
                        <Label htmlFor="email" className="text-xs font-medium flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={customerData.email}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, email: e.target.value }))}
                          className="focus-ring h-8 text-xs w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <div className="sticky bottom-0 z-10 bg-card/80 pt-1 pb-1 w-full">
                        <Button
                          onClick={handleCheckout}
                          disabled={isCheckingOut}
                          className="w-full h-10 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg btn-premium text-sm border-orange-600"
                          size="sm"
                        >
                          {isCheckingOut ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Procesando...
                            </div>
                          ) : (
                            <>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Finalizar por WhatsApp
                            </>
                          )}
                        </Button>
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => {
                          clearCart()
                          toast.success("Carrito vaciado")
                        }}
                        className="w-full h-10 border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Vaciar Carrito
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
