import NavigationTrail from "@/components/navigation/NavigationTrail";
import { PropsWithChildren } from "react";

const YouthPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NavigationTrail currentPage="Youth" />
      {children}
    </div>
  );
};

export default YouthPageLayout;
