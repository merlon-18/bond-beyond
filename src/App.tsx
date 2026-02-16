import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuoteRequest from './pages/QuoteRequest';
import ServiceDetail from './pages/ServiceDetail';
import LocationsPage from './pages/LocationsPage';

const App = () => {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full border-2 border-dark-600 border-t-primary animate-spin" />
                        <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-transparent border-b-gold-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-primary font-extrabold tracking-[0.4em] text-sm uppercase">BOND & BEYOND</span>
                        <span className="text-dark-600 text-[10px] tracking-[0.3em] uppercase">Élmény Mesterfokon</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ajanlatkeres" element={<QuoteRequest />} />
                    <Route path="/szolgaltatasok/:slug" element={<ServiceDetail />} />
                    <Route path="/helyszinek" element={<LocationsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
