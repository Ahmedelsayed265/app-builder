import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroBannerThree() {
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  const banners = [
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+1",
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+2",
  ];

  return (
    <div className="py-3 px-5 w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: paginationEl,
        }}
        autoplay={{ delay: 4000 }}
        spaceBetween={8}
        className="w-full h-full banner_three_swiper"
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

      <div
        ref={setPaginationEl}
        className="bg-white rounded-full w-fit z-10 flex items-center justify-center py-2 px-3 absolute bottom-0! top-[unset]! left-1/2 -translate-x-1/2 pagination_banner_three"
      />
    </div>
  );
}
