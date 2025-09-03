import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#252B42] py-6 text-[#FFFFFF]">
      {/* Top Section */}
      <div className="container mx-auto px-16 py-10 flex flex-col md:flex-row justify-between items-start">
        {/* Left Content */}
        <div className="mb-6 md:mb-0 max-w-md">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Consulting Agency For Your Business
          </h2>
          <p className="text-sm md:text-m text-[#FFFFFF]">
            the quick fox jumps over the lazy dog
          </p>
        </div>

        {/* Button */}
        <button className="bg-[#23A6F0] text-xl text-[#FFFFFF] px-6 py-2 md:px-8 md:py-4 rounded-md font-semibold mt-4 md:mt-0">
          Contact Us
        </button>
      </div>

      {/* Middle Links Section */}
      <div className="container mx-auto px-16 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-left font-semibold">
        <div>
          <h3 className="font-bold mb-3 md:mb-4 text-md md:text-xl">Company Info</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-lg">
            <li><Link to="/about" className="hover:text-[#23A6F0]">About Us</Link></li>
            <li><Link to="/career" className="hover:text-[#23A6F0]">Career</Link></li>
            <li><Link to="/hiring" className="hover:text-[#23A6F0]">We are hiring</Link></li>
            <li><Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 md:mb-4 text-md md:text-xl">Legal</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-lg">
            <li><Link to="/legal/about" className="hover:text-[#23A6F0]">About Us</Link></li>
            <li><Link to="/legal/career" className="hover:text-[#23A6F0]">Career</Link></li>
            <li><Link to="/legal/hiring" className="hover:text-[#23A6F0]">We are hiring</Link></li>
            <li><Link to="/legal/blog" className="hover:text-[#23A6F0]">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 md:mb-4 text-md md:text-xl">Features</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-lg">
            <li><Link to="/features/business-marketing" className="hover:text-[#23A6F0]">Business Marketing</Link></li>
            <li><Link to="/features/user-analytic" className="hover:text-[#23A6F0]">User Analytic</Link></li>
            <li><Link to="/features/live-chat" className="hover:text-[#23A6F0]">Live Chat</Link></li>
            <li><Link to="/features/unlimited-support" className="hover:text-[#23A6F0]">Unlimited Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 md:mb-4 text-md md:text-xl">Resources</h3>
          <ul className="space-y-2 md:space-y-4 text-sm md:text-lg">
            <li><Link to="/resources/ios-android" className="hover:text-[#23A6F0]">IOS & Android</Link></li>
            <li><Link to="/resources/watch-a-demo" className="hover:text-[#23A6F0]">Watch a Demo</Link></li>
            <li><Link to="/resources/customers" className="hover:text-[#23A6F0]">Customers</Link></li>
            <li><Link to="/resources/api" className="hover:text-[#23A6F0]">API</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 md:mb-4 text-md md:text-xl">Get In Touch</h3>
          <ul className="space-y-3 text-sm md:text-m">
            <li className="flex items-start justify-start md:text-xl gap-2">
            <Phone className="w-4 h-4 md:w-8 md:h-8 text-[#8EC2F2]  md:text-[#FFFFFF]" /> 
            (480) 555-0103
            </li>

            <li className="flex items-start justify-start md:text-xl gap-2">
            <MapPin className="w-4 h-4 md:w-8 md:h-8 text-[#8EC2F2] md:text-[#FFFFFF]" /> 
            4517 Washington Ave.
            </li>

            <li className="flex items-start justify-start md:text-xl gap-2">
            {/* Desktop görünümde Mail ikonu */}
            <Mail className="hidden md:block md:w-8 md:h-8 text-[#FFFFFF]" />
            
            {/* Mobile görünümde Send ikonu */}
            <Send className="block md:hidden w-4 h-4 text-[#8EC2F2]" />
            
            debra.holt@example.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div >
        <div className="container mx-auto px-16 py-6 flex flex-col md:flex-row justify-between items-start">
          <p className="text-xs md:text-xl font-semibold mb-4 md:mb-0">
            Made With Love By Finland <br className="md:hidden" /> All Right Reserved
          </p>
        <div className="flex gap-4">
        <Facebook className="w-5 h-5 text-[#335BF5] md:text-[#23A6F0] md:w-8 md:h-8 cursor-pointer" />
        <Instagram className="w-5 h-5 text-[#E51F5A] md:text-[#23A6F0] md:w-8 md:h-8 cursor-pointer" />
        <Twitter className="w-5 h-5 text-[#21A6DF] md:text-[#23A6F0] md:w-8 md:h-8 cursor-pointer" />
        <Youtube className="block md:hidden w-5 h-5 text-[#E42F08] cursor-pointer" />
        </div>
        </div>
      </div>
    </footer>
  );
}