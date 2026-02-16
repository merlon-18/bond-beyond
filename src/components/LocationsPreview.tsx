import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const LocationsPreview = () => {
    return (
        <section className="py-28 md:py-40 bg-card">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text */}
                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Helyszínek
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                            Itt Szeretünk<br /><span className="text-stroke">Dolgozni</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                            Exkluzív kastélyok, indusztriális csarnokok vagy eldugott természeti oázisok. Ismerje meg kurátori válogatásunkat a legkülönlegesebb hazai rendezvényhelyszínekből, ahol már bizonyítottunk.
                        </p>
                        <Button variant="ghost" asChild className="text-foreground hover:text-primary">
                            <Link to="/helyszinek">
                                Helyszínválogatás <ArrowRight size={16} />
                            </Link>
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-border">
                            <img
                                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                                alt="Luxury Venue"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />

                            <div className="absolute bottom-6 left-6">
                                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm rounded-full py-2 px-4 border-white/10">
                                    <MapPin size={14} className="text-primary mr-2" />
                                    <span className="text-white text-xs font-bold uppercase tracking-wider">Budapest & Balaton</span>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsPreview;
