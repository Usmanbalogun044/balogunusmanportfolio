import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import fundMeGramImg from "/Images/fundmegram.png";
import paystackWalletImg from "/Images/paystack.png"; // Ensure this image is correctly imported
import otpImg from "/Images/otp.png"; // Ensure this image is correctly imported
import darkLoggerImg from "/Images/darklogger.png"; // placeholder or screenshot


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
            FundMeGram
          </p>
          <Link
            className="text-xl"
            to="https://fundmegram.com"
          >
            <FaGithub />
          </Link>
        </div>
        <p className="text-slate-300 font-semibold text-xl">
          Real-World Project (Backend Lead)
        </p>
      </div>
      <div className="flex flex-row space-x-4 flex-wrap">
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">
          Laravel
        </div>
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">
          Crypto & Bank Payments
        </div>
     
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">
          Wallet System
        </div>
      </div>
      <p className="text-white tracking-wide">
        FundMeGram is a crowdfunding platform where users can raise funds and receive support globally. 
        I built the backend using Laravel, integrated a secure wallet system, enabled multiple payment 
        methods (crypto, bank, and PayPal), and implemented robust email & in-app notifications for user activity.
      </p>
    </div>
  </div>

  <img
    src={fundMeGramImg} // replace this with your actual image import
    className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
    alt="FundMeGram Screenshot"
  />
</div>

  <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
    <div className="flex flex-col lg:w-1/2">
      <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-700 lg:px-5">
        <div className="flex flex-col">
          <div className="flex items-center space-x-3">
            <p className="text-secondary text-3xl font-bold">Paystack Wallet System</p>
            <Link
              className="text-xl"
              to="https://github.com/Usmanbalogun044/laravel-paystack-wallet"
            >
              <FaGithub />
            </Link>
          </div>
          <p className="text-slate-300 font-semibold text-xl">
            Open-Source Package (Personal Project)
          </p>
        </div>
        <div className="flex flex-row space-x-4 flex-wrap">
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">Laravel</div>
     
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">Wallet Logic</div>
       
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">Balance Tracking</div>
        </div>
        <p className="text-white tracking-wide">
          This project is a reusable Laravel package that enables seamless wallet integration with Paystack.
          It supports wallet funding, withdrawals, and secure balance handling. I built it as a standalone solution
          to be plugged into any Laravel application with minimal setup.
        </p>
      </div>
    </div>

    <img
      src={paystackWalletImg} // Replace this with actual import path
      className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
      alt="Paystack Wallet Screenshot"
    />
  </div>
      {/* OTP Sending Project */}
  <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
    <div className="flex flex-col lg:w-1/2">
      <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-700 lg:px-5">
        <div className="flex flex-col">
          <div className="flex items-center space-x-3">
            <p className="text-secondary text-3xl font-bold">OTP Sender (Twilio)</p>
            <Link className="text-xl" to="https://github.com/Usmanbalogun044/otp-sending">
              <FaGithub />
            </Link>
          </div>
          <p className="text-slate-300 font-semibold text-xl">Utility Package (Personal Project)</p>
        </div>
        <div className="flex flex-row space-x-4 flex-wrap">
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">Laravel</div>
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">Twilio API</div>
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">OTP Authentication</div>
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">SMS Integration</div>
          <div className="bg-secondary font-medium px-3 py-1 rounded-md">Phone Verification</div>
        </div>
        <p className="text-white tracking-wide">
          This package provides a simple Laravel-based implementation for sending OTPs via Twilio SMS.
          It can be used for phone number verification, 2FA, or login confirmation. Built for fast integration
          into any Laravel authentication system.
        </p>
      </div>
    </div>
    <img
      src={otpImg} // Replace this with actual image path or placeholder
      className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
      alt="OTP Sending Screenshot"
    />
  </div>

  {/* DarkLogger Project (Python) */}
<div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
  <div className="flex flex-col lg:w-1/2">
    <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-700 lg:px-5">
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <p className="text-secondary text-3xl font-bold">DarkLogger</p>
          <Link
            className="text-xl"
            to="https://github.com/Usmanbalogun044/DarkLogger"
          >
            <FaGithub />
          </Link>
        </div>
        <p className="text-slate-300 font-semibold text-xl">
          Python Keylogger & Email Tool
        </p>
      </div>
      <div className="flex flex-row space-x-4 flex-wrap">
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">Python</div>
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">Keylogger</div>
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">Email Sending</div>
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">Windows Automation</div>
        <div className="bg-secondary font-medium px-3 py-1 rounded-md">Security Tooling</div>
      </div>
      <p className="text-white tracking-wide">
        DarkLogger is a Python-based keylogger that captures user keystrokes and sends logs
        to an email address for monitoring. Built to demonstrate core concepts in 
        automation, scripting, and Windows-based data collection. It helps sharpen skills in 
        system-level Python development.
      </p>
    </div>
  </div>

  <img
    src={darkLoggerImg} // Replace this with a real screenshot or placeholder
    className="rounded-sm mx-auto w-full h-40 lg:h-60 lg:w-1/2 object-cover"
    alt="DarkLogger Screenshot"
  />
</div>

        </div>
      </div>
    </>
  );
};

export default Homeproject;
