
import { useRouter } from 'next/router';


import { useDispatch, useSelector} from 'react-redux';

import { personalinfo } from '../../redux/reducer';
import { useState } from "react";




export default function BtnFooter ({btnTextBack,btnTextNext,linkBack,linkNext,lastName,email,phone,currentPage,addonCustomize,addonOnline,addonStorage}) { 
    const dispatch = useDispatch();
    const router = useRouter();
    const [error, setError] = useState(false);

    //recupère le plan choisis pour vérification
    const planChoice = useSelector((state) =>state.plan.selectedPlan)


    const handleClick = () => {
        

            // Vérifier la page actuelle avant de mettre à jour le store ou changer de page
            if (currentPage === 1) {
                // Vérifie si les champs requis sont remplis
        if (!lastName || !email || !phone) {
            setError(true);
        } else {
            // Réinitialise l'état d'erreur 
            setError(false);
                dispatch(personalinfo({ lastName, email, phone }));
                // Utiliser la méthode push de useRouter pour naviguer vers la page suivante
                router.push(linkNext);
            }
        }
        if(currentPage===2){
            if(planChoice===null) {
                setError(true);
            }else {
                setError(false);
                router.push(linkNext);
            }
        }
        if(currentPage===3){
            router.push(linkNext);
        }
    };
    

    return (
        <div className="flex justify-between mt-4 mr-4">
            <a onClick={() => router.push(linkBack)}>{btnTextBack}</a>
            {error && <p className='text-strawberryRed'>Please fill in all fields </p>}
            <a
                className="rounded p-3 text-white bg-marineBlue md:mb-10 mr-6 "
                onClick={handleClick}
            >
                {btnTextNext}
            </a>
        </div>
    );
}