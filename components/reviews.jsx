"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const Reviews = () => {
  const feedbackData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "Great website! I love the design and user experience.",
      date: "2024-03-14",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message:
        "The content on your website is very informative. Keep up the good work!",
      date: "2024-03-13",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      message: "I found a small bug on the contact form. Please check it out.",
      date: "2024-03-12",
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice@example.com",
      message: "I found a small bug on the contact form. Please check it out.",
      date: "2024-03-12",
    },
  ];
  return (
    <div className="py-10 overflow-hidden px-2" id="reviews">
      <h2 className="text-5xl lg:text-8xl uppercase font-bold py-10">
        What my clients says.
      </h2>
      <div>
        <>
          <Swiper
            grabCursor={true}
            navigation={true}
            breakpoints={{
              // When window width is >= 768px
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // When window width is >= 992px
              992: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When window width is >= 1200px
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              renderBullet: function (index, className) {
                return (
                  '<span className="' +
                  className +
                  '" style="background-color: #000000;"></span>'
                );
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {feedbackData.map((f) => (
              <SwiperSlide key={f.id}>
                <div className="border rounded-lg shadow-lg p-2 my-10 h-60 bg-gray-100">
                  <h3 className="text-2xl  font-medium">User</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit sunt aut enim quo consequuntur maxime eum cupiditate
                    quos odio doloribus?
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Reviews;
