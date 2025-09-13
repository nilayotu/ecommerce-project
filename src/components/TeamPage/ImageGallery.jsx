import React from "react";

const ImageGallery = () => {
  return (
    <div className="container mx-auto py-10 px-6 grid md:grid-cols-3 gap-4">
      {/* Büyük Görsel */}
      <div className="md:col-span-2">
        <img
        src="/assets/gallery1.jpg"
        alt="Large"
        style={{ height: "43rem" }}
        className="w-full object-cover"
        />
      </div>

      {/* Küçük Görseller */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/assets/gallery2.jpg"
          alt="Small 1"
          style={{ height: "21rem" }}
          className="object-cover"
        />
        <img
          src="/assets/gallery3.jpg"
          alt="Small 2"
          style={{ height: "21rem" }}
          className="object-cover"
        />
        <img
          src="/assets/gallery4.jpg"
          alt="Small 3"
          style={{ height: "21rem" }}
          className="object-cover"
        />
        <img
          src="/assets/gallery5.jpg"
          alt="Small 4"
          style={{ height: "21rem" }}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGallery;