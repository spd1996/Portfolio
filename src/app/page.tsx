'use client'

import Introduction from "./components/intro"
import PageContainer from "./components/pagecontainer"


export default function Home() {
  return (
    <PageContainer>
        <div className='flex flex-col gap-3'>
          <Introduction></Introduction>
        </div>
     </PageContainer>
    
  )
}
