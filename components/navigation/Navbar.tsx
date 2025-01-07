import logo from "@/public/logo/aseel-black.png";
import Image from "next/image";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navItem = [
    { href: "/men", label: "Men" },
    { href: "/youths", label: "youths" },
    { href: "/women", label: "Women" },
    { href: "/kids", label: "Kids" },
    { href: "/Women-pajamas", label: "Women's pajamas" },
    { href: "/contact-us", label: "Contact us" },
  ];

  return (
    <div className="mt-5 ml-[126px] flex items-center">
      {/* logo image */}
      <Image src={logo} alt="Logo" width={100} height={100} />

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
  );
};

export default Navbar;
