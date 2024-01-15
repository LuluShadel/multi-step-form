import Sidebar from "@/components/sidebar"
import BtnFooter from "@/components/btnFooter"
import SelectPlan from "@/components/selectPlan"



export default function Page2() {
    return (
      <div className="flex flex-col w-full md:flex-row md:bg-white md:rounded-xl  ">
          
      <Sidebar
      pageStyle2="!text-black bg-lightBlue border-none" />
      <div>
      <SelectPlan />
      <BtnFooter 
      btnTextNext="Next step"
      btnTextBack="Go back"
      linkNext="/page2"
      linkBack="/"
      />
    </div>
    </div>
    )
  }



