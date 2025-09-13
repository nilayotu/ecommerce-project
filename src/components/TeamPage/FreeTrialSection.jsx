import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FreeTrialSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center px-6">
        {/* Başlık */}
        <h2 className="text-2xl md:text-5xl font-bold text-[#252B42] mb-4">
          Start your 14 days free trial
        </h2>

        {/* Açıklama */}
        <p className="text-[#737373] text-md font-semibold max-w-xl mx-auto px-16 mt-6 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        {/* Buton */}
        <button className="bg-[#23A6F0] hover:bg-[#1d8cd8] text-white font-semibold px-12 py-4 rounded mb-8">
          Try it free now
        </button>

        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center gap-6 text-4xl text-[#252B42]">
          <a href="#" className="text-[#55ACEE]">
            <FaTwitter />
          </a>
          <a href="#" className="text-[#395185]">
            <FaFacebookF />
          </a>
          <a href="#" className="text-[#000000]">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#0A66C2]">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;