// components/ProductsSection.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-38 mx-auto">
      <h2 className="text-center text-2xl font-bold mb-10">Our Products</h2>
      <div className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="border font-semibold cursor-pointer border-yellow-700 text-yellow-700 px-14 py-1  hover:bg-yellow-700 hover:text-white transition">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
