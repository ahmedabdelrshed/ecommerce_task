// components/RoomsInspiration.tsx
import Image from "next/image";


const RoomsInspiration = () => {
  return (
    <section className="bg-[#FCF8F3] py-16 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 flex-wrap">
        {/* Left Content */}
        <div className=" ps-20 lg:mr-24">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            50+ Beautiful rooms <br /> inspiration
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 font-medium hover:opacity-90 transition">
            Explore More
          </button>
        </div>

        {/* Right Slider */}

        {/* Card 1 */}
        <div className="relative flex-shrink-0 w-[370px] h-[500px] overflow-hidden rounded-lg">
          <Image
            src="/images/room1.png"
            alt="Room 1"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute bottom-6 left-6 backdrop-blur-3xl bg-white/30 opacity-80 px-4 py-6">
            <p className=" text-[#616161]">01 — Bed Room</p>
            <h3 className="text-lg font-semibold text-[#3A3A3A]">
              Inner Peace
            </h3>
          </div>
          {/* Arrow Button */}
          <button className="absolute bottom-6 left-1/2 bg-[#B88E2F] p-3 text-white">
            →
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative  w-[370px] h-[500px] overflow-hidden  ">
          <Image
            src="/images/room2.png"
            alt="Room 2"
            className="object-cover !h-[380px]"
            width={400}
            height={300}
          />
          {/* Arrow Button */}
          <button className="absolute top-[30%] right-3 bg-white p-2 rounded-full shadow-md">
            →
          </button>
          <div className="mt-10 flex gap-1.5 px-5">
            <SliderDot active /> 
            <SliderDot /> 
            <SliderDot /> 
            <SliderDot /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsInspiration;

type DotProps = {
  active?: boolean;
};

const SliderDot = ({ active }: DotProps) => {
  return (
    <button
      className={`w-5 h-5 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 ${
        active ? "border-2 border-primary" : ""
      }`}
    >
      <div className={`w-3 h-3 ${active ? "bg-primary" : "bg-gray-300"} rounded-full`} />
    </button>
  );
};