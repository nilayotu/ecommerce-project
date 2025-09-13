import React, { useState, useEffect } from "react";
import { AlarmClock, Calendar, MessageSquare } from "lucide-react";

const FeaturedPosts = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ekran genişliğini takip et
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const posts = [
    {
      id: 1,
      image: isMobile ? "/assets/featuredmobil-1.PNG" : "/assets/featured-1.PNG",
      tag: "NEW",
      category: "Google",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: isMobile ? "/assets/featuredmobil-2.PNG" : "/assets/featured-2.PNG",
      tag: "NEW",
      category: "Google",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: isMobile ? "/assets/featuredmobil-3.PNG" : "/assets/featured-3.PNG",
      tag: "NEW",
      category: "Google",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      {/* Başlıklar */}
      <p className="text-center text-[#23A6F0] text-md font-semibold">
        Practice Advice
      </p>
      <h2
        className="text-center font-bold mb-10"
        style={{ color: "#252B42", fontSize: isMobile ? "1.5rem" : "3rem" }}
      >
        {isMobile ? "Featured Products" : "Featured Posts"}
      </h2>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Resim */}
            <div className="w-full aspect-[4/3]">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain"
            />
            </div>

            {/* İçerik */}
            <div className="p-4">
              <div className="flex gap-2 text-xs font-medium mb-2">
                <span style={{ color: "#8EC2F2" }}>{post.category}</span>
                <span style={{ color: "#737373" }}>Trending</span>
                <span style={{ color: "#737373" }}>New</span>
              </div>

              <h3 className="text-xl font-semibold text-[#252B42] mb-2">{post.title}</h3>
              <p className="text-md font-semibold text-[#737373] mb-4">{post.description}</p>

              {/* Tarih ve yorumlar */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <AlarmClock className="w-4 text-[#23A6F0] h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 text-[#23856D] h-4" />
                  <span>{post.comments} comments</span>
                </div>
              </div>

              <a
                href="#"
                className="text-sm font-semibold flex items-center gap-1 text-[#737373]"
              >
                Learn More <span className="text-[#23A6F0]">{'>'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;