import { Check, Eye, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const storeThemes = [
  {
    title: "عصري",
    recommended: true,
    description: "تصميم نظيف وعصري بألوان زاهية",
  },
  {
    title: "كلاسيكي",
    recommended: false,
    description: "تصميم تقليدي أنيق ومناسب لجميع المتاجر",
  },
  {
    title: "بسيط",
    recommended: false,
    description: "تصميم بسيط يركز على المنتجات",
  },
  {
    title: "فاخر",
    recommended: true,
    description: "تصميم فاخر يناسب البراند",
  },
  {
    title: "عصري",
    recommended: false,
    description: "تصميم نظيف وعصري بألوان زاهية",
  },
];

export default function ChooseStoreTheme() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<number | null>(null);

  return (
    <section className="h-screen flex items-center py-12 px-40 bg-[#FAFAFA]">
      <div className="w-full flex flex-col items-center gap-12">
        <div className="bg-[#0EA5E91A] rounded-[80px] px-4 py-2 w-fit">
          {t("common.step")} 2 {t("common.of")} 3
        </div>

        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold text-[#1A0F04] mb-4 text-[24px]">
            {t("common.choose_store_theme")}
          </h1>

          <p className="text-[#595959] text-[16px]">
            {t("common.choose_store_theme_description")}
          </p>

          <div className="grid grid-cols-4 gap-4 w-full mt-12 mb-12">
            {storeThemes.map((storeTheme, index) => {
              const isSelected = selectedType === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedType(index)}
                  className={`relative rounded-[12px] p-6 flex flex-col items-center justify-center gap-2 border transition-all cursor-pointer group ${
                    isSelected
                      ? "bg-[#0EA5E90D] border-[#0089C7] shadow-sm"
                      : "bg-white border-[#E5E7EB] hover:border-[#0089C7] hover:shadow-lg"
                  }`}
                >
                  {storeTheme.recommended && (
                    <div className="absolute top-3 right-3 py-2 px-4 flex items-center gap-2 rounded-full bg-[#F97316] text-white text-[14px]">
                      <img src="/star-white.svg" alt="star" />
                      {t("common.recommended")}
                    </div>
                  )}

                  <img
                    src="/theme.svg"
                    alt={storeTheme.title}
                    className="h-[70px]"
                  />

                  <h6 className="text-[#1A0F04] text-[16px] font-medium w-full">
                    {storeTheme.title}
                  </h6>

                  <p className="text-[#595959] text-[16px] w-full">
                    {storeTheme.description}
                  </p>

                  <div className="w-full flex gap-3 mt-4">
                    <div
                      className={`w-full h-12 flex items-center justify-center rounded-[8px] ${isSelected ? "bg-[#0089c7]" : "bg-[#0EA5E91A]"}`}
                    >
                      <p
                        className={`text-[16px] ${isSelected ? "text-white" : "text-[#595959]"}`}
                      >
                        {isSelected ? t("common.selected") : t("common.select")}
                      </p>
                    </div>

                    <div className="h-12 min-w-12 flex items-center justify-center border rounded-[8px]">
                      <Eye width={18} height={18} className="text-[#00344C" />
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              onClick={() => setSelectedType(5)}
              className={`relative rounded-[12px] p-6 flex flex-col items-center justify-center gap-4 border transition-all cursor-pointer group ${
                selectedType === 5
                  ? "bg-[#0EA5E90D] border-[#0089C7] shadow-sm"
                  : "bg-white border-[#E5E7EB] hover:border-[#0089C7] hover:shadow-lg"
              }`}
            >
              {selectedType === 5 && (
                <div className="absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center bg-[#0EA5E9]">
                  <Check width={16} height={16} className="text-white" />
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                  selectedType === 5
                    ? "bg-[#0089C7]"
                    : "bg-[#F3F4F6] group-hover:bg-[#0EA5E91A]"
                }`}
              >
                <img
                  src="/custom-theme.svg"
                  alt="custom-theme"
                  className={`w-7 h-7 ${selectedType === 5 ? "filter-[brightness(0)_invert(1)]" : ""}`}
                />
              </div>

              <h6 className="text-[#1A0F04] text-[16px] font-medium">
                {t("common.custom_theme")}
              </h6>
            </div>
          </div>

          <Link
            to="/"
            className="h-[45px] w-[260px] flex items-center justify-center gap-2 bg-[#0089C7] rounded-[8px] text-white"
          >
            <MoveUpRight width={16} height={16} /> {t("common.next")}
          </Link>
        </div>
      </div>
    </section>
  );
}
