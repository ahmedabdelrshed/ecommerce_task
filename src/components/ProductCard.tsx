/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import type { Product } from "../data/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, subtitle, price, oldPrice, imgSrc, discount, isNew } = product;

  return (
    <div className="bg-white  w-full relative max-w-sm group overflow-hidden">
      {/* Discount / New badges */}
      {discount && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-2 w-12 h-12 rounded-full z-10 flex items-center justify-center">
          {discount}
        </div>
      )}
      {isNew && (
        <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-semibold px-2 w-12 h-12 rounded-full z-10 flex items-center justify-center">
          New
        </div>
      )}

      {/* Full Card Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-4 pointer-events-none">
        <div className="absolute inset-0 bg-[#3A3A3A] opacity-0 group-hover:opacity-[72%] transition-opacity duration-300 pointer-events-auto"></div>
        <button className="relative opacity-0 group-hover:opacity-100 z-20 bg-white text-[#B88E2F] font-semibold py-2 px-6 pointer-events-auto">
          Add to cart
        </button>
        <div className="relative z-20 flex gap-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <div className="flex items-center gap-1">
            <Image src="/icons/share.svg" alt="Share" width={16} height={16} />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icons/compare.svg"
              alt="Compare"
              width={16}
              height={16}
            />
            <span>Compare</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/icons/like.svg" alt="Like" width={16} height={16} />
            <span>Like</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-72 overflow-hidden">
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
