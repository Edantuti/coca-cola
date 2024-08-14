import ProductCard from "@/components/ProductCard";

export default async function Page({params}){
    return (
        <section className="flex flex-col items-center justify-center w-full">
            <ProductCard id="product" name="product" type="product" category="product" image="" price="99" />
            <ProductCard id="product" name="product" type="product" category="product" image="" price="99" />
            <ProductCard id="product" name="product" type="product" category="product" image="" price="99" />
            <ProductCard id="product" name="product" type="product" category="product" image="" price="99" />
            <ProductCard id="product" name="product" type="product" category="product" image="" price="99" />

        </section>
    )

}