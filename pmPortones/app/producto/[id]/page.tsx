import { Metadata } from "next";
import { ProductDetailClient } from "./product-detail-client";
import { mockProducts } from "@/lib/products";

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Producto no encontrado - Portones PM",
      description: "El producto solicitado no fue encontrado.",
    };
  }

  return {
    title: `${product.name} - Portones PM`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Portones PM`,
      description: product.description,
      images: product.images.map((img) => ({ url: img })),
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetailClient productId={params.id} />;
}
