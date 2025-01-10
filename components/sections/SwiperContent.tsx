import Swiper from "@/components/custom-ui/Swiper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MenClothesType } from "@/types/menClothesType";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

interface Props {
  data: MenClothesType[];
}

const SwiperContent = ({ data }: Props) => {
  return (
    <Swiper>
      {data.map((clothe) => (
        <div key={clothe.id} className="mb-10 mt-14">
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
  );
};

export default SwiperContent;
