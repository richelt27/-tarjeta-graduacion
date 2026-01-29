import React from 'react';
import { motion } from 'framer-motion';

const DressCodeSection: React.FC = () => {
    return (
        <section className="py-10 px-6 bg-primary text-white text-center">
            <h3 className="text-xl font-serif mb-8 text-gold">Código de Vestimenta</h3>

            <div className="flex justify-center gap-12 max-w-md mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        {/* Simple SVG icon for Suit */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-cream">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094.787 2.036 1.872 2.18-2.087 2.169-5.004 3.42-8.122 3.42C8.804 24 5.887 22.75 3.8 20.58c1.084-.144 1.871-1.086 1.871-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.111 48.111 0 01-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                    <span className="text-sm tracking-wider font-light">CABALLEROS</span>
                    <span className="text-xs text-gold font-bold">Traje Formal</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        {/* Simple SVG icon for Dress */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-cream">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                    <span className="text-sm tracking-wider font-light">DAMAS</span>
                    <span className="text-xs text-gold font-bold">Vestido </span>
                </motion.div>
            </div>
        </section>
    );
};

export default DressCodeSection;
