
import React, { useState } from "react";

import Placebyactivity from "../Components/Placebyactivity";
import Slides from "../Components/Slides.js";
import Blogcard from "../Components/Blogcard.js";
import Placebytype from "../Components/Placebytype";
import Guidelinecard from "../Components/Guidelinecard";
import Horizontalline from "../Components/Horizontalline";
import Footer from "../Components/Footer";
import HomePageHeader from "../Components/HomePageHeader";
import { Link } from "react-router-dom";

import { useEffect } from "react";
function Home() {
  return (
    <div className="container-fluid font-body text-black">

      <HomePageHeader />
      <div className="text-center font-heading mt-16 text-3xl">
        <span className="text-green">W</span>hat's your Mood?
      </div>

      <div className="flex flex-wrap justify-between md:px-32 md:mx-1 md:ml-0 px-20 mx-3 mt-10">

        <div>
          <Placebyactivity text="Camping" img="/camping.jpg" />
        </div>
        <div>
          <Placebyactivity text="Trekking" img="/trekking.png" />
        </div>
        <div>
          <Placebyactivity
            text="Mountain Climbing"
            img="/mountainclimbing.jpg"
          />
        </div>
        <div>
          <Placebyactivity text="Paragliding" img="/paragliding.jpg" />
        </div>
      </div>
      <Link to="/placesbyactivity">
        <button className="mr-10 flex float-right mr-32 pr-2 mt-6">
          View All <img src="view more.svg" className="w-6 h-6 ml-3" />
        </button>
      </Link>
      <div className="text-center font-heading mt-16 mb-10 text-3xl">
        <span className="text-green">T</span>rending Places
      </div>
      <div>
        <Slides />
      </div>
      <div className="font-heading text-3xl mt-16 mb-10 text-center">
        <span className="text-green">T</span>rending Blogs
      </div>

      <div className="flex flex-wrap justify-between md:px-28">

        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
      <div className="font-heading text-3xl mt-16 mb-10 text-center">
        <span className="text-green">T</span>ypes of Places
      </div>

      <div className="flex flex-wrap justify-between md:px-32 md:mx-1 md:ml-0 px-20 mx-3 ">

        <Placebytype img="/snow-region.jpg" name="Snow Region" />
        <Placebytype img="hillstation.jpeg" name="Hill station" />
        <Placebytype img="valley.jfif" name="Valley" />
        <Placebytype img="beach.jpg" name="Beach" />
      </div>
      <Link to="/placesbytype">
        <button className="mr-10 flex float-right mr-32 pr-2 mt-6">
          View All <img src="view more.svg" className="w-6 h-6 ml-3" />
        </button>
      </Link>

      <div className="font-heading text-3xl pt-16 pb-10 text-center md:mt-0 mt-5">

        <span className="text-green">T</span>ravel Guidelines
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <Guidelinecard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." />
        <Horizontalline />
        {/* <hr className="border border-green h-32"/> */}
        <Guidelinecard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." />
        <Horizontalline />
        <Guidelinecard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." />
      </div>

      <div className="text-3xl text-center mt-16 mb-10">
        <span className="text-green">W</span>hy Choose Us?
      </div>
      <div className="flex flex-wrap justify-between md:px-32 px-2">
        <div>
          <img
            src="/whychooseus1.svg"
            className="h-80 w-full md:block hidden"
          />
        </div>
        <div className="">
          <h2 className="font-heading text-2xl font-light mb-6">
            Blogs by Travel <span className="text-green">Bloggers</span>{" "}
          </h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>

      </div>
      <div className="flex flex-wrap justify-between md:px-32 px-2 mt-16 ">
        <div className="m">
          <h2 className="font-heading text-2xl font-light mb-6">
            Blogs by Travel <span className="text-green">Bloggers</span>{" "}
          </h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
        <div>
          <img
            src="/whychooseus1.svg"
            className="h-80 w-full md:block hidden"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between md:px-32 px-2 mt-16">
        <div>
          <img
            src="/whychooseus3.svg"
            className="h-80 w-full md:block hidden"
          />
        </div>
        <div className="">
          <h2 className="font-heading text-2xl font-light mb-6">
            Blogs by Travel <span className="text-green">Bloggers</span>{" "}
          </h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
