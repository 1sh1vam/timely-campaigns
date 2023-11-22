import React, { useState } from "react";
import { CampaignT } from "../types/campaign";
import { StatesT } from "../types/states";

type CampaignFormProps = {
  state?: StatesT;
  handleSubmit?: (campaign: Omit<CampaignT, 'id'>) => void;
};

const CampaignForm = ({ state, handleSubmit }: CampaignFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setDate(new Date(e.target.value));
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (handleSubmit) handleSubmit({name, description, launchDate: date.getTime()});
  };

  return (
    <div className="flex-1 flex flex-col justify-between overflow-y-auto p-3">
      <div className="flex flex-col gap-10">
        <input
          type="text"
          className="px-4 py-3 outline-none border border-gray-400 rounded-lg focus:outline focus:outline-gray-400"
          placeholder="Enter the campaign name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="px-4 py-3 outline-none border border-gray-400 rounded-lg focus:outline focus:outline-gray-400"
          value={date.toISOString().split("T")[0]}
          onChange={handleDateChange}
        />
        <textarea
          className="px-4 py-3 outline-none border border-gray-400 rounded-lg focus:outline focus:outline-gray-400 max-h-52 overflow-y-auto"
          placeholder="Enter the campaign description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {state?.status === 'failed' ? <p className="text-sm text-red-500">{state.msg!}</p> : null}
      </div>
      <button
        onClick={handleSave}
        className="bg-none hover:bg-gray-500 hover:text-white px-6 py-4"
      >
        Save
      </button>
    </div>
  );
};

export default CampaignForm;
