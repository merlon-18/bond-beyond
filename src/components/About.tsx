import { Target, ShieldCheck, Zap, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

const team = [
    { name: 'Placeholder', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Placeholder', role: 'Event Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Placeholder', role: 'Creative Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Placeholder', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Placeholder', role: 'HR Partner', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' },
];

const FeatureBox = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
    <Card className="group p-6 hover:border-primary/20">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            {icon}
        </div>
        <h4 className="font-bold text-base mb-2 text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </Card>
);

const About = () => {
    return (
        <section id="about" className="py-28 md:py-40 bg-background">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero: Image + Text side by side */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
                    <div className="lg:w-5/12">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </div>
                    </div>

                    <div className="lg:w-7/12">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Rólunk
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] text-foreground tracking-tight">
                            Szakértelem<br />
                            <span className="gradient-text">Szenvedéllyel</span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed font-light">
                            A Bond & Beyond szakértelme abban rejlik, hogy a vállalati célokat érzelmi alapokon nyugvó, mégis racionálisan tervezett közösségi élménnyé transzformálja.
                        </p>
                        <p className="text-muted-foreground/70 text-base leading-relaxed">
                            HR partnereinknek kiszámíthatóságot, a munkatársaknak pedig maradandó emléket adunk. Minden koncepciónk a vállalati kultúra mély elemzéséből és a csapat valós igényeinek megértéséből indul ki.
                        </p>
                    </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    <FeatureBox
                        icon={<Target className="text-primary" size={24} />}
                        title="Adatvezérelt Tervezés"
                        desc="Minden koncepció a vállalati kultúra elemzéséből indul."
                    />
                    <FeatureBox
                        icon={<ShieldCheck className="text-primary" size={24} />}
                        title="Garanciális Minőség"
                        desc="Szigorú protokollok a tervezéstől a zárásig."
                    />
                    <FeatureBox
                        icon={<Zap className="text-primary" size={24} />}
                        title="Innovatív Technológia"
                        desc="A legújabb audiovizuális megoldások integrálása."
                    />
                    <FeatureBox
                        icon={<Users className="text-primary" size={24} />}
                        title="Dedikált Csapat"
                        desc="Személyes projektmenedzser minden partnerünk számára."
                    />
                </div>

                {/* Team */}
                <div>
                    <div className="mb-12">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Csapatunk</span>
                        <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">A Csapat</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {team.map((member, i) => (
                            <div key={i} className={`group ${i === team.length - 1 && team.length % 2 !== 0 ? 'col-span-2 sm:col-span-1 max-w-[50%] sm:max-w-none mx-auto sm:mx-0' : ''}`}>
                                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-card mb-4 border border-border hover:border-primary/20 transition-colors">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="text-foreground font-bold text-sm">{member.name}</h4>
                                <p className="text-primary text-xs font-semibold tracking-wider">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
