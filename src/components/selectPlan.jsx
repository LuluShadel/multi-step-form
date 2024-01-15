import arcade from "../../public/icon-arcade.svg"
import advanced from "../../public/icon-advanced.svg"
import pro from "../../public/icon-pro.svg"

import Image from "next/image"
import { motion } from "framer-motion";
import { useDispatch} from 'react-redux';
import { useState } from 'react';

import ToggleSwitch from "./toggleBtn"

import planReducer, { selectedPlan } from "../../redux/reducer";




export default function SelectPlan() {
    const dispatch = useDispatch ()

    // gère le toggle
    const [isChecked, setIsChecked] = useState(false);

    
    //gère l'envoi du plan selectionner dans le store 
    const handlePlanSelection = (plan) => {
        dispatch(selectedPlan(plan))
    };
     

    return (
        <div className="flex justify-center bg-magnolia md:bg-white">
        <div className=" relative top-[-5em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4  md:top-0 ">
        <h1>Select your plan</h1>
        <p className="text-coolGrey">You have option of monthly or yearly billing</p>
        <div className="flex flex-col gap-2 md:flex-row">
            <button 
            className="p-4 flex items-center border-2 rounded-xl gap-4 h-28 md:flex-col md:gap-8  md:w-36 md:pl-4 md:items-start md:h-44 hover:bg-magnolia hover:border-2 hover:border-marineBlue"
            onClick={() => handlePlanSelection("arcade")}
            >
                
                <Image src={arcade} alt="arcade" />
                <div className="flex flex-col items-start">
                    <h2>Arcade</h2>
                    {!isChecked && (
                    <motion.p 
                    className="text-coolGrey transition-opacity opacity-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                    >$9/mo
                    </motion.p>
                    )}
                    {isChecked && (
                        <>
                        <motion.p 
                        className="text-coolGrey"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.9 }}
                        >$90/yr</motion.p>
                        <motion.p 
                        className="text-sm"
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                        >2 months free</motion.p>
                        </>
                    )}
                </div>
            </button>
            <button 
            className="p-4 flex items-center border-2 rounded-xl gap-4 h-28 md:flex-col md:gap-8 md:w-36 md:pl-4 md:items-start md:h-44  hover:bg-magnolia hover:border-2 hover:border-marineBlue"
            onClick={() => handlePlanSelection("advanced")}
            >
                
                <Image src={advanced} alt="arcade" />
                <div className="flex flex-col items-start">
                    <h2>Advanced</h2>
                    {!isChecked && (
                    <motion.p 
                    className="text-coolGrey"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                    >$12/mo
                    </motion.p>
                    )}
                    {isChecked && (
                        <>
                        <motion.p 
                        className="text-coolGrey"
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                        >$120/yr
                        </motion.p>
                        <motion.p
                        className="text-sm"
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                        >2 months free
                        </motion.p>
                        </>
                    )}
                </div>
            </button>
            <button 
            className="p-4 flex items-center  border-2 rounded-xl gap-4 h-28 md:flex-col md:gap-8 md:w-36 md:pl-4 md:items-start md:h-44  hover:bg-magnolia hover:border-2 hover:border-marineBlue"
            onClick={() => handlePlanSelection("pro")}
            >
                
                <Image src={pro} alt="arcade" />
                <div className="flex flex-col items-start">
                    <h2>Pro</h2>
                    {!isChecked && (
                    <motion.p
                     className="text-coolGrey"
                     initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                     >$15/mo
                     </motion.p>
                    )}
                    {isChecked && (
                        <>
                        <motion.p
                         className="text-coolGrey"
                         initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                         >$150/yr
                         </motion.p>
                        <motion.p
                         className="text-sm"
                         initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                         >2 months free
                         </motion.p>
                        </>
                    )}
                </div>
            </button>

        </div>
        <ToggleSwitch 
        isChecked={isChecked}
        setIsChecked={setIsChecked}
         />
        </div>
        </div>
    )
}