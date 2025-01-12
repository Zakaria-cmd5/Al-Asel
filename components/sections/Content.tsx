import { DressType } from "@/types/DressType";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface Props {
  data: DressType[];
  category: string;
}

const Content = async ({ data, category }: Props) => {
  return (
    <>
      {data.map((clothe) => (
        <div
          key={clothe.id}
          className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-80"
        >
          {/* Image Section */}
          <Link href={`/${category}/${clothe.id}`} className="w-full mb-4">
            <Image
              src={clothe.image}
              alt={clothe.name || "Clothing Image"}
              width={250}
              height={300}
              className="rounded-lg object-cover w-full h-64"
            />
          </Link>

          {/* Content Section */}
          <div className="w-full">
            <Link
              href={`/${category}/${clothe.id}`}
              className="text-lg font-semibold text-gray-700 hover:text-[#a07653]"
            >
              {clothe.name}
            </Link>

            <p className="text-gray-800 font-bold text-xl mt-2">
              {clothe.price} ر.س
            </p>

            <RadioGroup className="flex mt-4 gap-3">
              {clothe.sizes?.map((s) => (
                <div key={s.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={s.name} id={`r1-${s.name}`} />
                  <Label htmlFor={`r1-${s.name}`} className="text-sm">
                    {s.name}
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
    </>
  );
};

export default Content;
