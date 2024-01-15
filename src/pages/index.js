import Sidebar from "@/components/sidebar"
import PersonalInfo from "@/components/PersonalInfo"
import BtnFooter from "@/components/btnFooter"

export default function Page() {
    return(
        <div className="flex flex-col w-full md:flex-row md:bg-white md:rounded-xl  ">
          
          <Sidebar
          pageStyle1="!text-black bg-lightBlue border-none" />
          <div>
          < PersonalInfo />
          <BtnFooter 
          btnTextNext="Next step"
          linkNext="/page2"
          linkBack="/"
          />
        </div>
        </div>
    )
  }