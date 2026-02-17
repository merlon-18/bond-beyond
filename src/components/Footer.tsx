import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
    return (
        <footer className="bg-background pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-20">
                    {/* CTA Section */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                            Tervezzünk<br />
                            <span className="gradient-text">Együtt.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
                            Szakmai konzultációért és részletes ajánlatért vegye fel velünk a kapcsolatot. Szakértőink 24 órán belül válaszolnak.
                        </p>
                        <Button variant="white" asChild size="lg">
                            <Link to="/ajanlatkeres">
                                Ajánlatkérés Indítása
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 content-center">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-4">
                                <MapPin size={18} className="text-primary" />
                            </div>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1 tracking-widest">Iroda</p>
                            <p className="text-base font-semibold text-foreground">1051 Budapest,<br />Október 6. u. 12.</p>
                        </div>

                        <div>
                            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-4">
                                <Mail size={18} className="text-primary" />
                            </div>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1 tracking-widest">Email</p>
                            <a href="mailto:hello@bondandbeyond.hu" className="text-base font-semibold text-foreground hover:text-primary transition-colors">hello@bondandbeyond.hu</a>
                        </div>

                        <div>
                            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-4">
                                <Phone size={18} className="text-primary" />
                            </div>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1 tracking-widest">Telefon</p>
                            <a href="tel:+36301234567" className="text-base font-semibold text-foreground hover:text-primary transition-colors">+36 30 123 4567</a>
                        </div>

                        <div>
                            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-4">
                                <Instagram size={18} className="text-primary" />
                            </div>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1 tracking-widest">Közösség</p>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <Separator className="mb-10" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Bond & Beyond.</p>
                    <div className="flex gap-8">
                        <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <a href="#" className="hover:text-primary transition-colors">Adatvédelem</a>
                        <a href="#" className="hover:text-primary transition-colors">Impresszum</a>
                        <a href="#" className="hover:text-primary transition-colors">Süti Kezelés</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
