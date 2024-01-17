
export default function PersonalInfo({lastName,setName,email,setEmail,phone,setPhone}) {





const handleInputChangeInfo = (e) => {
    const { name, value } = e.target;


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
                className="border-coolgrey border-2 p-2 md:mb-4 hover:border-2 rounded hover:border-marineBlue"
                value={lastName}
               onChange={handleInputChangeInfo}
               name='lastName'
                />
                <label>Email Address</label>
                <input 
                type="email" 
                placeholder="e.g.stephenking@lorem.com"
                className="border-coolgrey border-2 p-2 md:mb-4 hover:border-2 rounded hover:border-marineBlue"
                value={email}
                onChange={handleInputChangeInfo}
               name='email'
                />
                
                <label>Phone Number</label>
                <input 
                type="tel" 
                placeholder="e.g.+1 234 567 890"
                className="border-coolgrey border-2 p-2 hover:border-2 rounded hover:border-marineBlue"
                value={phone}
                onChange={handleInputChangeInfo}
               name='phone'
               pattern="[0-9]*"
                />
            </form>
            </div>
            </div>
    )
}