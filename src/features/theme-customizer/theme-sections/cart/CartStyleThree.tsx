import { useThemeStore } from "../../appStore";

export default function CartStyleThree() {
  const { colors } = useThemeStore();

  return (
    <div className="bg-white p-2 flex items-center gap-2 relative rounded-[8px]">
      <img
        src="https://placehold.co/100x100/eeeeee/31343C"
        className="w-24 h-24 object-cover rounded"
        alt="cart-product"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium">اسم المنتج</h3>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p
              className="text-[16px] flex items-center gap-1"
              style={{ color: colors.primary }}
            >
              250.00{" "}
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
            </p>

            <p className="flex items-center gap-1 text-[14px] font-medium text-[#666666]">
              <span className="line-through">270.00</span>{" "}
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
            </p>
          </div>

          <div
            className="flex items-center h-9 rounded-full gap-3 px-3 w-fit"
            style={{ backgroundColor: colors.secondary }}
          >
            <button className="cursor-pointer w-5 h-5">
              <img src="/plus.svg" alt="plus" />
            </button>

            <p className="text-lg font-medium">1</p>

            <button className="cursor-pointer">
              <img src="/minus.svg" alt="minus" />
            </button>
          </div>
        </div>
      </div>

      <button
        className="absolute top-2 left-2 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center"
        style={{ backgroundColor: colors.secondary }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.25 4.25L16.6303 14.2751C16.4719 16.8364 16.3928 18.1171 15.7508 19.0379C15.4333 19.4931 15.0247 19.8773 14.5507 20.166C13.5921 20.75 12.309 20.75 9.74274 20.75C7.17312 20.75 5.8883 20.75 4.92905 20.1649C4.4548 19.8757 4.046 19.4908 3.72868 19.0348C3.08688 18.1126 3.00945 16.8301 2.85461 14.2652L2.25 4.25"
            stroke="#FF3D41"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M0.75 4.25H18.75M13.8057 4.25L13.1231 2.84173C12.6696 1.90626 12.4428 1.43852 12.0517 1.14681C11.965 1.0821 11.8731 1.02454 11.777 0.974701C11.3439 0.75 10.8241 0.75 9.78453 0.75C8.71883 0.75 8.18598 0.75 7.74568 0.98412C7.6481 1.03601 7.55498 1.0959 7.46729 1.16317C7.07164 1.4667 6.85063 1.95155 6.40861 2.92126L5.80292 4.25"
            stroke="#FF3D41"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7.25 15.25L7.25 9.25"
            stroke="#FF3D41"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.25 15.25L12.25 9.25"
            stroke="#FF3D41"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
