"use client";

import Image from "next/image";

const features = [
  {
    icon: "/icons/quality.svg",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: "/icons/warranty.svg",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: "/icons/shipping.svg",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: "/icons/support.svg",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="bg-[#F9F1E7] py-15 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="md:flex text-center md:text-start items-center  gap-4 flex-1 min-w-[200px]"
          >
            <Image src={item.icon} alt={item.title} width={50} height={50}  className="mx-auto mb-4 md:m-0 "/>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
