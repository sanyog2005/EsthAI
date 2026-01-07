import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- Import is HERE
import InteractiveGrid from './components/InteractiveGrid';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import MachineLearningPage from './pages/MachineLearningPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import BlockchainPage from './pages/BlockchainPage';
import BlockchainCaseStudyPage from './pages/BlockchainCaseStudyPage';
import AIPage from './pages/AIPage';
import AICaseStudyPage from './pages/AICaseStudyPage';
import NFTPage from './pages/NFTPage';
import NFTCaseStudyPage from './pages/NFTCaseStudyPage';



const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#020617] text-white selection:bg-purple-500/30 font-sans">
        <ScrollToTop />
        
        {/* Background */}
        <InteractiveGrid />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* 1. Navbar (Always visible) */}
          <Navbar />
          
          {/* 2. Main Content (Changes based on URL) */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/pricing" element={<PricingPage />} /> */}
              <Route path="/blockchain" element={<BlockchainPage />} /> 
              <Route path="/ml" element={<MachineLearningPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ml/case-study/:id" element={<CaseStudyDetailPage />} />
              <Route path="/blockchain/case-study/:id" element={<BlockchainCaseStudyPage />} /> {/* NEW */}
              <Route path="/ai/case-study/:id" element={<AICaseStudyPage />} /> {/* NEW */}
              <Route path="/ai" element={<AIPage />} />
              <Route path="/nft" element={<NFTPage />} />
              <Route path="/nft/case-study/:id" element={<NFTCaseStudyPage />} /> {/* NEW */}
              <Route path="*" element={<div className="text-white text-center pt-40">404 - Not Found</div>} />
            </Routes>
          </main>

          {/* 3. Footer (Always visible) */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;