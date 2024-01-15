import arcade from "../../public/icon-arcade.svg"
import advanced from "../../public/icon-advanced.svg"
import pro from "../../public/icon-pro.svg"
import Image from "next/image"


export default function SelectPlan() {
    return (
        <div className="flex justify-center bg-magnolia md:bg-white">
        <div className=" relative top-[-5em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4  md:top-0 ">
        <h1>Select your plan</h1>
        <p className="text-coolGrey">You have option of monthly or yearly billing</p>
        <div className="flex flex-col gap-2 md:flex-row">
            <button className="p-4 flex items-center border-2 rounded-xl gap-4 md:flex-col md:gap-8  md:w-36 md:pl-4 md:items-start">
                
                <Image src={arcade} alt="arcade" />
                <div>
                    <h2>Arcade</h2>
                    <p className="text-coolGrey">$9/mo</p>
                </div>
            </button>
            <button className="p-4 flex items-center border-2 rounded-xl gap-4 md:flex-col md:gap-8 md:w-36 md:pl-4 md:items-start ">
                
                <Image src={advanced} alt="arcade" />
                <div>
                    <h2>Advanced</h2>
                    <p className="text-coolGrey">$12/mo</p>
                </div>
            </button>
            <button className="p-4 flex items-center  border-2 rounded-xl gap-4 md:flex-col md:gap-8 md:w-36 md:pl-4 md:items-start ">
                
                <Image src={pro} alt="arcade" />
                <div>
                    <h2>Pro</h2>
                    <p className="text-coolGrey">$15/mo</p>
                </div>
            </button>

        </div>
        </div>
        </div>
    )
}