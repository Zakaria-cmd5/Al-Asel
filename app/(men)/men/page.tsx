import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";

const MenPage = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Alaseel Clothes" href="/" linkLabel="Show All" />
        <ContentSection />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-36 gap-10">
        <SideSection heading="Alaseel Clothes" href="/" linkLabel="Show All" />
        <ContentSection isVertical/>
      </div>
    </div>
  );
};

export default MenPage;
