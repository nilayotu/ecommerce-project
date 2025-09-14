import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
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
    image: "/assets/team4.jpg",
  },
];

const MeetTeam = () => {
  return (
    <section className="py-20 px-8 bg-white">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#252B42]">Meet Our Team</h2>
        <p className="text-sm text-[#737373] md:text-lg px-8 mt-4 md:mt-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Takım Üyeleri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="font-bold text-[#252B42] mb-1">{member.name}</h3>
            <p className="text-[#737373] font-semibold text-sm mb-2">{member.profession}</p>
            <div className="flex justify-center gap-4 text-lg">
              <a href="#" className="text-[#335BF5] md:text-[#23A6F0]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#E51F5A] md:text-[#23A6F0]">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#21A6DF] md:text-[#23A6F0]">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;