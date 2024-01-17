

import Sidebar from "@/components/sidebar"
import BtnFooter from "@/components/btnFooter"
import Summary from "@/components/Summary"




export default function Page4() {
    
    


    return (
        <div className="flex flex-col w-full md:flex-row md:bg-white md:rounded-xl  ">
          
      <Sidebar
      pageStyle4="!text-black bg-lightBlue border-none" />
      <div  className="md:w-[30em]">
      
    <Summary />
      <BtnFooter 
      btnTextNext="Confirm"
      btnTextBack="Go back"
      linkNext="/finalePage"
      linkBack="/page3"
      currentPage={4}
      />
    </div>
    </div>
    )
}