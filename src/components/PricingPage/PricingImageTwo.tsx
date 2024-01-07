import React from "react";
import peopleImage from "../../assets/images/pricingPage/cta2-people.webp";

const PricingImageTwo = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-globalWidth px-20px md:px-15px">
        <div className="flex flex-col-reverse md:flex-row bg-darkGreen bg-cover bg-center md:bg-center rounded-[16px] mt-30px mb-[64px] px-[28px] md:px-0">
          <div className="md:w-1/3 pl-20px md:mr-20px">
            <img src={peopleImage} alt="" />
          </div>
          <div className="flex flex-col px-[12px] py-[40px] md:p-0 md:w-2/3 text-left text-white md:justify-center">
            <p className="text-[16px] leading-5 tracking-[2px] uppercase font-bold mb-10px">
              try learndash
            </p>
            <h2 className="mb-[12px] text-[42px] leading-[46px] font-serif">
              Turn your passion and expertise into revenue.
            </h2>
            <a href="/learndash-demo">
              <button className="font-bold border border-white rounded-full text-white py-15px px-30px mb-20px mt-10px md:mb-0 md:mt-0 hover:bg-white hover:text-black hover:duration-300">
                Give LearnDash a try
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingImageTwo;
