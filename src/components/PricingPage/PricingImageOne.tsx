import React from "react";

const PricingImageOne = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-globalWidth px-20px md:px-15px">
        <div className="bg-purple bg-pricingOneCta bg-cover bg-center md:bg-center rounded-[16px] mt-30px mb-[64px] py-[28px] px-[28px] md:px-0">
          <p className="text-[22px] leading-[26px] md:leading-[22px] text-dark">
            Not the right fit? We offer a 15-day money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingImageOne;
