
import { useRouter } from 'next/router';


import { useDispatch, useSelector} from 'react-redux';

import { personalinfo,toggle,addon } from '../../redux/reducer';
import { useState } from "react";




export default function BtnFooter ({btnTextBack,btnTextNext,linkBack,linkNext,lastName,email,phone,currentPage}) { 
    const dispatch = useDispatch();
    const router = useRouter();
    const [error, setError] = useState(false);

    //recupère le plan choisis pour vérification
    const planChoice = useSelector((state) =>state.plan.selectedPlan)


    const handleClickNext = () => {

        console.log("current page:", currentPage)
        

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
       else if(currentPage===2){
        
            if(planChoice===null) {
                
                setError(true);
                
            }else {
                setError(false);
                router.push(linkNext);
                
                
            }
        }
      else  if(currentPage===3){
            router.push(linkNext);
        }
        else  if(currentPage===4){
            router.push(linkNext);
        }
    };

    const handleClickBack = () => {

        if(currentPage===2){
                router.push(linkBack)
        }
        else if(currentPage===3){
            dispatch(toggle({ isChecked: false }));
                router.push(linkBack)
        }
        else if (currentPage===4) {
            dispatch(addon([]))
            router.push(linkBack)
        }

    }
    

    return (
        <div className="flex justify-between items-center ml-4 mr-4 mb-4">
            <a onClick={handleClickBack} className='cursor-pointer ml-4' >{btnTextBack}</a>
            {error && <p className='text-strawberryRed'>Please fill in all fields </p>}
            <a
                className="rounded p-3 text-white bg-marineBlue md:mb-10 mr-6 cursor-pointer"
                onClick={handleClickNext}
            >
                {btnTextNext}
            </a>
        </div>
    );
}