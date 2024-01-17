import Link from "next/link";
import { useSelector } from "react-redux";




export default function Summary () {

    const yearly = useSelector((state) => state.plan.toggle);
    const plan = useSelector((state) =>state.plan.selectedPlan)

    console.log(plan)


    return (
        <div className="flex justify-center bg-magnolia md:bg-white">
      <div className="relative top-[-3em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4 md:top-0">
        <h1>Finishing up</h1>
        <p className="text-coolGrey">Double-check everything looks OK before confirming.</p>
    
        <div className="bg-magnolia rounded p-4 ">
           <div className="flex justify-between border-b-2 border-lightGrey mb-4">
            <div className="mb-4">
            <h2>{plan.name}{yearly ? '(Yearly)' : '(Monthly)'}</h2>
            <Link href="/page2" className="text-coolGrey underline text-xs">Change</Link>
            </div>
            <p>${yearly ? plan.price*10 : plan.price}/{yearly ? "yr":"mo"}</p>
            </div>
            <div>
                <div className="text-coolGrey text-xs flex justify-between ">
                    <p>Online Service</p>
                    <p>+1$/mo</p>
                </div>
                <div className="text-coolGrey text-xs flex justify-between ">
                    <p>Larger storage</p>
                    <p>+1$/mo</p>
                </div>
                <div className="text-coolGrey text-xs flex justify-between ">
                    <p>Customizable profile</p>
                    <p>+1$/mo</p>
                </div>
            </div>
      </div>
      </div>
    </div>
    )
}