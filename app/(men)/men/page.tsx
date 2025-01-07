import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";

const MenPage = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[200px_1fr] h-screen mt-20">
        <SideSection heading="Alaseel Clothes" href="/" linkLabel="Show All" />
        <ContentSection />
      </div>
    </div>
  );
};

export default MenPage;
