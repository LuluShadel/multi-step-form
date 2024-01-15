

import "../../public/bg-sidebar-mobile.svg"




export default function Sidebar({pageStyle1,pageStyle2,pageStyle3,pageStyle4}) {
   
  


    return (
        <div className="w-full">
        <div className="md:hidden bgMobile">
          <div className="w-full flex items-center justify-center">
         <ul className="flex gap-6 mt-8 mb-32">
         <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle1}`}>1</li>
            <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle2}`}>2</li>
            <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle3}`}>3</li>
            <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle4}`}>4</li>
         </ul>
         </div>
         </div>

         {/*ordinateur*/}
         <div className={"hidden md:block ml-10 mt-10 bgDesktop "}>
         
         <div className="absolute top-10 ml-4 mt-4 ">
         <ul className="flex flex-col gap-6 ">
         <li className="flex items-center"> 
            <p className={`rounded-full border-[1px] border-white text-white h-7 w-7 text-center ${pageStyle1}`}>1</p>
            <div className="flex flex-col ml-5">
            <p className="text-coolGrey" >Step 1</p>
            <h2 className="text-white font-bold uppercase">Your info</h2>
            </div>
            </li>
            <li className="flex items-center"> 
            <p className={`rounded-full border-[1px] border-white text-white h-7 w-7 text-center ${pageStyle2}`}>2</p>
            <div className="flex flex-col ml-5">
            <p className="text-coolGrey" >Step 2</p>
            <h2 className="text-white font-bold uppercase">Select plan</h2>
            </div>
            </li>
            <li className="flex items-center"> 
            <p className={`rounded-full border-[1px] border-white text-white h-7 w-7 text-center ${pageStyle3}`}>3</p>
            <div className="flex flex-col ml-5">
            <p className="text-coolGrey" >Step 3</p>
            <h2 className="text-white font-bold uppercase">Add-ons</h2>
            </div>
            </li>
            <li className="flex items-center"> 
            <p className={`rounded-full border-[1px] border-white text-white h-7 w-7 text-center ${pageStyle4}`}>4</p>
            <div className="flex flex-col ml-5">
            <p className="text-coolGrey" >Step 4</p>
            <h2 className="text-white font-bold uppercase">Summary</h2>
            </div>
            </li>
         </ul>
         </div>
         </div>
     
     </div>
    )
}

