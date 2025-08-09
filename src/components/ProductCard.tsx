/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, subtitle, price, oldPrice, imgSrc, discount, isNew } = product;

  return (
    <div className="bg-white rounded-md w-full relative max-w-sm group">
      {/* Discount / New badges */}
      {discount && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-2  w-12 h-12 leading-12 rounded-full z-10">
          {discount}
        </div>
      )}
      {isNew && (
        <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs text-center font-semibold px-2 w-12 h-12 leading-12 rounded-full z-10">
          New
        </div>
      )}

      {/* Image */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-4 bg-[#F4F5F7]">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm mb-2">{subtitle}</p>}
        <div className="flex items-center gap-3">
          <span className="font-[600] text-[#3A3A3A]">{price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
