/* eslint-disable @next/next/no-img-element */
const FurnitureWork = () => {
  return (
    <section className="pt-5  bg-white">
      <div className="text-center ">
        <p className="text-lg text-gray-600">Share your setup with</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          #FurniroFurniture
        </h2>
      </div>

      <div className="flex flex-wrap gap-10 w-full ">
        <div className="flex flex-col gap-8">
          <div className="flex items-end gap-8 flex-wrap">
            <img src="/images/furniture/image1.png" alt="image1" />
            <img src="/images/furniture/image2.png" alt="image2" />
          </div>
          <div className="flex items-start gap-8 flex-wrap">
            <img src="/images/furniture/image3.png" alt="image3" />
            <img src="/images/furniture/image4.png" alt="image4" />
          </div>
        </div>
        <div className="w-fit flex items-center flex-wrap">
          <img src="/images/furniture/image5.png" alt=" image5" />
        </div>
        <div className=" flex flex-col gap-8 flex-wrap">
          <div className="flex items-end gap-8 flex-wrap">
            <img src="/images/furniture/image6.png" alt="image6" />
            <img src="/images/furniture/image7.png" alt="image7" />
          </div>
          <div className="flex items-start gap-8 flex-wrap">
            <img src="/images/furniture/image8.png" alt="image8" />
            <img src="/images/furniture/image9.png" alt="image9" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureWork;
