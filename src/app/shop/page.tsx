"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Pagination from "./_components/Pagination";
import ServiceFeatures from "./_components/ServiceFeatures";
import ShopBanner from "./_components/ShopBanner";
import { Product } from "@/data/products";


const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const res = await fetch(`/api/products`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      } else {
        setProducts([]);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);


  return (
    <main>
      <ShopBanner
      />

      <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-38 mx-auto">
        {loading ? (
          <div className="text-center py-20">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Pagination />
      <ServiceFeatures />
    </main>
  );
};

export default ShopPage;
