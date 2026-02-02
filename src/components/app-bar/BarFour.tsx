import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";

export default function BarFour() {
  const { colors } = useThemeStore();

  return (
    <div className="py-3 px-4 flex items-center justify-between gap-2">
      <div
        className="flex items-center gap-1 rounded-full bg-white p-3"
        style={{ border: `1px solid ${colors.primary}` }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9999 16C13.3107 16.0002 14.3462 17.1124 14.2528 18.4199L14.2519 18.4277L14.0116 22.748C13.7474 22.7487 13.4734 22.75 13.1894 22.75H10.8114C10.5263 22.75 10.2514 22.7487 9.98624 22.748L9.74698 18.4277L9.746 18.4199C9.6526 17.1123 10.689 16 11.9999 16ZM11.9999 1.25C12.866 1.25 13.6406 1.52703 14.4765 1.99609C15.2864 2.45058 16.2148 3.12107 17.3817 3.96484L18.8905 5.05664C19.827 5.7337 20.5754 6.27388 21.1396 6.77441C21.7221 7.29128 22.158 7.80694 22.4345 8.45508C22.7115 9.10459 22.7783 9.77051 22.7411 10.5381C22.7053 11.2789 22.5677 12.1726 22.3964 13.2871L22.081 15.3389C21.8376 16.9225 21.644 18.1836 21.3593 19.166C21.0649 20.182 20.6503 20.9889 19.9091 21.6055C19.171 22.2193 18.2916 22.4926 17.2177 22.623C16.852 22.6675 16.4523 22.6951 16.0165 22.7139L16.248 18.5537C16.4189 16.0922 14.4685 14.0002 11.9999 14C9.53116 14 7.57996 16.0921 7.75088 18.5537L7.98135 22.7139C7.54662 22.6951 7.14806 22.6674 6.78311 22.623C5.70913 22.4926 4.82979 22.2193 4.0917 21.6055C3.35046 20.9889 2.9359 20.182 2.64151 19.166C2.35683 18.1836 2.16318 16.9225 1.91983 15.3389L1.6044 13.2871C1.43312 12.1726 1.29554 11.2789 1.25967 10.5381C1.22251 9.77048 1.28929 9.10461 1.56631 8.45508C1.84276 7.80694 2.27869 7.29128 2.86124 6.77441C3.4254 6.27388 4.17383 5.7337 5.11026 5.05664L6.61905 3.96484C7.78599 3.12109 8.71444 2.45057 9.52432 1.99609C10.36 1.52714 11.134 1.25008 11.9999 1.25Z"
            fill={colors.primary}
          />
        </svg>

        <span style={{ color: colors.primary }}>الرئيسية</span>
      </div>

      <div
        className="h-12 w-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <img src="/bar-icons/shopping-bag.svg" alt="shopping-bag" />
      </div>
      <div
        className="h-12 w-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <img src="/bar-icons/dashboard-square.svg" alt="dashboard-square" />
      </div>
      <div
        className="h-12 w-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <img src="/bar-icons/menu-circle.svg" alt="menu-circle" />
      </div>
    </div>
  );
}
