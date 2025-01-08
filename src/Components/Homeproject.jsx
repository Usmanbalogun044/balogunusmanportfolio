import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homeproject = () => {
  return (
    <>
      <div className="bg-primary py-10 text-white lg:py-20">
        <div className="container mx-auto space-y-20 px-4 lg:space-y-24">
          <div className="flex flex-col space-y-1">
            <p className="text-white text-sm font-medium">MY PROJECT</p>
            <p className="text-2xl font-semibold lg:text-3xl">
              What <span className="text-secondary">i have built</span>
            </p>
          </div>

          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
            <div className="flex flex-col lg:w-1/2">
              <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-700 lg:px-5">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary text-3xl font-bold">
                      Movie App
                    </p>
                    <Link
                      className="text-xl"
                      to="https://github.com/Oluwasuyi-Timilehin/Movatti"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <p className="text-slate-300 font-semibold text-xl">
                    Personal Project
                  </p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    React.Js
                  </div>
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Tailwind css
                  </div>
                </div>
                <p className="text-white tracking-wide">
                  This movie app allows users to discover new films
                  effortlessly, featuring a search function and a curated list
                  of the top 20 movies. It offers an easy and enjoyable way to
                  explore and expand your cinematic horizons.
                </p>
              </div>
            </div>

            <img
              src="/spider.png"
              className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
            />
          </div>
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
            <div className="flex items-center lg:w-1/2">
              <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-700 lg:px-5">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary text-3xl font-bold">
                      Fast Care
                    </p>
                    <Link
                      className="text-xl"
                      to="https://github.com/Zino234/FastCare"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <p className="text-slate-300 font-semibold text-xl">
                    Personal Project
                  </p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Html
                  </div>
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Tailwind
                  </div>
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md" >
                    Javascript
                  </div>
                </div>
                <p className="text-white tracking-wide">
                  Fast Care is an application designed for emergency situations,
                  enabling users to quickly contact medical units. It ensures
                  swift and efficient access to emergency medical assistance.
                </p>
              </div>
            </div>

            <img
              src="/fastcare.png"
              className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeproject;
