import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import AIWidget from './components/AIWidget';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import PropertyDetail from './pages/PropertyDetail';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans antialiased text-charcoal selection:bg-gold selection:text-white flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscar" element={<SearchPage />} />
            <Route path="/propiedad/:id" element={<PropertyDetail />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
          </Routes>
        </main>

        <Footer />
        <AIWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
