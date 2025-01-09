import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MenClothesType } from "@/types/menClothesType";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

interface Props {
  isVertical?: boolean;
  data: MenClothesType[];
}

const ContentSection = ({ data, isVertical }: Props) => {
  return (
    <div
      className={`flex ${isVertical ? "flex-row ml-10" : "flex-col"} gap-40`}
    >
      {data?.map((clothe) => (
        <div
          key={clothe.id}
          className="flex flex-col items-center justify-center"
        >
          {/* Image Section */}
          <div
            className={`${
              isVertical
                ? "border-2 border-gray-200 p-2"
                : ""
            }`}
          >
            <Image
              src={clothe.image}
              alt="Man"
              width={isVertical ? 250 : 400}
              height={400}
              className={`${isVertical ? "rounded-lg" : ""}`}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center justify-center mt-10">
            <Link href="/">Men Clothes</Link>

            <p className="text-black font-bold text-2xl">{clothe.price} ر.س</p>

            <RadioGroup className="flex mt-2 gap-5">
              {clothe.size?.split(",").map((s) => (
                <div key={s.trim()} className="flex items-center space-x-2">
                  <RadioGroupItem value={s.trim()} id={`r1-${s.trim()}`} />
                  <Label htmlFor={`r1-${s.trim()}`}>{s.trim()}</Label>{" "}
                </div>
              ))}
            </RadioGroup>

            <button className="bg-[#a07653] hover:bg-[#b16323] text-white p-2 w-full mt-5 flex items-center justify-center">
              <MdOutlineShoppingCart className="text-2xl" />
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
