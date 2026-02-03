import { useThemeStore } from "../appStore";
import DetailsStyleOne from "../theme-sections/product-details/DetailsStyleOne";
import DetailsStyleTwo from "../theme-sections/product-details/DetailsStyleTwo";

export default function ProductStylePage() {
  const { productDetailsStyle } = useThemeStore();

  return (
    <div className="p-2">
      {productDetailsStyle === "product-details-style-one" && (
        <DetailsStyleOne />
      )}
      {productDetailsStyle === "product-details-style-two" && (
        <DetailsStyleTwo />
      )}
    </div>
  );
}
