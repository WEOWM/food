import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// ✅ Make sure you import swiper styles somewhere in your project:
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

function Category() {
  const [error] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Dummy images for example – replace with your own array
  const images = [
    {
      id: 1,
      name: "Burger",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Pizza",
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Pasta",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Salad",
      img: "https://images.pexels.com/photos/20408435/pexels-photo-20408435.jpeg",
    },
    {
      id: 5,
      name: "Tacos",
      img: "https://images.pexels.com/photos/27643023/pexels-photo-27643023.jpeg",
    },
    {
      id: 6,
      name: "Veg Pizza",
      img: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      name: "Sandwich",
      img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    },
    {
      id: 8,
      name: "Noodles",
      img: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 9,
      name: "Pasta Bowl",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10,
      name: "Pizza Slice",
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 11,
      name: "Pizza Slice",
      img: "https://images.pexels.com/photos/20422126/pexels-photo-20422126.jpeg",
    },
    {
      id: 12,
      name: "Pizza Slice",
      img: "https://images.pexels.com/photos/20408458/pexels-photo-20408458.jpeg",
    },
    {
      id: 13,
      name: "Pizza Slice",
      img: "https://images.pexels.com/photos/20408464/pexels-photo-20408464.jpeg",
    },
    {
      id: 14,
      name: "Pizza Slice",
      img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    },
  ];

  return (
    <>
      <div className="hidden:h-14 flex justify-between items-center px-3">
        {/* <div className="flex gap-1 ">
          <button
            ref={prevRef}
            className="bg-primary text-white bg-[rgba(0,0,0,0.49)] p-4 rounded-md items-center justify-center right-14 top-0 z-30"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            ref={nextRef}
            className="bg-primary text-white bg-[rgba(0,0,0,0.49)] p-4 rounded-md items-center justify-center top-1 z-30"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div> */}
      </div>

      <div>
        {error ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : (
          <Swiper
            breakpoints={{
              375: { slidesPerView: 4 },
              414: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              810: { slidesPerView: 4 },
              1024: { slidesPerView: 10 },
            }}
            spaceBetween={8}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation, Autoplay]}
            onInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            className="mySwiper cursor-pointer   "
          >
            {images.map((item, idx) => (
              <SwiperSlide className="px-2 py-1 " key={idx}>
                {/* Replace FashionCard with your component */}
                <div className="w-full h-24 lg:mt-10 flex flex-col items-center justify-center transition-transform duration-300 lg:hover:-translate-y-8 ">
                  <img
                    src={item.img}
                    alt={`Fashion ${idx}`}
                    className="w-full h-full rounded-full object-center "
                  />
                  <p className="font-medium ">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}

export default Category;
