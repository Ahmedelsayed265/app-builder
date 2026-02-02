import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function ViewNav() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between py-4 px-10">
      <div className="flex items-center gap-6">
        <NavLink to="/" className="text-[#595959] text-[16px]">{t("customizer.home")}</NavLink>
        <NavLink to="/categories" className="text-[#595959] text-[16px]">{t("customizer.categories")}</NavLink>
        <NavLink to="/product-details" className="text-[#595959] text-[16px]">{t("customizer.product_details")}</NavLink>
        <NavLink to="/cart" className="text-[#595959] text-[16px]">{t("customizer.cart")}</NavLink>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-[#E5F7FF] text-[#595959] px-4 py-3 rounded-[8px] cursor-pointer">
          <img src="/eye.svg" alt="" />
          {t("customizer.view")}
        </button>

        <button className="flex items-center gap-2 bg-[#0089C7] text-white px-4 py-3 rounded-[8px] cursor-pointer">
          <img src="/save.svg" alt="" />
          {t("customizer.save")}
        </button>
      </div>
    </div>
  );
}
