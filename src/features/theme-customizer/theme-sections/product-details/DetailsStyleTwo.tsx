import { useThemeStore } from "@/features/theme-customizer/appStore";

export default function DetailsStyleTwo() {
  const { colors } = useThemeStore();

  return (
    <div className="flex flex-col gap-1 min-w-0 p-3 pt-0">
      <div className="py-2 flex items-center">
        <button className="cursor-pointer">
          <img src="/back.svg" alt="back" />
        </button>

        <h3 className="text-[18px] text-[#1A0F04] text-center w-full">
          تفاصيل المنتج
        </h3>

        <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z"
              stroke={colors.primary}
              strokeWidth="1.5"
            />
            <path
              d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8"
              stroke={colors.primary}
              strokeWidth="1.5"
            />
            <path
              d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11"
              stroke={colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-full max-w-[420px] mx-auto overflow-hidden relative">
          <img
            src="https://placehold.co/400x350/eeeeee/31343C"
            alt="product-details"
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3
              className="text-base font-bold"
              style={{ color: colors.primary }}
            >
              اسم المنتج
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="flex items-center gap-1 text-[16px] font-bold"
              style={{ color: colors.primary }}
            >
              400.00
              <svg
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_62_4213)">
                  <path
                    d="M8.0908 13.2883C7.85882 13.8194 7.70548 14.3956 7.64673 15L12.5559 13.9226C12.7879 13.3917 12.9411 12.8153 13 12.2109L8.0908 13.2883Z"
                    fill={colors.primary}
                  />
                  <path
                    d="M12.5557 10.6949C12.7877 10.164 12.941 9.58759 12.9998 8.98324L9.17564 9.82291V8.20876L12.5556 7.46723C12.7875 6.9363 12.9409 6.35989 12.9996 5.75554L9.17553 6.59449V0.789524C8.58956 1.12919 8.06916 1.58132 7.64613 2.11463V6.93021L6.11674 7.26582V0C5.53078 0.339544 5.01038 0.791792 4.58735 1.32511V7.6013L1.16533 8.35202C0.933349 8.88295 0.77989 9.45936 0.721027 10.0637L4.58735 9.21545V11.2482L0.443829 12.1572C0.211847 12.6881 0.058503 13.2646 -0.000244141 13.8689L4.33687 12.9174C4.68993 12.8416 4.99338 12.6261 5.19067 12.3295L5.98607 11.1121V11.1118C6.06863 10.9859 6.11674 10.834 6.11674 10.6705V8.87985L7.64613 8.54424V11.7725L12.5556 10.6947L12.5557 10.6949Z"
                    fill={colors.primary}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_4213">
                    <rect width="13" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="flex items-center gap-1 text-[#666666]">
              <span className="line-through">500.00</span>

              <svg
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_62_4213)">
                  <path
                    d="M8.0908 13.2883C7.85882 13.8194 7.70548 14.3956 7.64673 15L12.5559 13.9226C12.7879 13.3917 12.9411 12.8153 13 12.2109L8.0908 13.2883Z"
                    fill="#666666"
                  />
                  <path
                    d="M12.5557 10.6949C12.7877 10.164 12.941 9.58759 12.9998 8.98324L9.17564 9.82291V8.20876L12.5556 7.46723C12.7875 6.9363 12.9409 6.35989 12.9996 5.75554L9.17553 6.59449V0.789524C8.58956 1.12919 8.06916 1.58132 7.64613 2.11463V6.93021L6.11674 7.26582V0C5.53078 0.339544 5.01038 0.791792 4.58735 1.32511V7.6013L1.16533 8.35202C0.933349 8.88295 0.77989 9.45936 0.721027 10.0637L4.58735 9.21545V11.2482L0.443829 12.1572C0.211847 12.6881 0.058503 13.2646 -0.000244141 13.8689L4.33687 12.9174C4.68993 12.8416 4.99338 12.6261 5.19067 12.3295L5.98607 11.1121V11.1118C6.06863 10.9859 6.11674 10.834 6.11674 10.6705V8.87985L7.64613 8.54424V11.7725L12.5556 10.6947L12.5557 10.6949Z"
                    fill="#666666"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_4213">
                    <rect width="13" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 h-8 rounded-full bg-[#2E27270D] flex items-center justify-center text-[12px] font-medium text-[#333333]">
              <div className="flex items-center gap-1">
                <span className="underline">(225)</span>
                <span>4.3</span>
                <img src="/star.svg" alt="star" />
              </div>
            </button>

            <button className="px-4 h-8 rounded-full bg-[#2E27270D] flex items-center justify-center">
              <img src="/share.svg" alt="share" />
            </button>

            <button className="px-4 h-8 rounded-full bg-[#2E27270D] flex items-center justify-center">
              <img src="/heart.svg" alt="heart" />
            </button>
          </div>

          <p className="text-sm text-[#666666]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>

          <div className="flex items-center gap-2">
            <div className="flex items-center h-12 border border-[#E5E7EB] bg-white rounded-full gap-4 px-4">
              <button className="cursor-pointer w-5 h-5">
                <img src="/plus.svg" alt="plus" />
              </button>

              <p className="text-lg font-medium">1</p>

              <button className="cursor-pointer">
                <img src="/minus.svg" alt="minus" />
              </button>
            </div>

            <button
              className="rounded-full flex items-center justify-center gap-2 text-white py-3 text-[16px] w-full"
              style={{ backgroundColor: colors.primary }}
            >
              إضافة للسلة
              <img src="/shopping-basket-add.svg" alt="cart" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-2 flex items-center flex-col gap-2">
              <img src="/tabby.png" alt="tamara" className="h-6" />

              <p className="text-[10px] text-[#666666]">
                قسم مشترياتك على دفعات شهرية مع أحكام الشريعة
                <span className="underline whitespace-nowrap">
                  لمعرفة المزيد
                </span>
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-2 flex items-center flex-col gap-2">
              <img src="/tamara.png" alt="tamara" className="h-6" />

              <p className="text-[10px] text-[#666666]">
                تمارا ادفع على 3 أقساط بدون اى رسوم إضافية
                <span className="underline whitespace-nowrap">
                  لمعرفة المزيد
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
