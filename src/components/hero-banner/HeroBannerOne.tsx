import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroBannerOne() {
  const banners = [
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+1",
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+2",
  ];

  return (
    <div className="py-3 px-5 pb-0 w-full ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={8}
        className="w-full h-full banner_one_swiper"
        dir="rtl"
      >
        {banners.map((url, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full rounded-[8px] overflow-hidden"
          >
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
