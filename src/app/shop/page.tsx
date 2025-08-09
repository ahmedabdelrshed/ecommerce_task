import { products } from "@/data/products";
import ShopHeader from "./_components/ShopBanner"
import ProductCard from "@/components/ProductCard";
import Pagination from "./_components/Pagination";
import ServiceFeatures from "./_components/ServiceFeatures";

const ShopPage = () => {
  return (
    <main>
      <ShopHeader />
      <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-38 mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
          </div>
          <Pagination />
          <ServiceFeatures/>
    </main>
  );
}

export default ShopPage