import { createContext, ReactNode, useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { CampaignT } from '../types/campaign';

type CampaignContextT = {
  campaigns: CampaignT[];
  createCampaign: (campaign: Omit<CampaignT, 'id'>) => void;
}

const initialState: Omit<CampaignContextT, 'createCampaign'> = {
    campaigns: []
}

const CampaignContext = createContext(initialState as CampaignContextT);

const CampaignContextProvider = ({ children } : { children: ReactNode }) => {
    const [campaigns, setCampaigns] = useState(initialState.campaigns);

    const createCampaign = (campaign: Omit<CampaignT, 'id'>) => {
        setCampaigns((prev) => [ ...prev, { ...campaign, id: nanoid(8) } ])
    }

    return (
        <CampaignContext.Provider value={{ campaigns, createCampaign }}>
            {children}
        </CampaignContext.Provider>
    )
}

export const useCampaignStateContext = () => useContext(CampaignContext);

export default CampaignContextProvider;