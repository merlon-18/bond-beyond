import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const stats = [
    { value: 500, suffix: '+', label: 'Sikeres Projekt' },
    { value: 98, suffix: '%', label: 'Ajánlási Ráta' },
    { value: 12, suffix: '', label: 'Év Tapasztalat' },
    { value: 50, suffix: '+', label: 'Partnervállalat' },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [started, target]);

    return (
        <div ref={ref} className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tabular-nums mb-2">
            {count}
            {suffix && <span className="text-primary text-2xl md:text-3xl align-top ml-1">{suffix}</span>}
        </div>
    );
};

const Stats = () => {
    return (
        <section className="relative z-20 bg-card py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center group p-8 border-border bg-transparent hover:border-primary/20">
                            <CountUp target={stat.value} suffix={stat.suffix} />
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors">
                                {stat.label}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
