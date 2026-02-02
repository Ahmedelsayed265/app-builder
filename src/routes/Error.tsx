import { Link, useRouteError, isRouteErrorResponse } from "react-router";

export default function Error() {
  const error = useRouteError();

  const getErrorDetails = () => {
    if (isRouteErrorResponse(error)) {
      return {
        status: error.status,
        title: error.status === 404 ? "Page Not Found" : "Application Error",
        message:
          error.status === 404
            ? "Sorry, the page you are looking for does not exist."
            : "An unexpected application error has occurred. Please try again later.",
      };
    }

    if (error instanceof Error) {
      return {
        status: 500,
        title: "Application Error",
        message:
          "An unexpected application error has occurred. Please try again later.",
      };
    }

    return {
      status: 500,
      title: "Unexpected Error",
      message:
        "Something went wrong. Please refresh the page or try again later.",
    };
  };

  const { status, title, message } = getErrorDetails();

  return (
    <>
      <title>
        {status === 500 ? "500 Application Error" : "404 Page Not  Found"}
      </title>

      <div className="bg-white h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 66 66"
          >
            <g>
              <path
                d="M25.26 12.05c.54 0 .98-.44.98-.98s-.44-.98-.98-.98c-5.77 0-10.46 4.67-10.46 10.4 0 .54.44.98.98.98s.98-.44.98-.98c0-4.65 3.81-8.44 8.5-8.44zM33 26.82c-9.1 0-16.5 7.4-16.5 16.5s7.4 16.5 16.5 16.5 16.5-7.4 16.5-16.5-7.4-16.5-16.5-16.5zm0 31.04c-8.02 0-14.54-6.52-14.54-14.54S24.98 28.78 33 28.78s14.54 6.52 14.54 14.54S41.02 57.86 33 57.86z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
              <path
                d="M27.97 44.5h-.84v-4.81c0-.25-.08-.45-.24-.62s-.37-.25-.63-.25h-.25c-.15 0-.29.03-.42.1-.13.06-.24.15-.32.26l-4 5.1c-.12.15-.18.33-.18.54v.11c0 .24.09.44.26.61.17.16.37.25.61.25h3.75v1.6c0 .2.07.36.2.5.14.14.3.2.5.2.19 0 .36-.07.5-.2s.21-.3.21-.5v-1.6h.84c.18 0 .33-.06.46-.18s.19-.28.19-.46-.06-.33-.19-.46a.568.568 0 0 0-.45-.19zm-2.25 0h-2.99l2.99-3.86zM32.9 38.76c-1.16 0-2.06.43-2.67 1.29-.6.84-.91 1.99-.91 3.41s.31 2.57.91 3.41c.61.85 1.51 1.29 2.67 1.29 1.15 0 2.05-.43 2.66-1.29.61-.84.92-1.99.92-3.41s-.31-2.57-.92-3.41c-.61-.86-1.51-1.29-2.66-1.29zm1.59 7.2c-.37.59-.89.87-1.59.87s-1.22-.28-1.59-.87c-.38-.6-.57-1.44-.57-2.5s.19-1.89.57-2.49c.37-.59.89-.87 1.59-.87s1.22.28 1.59.87c.38.6.57 1.43.57 2.49s-.19 1.9-.57 2.5zM43.13 39.69c0-.25-.08-.45-.24-.62s-.37-.25-.63-.25H42c-.15 0-.29.03-.42.1-.13.06-.24.15-.32.26l-4 5.1c-.12.15-.18.33-.18.54v.11c0 .24.09.44.26.61.17.16.37.25.61.25h3.75v1.6c0 .2.07.36.2.5.14.14.3.2.5.2.19 0 .36-.07.5-.2s.21-.3.21-.5v-1.6h.84c.18 0 .33-.06.46-.18s.19-.28.19-.46-.06-.33-.19-.46-.28-.19-.46-.19h-.84v-4.81zm-1.42 4.81h-2.99l2.99-3.86z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
              <path
                d="M54.71 23.24c-.34-5.45-4.88-9.78-10.41-9.78-2.04 0-4.03.6-5.72 1.71-2.17-5.35-7.46-8.99-13.32-8.99-7.7 0-14.01 6.09-14.35 13.71-5.53 1.28-9.46 6.18-9.46 11.94 0 6.68 5.44 12.18 12.12 12.25h.01c.53 0 .97-.43.98-.97s-.43-.98-.97-.99C7.98 42.07 3.4 37.45 3.4 31.83c0-5.07 3.63-9.35 8.63-10.17.47-.08.82-.64.82-1.11 0-6.85 5.57-12.41 12.41-12.41 5.46 0 10.36 3.66 11.9 8.89.09.32.34.57.66.66s.66.02.91-.2a8.455 8.455 0 0 1 5.55-2.08c4.68 0 8.48 3.8 8.48 8.48l-.01.28c-.01.27.09.54.29.73.19.19.45.3.73.28.11 0 .22-.01.33-.01 4.68 0 8.48 3.8 8.48 8.48s-3.8 8.48-8.48 8.48h-1.69c-.54 0-.98.44-.98.98s.44.98.98.98h1.69c5.75 0 10.43-4.68 10.43-10.43.02-5.56-4.34-10.11-9.82-10.42z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
            </g>
          </svg>

          <h1 className="text-3xl font-bold text-[#101828] mb-3">
            Oops! {title} ({status})
          </h1>

          <p className="text-sm text-gray-600 mb-4">{message}</p>

          <Link
            to="/"
            className="btn_basic bg-[#101828] rounded-full shadow-md px-8 py-2 text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
