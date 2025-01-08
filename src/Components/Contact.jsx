import React from "react";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <>
      <section className="bg-primary text-white flex gap-1 flex-col h-screen justify-center items-center md:gap-0 py-5">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-md font-medium text-cinder-light dark:text-white tracking-widest font-inter">
            MY CONTACT
          </p>
          <p className="font-medium text-2xl">SEND A MESSAGE</p>
        </div>

        <div className="flex flex-col gap-5 items-center text-center py-10 px-10 xl:px-72">
          <h1 className="xl:text-[50px] text-[45px] font-bold">Get In Touch</h1>
          <p className="text-lg tracking-wide">
            I'm currently looking for any new opportunities, my inbox is always
            open. Whether you have a question, want to collaborate on a project
            or just want to say hi, I'll definitely get back to you!
          </p>
          <Link to="mailto:usmanbalogun044@gmail.com?subject=Contact from Portfolio&body=Hello Usman,">
            <button className="border border-secondary rounded-md hover:bg-secondary transition-all duration-500 p-2 text-xl font-semibold w-40">
              Say Hello
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
