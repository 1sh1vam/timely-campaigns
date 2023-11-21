import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Campaigns from './containers/Campaigns';
import CampaignDetail from './containers/CampaignDetail';
import CampaignContextProvider from './context/campaign';

function App() {
  return (
    <CampaignContextProvider>
      <div className="h-full max-w-3xl mx-auto p-6">
        <Router>
          <Routes>
            <Route path='/' element={<Campaigns />} />
            <Route path='/:campaignId' element={<CampaignDetail />} />
          </Routes>
        </Router>
      </div>
    </CampaignContextProvider>
  )
}

export default App
