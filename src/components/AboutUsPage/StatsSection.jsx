import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
      {/* Üst Yazılar */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12 gap-6">
        {/* Sol (1/3) */}
        <div className="md:basis-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[#E74040] text-md font-semibold mb-4">
            Problems trying
          </p>
          <h2 className="md:m-0 mx-8 text-2xl md:text-3xl font-bold text-[#252B42] leading-snug">
            Met minim Mollie non desert
            Alamo est sit cliquey dolor do
            met sent.
          </h2>
        </div>

        {/* Sağ (2/3) */}
        <div className="md:basis-2/3 flex justify-center">
          <p className="m-0 text-[#737373] md:text-lg font-semibold text-sm leading-relaxed max-w-xl text-left">
            Problems trying to resolve the conflict between the two major realms of <br />
            Classical physics: Newtonian mechanics
          </p>
      </div>
    </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-32 gap-8 text-center">
          <div>
            <h3 className="text-6xl font-bold text-[#252B42]">15K</h3>
            <p className="text-[#737373] font-bold mt-2">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-[#252B42]">150K</h3>
            <p className="text-[#737373] font-bold mt-2">Monthly Visitors</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-[#252B42]">15</h3>
            <p className="text-[#737373] font-bold mt-2">Countries Worldwide</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-[#252B42]">100+</h3>
            <p className="text-[#737373] font-bold mt-2">Top Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;