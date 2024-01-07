import React, { useState } from "react";

// Images Import
import learnDashPlugin from "../../assets/images/pricingPage/plugin-shape.svg";
import memberDashPlugin from "../../assets/images/pricingPage/memberdash.svg";
import learnDashCloud from "../../assets/images/pricingPage/cloud-shape.svg";
import proPanel from "../../assets/images/pricingPage/pro-panel.svg";
import gradeBook from "../../assets/images/pricingPage/gradebook-2.svg";
import notes from "../../assets/images/pricingPage/notes.svg";
import groupsPlus from "../../assets/images/pricingPage/groups-plus.svg";

const PricingMain = () => {
  // LearnDash Plugin
  const [learnDashActiveTab, setLearnDashActiveTab] = useState<number>(1);

  // MemberDash Plugin
  const [memberDashActiveTab, setMemberDashActiveTab] = useState<number>(1);

  // LearDash Cloud
  const [learnDashCloudActiveTab, setlearnDashCloudActiveTab] =
    useState<number>(1);
  const [learnDashCloudAnnualyActiveTab, setlearnDashCloudAnnualyActiveTab] =
    useState<number>(1);
  const [learnDashCloudMonthlyActiveTab, setlearnDashCloudMonthlyActiveTab] =
    useState<number>(1);

  // ProPanel
  const [proPanelActiveTab, setProPanelActiveTab] = useState<number>(1);

  // GradeBook
  const [gradeBooklActiveTab, setGradeBookActiveTab] = useState<number>(1);

  // Ultimate Course Creator
  const [ultimateCourseActiveTab, setUltimateCourseActiveTab] =
    useState<number>(1);

  // Student Success
  const [studentSuccessActiveTab, setStudentSuccessActiveTab] =
    useState<number>(1);

  // LearnDash Plugin
  const handleLearnDashTabClick = (tabNumber: number) => {
    setLearnDashActiveTab(tabNumber);
  };

  // MemberDash Plugin
  const handleMemberDashTabClick = (tabNumber: number) => {
    setMemberDashActiveTab(tabNumber);
  };

  // LearnDash Cloud
  const handleLearnDashCloudTabClick = (tabNumber: number) => {
    setlearnDashCloudActiveTab(tabNumber);
  };

  const handleLearnDashCloudAnnualyTabClick = (tabNumber: number) => {
    setlearnDashCloudAnnualyActiveTab(tabNumber);
  };

  const handleLearnDashCloudMonthlyTabClick = (tabNumber: number) => {
    setlearnDashCloudMonthlyActiveTab(tabNumber);
  };

  // ProPanel
  const handleProPanelTabClick = (tabNumber: number) => {
    setProPanelActiveTab(tabNumber);
  };

  // GradeBook
  const handleGradeBookTabClick = (tabNumber: number) => {
    setGradeBookActiveTab(tabNumber);
  };

  // Ultimate Course Creator
  const handleUltimateCourse = (tabNumber: number) => {
    setUltimateCourseActiveTab(tabNumber);
  };

  // Student Success
  const handleStudentSuccess = (tabNumber: number) => {
    setStudentSuccessActiveTab(tabNumber);
  };

  return (
    <div className="flex w-full justify-center mt-[80px]">
      {/* Page Inner */}
      <div className="flex flex-col w-full max-w-globalWidth ">
        <h1 className="text-black w-full text-[38px] md:text-[58px] mt-[64px] mb-[83px] font-serif">
          LearnDash Pricing
        </h1>

        {/* LearnDash Plugin & MemberDash Plugin */}
        <div className="flex flex-col md:flex-row  w-full justify-center mb-30px md:mb-0">
          <div className="flex flex-wrap md:flex-nowrap md:max-w-[1047px] w-full gap-8 px-20px">
            {/* LearnDash Plugin */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] md:pb-[40px] rounded-lg md:w-1/2">
              {/* Heading with image */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <img
                  src={learnDashPlugin}
                  alt=""
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  learndash plugin
                </h2>
              </div>

              <h3 className="text-[32px] leading-[32px] md:text-[36px] md:leading-[46px] font-serif mb-[12px] text-left">
                Add LearnDash to your WordPress site.
              </h3>
              <p className="text-left mb-[28px] md:text-[18px] md:leading-[20px] md:mb-[36px]">
                Ready to install. Start creating courses in a few clicks.
              </p>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    learnDashActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleLearnDashTabClick(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    learnDashActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleLearnDashTabClick(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    learnDashActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleLearnDashTabClick(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {learnDashActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $199/year
                  </p>
                  <p className="text-left text-[14px] leading-20px mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {learnDashActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $399/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {learnDashActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $799/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}
            </div>

            {/* MemberDash Plugin */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] rounded-lg md:w-1/2">
              {/* Heading with image */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <img
                  src={memberDashPlugin}
                  alt=""
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  memberdash plugin
                  <span className="bg-yellowBadge text-dark text-[13px] font-semi py-4px px-6px ml-10px">
                    NEW
                  </span>
                </h2>
              </div>

              <h3 className="text-[32px] leading-[32px] md:text-[36px] md:leading-[46px] font-serif mb-[12px] text-left">
                The most flexible membership plugin.
              </h3>
              <p className="text-left mb-[28px] md:text-[18px] md:leading-[20px] md:mb-[36px]">
                Monetize your content and build a community.
              </p>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    memberDashActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleMemberDashTabClick(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    memberDashActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleMemberDashTabClick(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    memberDashActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleMemberDashTabClick(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {memberDashActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $199/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {memberDashActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $399/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {memberDashActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $799/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* LearnDash Cloud */}
        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex flex-col md:max-w-[1047px] w-full md:py-[34px] px-[20px] ">
            <div className="flex flex-col bg-headerScroll rounded-lg pt-[34px] px-15px pb-25px md:p-[34px]">
              {/* Heading with image */}
              <div className="flex items-center">
                <img
                  src={learnDashCloud}
                  alt=""
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="md:text-[16px] leading-5 tracking-[2px] uppercase font-bold text-left">
                  learndash cloud
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side */}
                <div className="md:w-1/2 flex flex-col">
                  <h2 className="text-[32px] leading-[32px] md:text-[36px] md:leading-[46px] font-serif mb-[12px] text-left">
                    Get started in minutes. Hosting included.
                  </h2>
                  <p className="text-left mb-[28px] text-[18px] leading-[20px] md:mb-[36px]">
                    It’s the easiest way into LearnDash. A full website ready to
                    go, complete with beautiful templates and customization
                    tools to build courses that match your brand.
                  </p>
                  <p className="text-left text-[18px] leading-[20px] mb-[28px] md:mb-0">
                    <strong>ProPanel </strong>$49 value
                  </p>
                  <p className="text-left text-[18px] leading-[20px] mb-[28px] md:mb-0">
                    Includes our popular analytics solution for free
                  </p>

                  <p className="text-left text-[18px] leading-[20px] mt-[24px] mb-5px">
                    Includes
                  </p>

                  {/* Linked List */}
                  <ul className="text-left md:mb-10px">
                    <li className="list-disc list-inside md:mb-5px">
                      <a
                        href="/learndash-lms/"
                        target="_blank"
                        className="underline underline-offset-4"
                      >
                        LearnDash LMS
                      </a>{" "}
                      Plugin
                    </li>
                    <li className="list-disc list-inside md:mb-5px">
                      <a
                        href="/propanel-by-learndash/"
                        target="_blank"
                        className="underline underline-offset-4"
                      >
                        ProPanel
                      </a>
                    </li>
                    <li className="list-disc list-inside md:mb-5px">
                      <a
                        href="/"
                        target="_blank"
                        className="underline underline-offset-4"
                      >
                        Solid Security Pro
                      </a>
                    </li>
                    <li className="list-disc list-inside md:mb-5px">
                      <a
                        href="learndash-cloud-optimizes-your-course-sites-performance-with-object-cache-pro/"
                        target="_blank"
                        className="underline underline-offset-4"
                      >
                        Object Cache Pro
                      </a>
                    </li>
                    <li className="list-disc list-inside md:mb-5px">Hosting</li>
                  </ul>
                </div>

                {/* Right Side - Price */}
                <div className="md:w-1/2">
                  <div className="flex md:flex-row wrap">
                    <div
                      className={`cursor-pointer p-[8px] text-[14px] leading-[17px] ${
                        learnDashCloudActiveTab === 1
                          ? "duration-200 border-b-[2.5px] border-dark"
                          : "border-b-[1px] border-dark text-grey hover:text-dark duration-300"
                      }`}
                      onClick={() => handleLearnDashCloudTabClick(1)}
                    >
                      Pay annually
                    </div>
                    <div
                      className={`cursor-pointer  p-[8px] text-[14px] leading-[17px] ${
                        learnDashCloudActiveTab === 2
                          ? "duration-200 border-b-[2.5px] border-dark"
                          : "border-b-[1px] border-dark text-grey hover:text-dark duration-300"
                      }`}
                      onClick={() => handleLearnDashCloudTabClick(2)}
                    >
                      Pay monthly
                    </div>
                  </div>

                  {/* Pay annually Tab */}
                  {learnDashCloudActiveTab === 1 && (
                    <div className="flex pt-20px">
                      <div
                        className={`cursor-pointer px-25px py-6px text-[14px] ${
                          learnDashCloudAnnualyActiveTab === 1
                            ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                            : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                        }`}
                        onClick={() => handleLearnDashCloudAnnualyTabClick(1)}
                      >
                        Starter
                      </div>
                      <div
                        className={`cursor-pointer px-25px py-6px text-[14px] ${
                          learnDashCloudAnnualyActiveTab === 2
                            ? "bg-dark text-white border-[1px] border-dark "
                            : "bg-white border-y-[1px] border-borderColor"
                        }`}
                        onClick={() => handleLearnDashCloudAnnualyTabClick(2)}
                      >
                        Growth
                      </div>
                      <div
                        className={`cursor-pointer px-25px py-6px text-[14px] ${
                          learnDashCloudAnnualyActiveTab === 3
                            ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                            : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                        }`}
                        onClick={() => handleLearnDashCloudAnnualyTabClick(3)}
                      >
                        Pro
                      </div>
                    </div>
                  )}

                  {/* Pay annually Tab - Starter */}
                  {learnDashCloudActiveTab === 1 &&
                    learnDashCloudAnnualyActiveTab === 1 && (
                      <div className="duration-300 flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                        <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                          $25/month
                        </p>
                        <p className="text-left text-[14px] mb-25px">
                          When paid annually. Billed at $299/year
                        </p>
                        <p className="text-left text-[14px] mb-25px md:mb-8">
                          The perfect place to start building your course and
                          growing an audience. Includes updates and support.
                        </p>
                        <a
                          href="/checkout/learndash-plugin/799"
                          className="text-left"
                        >
                          <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                            Get LearnDash Cloud
                          </button>
                        </a>
                        <p className="pointer text-[17px] text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-[24px] md:mt-32px md:mb-8px md:ml-5px">
                          <a href="/add-ons/">Compare plans</a>
                        </p>
                      </div>
                    )}

                  {/* Pay annually Tab - Growth */}
                  {learnDashCloudActiveTab === 1 &&
                    learnDashCloudAnnualyActiveTab === 2 && (
                      <div className="duration-300 flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                        <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                          $41/month
                        </p>
                        <p className="text-left text-[14px] mb-25px">
                          When paid annually. Billed at $499/year.
                        </p>
                        <p className="text-left text-[14px] mb-25px md:mb-8">
                          Extra multimedia storage and bandwidth for growing
                          course businesses.
                        </p>
                        <a
                          href="/checkout/learndash-plugin/799"
                          className="text-left"
                        >
                          <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                            Get LearnDash Cloud
                          </button>
                        </a>
                        <p className="pointer text-[17px] text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-[24px] md:mt-32px md:mb-8px md:ml-5px">
                          <a href="/add-ons/">Compare plans</a>
                        </p>
                      </div>
                    )}

                  {/* Pay annually Tab - Pro */}
                  {learnDashCloudActiveTab === 1 &&
                    learnDashCloudAnnualyActiveTab === 3 && (
                      <div className="duration-300 flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                        <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                          $83/month
                        </p>
                        <p className="text-left text-[14px] mb-25px">
                          When paid annually. Billed at $999/year.
                        </p>
                        <p className="text-left text-[14px] mb-25px md:mb-8">
                          Unlimited access for large businesses with many active
                          classes.
                        </p>
                        <a
                          href="/checkout/learndash-plugin/799"
                          className="text-left"
                        >
                          <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                            Get LearnDash Cloud
                          </button>
                        </a>
                        <p className="pointer text-[17px] text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-[24px] md:mt-32px md:mb-8px md:ml-5px">
                          <a href="/add-ons/">Compare plans</a>
                        </p>
                      </div>
                    )}

                  {learnDashCloudActiveTab === 2 && (
                    <div className="flex pt-20px">
                      <div
                        className={`cursor-pointer px-25px py-6px text-[14px] ${
                          learnDashCloudMonthlyActiveTab === 1
                            ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                            : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                        }`}
                        onClick={() => handleLearnDashCloudMonthlyTabClick(1)}
                      >
                        Starter
                      </div>
                      <div
                        className={`cursor-pointer px-25px py-6px text-[14px] ${
                          learnDashCloudMonthlyActiveTab === 2
                            ? "bg-dark text-white border-[1px] border-dark "
                            : "bg-white border-y-[1px] border-borderColor"
                        }`}
                        onClick={() => handleLearnDashCloudMonthlyTabClick(2)}
                      >
                        Growth
                      </div>
                      <div
                        className={`cursor-pointer px-25px py-6px text-[14px] ${
                          learnDashCloudMonthlyActiveTab === 3
                            ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                            : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                        }`}
                        onClick={() => handleLearnDashCloudMonthlyTabClick(3)}
                      >
                        Pro
                      </div>
                    </div>
                  )}

                  {/* Pay Monthly Tab - Starter */}
                  {learnDashCloudActiveTab === 2 &&
                    learnDashCloudMonthlyActiveTab === 1 && (
                      <div className="duration-300 flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                        <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                          $29/month
                        </p>
                        <p className="text-left text-[14px] mb-25px md:mb-8">
                          The perfect place to start building your course and
                          growing an audience. Includes updates and support.
                        </p>
                        <a
                          href="/checkout/learndash-plugin/799"
                          className="text-left"
                        >
                          <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                            Get LearnDash Cloud
                          </button>
                        </a>
                        <p className="pointer text-[17px] text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-[24px] md:mt-32px md:mb-8px md:ml-5px">
                          <a href="/add-ons/">Compare plans</a>
                        </p>
                      </div>
                    )}

                  {/* Pay Monthly Tab - Growth */}
                  {learnDashCloudActiveTab === 2 &&
                    learnDashCloudMonthlyActiveTab === 2 && (
                      <div className="duration-300 flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                        <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                          $49/month
                        </p>
                        <p className="text-left text-[14px] mb-25px md:mb-8">
                          Extra multimedia storage and bandwidth for growing
                          course businesses
                        </p>
                        <a
                          href="/checkout/learndash-plugin/799"
                          className="text-left"
                        >
                          <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                            Get LearnDash Cloud
                          </button>
                        </a>
                        <p className="pointer text-[17px] text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-[24px] md:mt-32px md:mb-8px md:ml-5px">
                          <a href="/add-ons/">Compare plans</a>
                        </p>
                      </div>
                    )}

                  {/* Pay Monthly Tab - Pro */}
                  {learnDashCloudActiveTab === 2 &&
                    learnDashCloudMonthlyActiveTab === 3 && (
                      <div className="duration-300 flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                        <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                          $99/month
                        </p>
                        <p className="text-left text-[14px] mb-25px md:mb-8">
                          Unlimited access for large businesses with many active
                          classes.
                        </p>
                        <a
                          href="/checkout/learndash-plugin/799"
                          className="text-left"
                        >
                          <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                            Get LearnDash Cloud
                          </button>
                        </a>
                        <p className="pointer text-[17px] text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-[24px] md:mt-32px md:mb-8px md:ml-5px">
                          <a href="/add-ons/">Compare plans</a>
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-6 mb-2 text-[28px] md:text-[38px] font-serif">
          Turbocharge your courses with add-ons
        </h3>

        {/* Propanel and Gradebook */}
        <div className="mt-10px flex flex-col md:flex-row  w-full justify-center mb-30px">
          <div className="flex flex-wrap md:flex-nowrap md:max-w-[1047px] w-full gap-8 px-20px">
            {/* Propanel */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] md:pb-[40px] rounded-lg md:w-1/2">
              {/* Heading with image */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <img
                  src={proPanel}
                  alt="ProPanel"
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  propanel
                  <span className="bg-purple text-dark text-[13px] font-normal py-4px px-6px ml-10px">
                    ADD-ON
                  </span>
                </h2>
              </div>

              <p className="text-left text-[18px] leading-[28px] mb-[28px] md:mb-10px md:mt-20px">
                <strong>
                  Add on{" "}
                  <span className="text-mainBlue underline underline-offset-4 hover:text-hoverBlue hover:duration-200">
                    <a href="/add-on" target="_blank">
                      ProPanel{" "}
                    </a>
                  </span>
                </strong>
                for $49/year
              </p>
              <p className="text-left mb-[28px] md:text-[18px] md:leading-[28px] md:mb-[36px]">
                Use advanced analytics to track enrollment, monitor assignments,
                and identify struggling learners.
              </p>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    proPanelActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleProPanelTabClick(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    proPanelActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleProPanelTabClick(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    proPanelActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleProPanelTabClick(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {proPanelActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $49/year
                  </p>
                  <p className="text-left text-[14px] leading-20px mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {proPanelActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $99/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {proPanelActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $199/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}
            </div>

            {/* GradeBook */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] rounded-lg md:w-1/2">
              {/* Heading with image */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <img
                  src={gradeBook}
                  alt="gradeBook"
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  gradebook
                  <span className="bg-purple text-dark text-[13px] font-normal py-4px px-6px ml-10px">
                    ADD-ON
                  </span>
                </h2>
              </div>

              <p className="text-left text-[18px] leading-[28px] mb-[28px] md:mb-10px md:mt-20px">
                <strong>
                  Add on{" "}
                  <span className="text-mainBlue underline underline-offset-4 hover:text-hoverBlue hover:duration-200">
                    <a href="/gradebook" target="_blank">
                      GradeBook{" "}
                    </a>
                  </span>
                </strong>
                for $49/year
              </p>
              <p className="text-left mb-[28px] md:text-[18px] md:leading-[28px] md:mb-[36px]">
                Easily track and share scores with Gradebook. Create custom
                report cards and enable weighted grading.
              </p>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    gradeBooklActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleGradeBookTabClick(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    gradeBooklActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleGradeBookTabClick(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    gradeBooklActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleGradeBookTabClick(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {gradeBooklActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $49/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {gradeBooklActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $99/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {gradeBooklActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $199/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notes and Groups Plus */}
        <div className="mt-10px flex flex-col md:flex-row  w-full justify-center mb-30px">
          <div className="flex flex-wrap md:flex-nowrap md:max-w-[1047px] w-full gap-8 px-20px">
            {/* Notes */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] md:pb-[40px] rounded-lg md:w-1/2">
              {/* Heading with image */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <img
                  src={notes}
                  alt="Notes"
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  notes
                  <span className="bg-purple text-dark text-[13px] font-normal py-4px px-6px ml-10px">
                    ADD-ON
                  </span>
                </h2>
              </div>

              <p className="text-left text-[18px] leading-[28px] mb-[28px] md:mb-10px md:mt-20px">
                <strong>
                  Add on{" "}
                  <span className="text-mainBlue underline underline-offset-4 hover:text-hoverBlue hover:duration-200">
                    <a href="/notes" target="_blank">
                      Notes{" "}
                    </a>
                  </span>
                </strong>
                for $49/year
              </p>
              <p className="text-left mb-[28px] md:text-[18px] md:leading-[28px] md:mb-[36px]">
                Use advanced analytics to track enrollment, monitor assignments,
                and identify struggling learners.
              </p>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    proPanelActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleProPanelTabClick(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    proPanelActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleProPanelTabClick(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    proPanelActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleProPanelTabClick(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {proPanelActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $49/year
                  </p>
                  <p className="text-left text-[14px] leading-20px mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {proPanelActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $99/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {proPanelActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $199/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}
            </div>

            {/* Groups Plus */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] rounded-lg md:w-1/2">
              {/* Heading with image */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <img
                  src={groupsPlus}
                  alt="Groups Plus"
                  className="mr-10px pr-10px py-10px"
                />
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  groups plus
                  <span className="bg-purple text-dark text-[13px] font-normal py-4px px-6px ml-10px">
                    ADD-ON
                  </span>
                </h2>
              </div>

              <p className="text-left text-[18px] leading-[28px] mb-[28px] md:mb-10px md:mt-20px">
                <strong>
                  Add on{" "}
                  <span className="text-mainBlue underline underline-offset-4 hover:text-hoverBlue hover:duration-200">
                    <a href="/gradebook" target="_blank">
                      Groups Plus{" "}
                    </a>
                  </span>
                </strong>
                for $49/year
              </p>
              <p className="text-left mb-[28px] md:text-[18px] md:leading-[28px] md:mb-[36px]">
                Easily track and share scores with Gradebook. Create custom
                report cards and enable weighted grading.
              </p>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    gradeBooklActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleGradeBookTabClick(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    gradeBooklActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleGradeBookTabClick(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    gradeBooklActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleGradeBookTabClick(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {gradeBooklActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $49/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {gradeBooklActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $99/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}

              {gradeBooklActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $199/year
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    Includes updates and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get LearnDash LMS
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <h3 className="mt-6 mb-2 text-[28px] md:text-[38px] font-serif">
          Save with bundles
        </h3>

        {/* Ultimate Course Creator and Student Success */}
        <div className="mt-10px flex flex-col md:flex-row  w-full justify-center mb-30px">
          <div className="flex flex-wrap md:flex-nowrap md:max-w-[1047px] w-full gap-8 px-20px">
            {/* Ultimate Course Creator */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] md:pb-[40px] rounded-lg md:w-1/2">
              {/* Heading */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <h2 className="text-[16px] leading-5  uppercase font-bold">
                  ULTIMATE COURSE CREATOR
                  <span className="bg-green text-dark text-[13px] font-normal py-4px px-6px ml-10px">
                    BUNDLE
                  </span>
                </h2>
              </div>

              {/* Linked List */}
              <ul className="text-left mb-20px md:mt-30px">
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/learndash-lms/"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    LearnDash LMS
                  </a>
                </li>
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/propanel-by-learndash/"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    ProPanel
                  </a>
                </li>
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/groups-plus"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    Groups Plus
                  </a>
                </li>
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/notes"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    Notes
                  </a>
                </li>
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/gradebook"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    Gradebook
                  </a>
                </li>
              </ul>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    ultimateCourseActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleUltimateCourse(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    ultimateCourseActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleUltimateCourse(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    ultimateCourseActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleUltimateCourse(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {ultimateCourseActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $299/year
                    <mark className="bg-transparent text-orange text-[18px] pl-15px">
                      Save $96
                    </mark>
                  </p>
                  <p className="text-left text-[14px] leading-20px mb-25px">
                    $395/year when purchased individually. Includes updates and
                    support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get the Utimate Course Creator Bundle
                    </button>
                  </a>
                </div>
              )}

              {ultimateCourseActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $599/year
                    <mark className="bg-transparent text-orange text-[18px] pl-15px">
                      Save $196
                    </mark>
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    $795/year when purchased individually. Includes updates and
                    support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get the Utimate Course Creator Bundle
                    </button>
                  </a>
                </div>
              )}

              {ultimateCourseActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $1399/year
                    <mark className="bg-transparent text-orange text-[18px] pl-15px">
                      Save $196
                    </mark>
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    $1,595/year when purchased individually. Includes updates
                    and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get the Utimate Course Creator Bundle
                    </button>
                  </a>
                </div>
              )}
            </div>

            {/* Groups Plus */}
            <div className="bg-headerScroll flex flex-col px-15px pb-25px pt-[34px] md:p-[34px] rounded-lg md:w-1/2">
              {/* Heading */}
              <div className="flex items-center mb-[24px] md:mb-0">
                <h2 className="text-[16px] leading-5 tracking-[2px] uppercase font-bold">
                  student success
                  <span className="bg-green text-dark text-[13px] font-normal py-4px px-6px ml-10px">
                    BUNDLE
                  </span>
                </h2>
              </div>

              {/* Linked List */}
              <ul className="text-left md:mb-[75px] mb-20px md:mt-30px">
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/learndash-lms/"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    LearnDash LMS
                  </a>
                </li>
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/notes"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    Notes
                  </a>
                </li>
                <li className="list-disc list-inside md:mb-5px">
                  <a
                    href="/gradebook"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    Gradebook
                  </a>
                </li>
                <li className="list-inside md:mb-5px"></li>
                <li className="list-inside md:mb-5px"></li>
              </ul>

              {/* Price Tabs */}
              <div className="flex">
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    studentSuccessActiveTab === 1
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tl-[100px] rounded-bl-[100px]"
                      : "border-[1px] bg-white border-borderColor rounded-tl-[100px] rounded-bl-[100px]"
                  }`}
                  onClick={() => handleStudentSuccess(1)}
                >
                  1 Site
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    studentSuccessActiveTab === 2
                      ? "bg-dark text-white border-[1px] border-dark "
                      : "bg-white border-y-[1px] border-borderColor"
                  }`}
                  onClick={() => handleStudentSuccess(2)}
                >
                  10 Sites
                </div>
                <div
                  className={`cursor-pointer px-25px py-6px text-[14px] ${
                    studentSuccessActiveTab === 3
                      ? "bg-dark text-white  rounded border-[1px] border-dark rounded-tr-[100px] rounded-br-[100px]"
                      : "bg-white border-[1px] border-borderColor rounded-tr-[100px] rounded-br-[100px]"
                  }`}
                  onClick={() => handleStudentSuccess(3)}
                >
                  Unlimited
                </div>
              </div>
              {/* Tab Content */}
              {studentSuccessActiveTab === 1 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $249/year
                    <mark className="bg-transparent text-orange text-[18px] pl-15px">
                      Save $48
                    </mark>
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    $297/year when purchased individually. Includes updates and
                    support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/199"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get the Student Success Bundle
                    </button>
                  </a>
                </div>
              )}

              {studentSuccessActiveTab === 2 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $499/year
                    <mark className="bg-transparent text-orange text-[18px] pl-15px">
                      Save $98
                    </mark>
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    $597/year when purchased individually. Includes updates and
                    support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/399"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get the Student Success Bundle
                    </button>
                  </a>
                </div>
              )}

              {studentSuccessActiveTab === 3 && (
                <div className="flex flex-col items-start md:pt-15px md:pl-5px md:pr-20px">
                  <p className="text-left text-[28px] leading-[28px] pt-[16px] md:pt-0 mb-10px md:leading-[38px] md:text-[38px]">
                    $1099/year
                    <mark className="bg-transparent text-orange text-[18px] pl-15px">
                      Save $98
                    </mark>
                  </p>
                  <p className="text-left text-[14px] mb-25px">
                    $1,197/year when purchased individually. Includes updates
                    and support.
                  </p>
                  <a
                    href="/checkout/learndash-plugin/799"
                    className="text-left"
                  >
                    <button className="bg-mainBlue rounded-full text-white py-15px px-30px hover:bg-hoverBlue hover:duration-300">
                      Get the Student Success Bundle
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingMain;
