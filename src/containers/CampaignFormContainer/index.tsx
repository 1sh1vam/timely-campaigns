import { useState } from 'react';
import Modal from "../../components/Modal";
import XIcon from "../../assets/x.svg";
import CampaignForm from "../../components/CampaignForm";
import { useCampaignStateContext } from "../../context/campaign";
import { CampaignT } from "../../types/campaign";
import { StatesT } from '../../types/states';

type CampaignFormContainerProps = {
  closeModal: () => void;
};

const CampaignFormContainer = ({ closeModal }: CampaignFormContainerProps) => {
  const { createCampaign } = useCampaignStateContext();
  const [campaignState, setCampaignState] = useState<StatesT>({ status: 'init' })

  const handleSaveCampaign = (campaign: Omit<CampaignT, 'id'>) => {
    try {
      setCampaignState({ status: 'pending' });
      if (!campaign.name) throw new Error('Campaign name is required');
      createCampaign(campaign);
      closeModal();
      setCampaignState({ status: 'failed' });
    } catch(err) {
      const error = err as Error;
      setCampaignState({ status: 'failed', msg: error.message });
    }
  }

  return (
    <Modal>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]">
        <div className="w-full max-w-3xl mx-auto h-full p-6 sm:py-24">
          <div className="w-full h-full bg-white rounded-3xl p-6 md:p-10 flex flex-col">
            <button
              onClick={closeModal}
              className="mb-6 w-fit p-2 rounded-full bg-[rgba(0,0,0,0.05)]"
            >
              <img src={XIcon} />
            </button>
            <CampaignForm state={campaignState} handleSubmit={handleSaveCampaign} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CampaignFormContainer;
