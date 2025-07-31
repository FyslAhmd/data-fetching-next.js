import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./product-details";

export default async function ProductsPrismaDBPage({ searchParams }) {
  const { query } = await searchParams;
  const products = await getProducts(query);

  return <ProductDetail products={products} />;
}
