import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="relative w-full max-w-4xl px-12 md:px-0 md:py-16 md:mx-auto">
  {/* Arka plan görseli */}
  <img
    src="/assets/videocover.png"
    alt="Video Thumbnail"
    className="w-full aspect-square md:aspect-auto rounded-lg object-cover"
  />

  {/* Play butonu */}
  <button className="absolute inset-0 flex items-center justify-center">
    <div className="bg-[#23A6F0] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
      <FaPlay className="text-white text-2xl" />
    </div>
  </button>
</div>
  );
};

export default VideoSection;