import BtnFooter from "@/components/btnFooter";

import { useState } from "react";

import Sidebar from "@/components/sidebar"
import PersonalInfo from "@/components/PersonalInfo"




export default function Page() {
  const [lastName,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  
    return(
        <div className="flex flex-col w-full md:flex-row md:bg-white md:rounded-xl  ">
          
          <Sidebar
          pageStyle1="!text-black bg-lightBlue border-none" />
         <div  className="md:w-[30em] md:h-[35em]">
          < PersonalInfo
          lastName={lastName}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
         
          />

      <BtnFooter
        btnTextNext="Next step"
        linkNext="/page2"
        linkBack="/"
        phone={phone}
        email={email}
        lastName={lastName}
        currentPage={1}
      />    
          
        </div>
        </div>
    )
  }