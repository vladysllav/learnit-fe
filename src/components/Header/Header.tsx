import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// Images Import
import Logo from "../../assets/images/logo.svg";
import Searching from "../../assets/images/search.svg";
import LMSPlugin from "../../assets/images/header/Products/plugin-shape.svg";
// Products Images
import MembershipPlugin from "../../assets/images/header/Products/memberdash.svg";
import LearnDashCloud from "../../assets/images/header/Products/cloud-shape.svg";
import ProPanel from "../../assets/images/header/Products/pro-panel.svg";
import GroupPlus from "../../assets/images/header/Products/groups-plus.svg";
import GradeBook from "../../assets/images/header/Products/gradebook-2.svg";
import Notes from "../../assets/images/header/Products/student-notes.svg";
// Solutions Images
import LearnerExperience from "../../assets/images/header/Solutions/medal.svg";
import CourseCreators from "../../assets/images/header/Solutions/apple-new.svg";
import EcommerceSolution from "../../assets/images/header/Solutions/ecomm-1.svg";
import FlexibilityForWordPress from "../../assets/images/header/Solutions/flexible.svg";
import BundlesImage from "../../assets/images/header/Solutions/hand--with-blocks.svg";
// Resources Images
import Blog from "../../assets/images/header/Resources/nav-icon-blog.svg";
import Videos from "../../assets/images/header/Resources/nav-icon-videos.svg";
import Webinars from "../../assets/images/header/Resources/nav-icon-webinar.svg";
import LearnDashAcademy from "../../assets/images/header/Resources/nav-icon-academy.svg";

import Burger from "../../assets/images/header/burger.svg";

