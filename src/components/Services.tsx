import { ArrowRight, Building2, CalendarDays, PartyPopper, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Service {
    id: string;
    icon: ReactNode;
    title: string;
    description: string;
    tags: string[];
}

const services: Service[] = [
    {
        id: 'belso-rendezvenyek',
        icon: <Building2 size={32} />,
        title: 'Belső Rendezvények',
        description: 'Stratégiai elvonulások, partner-ügyféltalálkozók, IT reset események, díjátadó gálák és offsite programok.',
        tags: ['Szakmai', 'Elvonulás', 'Díjátadó', 'Offsite'],
    },
    {
        id: 'tematikus-napok',
        icon: <CalendarDays size={32} />,
        title: 'Tematikus Napok',
        description: 'Egyedi koncepciók megvalósítása: Retro partyk, Amerikai álom, Időutazás, vagy komplex Sportnapok szervezése.',
        tags: ['Retro', 'Kreatív', 'Sportnap', 'Koncepció'],
    },
    {
        id: 'szezonalis-rendezvenyek',
        icon: <PartyPopper size={32} />,
        title: 'Szezonális Rendezvények',
        description: 'Az év kiemelt pillanatai: Halloween partyk, Karácsonyi gálák, Húsvéti események és Farsangi mulatságok.',
        tags: ['Karácsony', 'Halloween', 'Fesztivál'],
    },
    {
        id: 'csapatepito-programok',
        icon: <Users2 size={32} />,
        title: 'Csapatépítő Programok',
        description: 'Kültéri és beltéri élményalapú tréningek, amelyek valódi közösséggé kovácsolják a munkatársakat.',
        tags: ['Outdoor', 'Indoor', 'Tréning', 'Workshop'],
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-background relative py-28 md:py-40">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Sticky Left Side */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start h-fit">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Szolgáltatások
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-8">
                            Miben vagyunk<br />
                            <span className="gradient-text">Kiemelkedőek?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                            Strukturált megoldások, amelyek választ adnak a modern munkaerőpiaci kihívásokra. Minden eseményt egyedi stratégiával közelítünk meg.
                        </p>
                        <Button variant="ghost" asChild className="hidden lg:inline-flex text-foreground hover:text-primary">
                            <Link to="/ajanlatkeres">
                                Konzultáció kérése <ArrowRight size={16} />
                            </Link>
                        </Button>
                    </div>

                    {/* Service Cards */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        {services.map((service, index) => (
                            <Link to={`/szolgaltatasok/${service.id}`} key={index}>
                                <Card className="group p-8 md:p-10 hover:border-primary/20 cursor-pointer">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        <div className="text-primary p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary group-hover:text-black transition-all duration-300 shrink-0">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight group-hover:text-gold-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                                                {service.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline" className="group-hover:border-primary/20 group-hover:text-primary/80">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 self-center">
                                            <ArrowRight size={20} className="text-primary -translate-x-4 group-hover:translate-x-0 transition-transform" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}

                        <div className="lg:hidden mt-8 text-center">
                            <Button variant="ghost" asChild className="text-foreground hover:text-primary">
                                <Link to="/ajanlatkeres">
                                    Konzultáció kérése <ArrowRight size={16} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
