import React from "react";
// Images Import
import lmsPlugin from "../../assets/images/pricingPage/plugin-shape.svg";
import Cloud from "../../assets/images/pricingPage/cloud-shape.svg";

const PricingTable = () => {
  return (
    <div className="flex w-full justify-center mb-[60px]">
      <div className="flex flex-col w-full max-w-globalWidth md:py-25px md:px-15px">
        <h3 className="mt-6 mb-30px md:mb-[52px] text-[38px] leading-[42px] md:text-[48px] md:leading-[48px] font-serif">
          Which solution is right for me?
        </h3>

        {/* Table */}
        <div className="flex flex-col px-20px md:px-0">
          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 justify-center">
              <div className="py-30px px-10px md:px-25px w-full"></div>
            </div>

            <div className="flex w-1/3 justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <div className="w-full flex flex-col md:flex-row md:items-center">
                  <img
                    src={Cloud}
                    alt="Cloud"
                    className="mr-10px pr-10px py-10px w-[50px] md:w-auto h-auto"
                  />
                  <h2 className="text-[16px] text-left leading-5 tracking-[2px] uppercase font-bold">
                    cloud
                  </h2>
                </div>
                <p className="text-left text-[16px] leading-[20px] mt-15px md:text-[18px] md:leading-[24px] md:mt-0">
                  Get started right out of the box.
                </p>
              </div>
            </div>

            <div className="flex w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <div className="w-full flex flex-col md:flex-row md:items-center">
                  <img
                    src={lmsPlugin}
                    alt="LMS Plugin"
                    className="mr-10px pr-10px py-10px w-[50px] md:w-auto h-auto"
                  />
                  <h2 className="text-[16px] text-left leading-5 tracking-[2px] uppercase font-bold">
                    LMS plugin
                  </h2>
                </div>
                <p className="text-left text-[16px] leading-[20px] mt-15px md:text-[18px] md:leading-[24px] md:mt-0">
                  Add a full course solution to your WordPress site.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Hosting
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Included at lightning-fast speeds, with site backup included.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Purchase separately.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Security
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  <span className="text-mainBlue hover:text-hoverBlue hover:duration-300 underline underline-offset-4">
                    <a href="/pro-panel">Solid Security Pro</a>
                  </span>{" "}
                  pre-installed.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Purchase separately.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Analytics
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Includes ProPanel ($49 value).
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Available as an add-on for $49/year.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Compatibility
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Compatible with every theme that’s coded to WordPress
                  standards; plus, starter templates designed specifically for
                  Cloud.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Compatible with every WordPress theme that’s coded to
                  WordPress’ standards.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Pricing
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  <strong>$25/month</strong> when paid annually<br></br>
                  <strong>$29/month</strong> when paid monthly
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  <strong>$199/year*</strong>
                  <br></br>
                  *Additional license tiers available
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full border-b border-dark">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Community
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Access to the entire WordPress ecosystem, plus an active
                  Facebook group of over 25,000 users.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Access to the entire WordPress ecosystem, plus an active
                  Facebook group of over 25,000 users.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="md:text-[22px] md:leading-[24px] font-bold text-left">
                  Support
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px border-x border-dark w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Full access to support team and robust documentation.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-1/3 md:justify-center">
              <div className="py-15px md:py-30px px-10px md:px-25px w-full">
                <p className="text-left md:text-[18px] md:leading-[24px]">
                  Full access to support team and robust documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
