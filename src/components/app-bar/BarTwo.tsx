import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";

export default function BarTwo() {
  const { colors } = useThemeStore();
  return (
    <div className="py-2 px-4 flex items-center justify-between gap-2">
      <div
        className="h-14 w-14 rounded-[24px] flex items-center justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <img
          src="/bar-icons/home-02.svg"
          alt="home"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      <div className="h-14 w-14 rounded-[24px] flex items-center justify-center">
        <img src="/bar-icons/menu-square.svg" alt="menu-square" />
      </div>
      <div className="h-14 w-14 rounded-[24px] flex items-center justify-center">
        <img src="/bar-icons/cart.svg" alt="cart" />
      </div>
      <div className="h-14 w-14 rounded-[24px] flex items-center justify-center">
        <img src="/bar-icons/profile.svg" alt="profile" />
      </div>
    </div>
  );
}
