import NavigationTrail from "@/components/navigation/NavigationTrail";
import { PropsWithChildren } from "react";

const WomenPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NavigationTrail currentPage="Women page" />
      {children}
    </div>
  );
};

export default WomenPageLayout;
