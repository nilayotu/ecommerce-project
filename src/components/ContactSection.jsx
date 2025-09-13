import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="flex md:justify-end justify-center flex-col space-y-6 px-6 md:px-0">
          <p className="md:text-lg text-md font-bold uppercase text-[#252B42] text-center md:text-left">
            Contact Us
            </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#252B42] leading-snug text-center md:text-left">
            Get in touch <br /> today!
            </h2>
          <p className="text-[#737373] text-xl md:text-2xl leading-relaxed text-center md:text-left">
            <span className="block md:hidden">
                We know how large <br />
                objects will act, but things <br />
                on a small scale just do <br />
                not act that way.
            </span>

            <span className="hidden md:block max-w-md">
                We know how large objects will act, <br /> but things on a small scale
            </span>
            </p>

          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-xl text-[#252B42]">
                Phone : <span className="font-bold">+451 215 215</span>
            </p>
            <p className="font-bold text-xl text-[#252B42]">
                Fax : <span className="font-bold">+451 215 215</span>
            </p>
            </div>

          {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 text-[#252B42] text-4xl">
        <a href="#" className="hover:text-[#23A6F0]">
            <FaTwitter />
        </a>
        <a href="#" className="hover:text-[#23A6F0]">
            <FaFacebookF />
        </a>
        <a href="#" className="hover:text-[#23A6F0]">
            <FaInstagram />
        </a>
        <a href="#" className="hover:text-[#23A6F0]">
            <FaLinkedinIn />
        </a>
        </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/assets/contact-page.PNG"
            alt="contact-page"
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;