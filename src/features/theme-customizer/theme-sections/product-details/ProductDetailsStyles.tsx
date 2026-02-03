import { cn } from "@/lib/utils";
import { useThemeStore } from "../../appStore";
import DetailsStyleOne from "./DetailsStyleOne";
import DetailsStyleTwo from "./DetailsStyleTwo";

export default function ProductDetailsStyles() {
  const { productDetailsStyle, setProductDetailsStyle } = useThemeStore();

  const options = [
    { id: "product-details-style-one", Component: DetailsStyleOne },
    { id: "product-details-style-two", Component: DetailsStyleTwo },
  ];

  return (
    <div className="flex flex-col gap-4">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            productDetailsStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setProductDetailsStyle(id)}
        >
          <input
            type="radio"
            name="all-categories"
            id={id}
            className="hidden"
            checked={productDetailsStyle === id}
            onChange={() => setProductDetailsStyle(id)}
          />
          <Component />
        </label>
      ))}
    </div>
  );
}
