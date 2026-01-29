import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-primary text-white relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 flex justify-center"
                >
                    <Quote className="w-10 h-10 text-gold rotate-180" />
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="font-serif text-2xl md:text-3xl italic leading-relaxed text-cream"
                >
                    "Después de años de esfuerzo, aprendizaje y muchas experiencias, llegó el momento de celebrar un gran logro.
                    Con mucha alegría y gratitud, queremos compartir contigo este momento tan especial."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-8 font-serif"
                >
                    <div className="h-[1px] w-16 bg-gold mx-auto mb-4"></div>
                    <cite className="not-italic text-gold tracking-widest uppercase text-sm font-semibold">
                        La Promoción
                    </cite>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
