import { Send, CheckCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const QuoteRequest = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="pt-32 pb-24 bg-background min-h-screen flex items-center justify-center">
                <div className="text-center max-w-lg mx-auto px-6 animate-fade-in-up">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                        <CheckCircle size={40} className="text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">Köszönjük!</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Ajánlatkérését sikeresen fogadtuk. Szakértő kollégáink 24 órán belül felveszik Önnel a kapcsolatot egy személyre szabott koncepcióval.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[35vh] md:h-[40vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
                    alt="Contact us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                            Lépjünk Kapcsolatba
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                            Ajánlatkérés
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Form */}
                    <div className="lg:w-3/5">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                            Töltse ki az űrlapot, és szakértő kollégáink 24 órán belül felveszik Önnel a kapcsolatot egy személyre szabott koncepcióval.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Név *</label>
                                    <Input
                                        type="text"
                                        required
                                        placeholder="Az Ön neve"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Cég Neve *</label>
                                    <Input
                                        type="text"
                                        required
                                        placeholder="Vállalat neve"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Cím *</label>
                                    <Input
                                        type="email"
                                        required
                                        placeholder="pelda@email.com"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Telefonszám</label>
                                    <Input
                                        type="tel"
                                        placeholder="+36 30 123 4567"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Érdeklődés Tárgya</label>
                                <Select defaultValue="belso">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Válasszon szolgáltatást" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="belso">Belső Rendezvények (Gála, Díjátadó, Offsite)</SelectItem>
                                        <SelectItem value="tematikus">Tematikus Napok (Retro, Sport, Koncepció)</SelectItem>
                                        <SelectItem value="szezonalis">Szezonális Rendezvények (Karácsony, Fesztivál)</SelectItem>
                                        <SelectItem value="csapatepito">Csapatépítő Programok</SelectItem>
                                        <SelectItem value="egyeb">Egyéb / Komplett Rendezvényszervezés</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Üzenet / Részletek</label>
                                <Textarea
                                    rows={5}
                                    placeholder="Kérjük, írja le röviden az elképzeléseit, a várható létszámot és dátumot..."
                                />
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Ajánlatkérés Küldése
                                <Send size={18} />
                            </Button>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-2/5">
                        <Card className="sticky top-28 p-8 md:p-10">
                            <CardContent className="p-0">
                                <h4 className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-10">Közvetlen Elérhetőség</h4>
                                <div className="space-y-8">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Mail size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1 tracking-widest">Email</p>
                                            <a href="mailto:hello@bondandbeyond.hu" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">hello@bondandbeyond.hu</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1 tracking-widest">Telefon</p>
                                            <a href="tel:+36301234567" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">+36 30 123 4567</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-border">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Szakértőink munkanapokon 24 órán belül válaszolnak. Sürgős megkeresés esetén hívjon minket közvetlenül.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteRequest;
