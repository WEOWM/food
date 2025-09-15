import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";



function CarouselSlider() {
  const foodImages = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // Pizza
    "https://images.unsplash.com/photo-1550547660-d9450f859349", // Burger
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg", // Dessert
  ];

  return (
    <div className="CarouselSlider w-full lg:h-[500px] max-sm:h-[200px]">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true} 
        className="mySwiper w-full h-full"
      >
        {foodImages.map((src, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Food ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSlider;
