import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroBannerTwo() {
  const banners = [
    "https://placehold.co/1200x600/1e293b/f8fafc?text=Modern+Collection",
    "https://placehold.co/1200x600/334155/f8fafc?text=New+Arrivals",
  ];

  return (
    <div className="py-3 px-5 pb-0 w-full ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={8}
        className="w-full h-full banner_two_swiper"
        dir="rtl"
      >
        {banners.map((url, index) => (
          <SwiperSlide key={index} className="w-full h-full rounded-[8px] overflow-hidden">
            <img
              src={url}
              alt={`banner-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
