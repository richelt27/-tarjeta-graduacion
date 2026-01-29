import './index.css';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import CountdownSection from './components/CountdownSection';
import ProgramSection from './components/ProgramSection';
import LocationSection from './components/LocationSection';
import DressCodeSection from './components/DressCodeSection';

function App() {
  return (
    <div className="min-h-screen bg-white max-w-[480px] mx-auto shadow-2xl overflow-hidden relative">
      <HeroSection />

      <div className="relative z-10 bg-white rounded-t-[40px] -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <QuoteSection />
        <ProgramSection />
        <CountdownSection />
        <DressCodeSection />
        <LocationSection />
      </div>


    </div>
  );
}

export default App;
