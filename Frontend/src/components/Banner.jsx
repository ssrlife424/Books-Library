import React from "react";
import BannerBook from "/BannerBook.png"

const Banner = () => {
  return (
    <>
      <div className="container flex flex-col px-4 mx-auto my-10 max w-screen-2xl md:px-20 md:flex-row">
        <div className="order-2 w-full mt-12 md:order-1 md:w-1/2 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl font-bold md:text-4xl">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="flex items-center gap-2 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="" />
            </label>
          </div>
          <button className="mt-6 btn btn-secondary">Get Started</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
            <img className = "md:[550px] md:h-[460px] md:ml-12" src={BannerBook} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
