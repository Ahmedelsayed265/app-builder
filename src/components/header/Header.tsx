import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="flex items-center py-4 px-10 border-b border-[#E5E7EB]">
      <div className="flex-1 flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center bg-[linear-gradient(180deg,#005880_0%,#1BB1FF_100%)] rounded-full">
          <img src="/store.svg" alt="store" className="h-6 w-6" />
        </div>
        <h6 className="text-[#1A0F04] text-[20px] font-medium">محرر المتجر</h6>
        <span className="h-6 w-px bg-[#E5E7EB]"></span>
        <p className="text-[#595959] text-[16px]">متجر إلكترونيات</p>
      </div>

      <div className="flex-3 flex items-center justify-center gap-6">
        <Link to="/terms-conditions" className="text-[#595959] text-[16px]">
          {t("header.terms_conditions")}
        </Link>
        <Link to="/about" className="text-[#595959] text-[16px]">
          {t("header.about")}
        </Link>
        <Link to="/contact" className="text-[#595959] text-[16px]">
          {t("header.contact")}
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center md:gap-3 gap-1 cursor-pointer borderpe-[8px] p-1">
              <img
                src="/user.jpg"
                alt="user"
                className="md:w-9 md:h-9 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h6 className="text-[#454545] text-[14px] font-bold truncate md:max-w-max max-w-[100px] ">
                  أهلا شلبى
                </h6>
              </div>

              <img src="/arrow-down.svg" alt="" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[200px] flex flex-col gap-1 p-3">
            <DropdownMenuRadioItem
              value="profile"
              className="ps-4 flex gap-2 items-center cursor-pointer"
            >
              <img src="/user-circle.svg" alt="" /> {t("header.profile")}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              value="profile"
              className="ps-4 flex gap-2 items-center cursor-pointer"
            >
              <img src="/setting.svg" alt="" /> {t("header.setting")}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              value="logout"
              onClick={() => navigate("/login")}
              className="ps-4 flex gap-2 items-center cursor-pointer bg-[#FFEBEB] text-[#FF3B30] hover:bg-[#FFEBEB] hover:text-[#FF3B30]"
            >
              <img src="/logout.svg" alt="" /> {t("header.logout")}
            </DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
