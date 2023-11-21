import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CampaignCard from "../../components/CampaignCard";
import CampaignFormContainer from "../CampaignFormContainer";
import { useCampaignStateContext } from "../../context/campaign";

const Campaigns = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { campaigns } = useCampaignStateContext();

  return (
    <div className="w-full h-full flex flex-col justify-between gap-4">
      <div className="grid sm:grid-cols-2 gap-4 overflow-y-auto">
        {campaigns.map((campaign) => (
          <CampaignCard
            id={campaign.id}
            name={campaign.name}
            date={campaign.launchDate}
            handlePress={(id) => navigate(id)}
          />
        ))}
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-none text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-4"
      >
        Add Campaign
      </button>
      {showModal ? (
        <CampaignFormContainer closeModal={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default Campaigns;
