import Link from "next/link";
import Image from "next/image";
import "../../public/bg-sidebar-mobile.svg"

import BgMobile from '../../public/bg-sidebar-mobile.svg';


export default function Sidebar({pageStyle1,pageStyle2,pageStyle3,pageStyle4}) {
    return (
        <div className="relative w-full">
          <Image src={BgMobile} alt="background mobile" className="w-full"/>
          <div className="bg-magnolia h-[25em]"></div>
          <div className="absolute top-6 w-full flex items-center justify-center">
         <ul className="flex gap-6 ">
         <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle1}`}>1</li>
            <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle2}`}>2</li>
            <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle3}`}>3</li>
            <li className={`rounded-full border-[1px] border-white text-white pt-0.3 pb-0.5 pl-2 pr-2 ${pageStyle4}`}>4</li>
         </ul>
         </div>
     </div>

    )
}

