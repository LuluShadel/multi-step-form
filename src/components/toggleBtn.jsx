

export default function ToggleSwitch({isChecked,setIsChecked}) {
  

  const subscriptionType = isChecked ? 'Monthly' : 'Yearly';

  return (
    <div className="flex bg-magnolia rounded p-4 justify-center">
        <p className={`mr-6 ${isChecked ? "text-coolGrey": ""}`}>monthly</p>
      <label className="flex items-center cursor-pointer">
        <div className="relative w-10 h-5 bg-marineBlue rounded-3xl">
          <div className={` w-5 h-5 rounded-full bg-white shadow-md transform ${isChecked ? 'translate-x-full' : 'translate-x-0'}`} />
        </div>
        
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        
      </label>
    <p className={`ml-6 ${isChecked ? "": "text-coolGrey"}`}>yearly</p>
      
    </div>
  );
}