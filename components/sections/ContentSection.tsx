import { DressType } from "@/types/DressType";
import Content from "./Content";
import SwiperContent from "./SwiperContent";

interface Props {
  isVertical?: boolean;
  data: DressType[];
  category: string;
}

const ContentSection = ({ data, isVertical, category }: Props) => {
  return (
    <div
      className={`flex ${
        isVertical
          ? "flex-row flex-wrap gap-10 ml-10"
          : "flex-col gap-5 justify-center items-center"
      }`}
    >
      {data.length > 4 ? (
        <SwiperContent category={category} data={data} />
      ) : (
        <Content data={data} category={category} />
      )}
    </div>
  );
};

export default ContentSection;
