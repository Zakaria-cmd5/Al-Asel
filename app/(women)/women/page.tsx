import image1 from "@/public/women-page/women-page-1.jpg";
import image2 from "@/public/women-page/women-page-2.jpg";
import image3 from "@/public/women-page/women-page-3.jpg";
import Image from "next/image";

const WomenPage = async () => {
  return (
    <div className="mt-10 flex flex-col gap-10 mb-5">
      <Image src={image1} alt="Women Image" className="w-[75%] mx-auto" />

      {/* <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Girl age (1-8 years)"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection data={youngGirl} />
      </div> */}

      <Image src={image2} alt="Women Image" className="w-[75%] mx-auto mt-5" />

      {/* <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Girl age (9-16 years)"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection data={girl} />
      </div> */}

      <Image src={image3} alt="Women Image" className="w-[75%] mx-auto mt-5" />

      {/* <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Women" href="/" linkLabel="Show All" />
        <ContentSection data={women} />
      </div> */}
    </div>
  );
};

export default WomenPage;
