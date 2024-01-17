import Image from "next/image"
import advanced from "../../public/icon-advanced.svg"



export default function Thanks () {
    return (
        <div className="flex justify-center items-center bg-magnolia md:bg-white">
      <div className="relative top-[-3em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col items-center gap-4 md:top-0 ">
        <Image src={advanced} alt="advanced" />
        <h1>Thank you!</h1>
        <p className="text-coolGrey text-center">Thanks for confirming your subscription ! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@leremgaming.com.</p>
    
        
      </div>
    </div>
    )
}