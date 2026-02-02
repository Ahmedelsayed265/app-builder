import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import SubmitBtn from "@/components/shared/SubmitBtn";
import PhoneInput from "react-phone-input-2";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <form
      className="w-full mt-[32px] flex flex-col gap-4"
      onSubmit={() => navigate("/verify-otp")}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">{t("login.phone")}</label>
        <PhoneInput country={"sa"} value={""} onChange={(phone) => console.log(phone)} />
      </div>

      <p className="text-[#595959] text-[16px]">{t("login.send_code")}</p>
      <SubmitBtn text={t("login.send_code_btn")} />
    </form>
  );
}
