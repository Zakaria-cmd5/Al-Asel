import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MenClothesType } from "@/types/menClothesType";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import Swiper from "../custom-ui/Swiper";

interface Props {
  isVertical?: boolean;
  data: MenClothesType[];
}

const ContentSection = ({ data, isVertical }: Props) => {
  return (
    <div
      className={`flex ${
        isVertical
          ? "flex-row flex-wrap gap-10 ml-10"
          : "flex-col gap-5 justify-center items-center"
      } justify-start`}
    >
      {data.length > 4 ? (
        <Swiper>
          {data.map((clothe) => (
            <div
              key={clothe.id}
              className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-80"
            >
              {/* Image Section */}
              <div className="w-full mb-4">
                <Image
                  src={clothe.image}
                  alt={clothe.name || "Clothing Image"}
                  width={250}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>

              {/* Content Section */}
              <div className="w-full">
                <Link
                  href="/"
                  className="text-lg font-semibold text-gray-700 hover:text-gray-900"
                >
                  Men Clothes
                </Link>

                <p className="text-gray-800 font-bold text-xl mt-2">
                  {clothe.price} ر.س
                </p>

                <RadioGroup className="flex mt-4 gap-3">
                  {clothe.size?.split(",").map((s) => (
                    <div key={s.trim()} className="flex items-center space-x-2">
                      <RadioGroupItem value={s.trim()} id={`r1-${s.trim()}`} />
                      <Label htmlFor={`r1-${s.trim()}`} className="text-sm">
                        {s.trim()}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <button className="bg-[#a07653] hover:bg-[#b16323] text-white p-2 w-full mt-5 flex items-center justify-center rounded-md">
                  <MdOutlineShoppingCart className="text-2xl mr-2" />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Swiper>
      ) : (
        data.map((clothe) => (
          <div
            key={clothe.id}
            className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-80"
          >
            {/* Image Section */}
            <div className="w-full mb-4">
              <Image
                src={clothe.image}
                alt={clothe.name || "Clothing Image"}
                width={250}
                height={300}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>

            {/* Content Section */}
            <div className="w-full">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                Men Clothes
              </Link>

              <p className="text-gray-800 font-bold text-xl mt-2">
                {clothe.price} ر.س
              </p>

              <RadioGroup className="flex mt-4 gap-3">
                {clothe.size?.split(",").map((s) => (
                  <div key={s.trim()} className="flex items-center space-x-2">
                    <RadioGroupItem value={s.trim()} id={`r1-${s.trim()}`} />
                    <Label htmlFor={`r1-${s.trim()}`} className="text-sm">
                      {s.trim()}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <button className="bg-[#a07653] hover:bg-[#b16323] text-white p-2 w-full mt-5 flex items-center justify-center rounded-md">
                <MdOutlineShoppingCart className="text-2xl mr-2" />
                Add to cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContentSection;
