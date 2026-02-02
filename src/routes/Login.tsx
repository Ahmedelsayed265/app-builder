import { useTranslation } from "react-i18next";
import LoginForm from "@/features/auth/LoginForm";

export default function Login() {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex items-center bg-[#FAFAFA]">
      <div className="flex-1">
        <div className="flex flex-col items-center w-[600px] mx-auto">
          <div className="h-16 w-16 bg-[linear-gradient(180deg,#005880_0%,#1BB1FF_100%)] rounded-[12px] flex items-center justify-center mb-6">
            <img src="/store.svg" alt="store" />
          </div>
          <h1 className="text-4xl font-bold text-[#1A0F04] mb-4 text-[24px]">
            {t("login.form_title")}
          </h1>
          <p className="text-[#595959] text-[16px]">
            {t("login.form_description")}
          </p>

          <LoginForm />
        </div>
      </div>

      <div className="flex-1 h-full bg-[#0089C7] flex items-center justify-center flex-col">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-[linear-gradient(180deg,#005880_0%,#1BB1FF_100%)] rounded-[12px] flex items-center justify-center mb-6">
            <img src="/store.svg" alt="store" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 text-[24px]">
            {t("login.title")}
          </h1>
          <p className="text-white text-[16px]">{t("login.description")}</p>
        </div>
      </div>
    </section>
  );
}
