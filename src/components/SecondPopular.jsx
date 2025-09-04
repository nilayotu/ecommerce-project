import { Download } from 'lucide-react';
import React from 'react';

const SecondPopular = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Üst Bölüm */}
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Sağ Taraf */}
        <div className="flex justify-center lg:justify-start lg:w-2/3">
          <img
            src="/assets/hamburger.jpg"
            alt="A girl keeping a hamburger"
            className="w-auto h-[400px] lg:h-[700px] object-contain"
          />
        </div>

        {/* Sol Taraf */}
        <div className="bg-[#FAFAFA] p-8 lg:p-24 flex flex-col justify-start lg:w-1/3 lg:ml-96">
          {/* Başlık ve Açıklama */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl text-center font-bold text-[#252B42] mb-4 mt-8">
              MOST POPULAR
            </h2>
            <p className="text-[#737373] text-lg font-semibold leading-relaxed text-center mx-8 lg:mx-0">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </p>
          </div>

          {/* Ürün Kartı */}
          <div className="bg-[#FAFAFA] p-6 max-w-sm mx-auto">
            <div className="flex flex-col items-center">
              <img
  src="/assets/popular-product-2.jpg"
  alt="Product"
  className="w-40 lg:w-64 h-96 lg:h-auto object-cover mb-4"
/>
              <p className="text-xl font-semibold text-[#252B42] mb-2 text-center">
                English Department
              </p>

              {/*Desktoptagörünen Download + Sales */}
              <div className="flex items-center space-x-2 mb-2 hidden lg:flex">
                <Download className="w-5 h-5 text-[#737373]" />
                <span className="text-[#737373] font-medium text-sm">15 sales</span>
              </div>

              <div className="flex items-center justify-center space-x-2 w-full">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-semibold">$6.48</span>
              </div>

              {/* Desktopta görünen 4daire */}
              <div className="hidden lg:flex space-x-2 mt-2">
            <span className="w-5 h-5 rounded-full bg-[#23A6F0]"></span>
            <span className="w-5 h-5 rounded-full bg-[#23856D]"></span>
            <span className="w-5 h-5 rounded-full bg-[#E77C40]"></span>
            <span className="w-5 h-5 rounded-full bg-[#252B42]"></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPopular;