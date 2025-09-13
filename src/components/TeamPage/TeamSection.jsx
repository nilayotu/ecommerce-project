import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team1.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team2.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team3.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team4.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team5.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team6.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team7.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team8.jpg",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/assets/team9.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-8 bg-[#FFFFFF]">
      <div className="text-center mb-12 md:mb-32">
        <h2 className="md:text-6xl text-4xl px-16 font-bold text-[#252B42]">Meet Our Team</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="font-bold mb-4 text-[#252B42]">{member.name}</h3>
            <p className="text-[#737373] font-bold text-sm mb-2">{member.profession}</p>
            <div className="flex justify-center gap-4 text-lg">
            <a href="#" className="md:text-[#23A6F0] text-[#335BF5]"><FaFacebookF /></a>
            <a href="#" className="md:text-[#23A6F0] text-[#E51F5A]"><FaInstagram /></a>
            <a href="#" className="text-[#21A6DF]"><FaTwitter /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;