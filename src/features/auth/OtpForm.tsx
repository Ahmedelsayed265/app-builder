import SubmitBtn from "@/components/shared/SubmitBtn";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";

export default function OtpForm() {
  const [code, setCode] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <form
      className="w-full mt-[32px] flex flex-col gap-5"
      onSubmit={() => navigate("/choose-store-type")}
    >
      <InputOTP
        maxLength={5}
        value={code}
        onChange={(val) => setCode(val.replace(/\D/g, ""))}
        inputMode="numeric"
        dir="ltr"
      >
        <InputOTPGroup
          className="grid grid-cols-5 gap-5 w-full justify-items-center"
          dir="ltr"
        >
          {[...Array(5)].map((_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className="h-[84px] w-full font-bold text-[16px] bg-gray-100 border-0 rounded-[12px] data-[active=true]:border-gray-300 data-[active=true]:ring-1 data-[active=true]:ring-gray-300"
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      <div className="flex items-center justify-between">
        <p className="text-sm text-[#595959]">
          {t("login.code_sent_to")} 50*******050
        </p>
        <Link to="/login" className="text-sm text-[#0089C7] underline">
          {t("login.change_number")}
        </Link>
      </div>

      <SubmitBtn text={t("login.continue")} />

      <p className="text-center text-sm text-[#595959] flex items-center justify-center gap-1">
        <span>{t("login.didnt_receive_code")}</span>

        <Link to="/verify-otp" className="text-[#0089C7] underline">
          {t("login.resend_code")}
        </Link>
      </p>
    </form>
  );
}
