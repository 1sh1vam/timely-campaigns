import { formatTimestampToDate } from '../utils/date';

type CapmpaingPropsT = {
  id: string;
  name: string;
  date: number;
  handlePress: (id: string) => void;
}

const CampaignCard = ({ id, name, date, handlePress }: CapmpaingPropsT) => {

  return (
    <div onClick={() => handlePress(id)} className="w-full px-4 py-3 bg-[#EBEBFB] shadow-sm cursor-pointer rounded-lg">
        <p className="text-2xl font-semibold mb-4">{name}</p>
        <p className="text-sm">Launch Date: {formatTimestampToDate(date)}</p>
    </div>
  )
}

export default CampaignCard