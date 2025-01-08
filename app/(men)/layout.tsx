import NavigationTrail from '@/components/navigation/NavigationTrail'
import { PropsWithChildren } from 'react'

const MenPageLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <NavigationTrail currentPage='Men Page'/>
        {children}
    </div>
  )
}

export default MenPageLayout