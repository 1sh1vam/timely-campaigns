import { useNavigate, useParams } from "react-router-dom";
import { formatTimestampToDate } from "../../utils/date";
import BackArrowIcon from "../../assets/back-arrow.svg";
import { useCampaignStateContext } from "../../context/campaign";

const CampaignDetail = () => {
  const navigate = useNavigate();
  const { campaignId } = useParams();
  const { campaigns } = useCampaignStateContext();

  const campaign = campaigns.find((camp) => camp.id === campaignId);

  return (
    <div className="h-full flex flex-col">
      <button onClick={() => navigate(-1)} className="mb-6">
        <img src={BackArrowIcon} />
      </button>
      {!campaign ? (
        <p className="text-3xl">Campaign not found</p>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <p className="text-2xl font-semibold">{campaign.name}</p>
          <p>{formatTimestampToDate(campaign.launchDate)}</p>

          <div className="mt-10">
            <p className="text-xl font-medium mb-2">Description</p>
            <p>{campaign.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetail;
