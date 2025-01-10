import { MenClothesType } from "@/types/menClothesType";
import Content from "./Content";
import SwiperContent from "./SwiperContent";

interface Props {
  isVertical?: boolean;
  data: MenClothesType[];
}

const ContentSection = ({ data, isVertical }: Props) => {
  return (
    <div
      className={`flex ${
        isVertical
          ? "flex-row flex-wrap gap-10 ml-10"
          : "flex-col gap-5 justify-center items-center"
      }`}
    >
      {data.length > 4 ? (
        <SwiperContent data={data} />
      ) : (
        <Content data={data} />
      )}
    </div>
  );
};

export default ContentSection;
