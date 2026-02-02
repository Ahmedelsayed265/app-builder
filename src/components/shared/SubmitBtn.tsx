import { LoaderCircle, Send } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type SubmitBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function SubmitBtn({
  text,
  loading = false,
  disabled = false,
  className = "",
  ...rest
}: SubmitBtnProps) {
  return (
    <button
      className={`w-full h-[48px] bg-[#0089C7] cursor-pointer text-white rounded-[8px] flex items-center justify-center gap-1 ${className}`}
      disabled={loading || disabled}
      style={{ opacity: loading || disabled ? 0.5 : 1 }}
      {...rest}
    >
      <Send className="w-5 h-5" />
      {text}
      {loading && <LoaderCircle className="animate-spin w-5 h-5" />}
    </button>
  );
}
