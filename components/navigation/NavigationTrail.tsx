import Link from "next/link";

const NavigationTrail = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="w-full flex p-3 gap-2 mt-5 bg-slate-200 text-black text-sm">
      <Link href="/" className="hover:underline">Home</Link>
      <p>{">"}</p>
      <p>{currentPage}</p>
    </div>
  );
};

export default NavigationTrail;
