import Image from "next/image";

import pic1 from "../../public/MainPictures/pic1.jpg";
import pic2 from "../../public/MainPictures/pic2.jpg";
import pic3 from "../../public/MainPictures/pic3.jpg";
import pic4 from "../../public/MainPictures/pic4.jpg";
import pic5 from "../../public/MainPictures/pic5.jpg";
import pic6 from "../../public/MainPictures/pic6.jpg";
import pic7 from "../../public/MainPictures/pic7.jpg";
import pic8 from "../../public/MainPictures/pic8.jpg";
import pic9 from "../../public/MainPictures/pic9.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex  flex-col col:1 justify-start items-center p-6">
        <Image src={pic1} alt="العرض الحالي" className="  rounded-lg " />

        <Link href={"nafl"}>
          <Image
            src={pic2}
            alt="ثياب الاصيل الشتوية"
            className="rounded-lg mt-3"
          />
        </Link>
        <Link href={"nafl"}>
          <Image
            src={pic3}
            alt="البيجامات الشتوية"
            className="rounded-lg mt-3"
          />
        </Link>
        <Link href={"nafl"}>
          <Image src={pic4} alt="ثياب الراحة" className="rounded-lg mt-3" />
        </Link>
        <Link href={"nafl"}>
          <Image src={pic5} alt="Assil's dress" className="rounded-lg mt-3" />
        </Link>
        <div className=" flex flex-row jusify-center item-start mt-3 ">
          <Link href={"nafl"}>
            <Image
              src={pic6}
              width={730}
              alt="بيجامات اصلية شتوية"
              className="rounded-lg mr-3"
            />
          </Link>
          <Link href={"nafl"}>
            <Image
              width={730}
              src={pic7}
              alt="ملابس الاصيل الداخلية"
              className="rounded-lg"
            />
          </Link>
        </div>

        <Image src={pic8} alt="خدمة تابي" className="rounded-lg mt-3" />

        <Image src={pic9} alt="خدمة تمارا" className="rounded-lg mt-3 " />
      </div>
      <div className="flex items-center my-10">
        <div className="flex-1 border-t border-black" />

        <div className="w-[290px] flex flex-row justify-between">
          <Link
            href="https://www.facebook.com/Alaseelcompanyksa"
            className="hover:text-amber-500 hover:-translate-y-2 transition-all duration-200 ease-in-out"
          >
            <FaFacebookF size={30} className="m-3" />
          </Link>
          <Link
            href="https://x.com/alaseel?mx=2"
            className="hover:text-amber-500 hover:-translate-y-2 transition-all duration-200 ease-in-out"
          >
            <FaTwitter size={30} className="m-3" />
          </Link>

          <Link
            href="https://www.snapchat.com/add/alaseel_sa"
            className="hover:text-amber-500 hover:-translate-y-2 transition-all duration-200 ease-in-out"
          >
            <FaSnapchatGhost size={30} className="m-3" />
          </Link>
          <Link
            href="https://www.instagram.com/alaseel_sa/"
            className="hover:text-amber-500 hover:-translate-y-2 transition-all duration-200 ease-in-out"
          >
            <FaInstagram size={30} className="m-3" />
          </Link>
        </div>

        <div className="flex-1 border-t border-black" />
      </div>
      <div className="flex  flex-col col:1 justify-start  items-center  ">
        <p className="text-4xl ">اشترك في نشرتنا البريدية</p>
      </div>
      <div className="flex items-center justify-center m-10 ">
        <button className="bg-black hover:bg-white hover:text-black transition duration-300 text-white px-10 py-3 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              d="M22.548 2.344a1.084 1.084 0 0 0-1.154-.14L1.704 10.123a1.084 1.084 0 0 0-.09 1.94l5.511 2.96 2.356 6.364a1.084 1.084 0 0 0 1.924.12l2.773-4.526 4.843 3.611a1.084 1.084 0 0 0 1.71-.642l3.223-16.614a1.084 1.084 0 0 0-.496-1.092zM17.537 16.82l-4.072-3.039-3.142 5.124-.97-2.619 8.184-8.362-7.568 6.265-3.706-1.992 14.274-5.725-2.99 11.348z"
              className="fill-current"
            />
          </svg>
        </button>
        <div className="flex items-center border border-black ml-1">
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className=" px-14 py-[9px] text-right focus:outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
