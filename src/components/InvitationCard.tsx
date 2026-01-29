import React from 'react';
import { motion } from 'framer-motion';
import LocationSection from './LocationSection';
import gradCapImg from '../assets/grad-cap.png';
import { Calendar, Clock } from 'lucide-react';

const InvitationCard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <motion.div
                className="glass-card w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Decorative top border */}
                <div className="h-2 w-full bg-gradient-to-r from-primary via-gold to-primary"></div>

                <div className="p-6 md:p-10 text-center relative">

                    {/* Header Logos */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-1">
                                <span className="text-[10px] font-bold text-primary">UNSCH</span>
                            </div>
                        </div>
                        <div className="pt-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                            Estás invitado a la
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-1">
                                <span className="text-[10px] font-bold text-primary">FCEAC</span>
                            </div>
                        </div>
                    </div>

                    {/* Graduation Cap - Floating Animation */}
                    <motion.div
                        className="relative w-full max-w-[280px] mx-auto mb-6 aspect-square flex items-center justify-center"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full scale-75 opacity-50"></div>
                        <img
                            src={gradCapImg}
                            alt="Graduation Cap"
                            className="w-full h-full object-contain relative z-10 drop-shadow-2xl transform rotate-[-5deg]"
                        />
                    </motion.div>

                    {/* Title Section */}
                    <div className="space-y-4 mb-10">
                        <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                            Fiesta de <span className="italic">Graduación</span>
                        </h1>
                        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
                        <div className="uppercase tracking-widest text-sm md:text-base text-gray-600 font-medium">
                            Contabilidad y<br />
                            <span className="gold-text-gradient text-2xl md:text-3xl font-bold tracking-normal block mt-1">
                                Auditoría 2025
                            </span>
                        </div>
                    </div>

                    {/* Date Card */}
                    <div className="flex items-stretch justify-center gap-0 mb-8 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white/50">
                        <div className="px-6 py-3 bg-primary text-cream flex flex-col justify-center items-center border-r border-gold/30 min-w-[100px]">
                            <span className="text-4xl md:text-5xl font-serif leading-none">31</span>
                            <span className="text-xs tracking-widest uppercase mt-1 text-gold-light">Enero</span>
                        </div>
                        <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 text-left bg-white/80 w-full">
                            <div className="flex items-center gap-2 text-primary">
                                <Clock className="w-4 h-4 text-gold" />
                                <span className="font-semibold text-sm md:text-base">20:30 p.m.</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                                <Calendar className="w-4 h-4 text-gold" />
                                <span className="font-semibold text-sm md:text-base">Viernes</span>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <LocationSection />

                    {/* Footer */}
                    <div className="mt-12">
                        <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase opacity-80">
                            ¡Te Esperamos!
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InvitationCard;
