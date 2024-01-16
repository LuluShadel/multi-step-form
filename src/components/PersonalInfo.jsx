import { useDispatch} from 'react-redux';

import { personalinfo } from '../../redux/reducer';
import { useState } from 'react';

export default function PersonalInfo() {
const [lastName,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")


const dispatch = useDispatch ()



const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone' && !/^[0-9]*$/.test(value)) {
        // Si la valeur contient des caractères non numériques, ne pas placer dans le store
        return;
      }
      

    

    switch (name) {
        case 'lastName':
          setName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'phone':
          setPhone(value);
          break;
        default:
          break;
      }
      dispatch(personalinfo({ lastName, email, phone }))
    }



    

    



    return (
        <div className="flex justify-center bg-magnolia md:bg-white">
            <div className=" relative top-[-5em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4  md:top-0 ">
            <h1>Personal info</h1>
            <p className="text-coolGrey">Please provid your name, email, address and phone number.</p>
            <form className="flex flex-col">
                <label>Name</label>
                <input 
                type="text" 
                placeholder="e.g.Stephen King"
                className="border-coolgrey border-2 p-2 md:mb-4"
                value={lastName}
               onChange={handleInputChange}
               name='lastName'
                />
                <label>Email Address</label>
                <input 
                type="email" 
                placeholder="e.g.stephenking@lorem.com"
                className="border-coolgrey border-2 p-2 md:mb-4"
                value={email}
               onChange={handleInputChange}
               name='email'
                />
                
                <label>Phone Number</label>
                <input 
                type="tel" 
                placeholder="e.g.+1 234 567 890"
                className="border-coolgrey border-2 p-2"
                value={phone}
               onChange={handleInputChange}
               name='phone'
               pattern="[0-9]*"
                />
            </form>
            </div>
            </div>
    )
}