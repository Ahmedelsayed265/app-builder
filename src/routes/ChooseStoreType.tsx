import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, MoveUpRight } from "lucide-react";
import { Link } from "react-router";

const storeTypes = [
  {
    title: "ملابس",
    icon: "/shirt.svg",
  },
  {
    title: "عطور",
    icon: "/perfumes.svg",
  },
  {
    title: "إكسسورات",
    icon: "/accissories.svg",
  },
  {
    title: "عسل",
    icon: "/honey.svg",
  },
  {
    title: "إلكترونيات",
    icon: "/smart-phone.svg",
  },
  {
    title: "أخرى",
    icon: "/other.svg",
  },
];

export default function ChooseStoreType() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<number | null>(null);

  return (
    <section className="h-screen flex items-center py-12 px-40 bg-[#FAFAFA]">
      <div className="w-full flex flex-col items-center gap-12">
        <div className="bg-[#0EA5E91A] rounded-[80px] px-4 py-2 w-fit">
          {t("common.step")} 1 {t("common.of")} 3
        </div>

        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold text-[#1A0F04] mb-4 text-[24px]">
            {t("common.what_type_of_store")}
          </h1>

          <p className="text-[#595959] text-[16px]">
            {t("common.choose_store_type_description")}
          </p>

          <div className="grid grid-cols-4 gap-4 w-full mt-12 mb-12">
            {storeTypes.map((storeType, index) => {
              const isSelected = selectedType === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedType(index)}
                  className={`relative rounded-[12px] p-6 flex flex-col items-center justify-center gap-4 border transition-all cursor-pointer group ${
                    isSelected
                      ? "bg-[#0EA5E90D] border-[#0089C7] shadow-sm"
                      : "bg-white border-[#E5E7EB] hover:border-[#0089C7] hover:shadow-lg"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center bg-[#0EA5E9]">
                      <Check width={16} height={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#0089C7]"
                        : "bg-[#F3F4F6] group-hover:bg-[#0EA5E91A]"
                    }`}
                  >
                    <img
                      src={storeType.icon}
                      alt={storeType.title}
                      className={`w-7 h-7 ${isSelected ? "filter-[brightness(0)_invert(1)]" : ""}`}
                    />
                  </div>

                  <p className="text-[#1A0F04] text-[16px] font-medium">
                    {storeType.title}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            to="/choose-store-theme"
            className="h-[45px] w-[260px] flex items-center justify-center gap-2 bg-[#0089C7] rounded-[8px] text-white"
          >
            <MoveUpRight width={16} height={16} /> {t("common.next")}
          </Link>
        </div>
      </div>
    </section>
  );
}
