"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/img_1.png",
  "/img_2.png",
  "/img_3.png",
  "/img_4.jpeg",
  "/img_5.jpeg",
  "/img_6.jpeg",
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
          >
            <Image
              src={img}
              alt={`Product ${index}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        
        {/* Large Selected Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={selectedImage}
            alt="Selected Product"
            width={800}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Small Thumbnail Images */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                selectedImage === img
                  ? "border-green-500"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                width={90}
                height={90}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}