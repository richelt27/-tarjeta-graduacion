import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownSection: React.FC = () => {
    // Target date: Jan 31, 2026 20:30:00 (Updated for functionality check)
    const targetDate = new Date('2026-01-31T20:30:00').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                // Optional: Set to 0s if passed
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const TimeUnit = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white shadow-lg rounded-lg flex items-center justify-center border border-gold/20 mb-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors"></div>
                <span className="text-2xl md:text-5xl font-bold text-primary font-serif">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary/70">{label}</span>
        </div>
    );

    return (
        <section className="py-20 bg-gray-50 flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h3 className="text-gold uppercase tracking-[0.4em] text-sm font-bold mb-2">Solo faltan</h3>
                <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold">Cuenta Regresiva</h2>
            </motion.div>

            <motion.div
                className="flex flex-wrap justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <TimeUnit value={timeLeft.days} label="Días" />
                <TimeUnit value={timeLeft.hours} label="Horas" />
                <TimeUnit value={timeLeft.minutes} label="Minutos" />
                <TimeUnit value={timeLeft.seconds} label="Segundos" />
            </motion.div>
        </section>
    );
};

export default CountdownSection;
