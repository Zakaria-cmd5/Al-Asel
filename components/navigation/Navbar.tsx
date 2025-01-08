import logo from "@/public/logo/aseel-black.png";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiMenuKebab, CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import Spinner from "../loading/Spinner";

const Navbar = () => {
  const navItem = [
    { href: "/men", label: "Men" },
    { href: "/youths", label: "youths" },
    { href: "/women", label: "Women" },
    { href: "/kids", label: "Kids" },
    { href: "/Women-pajamas", label: "Women's pajamas" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <div className="flex flex-col">
      {/* the logo and nav items */}
      <div className="mt-1 ml-[126px] flex items-center">
        {/* logo image */}
        <Image
          src={logo}
          alt="Logo"
          width={110}
          height={110}
          className="relative top-4"
        />

        <div className="flex items-center gap-8 font-bold">
          {/* home item */}
          <Link href="/" className="flex gap-1 items-center ml-20">
            <FaHome />
            <p>Home</p>
          </Link>

          {/* the rest of items */}
          <ul className="flex items-center gap-8">
            {navItem.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber-800 transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* the menu item */}
          <CiMenuKebab className="text-4xl rotate-90 ml-10" />
        </div>
      </div>

      {/* the searchbar and the signup/signin */}
      <div className="ml-[310px] flex items-center space-x-4">
        {/* the searchbar */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black border-2 border-black w-[800px] text-lg ps-10 px-2.5 py-0.5 focus:outline-none"
          />
        </div>

        {/* signup and the cart */}
        <div className="flex items-center space-x-4 gap-5">
          {/* if we are loading render a spinner */}
          <ClerkLoading>
            <Spinner />
          </ClerkLoading>

          {/* if we are loaded render the auth */}
          <ClerkLoaded>
            {/* if we are SignedIn render the user information */}
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* if we signed out render the signin/signup */}
            <SignedOut>
              <Link href="/sign-up" className="flex items-center gap-1 ml-10">
                <GoPerson className="text-2xl" />
                Signup / Signin
              </Link>
            </SignedOut>
          </ClerkLoaded>

          {/* render the cart and favorite buttons */}
          <MdOutlineShoppingCart className="text-2xl" />
          <CiHeart className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
