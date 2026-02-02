import { useState } from "react";
import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroBannerOne() {
  const { colors } = useThemeStore();
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  const banners = [
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+1",
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+2",
    "https://placehold.co/1200x600/F9F9F9/000000?text=Banner+Content+3",
  ];

  return (
    <div className="py-3 px-5 w-full">
      <div className="relative rounded-[8px] overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: paginationEl }}
          autoplay={{ delay: 3000 }}
          spaceBetween={8}
          className="w-full aspect-2/1"
          dir="rtl"
        >
          {banners.map((url, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full relative">
                <img
                  src={url}
                  alt={`banner-${index}`}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="absolute right-0! bottom-0! w-fit! py-1 px-2 z-10 rounded-tl-[8px] banner_one_swiper"
          style={{ backgroundColor: colors.app_bg }}
          ref={setPaginationEl}
        />
      </div>
    </div>
  );
}
