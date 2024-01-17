import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addon } from "../../redux/reducer";

export default function AddOn() {
  const dispatch = useDispatch();
  const addonState = useSelector((state) => state.plan.addon);

  const handleCheckboxChange = (addonType) => {
    dispatch(
      addon({
        ...addonState,
        [addonType]: !addonState[addonType],
      })
    );
  };

  const yearly = useSelector((state) => state.plan.toggle);

  return (
    <div className="flex justify-center bg-magnolia md:bg-white">
      <div className="relative top-[-3em] bg-white ml-4 mr-4 p-6 rounded-xl flex flex-col gap-4 md:top-0">
        <h1>Pick add-ons</h1>
        <p className="text-coolGrey">Add-ons help enhance your gaming experience.</p>
        <div
          className={`p-4 flex justify-between items-center border-2 rounded-xl gap-4 md:pl-4 hover:bg-magnolia hover:border-2 hover:border-marineBlue ${
            addonState.onlineActive ? 'bg-magnolia border-2 border-marineBlue' : ''
          }`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="online"
              checked={addonState.onlineActive}
              onChange={() => handleCheckboxChange('onlineActive')}
            />
            <div>
              <h2>Online Service</h2>
              <p className="text-coolGrey">Access to multiplayer games</p>
            </div>
          </div>
          {!yearly && <p>+$1/mo</p>}
          {yearly && <p>+$10/yr</p>}
        </div>
        <div
          className={`p-4 flex items-center justify-between border-2 rounded-xl gap-4 md:pl-4 hover:bg-magnolia hover:border-2 hover:border-marineBlue ${
            addonState.storageActive ? 'bg-magnolia border-2 border-marineBlue' : ''
          }`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="storage"
              checked={addonState.storageActive}
              onChange={() => handleCheckboxChange('storageActive')}
            />
            <div>
              <h2>Larger Storage</h2>
              <p className="text-coolGrey">Extra 1TB of cloud save</p>
            </div>
          </div>
          {!yearly && <p>+$2/mo</p>}
          {yearly && <p>+$20/yr</p>}
        </div>
        <div
          className={`p-4 flex items-center border-2 rounded-xl gap-4 md:pl-4 hover:bg-magnolia hover:border-2 hover:border-marineBlue ${
            addonState.customizeActive ? 'bg-magnolia border-2 border-marineBlue' : ''
          }`}
        >
          <input
            type="checkbox"
            name="customize"
            checked={addonState.customizeActive}
            onChange={() => handleCheckboxChange('customizeActive')}
          />
          <div>
            <h2>Customizable profile</h2>
            <p className="text-coolGrey">Custom theme on your profile</p>
          </div>
          {!yearly && <p>+$2/mo</p>}
          {yearly && <p>+$20/yr</p>}
        </div>
      </div>
    </div>
  );
}