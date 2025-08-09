const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-screen "
      style={{ backgroundImage: "url('/images/home_img.jpg')" }}
    >
      {/* Content */}
      <div
        className=" absolute 
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          lg:top-[30%] lg:left-[55%]  lg:translate-x-0 lg:translate-y-0   bg-[#FFF3E3] rounded-[10px]  w-full  md:w-fit px-8 py-12 "
      >
        <p className="font-[500] tracking-[3px] text-base">New Arrival</p>
        <h1 className="text-4xl md:text-[52px] font-[700]  text-primary mb-6 max-w-xl leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-[#333333] text-base md:text-lg max-w-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white cursor-pointer  pt-6 pr-16 pb-6 pl-16">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