const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isSubMenu2Open, setSubMenu2Open] = useState(false);
  const [isSubMenuResourcesOpen, setSubMenuResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add your logic to determine whether the header should have a border
      const shouldHaveBorder = window.scrollY > 0;
      setHasBorder(shouldHaveBorder);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const toggleSubMenu2 = () => {
    setSubMenu2Open(!isSubMenu2Open);
  };

  const toggleSubMenuResources = () => {
    setSubMenuResourcesOpen(!isSubMenuResourcesOpen);
  };

  return (
    <header
      className={`${
        hasBorder ? "border-b border-gray-400 bg-headerScroll" : "bg-white"
      } fixed w-full flex justify-center top-0 z-50 transition-all ease-in-out duration-300`}
    >
      {/* Header Inner */}
      <div className="flex md:h-80px w-full max-w-globalWidth">
        {/* Desktop Header */}
        <div className="hidden md:flex md:h-80px w-full max-w-globalWidth">
          {/* Logo */}
          <div className="w-1/2 md:w-1/4 md:flex items-center">
            <a href="/">
              <img src={Logo} alt="LearnDash" />
            </a>
          </div>

          {/* Main Menu */}
          <div className="w-1/2 md:flex items-center">
            <ul className="md:flex items-center justify-center	md:w-full">
              {/* Products */}
              <li className="hoverable hover:text-mainBlue">
                <p className="relative flex py-6 px-4 lg:p-6 text-sm lg:text-base hover:text-mainBlue">
                  Products
                  <svg
                    aria-hidden="true"
                    className="kadence-svg-icon kadence-arrow-down-svg"
                    fill="currentColor"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </p>

                <div className="mega-menu bg-white md:mt-20px mb-16 sm:mb-0 w-full flex justify-center ">
                  <div className="container mx-auto w-full flex flex-wrap justify-between max-w-globalWidth border-solid border-gray-400 border-[1px] rounded-10px mx-2 p-25px">
                    {/* 3 Columns */}
                    <div className="flex w-full">
                      {/* Left Column */}
                      <div className="md:w-1/3">
                        <p className="text-dark text-sm font-semibold md:mb-2.5">
                          PRODUCTS
                        </p>

                        {/* LearnDash LMS Plugin */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/learndash-lms/"
                          >
                            {/* Icon */}
                            <div>
                              <img src={LMSPlugin} alt="" className="mr-20px" />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                LearnDash LMS Plugin
                              </h3>
                              <p className="md:text-15px text-dark">
                                Integrate LearnDash into your own WordPress
                                site.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* MemberDash Plugin */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/memberdash-plugin/"
                          >
                            {/* Icon */}
                            <div>
                              <img
                                src={MembershipPlugin}
                                alt=""
                                className="mr-20px"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                MemberDash Plugin{" "}
                                <span className="bg-yellowBadge text-dark md:fz-13px font-normal md:py-4px md:px-6px">
                                  NEW
                                </span>
                              </h3>
                              <p className="md:text-15px text-dark">
                                Build a membership site with gated content.
                              </p>
                            </div>
                          </a>
                        </div>

                        <p className="text-dark text-sm font-semibold md:mb-2.5 md:mt-45px">
                          ALL IN ONE
                        </p>

                        {/* LearnDash Cloud */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/learndash-lms/"
                          >
                            {/* Icon */}
                            <div>
                              <img
                                src={LearnDashCloud}
                                alt=""
                                className="mr-20px"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                LearnDash Cloud
                              </h3>
                              <p className="md:text-15px text-dark">
                                A fully-hosted website loaded with LearnDash.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Center Column */}
                      <div className="md:w-1/3">
                        <p className="text-dark text-sm font-semibold md:mb-2.5">
                          ADD-ONS
                        </p>

                        {/* ProPanel */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/propanel-by-learndash/"
                          >
                            {/* Icon */}
                            <div>
                              <img
                                src={ProPanel}
                                alt="ProPanel"
                                className="mr-20px"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                ProPanel
                              </h3>
                              <p className="md:text-15px text-dark">
                                Advanced analytics reporting tools.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Group Plus */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/groups-plus-by-learndash/"
                          >
                            {/* Icon */}
                            <div>
                              <img
                                src={GroupPlus}
                                alt="GroupPlus"
                                className="mr-20px"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Group Plus
                              </h3>
                              <p className="md:text-15px text-dark">
                                Group management and reporting tools.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Grade Book */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/gradebook-by-learndash/"
                          >
                            {/* Icon */}
                            <div>
                              <img
                                src={GradeBook}
                                alt="Grade Book"
                                className="mr-20px"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Grade Book
                              </h3>
                              <p className="md:text-15px text-dark">
                                Easily track progress and communicate with
                                learners.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Notes */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/gradebook-by-learndash/"
                          >
                            {/* Icon */}
                            <div>
                              <img
                                src={Notes}
                                alt="Notes"
                                className="mr-20px"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Notes
                              </h3>
                              <p className="md:text-15px text-dark">
                                Easy note taking and 2-way communication tool.
                              </p>
                            </div>
                          </a>
                        </div>

                        <p className="md:text-15px text-mainBlue text-decoration-line: underline underline-offset-[5px] md:mt-32px md:mb-8px md:ml-10px">
                          <a href="/add-ons/">All LearnDash add-ons</a>
                        </p>
                      </div>

                      {/* Right Column */}
                      <div className="md:w-1/3">
                        <p className="text-dark text-sm font-semibold md:mb-2.5">
                          MORE
                        </p>

                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/solutions/">All Features</a>
                        </p>
                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/ld-integrations/">
                            3rd Party Add-ons & Integrations
                          </a>
                        </p>
                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/ld-templates/">Templates</a>
                        </p>
                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/cloud-vs-plugin-comparison/">
                            Cloud vs. LMS Plugin
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Solutions */}
              <li className="hoverable hover:text-mainBlue">
                <a
                  href="#"
                  className="relative flex py-6 px-4 lg:p-6 text-sm lg:text-base hover:text-mainBlue"
                >
                  Solutions
                  <svg
                    aria-hidden="true"
                    className="kadence-svg-icon kadence-arrow-down-svg"
                    fill="currentColor"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </a>

                <div className="mega-menu bg-white md:mt-20px mb-16 sm:mb-0 w-full flex justify-center ">
                  <div className="container mx-auto w-full flex flex-wrap justify-between max-w-globalWidth border-solid border-gray-400 border-[1px] rounded-10px mx-2 p-25px">
                    {/* 2 Columns */}
                    <div className="flex w-full">
                      {/* Left Column */}
                      <div className="md:w-80%">
                        <p className="text-dark text-sm font-semibold md:mb-2.5">
                          THE #1 LMS PLATFORM
                        </p>

                        {/* Outstanding Learner Experience */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/learndash-lms/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img
                                src={LearnerExperience}
                                alt="Outstanding Learner Experience"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Outstanding Learner Experience
                              </h3>
                              <p className="md:text-15px text-dark">
                                Engage your learners using the best online
                                learning practices.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Designed for Course Creators */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/for-creators/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img
                                src={CourseCreators}
                                alt="Designed for Course Creators"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Designed for Course Creators
                              </h3>
                              <p className="md:text-15px text-dark">
                                Create impressive online courses without
                                restrictions.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Ecommerce Solution */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/ecommerce/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img
                                src={EcommerceSolution}
                                alt="Ecommerce Solution"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Ecommerce Solution
                              </h3>
                              <p className="md:text-15px text-dark">
                                Selling online courses has never been easier.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Flexibility of WordPress */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/learndash-lms/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img
                                src={FlexibilityForWordPress}
                                alt="Flexibility of WordPress"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-bo xw-full font-bold text-dark md:text-15px">
                                Flexibility of WordPress
                              </h3>
                              <p className="md:text-15px text-dark">
                                Customize your courses exactly to fit your
                                needs.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="md:w-20%">
                        <p className="text-dark text-sm font-semibold md:mb-2.5">
                          BUNDLES
                        </p>

                        <p className="md:text-15px text-dark font-bold hover:text-mainBlue md:my-15px">
                          Package and save
                        </p>
                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          Save when you buy multiple plugins in a bundle.
                        </p>
                        <p className="md:text-15px text-mainBlue text-decoration-line: underline underline-offset-[5px] md:mt-15px md:mb-8px">
                          <a href="/add-ons/">See all bundles</a>
                        </p>
                        <img src={BundlesImage} alt="BUNDLES" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Pricing */}
              <li className="hoverable hover:text-mainBlue">
                <a
                  href="/pricing"
                  className="relative flex py-6 px-4 lg:p-6 text-sm lg:text-base hover:text-mainBlue"
                >
                  Pricing
                </a>
              </li>

              {/* Resources */}
              <li className="hoverable hover:text-mainBlue">
                <p className="menu-box relative flex py-6 px-4 lg:p-6 text-sm lg:text-base hover:text-mainBlue">
                  Resources
                  <svg
                    aria-hidden="true"
                    className="kadence-svg-icon kadence-arrow-down-svg"
                    fill="currentColor"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </p>

                <div className="mega-menu bg-white md:mt-20px  mb-16 sm:mb-0 w-full flex justify-center ">
                  <div className="container mx-auto w-full flex flex-wrap justify-between max-w-globalWidth border-solid border-gray-400 border-[1px] rounded-10px mx-2 p-25px">
                    {/* 2 Columns */}
                    <div className="flex w-full">
                      {/* Left Column */}
                      <div className="md:w-80%">
                        <p className="text-dark text-sm font-normal md:mb-2.5">
                          Resources
                        </p>

                        {/* Blog */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/blog/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img src={Blog} alt="Blog" />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Blog
                              </h3>
                              <p className="md:text-15px text-dark">
                                Insights and best practices to build better
                                courses.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Videos */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/videos/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img src={Videos} alt="Videos" />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Videos
                              </h3>
                              <p className="md:text-15px text-dark">
                                Watch experts show you how to maximize courses
                                for online learners.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* Webinars */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/webinars/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img src={Webinars} alt="Webinars" />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                Webinars
                              </h3>
                              <p className="md:text-15px text-dark">
                                In-depth walkthroughs of LearnDash features with
                                product experts.
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* LearnDash Academy */}
                        <div>
                          <a
                            className="menu-box flex md:p-5px md:mb-10px"
                            href="/learndash-academy/"
                          >
                            {/* Icon */}
                            <div className="bg-iconBackground mr-20px p-10px rounded-full">
                              <img
                                src={LearnDashAcademy}
                                alt="LearnDash Academy"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="menu-box w-full font-bold text-dark md:text-15px">
                                LearnDash Academy
                              </h3>
                              <p className="md:text-15px text-dark">
                                Join our academy and become a certified course
                                builder.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="md:w-20%">
                        <p className="text-dark text-sm font-bold md:mb-2.5">
                          MORE
                        </p>

                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/release-notes/">Release Notes</a>
                        </p>
                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/support/">Knowledgebase</a>
                        </p>
                        <p className="md:text-15px text-dark hover:text-mainBlue md:my-15px">
                          <a href="/help/">Get Help</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Try LearnDash */}
              <li className="hoverable hover:text-mainBlue">
                <a
                  href="/demo"
                  className="relative flex py-6 px-4 lg:p-6 text-sm lg:text-base hover:text-mainBlue"
                >
                  Try LearnDash
                </a>
              </li>
            </ul>
          </div>

          {/* Search and Sign In */}
          <div className="md:flex w-1/4 items-center justify-end">
            {/* Search */}
            <div>
              <a href="/search">
                <img src={Searching} alt="" />
              </a>
            </div>

            {/* Sign In */}
            <div>
              <p>
                <a
                  href="/sign-in"
                  className="relative flex py-6 px-4 lg:p-6 text-sm lg:text-base hover:text-mainBlue"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="w-full flex items-center justify-between px-6 md:hidden ease-in-out duration-300">
          <div className="w-1/2 md:w-1/4 md:flex items-center">
            <a href="/">
              <img src={Logo} alt="LearnDash" />
            </a>
          </div>
          <button onClick={toggleMenu} className="p-4 focus:outline-none">
            <img src={Burger} alt="" />
          </button>
        </div>

        {/* Mobile Menu Open */}
        {isMenuOpen && (
          <div className="md:hidden fixed flex inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300 translate-x-0 overflow-auto">
            {/* Your mobile menu content here */}

            {/* Mobile Menu Open - Left Side Opacity */}
            <div className="w-[10%] bg-black opacity-50"></div>

            {/* Mobile Menu Open Right Side White */}
            <div className="w-[90%] bg-white overflow-auto">
              {/* Logo and Close Button */}
              <div className="mt-10px flex flex-col justify-between items-center">
                {/* Close Button */}
                <div className="flex w-full justify-end px-6">
                  <button
                    onClick={toggleMenu}
                    className="p-2 focus:outline-none"
                  >
                    <svg
                      className="w-[40px] h-[40px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Logo */}
                <div className="flex w-full px-6">
                  <a href="/">
                    <img src={Logo} alt="LearnDash" className="w-[80%]" />
                  </a>
                </div>
              </div>

              {/* Menu */}
              <div className="flex w-full flex-col px-6 mt-25px">
                <div className="">
                  {/* Products */}
                  <div className="">
                    <button
                      className="flex justify-between w-full text-20px px-4 py-4 text-gray-800 hover:text-mainBlue focus:outline-none border-solid border-dark border-b-[1px]"
                      onClick={toggleSubMenu} // Define toggleSubMenu1 function
                    >
                      Products
                      <svg
                        aria-hidden="true"
                        className="kadence-svg-icon kadence-arrow-down-svg h-auto w-auto"
                        fill="currentColor"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                      </svg>
                    </button>

                    {isSubMenuOpen && (
                      <div className="flex flex-col">
                        {/* Products */}
                        <div className="px-4 py-4 text-left">
                          <p className="text-dark text-sm font-semibold md:mb-2.5">
                            PRODUCTS
                          </p>

                          {/* LearnDash LMS Plugin */}
                          <div className="mt-20px">
                            <a
                              className="menu-box flex md:p-5px md:mb-10px"
                              href="/learndash-lms/"
                            >
                              {/* Icon */}
                              <div className="mr-20px w-1/5">
                                <img
                                  src={LMSPlugin}
                                  alt="LearnDash LMS Plugin"
                                  className="w-full h-full"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5 flex flex-col justify-center">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  LearnDash LMS Plugin
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Integrate LearnDash into your own WordPress
                                  site.
                                </p>
                              </div>
                            </a>
                          </div>

                          {/* MemberDash Plugin */}
                          <div className="mt-30px">
                            <a
                              className="menu-box flex md:p-5px md:mb-10px"
                              href="/memberdash-plugin/"
                            >
                              {/* Icon */}
                              <div className="mr-20px w-1/5">
                                <img
                                  src={MembershipPlugin}
                                  alt="LearnDash LMS Plugin"
                                  className="w-full h-full"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5 flex flex-col justify-center">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  MemberDash Plugin{" "}
                                  <span className="bg-yellowBadge text-dark md:fz-13px font-semi py-4px px-6px">
                                    NEW
                                  </span>
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Build a membership site with gated content.
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* All In One */}
                        <div className="px-4 py-4 text-left">
                          <p className="text-dark text-sm font-semibold md:mb-2.5">
                            ALL IN ONE
                          </p>

                          {/* LearnDash Cloud */}
                          <div className="mt-20px">
                            <a
                              className="menu-box flex md:p-5px md:mb-10px"
                              href="/learndash-cloud/"
                            >
                              {/* Icon */}
                              <div className="mr-20px w-1/5">
                                <img
                                  src={LearnDashCloud}
                                  alt="LearnDash Cloud"
                                  className="w-full h-full"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5 flex flex-col justify-center">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  LearnDash Cloud
                                </h3>
                                <p className="md:text-15px text-dark">
                                  A fully-hosted website loaded with LearnDash.
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* ADD-ONS */}
                        <div className="px-4 py-4 text-left">
                          <p className="text-dark text-sm font-semibold md:mb-2.5">
                            ADD-ONS
                          </p>

                          {/* ProPanel */}
                          <div className="mt-20px">
                            <a
                              className="menu-box flex md:p-5px md:mb-10px"
                              href="/learndash-lms/"
                            >
                              {/* Icon */}
                              <div className="mr-20px w-1/5">
                                <img
                                  src={ProPanel}
                                  alt="ProPanel"
                                  className="w-full h-full"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5 flex flex-col justify-center">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  ProPanel
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Integrate LearnDash into your own WordPress
                                  site.
                                </p>
                              </div>
                            </a>
                          </div>

                          {/* MemberDash Plugin */}
                          <div className="mt-30px">
                            <a
                              className="menu-box flex md:p-5px md:mb-10px"
                              href="/memberdash-plugin/"
                            >
                              {/* Icon */}
                              <div className="mr-20px w-1/5">
                                <img
                                  src={MembershipPlugin}
                                  alt="LearnDash LMS Plugin"
                                  className="w-full h-full"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5 flex flex-col justify-center">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  MemberDash Plugin{" "}
                                  <span className="bg-yellowBadge text-dark md:fz-13px font-semi py-4px px-6px">
                                    NEW
                                  </span>
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Build a membership site with gated content.
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Solutions */}
                  <div>
                    <button
                      className="flex justify-between w-full text-20px px-4 py-4 text-gray-800 hover:text-mainBlue focus:outline-none border-solid border-dark border-b-[1px]"
                      onClick={toggleSubMenu2}
                    >
                      Solutions
                      <svg
                        aria-hidden="true"
                        className="kadence-svg-icon kadence-arrow-down-svg h-auto w-auto"
                        fill="currentColor"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                      </svg>
                    </button>

                    {isSubMenu2Open && (
                      <div className="flex flex-col">
                        {/* THE #1 LMS PLATFORM */}
                        <div className="px-4 py-4 text-left">
                          <p className="text-dark text-sm font-semibold md:mb-2.5">
                            THE #1 LMS PLATFORM
                          </p>

                          {/* Links */}
                          <div>
                            {/* Outstanding Learner Experience */}
                            <div className="mt-20px">
                              <a
                                className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                                href="/learndash-lms/"
                              >
                                {/* Icon */}
                                <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                  <img
                                    src={LearnerExperience}
                                    alt="Outstanding Learner Experience"
                                    className="h-auto w-30px"
                                  />
                                </div>

                                {/* Text */}
                                <div className="w-4/5">
                                  <h3 className="menu-box w-full font-bold text-dark text-15px">
                                    Outstanding Learner Experience
                                  </h3>
                                  <p className="md:text-15px text-dark">
                                    Engage your learners using the best online
                                    learning practices.
                                  </p>
                                </div>
                              </a>
                            </div>

                            {/* Designed for Course Creators */}
                            <div className="mt-[30px]">
                              <a
                                className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                                href="/for-creators/"
                              >
                                {/* Icon */}
                                <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                  <img
                                    src={CourseCreators}
                                    alt="Designed for Course Creators"
                                    className="h-auto w-30px"
                                  />
                                </div>

                                {/* Text */}
                                <div className="w-4/5">
                                  <h3 className="menu-box w-full font-bold text-dark text-15px">
                                    Designed for Course Creators
                                  </h3>
                                  <p className="md:text-15px text-dark">
                                    Create impressive online courses without
                                    restrictions.
                                  </p>
                                </div>
                              </a>
                            </div>

                            {/* Ecommerce Solution */}
                            <div className="mt-[30px]">
                              <a
                                className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                                href="/ecommerce/"
                              >
                                {/* Icon */}
                                <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                  <img
                                    src={EcommerceSolution}
                                    alt="Ecommerce Solution"
                                    className="h-auto w-30px"
                                  />
                                </div>

                                {/* Text */}
                                <div className="w-4/5">
                                  <h3 className="menu-box w-full font-bold text-dark text-15px">
                                    Ecommerce Solution
                                  </h3>
                                  <p className="md:text-15px text-dark">
                                    Selling online courses has never been
                                    easier.
                                  </p>
                                </div>
                              </a>
                            </div>

                            {/* Flexibility of WordPress */}
                            <div className="mt-[30px] pb-25px border-solid border-dark border-b-[1px]">
                              <a
                                className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                                href="/for-creators/"
                              >
                                {/* Icon */}
                                <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                  <img
                                    src={FlexibilityForWordPress}
                                    alt="Flexibility of WordPress"
                                    className="h-auto w-30px"
                                  />
                                </div>

                                {/* Text */}
                                <div className="w-4/5">
                                  <h3 className="menu-box w-full font-bold text-dark text-15px">
                                    Flexibility of WordPress
                                  </h3>
                                  <p className="md:text-15px text-dark">
                                    Customize your courses exactly to fit your
                                    needs.
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Second Part */}
                          <div className="mt-[65px]">
                            <p className="text-dark text-sm font-semibold md:mb-2.5">
                              BUNDLES
                            </p>

                            <p className="text-15px text-dark font-bold hover:text-mainBlue my-15px">
                              Package and save
                            </p>
                            <p className="text-15px text-dark hover:text-mainBlue my-15px">
                              Save when you buy multiple plugins in a bundle.
                            </p>
                            <p className="text-15px text-mainBlue text-decoration-line: underline underline-offset-[5px] mt-15px mb-8px">
                              <a href="/add-ons/">See all bundles</a>
                            </p>
                            <img
                              src={BundlesImage}
                              alt="BUNDLES"
                              className="my-20px"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div>
                    <a href="/products">
                      <button className="flex justify-between w-full text-20px px-4 py-4 text-gray-800 hover:bg-gray-100 focus:outline-none border-solid border-dark border-b-[1px]">
                        Pricing
                      </button>
                    </a>
                  </div>

                  {/* Resources */}
                  <div>
                    <button
                      className="flex justify-between w-full text-20px px-4 py-4 text-gray-800 hover:text-mainBlue focus:outline-none border-solid border-dark border-b-[1px]"
                      onClick={toggleSubMenuResources}
                    >
                      Resources
                      <svg
                        aria-hidden="true"
                        className="kadence-svg-icon kadence-arrow-down-svg h-auto w-auto"
                        fill="currentColor"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                      </svg>
                    </button>

                    {isSubMenuResourcesOpen && (
                      <div className="flex flex-col">
                        {/* Links */}
                        <div className="px-4 py-4 text-left">
                          {/* Blog */}
                          <div className="mt-20px">
                            <a
                              className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                              href="/learndash-lms/"
                            >
                              {/* Icon */}
                              <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                <img
                                  src={Blog}
                                  alt="Blog"
                                  className="h-auto w-30px"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  Blog
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Insights and best practices to build better
                                  courses.
                                </p>
                              </div>
                            </a>
                          </div>

                          {/* Videos */}
                          <div className="mt-30px">
                            <a
                              className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                              href="/videos/"
                            >
                              {/* Icon */}
                              <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                <img
                                  src={Videos}
                                  alt="Videos"
                                  className="h-auto w-30px"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  Videos
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Watch experts show you how to maximize courses
                                  for online learners.
                                </p>
                              </div>
                            </a>
                          </div>

                          {/* Webinars */}
                          <div className="mt-30px">
                            <a
                              className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                              href="/webinars/"
                            >
                              {/* Icon */}
                              <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                <img
                                  src={Webinars}
                                  alt="Webinars"
                                  className="h-auto w-30px"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  Webinars
                                </h3>
                                <p className="md:text-15px text-dark">
                                  In-depth walkthroughs of LearnDash features
                                  with product experts.
                                </p>
                              </div>
                            </a>
                          </div>

                          {/* LearnDash Academy */}
                          <div className="mt-30px pb-25px border-solid border-dark border-b-[1px]">
                            <a
                              className="menu-box flex items-center content-center md:p-5px md:mb-10px"
                              href="/learndash-academy/"
                            >
                              {/* Icon */}
                              <div className="w-1/5 bg-iconBackground mr-20px p-15px rounded-full">
                                <img
                                  src={LearnDashAcademy}
                                  alt="LearnDash Academy"
                                  className="h-auto w-30px"
                                />
                              </div>

                              {/* Text */}
                              <div className="w-4/5">
                                <h3 className="menu-box w-full font-bold text-dark text-15px">
                                  LearnDash Academy
                                </h3>
                                <p className="md:text-15px text-dark">
                                  Join our academy and become a certified course
                                  builder.
                                </p>
                              </div>
                            </a>
                          </div>

                          <p className="text-dark text-sm font-bold md:mb-2.5 mt-45px">
                            MORE
                          </p>

                          <p className="text-15px text-dark hover:text-mainBlue my-15px">
                            <a href="/release-notes/">Release Notes</a>
                          </p>
                          <p className="text-15px text-dark hover:text-mainBlue my-15px">
                            <a href="/support/">Knowledgebase</a>
                          </p>
                          <p className="text-15px text-dark hover:text-mainBlue my-15px">
                            <a href="/help/">Get Help</a>
                          </p>
                        </div>

                        <div></div>
                      </div>
                    )}
                  </div>

                  {/* Try LearnDash */}
                  <div>
                    <a href="/demo">
                      <button className="flex justify-between w-full text-20px px-4 py-4 text-gray-800 hover:bg-gray-100 focus:outline-none border-solid border-dark border-b-[1px]">
                        Try LearnDash
                      </button>
                    </a>
                  </div>

                  {/* Search and Sign In */}
                  <div className="flex w-full items-center justify-center gap-10px mt-20px mb-45px">
                    {/* Search */}
                    <div>
                      <a href="/search">
                        <img src={Searching} alt="" />
                      </a>
                    </div>

                    {/* Sign In */}
                    <a
                      href="/sign-in"
                      className="relative flex py-3 px-8 text-sm lg:text-base text-white bg-mainBlue rounded-full"
                    >
                      <div>
                        <p>Sign In</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;