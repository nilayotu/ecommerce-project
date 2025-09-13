import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const OfficeContactSection = () => {
  return (
    <section className="bg-white md:py-12">
      <div className="container mx-auto text-center px-6">
        {/* Üst Başlık */}
        <p className="uppercase md:text-lg font-bold text-[#252B42]">
          Visit Our Office
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#252B42] mt-2 mb-12">
          We help small businesses <br /> with big ideas
        </h2>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Telefon Kartı */}
          <div className="flex flex-col items-center text-center p-12 max-w-sm mx-auto ">
            <FaPhoneAlt className="text-6xl text-[#23A6F0] mb-4" />
            <p className="text-[#252B42] font-bold">georgia.young@example.com</p>
            <p className="text-[#252B42] font-bold mb-4">georgia.young@ple.com</p>
            <h3 className="font-bold text-[#252B42] mb-4">Get Support</h3>
            <button className="px-6 py-3 border font-bold border-[#23A6F0] text-[#23A6F0] rounded-lg hover:bg-[#23A6F0] hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Lokasyon Kartı (Dark Background) */}
          <div className="flex flex-col items-center text-center p-24 bg-[#252B42] text-white">
            <FaMapMarkerAlt className="text-6xl text-[#23A6F0] mb-4" />
            <p className="font-bold">georgia.young@example.com</p>
            <p className="mb-4 font-bold">georgia.young@ple.com</p>
            <h3 className="font-bold mb-4">Get Support</h3>
            <button className="px-6 py-3 border font-bold border-[#23A6F0] text-[#23A6F0] rounded-lg hover:bg-[#23A6F0] transition whitespace-nowrap">
            Submit Request
            </button>
          </div>

          {/* Mail Kartı */}
          <div className="flex flex-col items-center text-center p-24 ">
            <FaEnvelope className="hidden md:block text-6xl text-[#23A6F0] mb-4" />
            <FaPaperPlane className="block md:hidden text-6xl text-[#23A6F0] mb-4" />
            <p className="text-[#252B42] font-bold">georgia.young@example.com</p>
            <p className="text-[#252B42] font-bold mb-4">georgia.young@ple.com</p>
            <h3 className="font-bold text-[#252B42] mb-4">Get Support</h3>
            <button className="px-4 py-2 md:px-6 md:py-3 border font-bold border-[#23A6F0] text-[#23A6F0] rounded-lg hover:bg-[#23A6F0] hover:text-white transition">
            Submit Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeContactSection;