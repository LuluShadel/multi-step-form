import Sidebar from "@/components/sidebar"
import BtnFooter from "@/components/btnFooter"
import AddOn from "@/components/Add-ons"



export default function Page3() {
    
    


    return (
        <div className="flex flex-col w-full md:flex-row md:bg-white md:rounded-xl  ">
          
      <Sidebar
      pageStyle3="!text-black bg-lightBlue border-none" />
      <div  className="md:w-[30em] md:h-[35em]">
      
    <AddOn
     />

      <BtnFooter 
      btnTextNext="Next step"
      btnTextBack="Go back"
      linkNext="/page4"
      linkBack="/page2"
      currentPage={3}
      />
    </div>
    </div>
    )
}