
import { useDispatch, useSelector } from "react-redux";
import { addon } from "../../redux/reducer";
import { useState } from "react";

export default function AddOn() {
  const dispatch = useDispatch();

  const yearly = useSelector((state) => state.plan.toggle.isChecked);
 

  const handleAddonSelection = (name, price, isActive, setActive) => {
    const addonInfo = { name, price, active: !isActive };

    // Dispatch de l'action avec les informations de l'addon
    dispatch(addon(addonInfo));

    // Inverse l'état actif (coché/décoché)
    setActive(!isActive);
  };

  const createCheckbox = (name, description, isActive, setActive, cost) => (
    <div
      key={name}
      className={`p-4 flex items-center justify-between border-2 rounded-xl gap-4 md:pl-4 hover:bg-magnolia hover:border-2 hover:border-marineBlue ${
        isActive ? 'bg-magnolia border-2 border-marineBlue' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name={name}
          checked={isActive}
          onChange={() => handleAddonSelection(name, cost, isActive, setActive)}
        />
        <div>
          <h2>{description}</h2>
          <p className="text-coolGrey">{description}</p>
        </div>
      </div>
      {!yearly && <p>+${cost}/mo</p>}
      {yearly && <p>+${cost * 10}/yr</p>}
    </div>
  );

  const [onlineActive, setOnlineActive] = useState(false);
  const [storageActive, setStorageActive] = useState(false);
  const [customizeActive, setCustomizeActive] = useState(false);

  

  return (
    <div className="flex justify-center bg-magnolia md:bg-white">
      <div className="relative top-[-3em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4 md:top-0">
        <h1>Pick add-ons</h1>
        <p className="text-coolGrey">Add-ons help enhance your gaming experience.</p>

        {createCheckbox("Online service", "Online Service", onlineActive, setOnlineActive, 1)}
        {createCheckbox("Larger storage", "Larger Storage", storageActive, setStorageActive, 2)}
        {createCheckbox("Customizable profile", "Customizable profile", customizeActive, setCustomizeActive, 2)}
      </div>
    </div>
  );
}