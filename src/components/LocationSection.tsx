import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationSection: React.FC = () => {
    return (
        <section className="py-20 w-full relative overflow-hidden">
            {/* Elegant Divider */}
            <div className="flex items-center justify-center gap-4 mb-16 opacity-60">
                <div className="h-[1px] w-12 bg-gold"></div>
                <div className="w-2 h-2 rotate-45 border border-gold"></div>
                <div className="h-[1px] w-12 bg-gold"></div>
            </div>

            <div className="text-center mb-12 relative z-10 px-6">
                <motion.h3
                    className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Celebración
                </motion.h3>
                <motion.h2
                    className="text-4xl md:text-6xl font-serif text-primary"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Villa Verde
                </motion.h2>
                <motion.p
                    className="mt-4 text-gray-500 font-light tracking-wide text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Asoc. Villa Militar Warpapichu
                </motion.p>
            </div>

            {/* Map Container - Full Width Feel with soft edges */}
            <motion.div
                className="relative w-full h-[400px] md:h-[500px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none opacity-20"></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15505.485741675715!2d-74.225!3d-13.158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA5JzMwLjAiUyA3NMKwMTMnMzAuMCJX!5e0!3m2!1ses-419!2spe!4v1620000000000!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(0.9) brightness(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:filter-none transition-all duration-1000"
                ></iframe>

                {/* Floating Action Button */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-max">
                    <motion.a
                        href="https://www.google.com/maps/search/?api=1&query=Salón+de+Eventos+Villa+Verde+Ayacucho"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 bg-primary text-white py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(10,25,47,0.3)] hover:shadow-[0_20px_40px_rgba(10,25,47,0.4)] transition-all group"
                    >
                        <MapPin className="w-5 h-5 text-gold group-hover:animate-bounce" />
                        <span className="font-serif tracking-widest text-sm font-semibold">VER DIRECCIÓN</span>
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default LocationSection;
