import Link from "next/link";

interface Props {
  heading: string;
  linkLabel: string;
  href: string;
}

const SideSection = ({ heading, linkLabel, href }: Props) => {
  return (
    <div className="bg-[#a07653] w-[200px] flex justify-center pt-4">
      <div className="flex flex-col text-white">
        <h2 className="font-bold">{heading}</h2>
        <Link href={href} className="hover:underline">
          {linkLabel}
        </Link>
      </div>
    </div>
  );
};

export default SideSection;
