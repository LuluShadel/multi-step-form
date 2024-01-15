

export default function PersonalInfo() {
    return (
        <div className="absolute top-[5.8em] w-full flex justify-center">
            <div className=" bg-white w-full ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4">
            <h1>Personal info</h1>
            <p className="text-coolGrey">Please provid your name, email, address and phone number.</p>
            <form className="flex flex-col">
                <label>Name</label>
                <input 
                type="text" 
                placeholder="e.g.Stephen King"
                className="border-coolgrey border-2 p-2"
                />
                <label>Email Address</label>
                <input 
                type="text" 
                placeholder="e.g.stephenking@lorem.com"
                className="border-coolgrey border-2 p-2"
                />
                <label>Phone Number</label>
                <input 
                type="text" 
                placeholder="e.g.+1 234 567 890"
                className="border-coolgrey border-2 p-2"
                />
            </form>
            </div>
            </div>
    )
}