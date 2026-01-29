import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const ProgramSection: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Detalles del Evento</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Date Card */}
                    <motion.div
                        className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden flex flex-col items-center text-center shadow-xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                        <Calendar className="w-12 h-12 text-gold mb-6" />
                        <h3 className="text-2xl font-serif mb-2">Fecha</h3>
                        <p className="text-5xl font-bold text-gold mb-2">31</p>
                        <p className="text-xl tracking-widest uppercase">Enero 2025</p>
                        <p className="mt-4 text-white/70">Sábado de Gala</p>
                    </motion.div>

                    {/* Time Card */}
                    <motion.div
                        className="bg-white border border-primary/10 p-8 rounded-2xl relative overflow-hidden flex flex-col items-center text-center shadow-lg"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Clock className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-2xl font-serif text-primary mb-2">Hora</h3>
                        <p className="text-5xl font-bold text-primary mb-2">20:30</p>
                        <p className="text-xl tracking-widest uppercase text-gray-500">P.M.</p>
                        <p className="mt-4 text-gray-500">Hora Exacta</p>
                    </motion.div>
                </div>

                {/* Additional Info Details */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        <p className="text-primary font-medium text-sm md:text-base">
                            Código de Vestimenta: <span className="font-bold">Elegante</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramSection;
