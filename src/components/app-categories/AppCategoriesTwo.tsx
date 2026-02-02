import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";
import "swiper/css";
import "swiper/css/free-mode";

const CATEGORIES = ["إلكترونيات", "ملابس", "عطور", "أحذية", "ساعات", "حقائب"];

export default function AppCategoriesTwo() {
  const { colors } = useThemeStore();

  return (
    <div className="flex flex-col gap-3 py-3 px-5">
      <div className="flex justify-between items-center px-1">
        <h3 className="text-[#161616] text-[16px] font-bold">التصنيفات</h3>
        <button className="underline text-sm" style={{ color: colors.primary }}>عرض المزيد</button>
      </div>

      <div className="w-0 min-w-full overflow-hidden">
        <Swiper
          dir="rtl"
          key="categories-swiper"
          spaceBetween={8}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full categories-swiper pt-1! pb-1!"
        >
          {CATEGORIES.map((cat) => (
            <SwiperSlide key={cat} className="w-fit!">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src="https://placehold.co/100x100/F9F9F9/000000"
                  alt="category"
                  className="w-[100px] h-[100px] object-cover rounded-full"
                />

                <span
                  className="text-[16px] font-medium whitespace-nowrap"
                  style={{ color: colors.primary }}
                >
                  {cat}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
