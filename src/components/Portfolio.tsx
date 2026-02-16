import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
    {
        client: 'MOL GROUP',
        role: 'HR Igazgató',
        text: 'A Bond & Beyond csapata nem egyszerűen rendezvényt szervezett, hanem egy olyan élményt teremtett, amiről a kollégák hónapokkal később is beszéltek.',
    },
    {
        client: 'OTP BANK',
        role: 'Marketing Vezető',
        text: 'Precizitás, kreativitás és rugalmasság. A karácsonyi gálánk minden várakozást felülmúlt, a technikai kivitelezés hibátlan volt.',
    },
    {
        client: 'DEUTSCHE TELEKOM',
        role: 'Internal Comms Lead',
        text: 'Végre egy ügynökség, aki érti, mit jelent a vállalati kultúra. Minden korosztályt sikerült megszólítaniuk.',
    },
];

const projects = [
    {
        title: 'Várkert Bazár Summit',
        category: 'Konferencia & Gála',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
        size: 'md:col-span-2',
    },
    {
        title: 'Summer Festival 2023',
        category: 'Családi Nap',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
        size: '',
    },
    {
        title: 'Vezetői Retreat',
        category: 'Exkluzív',
        image: 'https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=2070&auto=format&fit=crop',
        size: '',
    },
    {
        title: 'Tech Innovation Launch',
        category: 'Termékbevezető',
        image: '/images/tech-launch.png',
        size: 'md:col-span-2',
    },
];

const Portfolio = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="portfolio" className="py-28 md:py-40 bg-card">
            <div className="max-w-7xl mx-auto px-6">

                {/* Portfolio Header + Grid */}
                <div className="mb-32">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Portfólió</span>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-14">
                        Kiemelt <span className="text-stroke">Munkáink</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl aspect-video cursor-pointer border border-border hover:border-primary/20 transition-colors ${project.size}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2">{project.category}</p>
                                    <h4 className="text-foreground text-xl md:text-2xl font-black">{project.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-10 block text-center">
                        Ügyfeleink mondták
                    </span>
                    <div className="max-w-3xl mx-auto text-center relative">
                        <Quote size={48} className="text-primary/10 mx-auto mb-6" fill="currentColor" />

                        <p className="text-xl md:text-2xl text-foreground/80 font-light italic leading-relaxed mb-10">
                            &quot;{testimonials[currentTestimonial].text}&quot;
                        </p>
                        <h4 className="text-foreground font-black uppercase tracking-widest text-sm mb-1">
                            {testimonials[currentTestimonial].client}
                        </h4>
                        <p className="text-primary text-xs font-semibold tracking-[0.2em] mb-10">
                            {testimonials[currentTestimonial].role}
                        </p>

                        {/* Navigation */}
                        <div className="flex justify-center gap-3">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevTestimonial}
                                className="hover:bg-primary hover:text-black hover:border-primary"
                            >
                                <ChevronLeft size={18} />
                            </Button>
                            <div className="flex items-center gap-2 px-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentTestimonial(i)}
                                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                            i === currentTestimonial ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40 w-2'
                                        }`}
                                    />
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextTestimonial}
                                className="hover:bg-primary hover:text-black hover:border-primary"
                            >
                                <ChevronRight size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
