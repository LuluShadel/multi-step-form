import Link from "next/link";
import { useSelector } from "react-redux";




export default function Summary () {

    const yearly = useSelector((state) => state.plan.toggle);
    const plan = useSelector((state) =>state.plan.selectedPlan)
    const addon = useSelector((state) =>state.plan.addon)

    // Calcul du coût total des addons en fonction du choix annuel ou mensuel
  const totalAddonCost = addon.reduce((total, addon) => {
    return total + (yearly ? addon.price * 10 : addon.price);
  }, 0);

  // Calcul du coût total en fonction du choix annuel ou mensuel
  const totalCost = plan ? (yearly ? plan.price * 10 : plan.price) + totalAddonCost : 0;


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
            <div className="text-coolGrey text-xs ">
          {addon.map((addon, index) => (
            <div key={index} className="flex justify-between" >
              <p>{addon.name}</p>
              <p>${yearly ? addon.price*10 : addon.price}/{yearly ? "yr":"mo"}</p>
            </div>
          ))}
        </div>
                
            
      </div>
      </div>
            <div className="text-coolGrey text-xs p-4 flex justify-between">
                <p>Total {yearly ? '(per year)' : '( per month)'} </p>
                <p>${totalCost}/{yearly ? "yr":"mo"}</p>

            </div>
      </div>
    </div>
    )
}