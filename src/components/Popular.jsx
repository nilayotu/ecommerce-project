import { Download } from 'lucide-react';
import React from 'react';

const Popular = () => {
  return (
    <div className="bg-[#FFFFFF]">
      {/* Üst Bölüm */}
      <div className="flex flex-col lg:flex-row">
        {/* Sol Taraf - Scooter Görseli */}
        <div className="flex justify-center lg:justify-end lg:w-2/3">
          <img
            src="/assets/scooter.PNG"
            alt="Delivery person on scooter"
            className="w-auto h-[400px] lg:h-[700px] object-contain"
            />
        </div>

        {/* Sağ Taraf - İçerik */}
        <div className="bg-[#FAFAFA] p-8 lg:p-24 flex flex-col justify-start lg:w-1/3 lg:mr-96">
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
      src="/assets/product-4.PNG"
      alt="Product"
      className="w-64 lg:w-80 h-auto object-cover mb-4"
    />
    <p className="text-xl font-semibold text-[#252B42] mb-2 text-center">
      English Department
    </p>

    {/* Mobilde görünen Download + Sales */}
    <div className="flex items-center space-x-2 mb-2 lg:hidden">
      <Download className="w-5 h-5 text-[#737373]" />
      <span className="text-[#737373] font-medium text-sm">15 sales</span>
    </div>

    <div className="flex items-center justify-center space-x-2 w-full">
      <span className="text-[#BDBDBD] line-through">$16.48</span>
      <span className="text-[#23856D] font-semibold">$6.48</span>
    </div>

    {/* Mobilde görünen 4 renkli daire */}
    <div className="flex space-x-2 mt-2 lg:hidden">
      <span className="w-5 h-5 rounded-full bg-[#23A6F0]"></span>
      <span className="w-5 h-5 rounded-full bg-[#23856D]"></span>
      <span className="w-5 h-5 rounded-full bg-[#E77C40]"></span>
      <span className="w-5 h-5 rounded-full bg-[#252B42]"></span>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Alt Bölüm - Özellikler */}
      <div className="px-16 lg:px-96 py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-start">
              <span className="text-5xl lg:text-6xl font-bold text-[#E74040] mr-4">{num}.</span>
              <div>
                <h3 className="text-xl font-bold text-[#252B42] mb-1">Easy to use</h3>
                <p className="text-xs md:text-base text-[#737373] font-semibold">
                Things on a very small scale are very easy to use that you have any direct
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;