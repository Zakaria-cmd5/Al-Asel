import NavigationTrail from "@/components/navigation/NavigationTrail"
import { PropsWithChildren } from "react"

const KidPageLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <NavigationTrail currentPage="Kids Page"/>
        {children}
    </div>
  )
}

export default KidPageLayout