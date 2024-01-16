import { useState } from "react";



export default function AddOn () {

    const [onlineActive,setOnlineActive] = useState(false)
    const [storageActive,setStorageActive]= useState(false)
    const [customizeActive,setCustomizeActive] = useState(false)


    return(
        <div className="flex justify-center bg-magnolia md:bg-white">
        <div className=" relative top-[-3em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4  md:top-0 ">
        <h1>Pick add-ons</h1>
        <p className="text-coolGrey">Add-ons help enchance your gaming experience.</p>
       <div className={`p-4 flex justify-between items-center border-2 rounded-xl gap-4    md:pl-4  hover:bg-magnolia hover:border-2 hover:border-marineBlue ${onlineActive ? 'bg-magnolia border-2 border-marineBlue ' : ''}`}>
       <div className="flex items-center gap-4">
        <input 
        type="checkbox"
        onClick={() => {
            setOnlineActive(!onlineActive)
            
         }}
        />
            <div>
            <h2>Online Service</h2>
            <p>Acces ti multiplayer games</p>
            </div>
            </div>
        <p>+$1/mo</p>
       </div>
       <div className={`p-4 flex items-center justify-between border-2 rounded-xl gap-4    md:pl-4  hover:bg-magnolia hover:border-2 hover:border-marineBlue ${storageActive ? 'bg-magnolia border-2 border-marineBlue ' : ''}`}>
       <div className="flex items-center gap-4">
        <input 
        type="checkbox"
        onClick={() => {
            setStorageActive(!storageActive)
         }}
        />
        <div>
            <h2>Larger Storage</h2>
            <p>Extra 1TB of cloud save</p>
        </div>
        </div>
        <p>+$2/mo</p>
       </div>
       <div className={`p-4 flex items-center border-2 rounded-xl gap-4 md:pl-4  hover:bg-magnolia hover:border-2 hover:border-marineBlue ${customizeActive ? 'bg-magnolia border-2 border-marineBlue ' : ''}`}>
        <input 
        type="checkbox"
        onClick={() => {
            setCustomizeActive(!customizeActive)
         }}
        />
        <div>
            <h2>Customizable profile</h2>
            <p>Custom theme on your profile</p>
        </div>
        <p>+$2/mo</p>
       </div>
        </div>
        </div>
        
    )
}