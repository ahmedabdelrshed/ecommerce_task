/* eslint-disable @next/next/no-img-element */
import React from "react";

const categories = [
  {
    id: 1,
    title: "Dining",
    imageSrc: "/images/dining.png",
    alt: "Dining room furniture",
    href: "/",
  },
  {
    id: 2,
    title: "Living",
    imageSrc: "/images/living.png",
    alt: "Living room furniture",
    href: "/",
  },
  {
    id: 3,
    title: "Bedroom",
    imageSrc: "/images/bedroom.png",
    alt: "Bedroom furniture",
    href: "/",
  },
];

const Categories = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-38 bg-white  mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Browse The Range
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(({ id, title, imageSrc, alt, href }) => (
          <a
            key={id}
            href={href}
            className="block group overflow-hidden rounded-lg  duration-300"
          >
            <div className="aspect-[4/5] relative w-full overflow-hidden rounded-lg">
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-center text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
