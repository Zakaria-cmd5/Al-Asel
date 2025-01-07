import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaSnapchatGhost,
    FaTwitter,
} from "react-icons/fa";

const SocialNav = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center p-2">
      {/* left side */}
      <div className="flex items-center text-lg gap-8 ml-[126px]">
        <Link href="https://www.facebook.com/Alaseelcompanyksa">
          <FaFacebookF />
        </Link>

        <Link href="https://x.com/alaseel?mx=2">
          <FaTwitter />
        </Link>

        <Link href="https://www.snapchat.com/add/alaseel_sa">
          <FaSnapchatGhost />
        </Link>

        <Link href="https://www.instagram.com/alaseel_sa/">
          <FaInstagram />
        </Link>
      </div>

      {/* right side */}
      <div className="flex items-center gap-8 text-xs mr-[100px]">
        <p>online@alaseel.com</p>
        <p>920010940</p>
      </div>
    </div>
  );
};

export default SocialNav;
