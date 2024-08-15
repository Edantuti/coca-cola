import ProductCard from "@/components/ProductCard";
import { QrCodeScannerProduct } from "@/components/QrCodeScannerProduct";

export default async function Page({ params }) {
  if (params.category === "qrcode") {
    return (
      <section className="flex flex-col items-center justify-center w-full">
        <QrCodeScannerProduct />
      </section>
    );
  }
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <ProductCard
        id="product"
        name="product"
        type="product"
        category="product"
        image=""
        price="99"
      />
      <ProductCard
        id="product"
        name="product"
        type="product"
        category="product"
        image=""
        price="99"
      />
      <ProductCard
        id="product"
        name="product"
        type="product"
        category="product"
        image=""
        price="99"
      />
      <ProductCard
        id="product"
        name="product"
        type="product"
        category="product"
        image=""
        price="99"
      />
      <ProductCard
        id="product"
        name="product"
        type="product"
        category="product"
        image=""
        price="99"
      />
    </section>
  );
}
