import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import LocationsPreview from '../components/LocationsPreview';
import Portfolio from '../components/Portfolio';
import { Separator } from '@/components/ui/separator';

const Home = () => {
    return (
        <>
            <Hero />
            <Separator gold />
            <Stats />
            <Separator gold />
            <Services />
            <Separator gold />
            <LocationsPreview />
            <Separator gold />
            <About />
            <Separator gold />
            <Portfolio />
        </>
    );
};

export default Home;
