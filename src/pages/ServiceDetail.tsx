import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const serviceData: Record<string, { title: string; subtitle: string; description: string; features: string[]; image: string; highlight: string }> = {
    'belso-rendezvenyek': {
        title: 'Belső Rendezvények',
        subtitle: 'Szakmai és Ünnepi Pillanatok',
        description: 'A belső kommunikáció csúcspontjai. Legyen szó egy évzáró gáláról, egy stratégiai elvonulásról vagy egy jubileumi ünnepségről, mi gondoskodunk arról, hogy az üzenet célba érjen, a kivitelezés pedig tükrözze a vállalat presztízsét.',
        features: ['Szakmai Elvonulás & Workshop', 'Partner- és Ügyféltalálkozó', 'Díjátadó Gálák', 'IT Reset & Offsite Események'],
        image: '/images/internal-events.png',
        highlight: 'A vállalati kultúra motorja',
    },
    'tematikus-napok': {
        title: 'Tematikus Napok',
        subtitle: 'Kreatív Koncepciók',
        description: 'Amikor a megszokott nem elég. Tematikus napjaink egy teljesen új világba repítik a résztvevőket. A dekorációtól a cateringig, a programoktól a zenéig minden egyetlen koherens történetet mesél el.',
        features: ['Retro Party & Időutazás', 'Amerikai Álom & Kaszinó Est', 'Hollywood & Vörös Szőnyeg', 'Családi és Sportnapok'],
        image: '/images/thematic-days.png',
        highlight: 'Egyedi világ, egyetlen napra',
    },
    'szezonalis-rendezvenyek': {
        title: 'Szezonális Rendezvények',
        subtitle: 'Az Év Fénypontjai',
        description: 'Minden évszaknak megvan a maga varázsa. Mi segítünk ezt becsempészni a vállalati kultúrába. Legyen szó egy fergeteges farsangról vagy az év legfontosabb eseményéről, a Karácsonyi partyról.',
        features: ['Karácsonyi Gála & Party', 'Halloween & Farsang', 'Húsvéti Események', 'Nyári Fesztiválok'],
        image: '/images/seasonal-events.png',
        highlight: 'Az év legvárt pillanatai',
    },
    'csapatepito-programok': {
        title: 'Csapatépítő Programok',
        subtitle: 'Közösségteremtés Mesterfokon',
        description: 'Nem csak játék, hanem befektetés a csapatdinamikába. Programjaink célja, hogy a kollégák kiszakadjanak a hétköznapokból, és valódi élményeken keresztül mélyítsék el kapcsolataikat.',
        features: ['Outdoor Kalandtúrák', 'Indoor Workshopok', 'Kreatív Alkotóműhelyek', 'Gasztronómiai Élmények'],
        image: '/images/teambuilding.png',
        highlight: 'Befektetés a csapatba',
    },
};

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? serviceData[slug] : null;

    if (!service) {
        return (
            <div className="pt-32 min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-foreground mb-4">A szolgáltatás nem található</h2>
                    <Button variant="ghost" asChild className="text-primary hover:text-foreground">
                        <Link to="/">Vissza a főoldalra</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Image */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-xs mb-6 hover:text-foreground transition-colors group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Vissza a főoldalra
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-2 tracking-tight">{service.title}</h1>
                        <p className="text-xl text-muted-foreground font-light">{service.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Main content */}
                    <div className="lg:w-3/5">
                        <Badge variant="gold" className="rounded-full px-4 py-1 mb-8">
                            {service.highlight}
                        </Badge>

                        <h3 className="text-foreground font-bold uppercase tracking-widest mb-6 text-sm">Részletes Leírás</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-16">{service.description}</p>

                        <h3 className="text-foreground font-bold uppercase tracking-widest mb-6 text-sm">Amit kínálunk</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                                <Card key={idx} className="p-5 flex items-center gap-4 hover:border-primary/20">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-primary" size={16} />
                                    </div>
                                    <span className="text-foreground/80 font-medium text-sm">{feature}</span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-2/5">
                        <Card className="sticky top-28 p-8">
                            <CardContent className="p-0">
                                <h4 className="text-2xl font-black text-foreground mb-4 tracking-tight">Érdekli ez a szolgáltatás?</h4>
                                <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                                    Kérjen egyedi ajánlatot rendezvényére, és mi 24 órán belül felvesszük Önnel a kapcsolatot.
                                </p>
                                <Button asChild className="w-full">
                                    <Link to="/ajanlatkeres">
                                        Ajánlatkérés
                                        <ArrowRight size={16} />
                                    </Link>
                                </Button>

                                {/* Other services */}
                                <div className="mt-10 pt-8 border-t border-border">
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-4">További szolgáltatások</p>
                                    <div className="flex flex-col gap-2">
                                        {Object.entries(serviceData)
                                            .filter(([key]) => key !== slug)
                                            .slice(0, 3)
                                            .map(([key, s]) => (
                                                <Link
                                                    key={key}
                                                    to={`/szolgaltatasok/${key}`}
                                                    className="block py-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                                                >
                                                    {s.title}
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
