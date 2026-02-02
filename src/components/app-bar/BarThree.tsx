import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";

export default function BarThree() {
  const { colors } = useThemeStore();
  return (
    <div className="py-3 px-4 flex items-center justify-between gap-2">
      <div className="flex flex-col items-center gap-1">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 0C14.8114 0.00024459 16.2619 1.5331 17.5264 2.63965L25.3389 9.47559C26.0181 10.0699 26.148 10.9458 25.8438 11.6514C25.6081 12.1977 25.1242 12.6236 24.5088 12.7803C24.2326 12.8506 24.0942 12.8861 24.0381 12.958C23.9821 13.0299 23.9823 13.1456 23.9814 13.376C23.9775 14.4689 23.9688 16.8945 23.9688 17.1855C23.9688 18.9794 23.9687 20.4353 23.8018 21.582C23.627 22.7826 23.2513 23.7886 22.3955 24.5791C21.5511 25.3589 20.4956 25.6911 19.2354 25.8477C18.0102 25.9998 16.4479 26 14.4922 26H11.5068C9.55116 26 7.9888 25.9998 6.76367 25.8477C5.5034 25.6911 4.44795 25.359 3.60352 24.5791C2.74772 23.7886 2.37207 22.7826 2.19727 21.582C2.03035 20.4353 2.03024 18.9794 2.03027 17.1855C2.03027 16.8946 2.02151 14.4689 2.01758 13.376C2.01675 13.1456 2.01697 13.0299 1.96094 12.958C1.90485 12.8861 1.76652 12.8506 1.49023 12.7803C0.874799 12.6236 0.390971 12.1977 0.155273 11.6514C-0.148954 10.9458 -0.019047 10.0699 0.660156 9.47559L8.47266 2.63965C9.73724 1.53301 11.1884 0 13 0ZM13 16.667C12.0796 16.667 11.3332 17.4127 11.333 18.333C11.333 19.2535 12.0795 20 13 20H13.0117C13.9322 20 14.6787 19.2535 14.6787 18.333C14.6785 17.4127 13.9321 16.667 13.0117 16.667H13Z"
            fill={colors.primary}
          />
        </svg>

        <span className="text-[#999999] text-[14px]">الرئيسية</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <img src="/bar-icons/menu-square.svg" alt="menu-square" />
        <span className="text-[#999999] text-[14px]">التصنيفات</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <img src="/bar-icons/cart.svg" alt="cart" />
        <span className="text-[#999999] text-[14px]">السلة</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <img src="/bar-icons/profile.svg" alt="profile" />
        <span className="text-[#999999] text-[14px]">حسابى</span>
      </div>
    </div>
  );
}
