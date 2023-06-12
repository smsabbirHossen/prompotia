import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#EA3A60] rounded-[20px] p-10 w-full">
      <div className="max-w-[500px] m-auto">
        <h2 className="font-bold text-[25px] text-white text-center mb-5">
          Subscribe to our Blog
        </h2>
        <p className="text-white text-[18px] text-center leading-[25px] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor incididunt labore dolore.
        </p>
        <form className="relative">
          <div className="flex justify-between items-center bg-white rounded-[30px] p-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="   focus:outline-none border-0  p-3 placeholder:text-[#EA3A60] font-medium"
            />
            <button className="bg-[#EA3A60] text-white px-7 py-3 rounded-[25px] text-[16px] font-medium  ">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
