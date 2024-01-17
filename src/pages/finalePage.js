import Sidebar from "@/components/sidebar"
import Thanks from "@/components/Thank"





export default function FinalPage() {
    
    


    return (
        <div className="flex flex-col w-full md:flex-row md:bg-white md:rounded-xl  ">
          
      <Sidebar
      pageStyle4="!text-black bg-lightBlue border-none" />
      <div  className="md:w-[30em] md:h-[35em] md:flex md:items-center">
      
      <Thanks />
    
     
    </div>
    </div>
    )
}