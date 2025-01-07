import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import manImage from "@/public/men-page/1000x1000-men-thoub.jpg";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

const ContentSection = () => {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col items-center justify-center">
        <Image src={manImage} alt="Man" />

        <div className="flex flex-col items-center justify-center mt-10">
          <Link href="/">Men Clothes</Link>

          <p className="text-red-600 font-bold text-2xl">99.9</p>

          <RadioGroup className="flex mt-2 gap-5">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="S" id="r1" />
              <Label htmlFor="r1">S</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="M" id="r2" />
              <Label htmlFor="r2">M</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="L" id="r3" />
              <Label htmlFor="r3">L</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XL" id="r3" />
              <Label htmlFor="r3">XL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XLL" id="r3" />
              <Label htmlFor="r3">XLL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XXXL" id="r3" />
              <Label htmlFor="r3">XXXL</Label>
            </div>
          </RadioGroup>

          <button className="bg-[#a07653] hover:bg-[#b16323] text-white p-2 w-full mt-5 flex items-center justify-center">
            <MdOutlineShoppingCart className="text-2xl" />
            Add to cart
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image src={manImage} alt="Man" />

        <div className="flex flex-col items-center justify-center mt-10">
          <Link href="/">Men Clothes</Link>

          <p className="text-red-600 font-bold text-2xl">99.9</p>

          <RadioGroup className="flex mt-2 gap-5">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="S" id="r1" />
              <Label htmlFor="r1">S</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="M" id="r2" />
              <Label htmlFor="r2">M</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="L" id="r3" />
              <Label htmlFor="r3">L</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XL" id="r3" />
              <Label htmlFor="r3">XL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XLL" id="r3" />
              <Label htmlFor="r3">XLL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="XXXL" id="r3" />
              <Label htmlFor="r3">XXXL</Label>
            </div>
          </RadioGroup>

          <button className="bg-[#a07653] hover:bg-[#b16323] text-white p-2 w-full mt-5 flex items-center justify-center">
            <MdOutlineShoppingCart className="text-2xl" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
