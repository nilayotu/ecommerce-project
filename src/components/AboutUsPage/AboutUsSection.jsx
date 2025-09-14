import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        {/* Sol Kısım */}
        <div className="space-y-12 md:space-y-12 flex flex-col items-center text-center md:items-start md:text-left">
        <p className="uppercase text-lg font-bold text-[#252B42] hidden md:block">
          About Company
        </p>
        <h2 className="md:text-6xl text-4xl font-bold text-[#252B42]">ABOUT US</h2>

        {/* Desktop */}
        <p className="text-[#737373] font-semibold text-2xl leading-relaxed max-w-md hidden md:block">
          We know how large objects will act, but things on a small scale
        </p>

        {/* Mobile */}
        <p className="text-[#737373] font-semibold text-lg px-16 leading-relaxed max-w-full md:hidden">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <button className="bg-[#23A6F0] text-white font-semibold px-12 py-4 rounded-md transition">
          Get Quote Now
        </button>
      </div>

        {/* Sağ Kısım */}
        <div className="flex justify-center relative">
          {/* Arka Plan Daire */}
          <img
            src="/assets/aboutus.PNG"
            alt="Shopping girl"
            className="w-full h-auto max-w-[500px] md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;