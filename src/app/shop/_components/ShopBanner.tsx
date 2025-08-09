"use client";

import Image from "next/image";

const ShopHeader = () => {
  return (
    <section>
      {/* Header with background */}
      <div
        className="relative h-40 md:h-[316px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/shop.png')" }}
      >
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-[500] text-gray-900">Shop</h1>
          <p className="text-sm  mt-1">
            <span className="font-[500]">Home</span> &gt;{" "}
            <span className="font-[300]">Shop</span>
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-6 px-4 md:px-8 lg:px-16 xl:px-38 mx-auto bg-[#F9F1E7] text-gray-800 text-sm">
        {/* Left Controls */}
        <div className="flex items-center gap-4 ">
          <button className="flex items-center gap-2">
            <Image
              src="/icons/filter.svg"
              alt="Filter"
              width={16}
              height={16}
            />
            <span>Filter</span>
          </button>

          {/* View Toggle */}
          <div className="flex gap-2 items-center pr-8 border-r-2  border-[#9F9F9F] ">
            <button>
              <Image
                src="/icons/filter2.svg"
                alt="Grid View"
                width={18}
                height={18}
              />
            </button>
            <button>
              <Image
                src="/icons/filter3.svg"
                alt="List View"
                width={18}
                height={18}
              />
            </button>
          </div>

          <span className="ml-4 text-gray-600">Showing 1–16 of 32 results</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <input
              type="number"
              min={1}
              max={100}
              defaultValue={16}
              className="w-12 px-2 py-1 border border-gray-300 rounded-sm text-center bg-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <span>Short by</span>
            <select className="px-2 py-1 border border-gray-300 rounded-sm bg-white">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
