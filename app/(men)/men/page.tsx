import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";
import { getAlAseelClothes } from "@/queries/getAlAseelClothes";

const MenPage = async () => {
  const menClothes = await getAlAseelClothes();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Alaseel Clothes" href="/" linkLabel="Show All" />
        <ContentSection data={menClothes} />
      </div>
    </div>
  );
};

export default MenPage;
