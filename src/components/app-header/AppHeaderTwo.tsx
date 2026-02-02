export default function AppHeaderTwo() {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
      <div>
        <img
          src="https://placehold.co/92x42?text=logo"
          alt="logo"
          className="rounded-[8px]"
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 16.25L20.75 20.75"
              stroke="#00344C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 9.75C18.75 4.77944 14.7206 0.75 9.75 0.75C4.77944 0.75 0.75 4.77944 0.75 9.75C0.75 14.7206 4.77944 18.75 9.75 18.75C14.7206 18.75 18.75 14.7206 18.75 9.75Z"
              stroke="#00344C"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
