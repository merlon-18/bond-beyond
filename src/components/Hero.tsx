import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-background/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-10" />
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-people-dancing-at-a-concert-4447/1080p.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-10">
                {/* Badge */}
                <div className="animate-fade-in-up mb-8">
                    <Badge variant="outline" className="py-2 px-4 rounded-full border-white/10 bg-white/5 backdrop-blur-sm text-primary text-[10px] tracking-[0.25em]">
                        Budapest & International
                    </Badge>
                </div>

                {/* Main Title */}
                <h1
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] mb-8 tracking-tighter uppercase text-white animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    Élmény<br />
                    <span className="gradient-text">Mesterfokon</span>
                </h1>

                {/* Subtitle */}
                <p
                    className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                >
                    Prémium rendezvénystratégia és exkluzív kivitelezés<br className="hidden md:block" /> HR vezetők és nagyvállalati partnerek részére.
                </p>

                {/* Actions */}
                <div
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    <Button asChild>
                        <Link to="/ajanlatkeres">Ajánlatkérés</Link>
                    </Button>

                    <Button variant="ghost" onClick={scrollToServices} className="text-white/80 hover:text-white">
                        Szolgáltatások
                        <ArrowDown size={16} />
                    </Button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 animate-bounce cursor-pointer z-20"
                onClick={scrollToServices}
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">Görgess</span>
            </div>
        </header>
    );
};

export default Hero;
