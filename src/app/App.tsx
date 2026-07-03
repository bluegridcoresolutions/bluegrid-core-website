import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import BranchesPage from '../pages/BranchesPage';
import ProcessPage from '../pages/ProcessPage';
import WhyPage from '../pages/WhyPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/why" element={<WhyPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;