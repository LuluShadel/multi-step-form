
import { useRouter } from 'next/router';


import { useDispatch} from 'react-redux';

import { addon, personalinfo } from '../../redux/reducer';
import { useState } from "react";




export default function BtnFooter ({btnTextBack,btnTextNext,linkBack,linkNext,lastName,email,phone,currentPage,addonCustomize,addonOnline,addonStorage}) { 
    const dispatch = useDispatch();
    const router = useRouter();
    const [error, setError] = useState(false);

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
        if(currentPage===3){
            dispatch(addon({addonCustomize,addonOnline,addonStorage}))
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