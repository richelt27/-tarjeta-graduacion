import React from 'react';
import { motion } from 'framer-motion';
import gradCapImg from '../assets/grad-cap.png';
import logoUnsch from '../assets/logo-unsch.jpg';
import logoFceac from '../assets/logo-fceac.png';


const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-start md:justify-center relative overflow-hidden text-center px-4 pt-10 md:pt-20 pb-4 md:pb-12 w-full md:min-h-screen">
            {/* Watercolor Background */}
            <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/watercolor-bg.png')] bg-cover bg-center opacity-30 z-0"></div>


            <motion.div
                className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hexagonal/Geometric Frame Container */}
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] flex flex-col items-center justify-center p-8">
                    {/* Gold Geometric Frame Border */}
                    <svg className="absolute inset-0 w-full h-full z-0 drop-shadow-2xl" viewBox="0 0 400 500" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#C5A059" />
                                <stop offset="50%" stopColor="#FCD34D" />
                                <stop offset="100%" stopColor="#AA6C39" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M200,10 L390,120 L390,380 L200,490 L10,380 L10,120 Z"
                            fill="white"
                            stroke="url(#goldGradient)"
                            strokeWidth="4"
                            className="drop-shadow-xl"
                        />
                        {/* Inner thin line */}
                        <path
                            d="M200,25 L375,127 L375,373 L200,475 L25,373 L25,127 Z"
                            fill="none"
                            stroke="url(#goldGradient)"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                    </svg>

                    {/* Content inside the frame */}
                    <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 md:py-16 w-full gap-4">

                        {/* Logos Container */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 bg-white/80 p-2 rounded-xl shadow-sm mb-1"
                        >
                            <img src={logoUnsch} alt="UNSCH" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                            <div className="h-8 w-[1px] bg-gray-300"></div>
                            <img src={logoFceac} alt="FCEAC" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2"
                        >
                            UNSCH • FCEAC
                        </motion.h3>

                        {/* Typography Block */}
                        <div className="text-center space-y-0 w-full px-2">
                            <motion.p
                                className="font-[GreatVibes,cursive] text-2xl md:text-3xl text-primary/80 mb-2"
                                style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Ceremonia de
                            </motion.p>

                            <motion.h1
                                className="text-2xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-md w-full break-words"
                                style={{
                                    textShadow: '2px 2px 0px #002855, -1px -1px 0px #002855, 1px -1px 0px #002855, -1px 1px 0px #002855, 1px 1px 0px #002855',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7, type: "spring" }}
                            >
                                GRADUACIÓN
                            </motion.h1>

                            <motion.p
                                className="text-primary font-serif italic text-base md:text-lg mt-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                Contabilidad y Auditoría
                            </motion.p>
                        </div>


                        {/* Graduation Cap */}
                        <motion.img
                            src={gradCapImg}
                            alt="Birrete"
                            className="w-32 md:w-40 object-contain drop-shadow-2xl mt-auto"
                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
