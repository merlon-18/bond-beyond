import { MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const locations = [
    {
        name: 'Botaniq Turai Kastély',
        type: 'Exkluzív Kastélyszálló',
        capacity: '120 fő',
        image: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2000&auto=format&fit=crop',
        description: 'Történelmi elegancia és modern luxus találkozása Pest megye szívében.',
    },
    {
        name: 'Millenáris Park',
        type: 'Indusztriális Rendezvénytér',
        capacity: '800 fő',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
        description: 'Budapest legsokoldalúbb rendezvényhelyszíne, a kreativitás otthona.',
    },
    {
        name: 'Kiscelli Múzeum',
        type: 'Történelmi Helyszín',
        capacity: '250 fő',
        image: 'https://images.unsplash.com/photo-1582037928769-181f242afcf8?q=80&w=2000&auto=format&fit=crop',
        description: 'Lélegzetelállító panoráma és évszázados falak, ahol a történelem életre kel.',
    },
    {
        name: 'High Note SkyBar',
        type: 'Rooftop Panoráma',
        capacity: '80 fő',
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2000&auto=format&fit=crop',
        description: 'Budapest legszebb kilátása, prémium koktélokkal és exkluzív hangulattal.',
    },
    {
        name: 'Off-Road Center',
        type: 'Outdoor Kalandpark',
        capacity: '300 fő',
        image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2000&auto=format&fit=crop',
        description: 'Adrenalin és csapatépítés a természetben, igazi kalandprogramokkal.',
    },
    {
        name: 'Floating Boat Budapest',
        type: 'Dunai Rendezvényhajó',
        capacity: '150 fő',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop',
        description: 'Egyedülálló rendezvény a vízen, Budapest ikonikus panorámájával.',
    },
];

const LocationsPage = () => {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                    alt="Venues"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                            Válogatott Helyszínek
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight">
                            Itt Szeretünk <span className="gradient-text">Dolgozni</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Intro text */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    A tökéletes rendezvény alapja a tökéletes helyszín. Ismerje meg kedvenc tereinket,
                    melyek már bizonyították, hogy képesek varázslatos atmoszférát teremteni.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, idx) => (
                        <Card
                            key={idx}
                            className="group overflow-hidden hover:border-primary/20 p-0"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                            </div>
                            <CardContent className="p-6 md:p-7">
                                <Badge variant="gold" className="mb-2 tracking-[0.2em]">
                                    {loc.type}
                                </Badge>
                                <h3 className="text-foreground font-black text-xl mb-3">{loc.name}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{loc.description}</p>
                                <div className="flex justify-between items-center pt-5 border-t border-border">
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <Users size={14} />
                                        <span>{loc.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <MapPin size={14} />
                                        <span>Magyarország</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <Card className="p-12 md:p-16 max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl text-foreground font-black mb-4 tracking-tight">Nem találta meg az igazit?</h3>
                        <p className="text-muted-foreground mb-10 leading-relaxed">Több mint 100 helyszíni partnereink között biztosan megtaláljuk az Önnek tökéleteset.</p>
                        <Button asChild size="lg">
                            <Link to="/ajanlatkeres">
                                Egyedi helyszínajánlat
                                <ArrowRight size={18} />
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;
