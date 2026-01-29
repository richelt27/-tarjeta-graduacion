import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, ChevronDown } from 'lucide-react';

const GiftSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-12 px-6 bg-white text-center">
            <div className="max-w-md mx-auto">
                <motion.div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                        <Gift className="w-8 h-8" />
                    </div>
                </motion.div>

                <h3 className="text-2xl font-serif text-primary mb-4">Sugerencia de Regalos</h3>
                <p className="text-gray-600 mb-6 text-sm">
                    Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, ponemos a tu disposición una "Lluvia de Sobres".
                </p>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center gap-2 text-primary font-medium mx-auto border border-primary/20 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors"
                >
                    <span>Ver datos bancarios</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4 bg-gray-50 rounded-xl"
                        >
                            <div className="p-6 text-left space-y-4 text-sm">
                                <div>
                                    <p className="font-bold text-primary">BCP Soles</p>
                                    <p className="font-mono text-gray-600">191-12345678-0-01</p>
                                    <p className="text-xs text-gray-400">CCI: 002-191-12345678001-55</p>
                                    <p className="text-xs text-gray-500 mt-1">A nombre de: Juan Pérez</p>
                                </div>
                                <div className="h-[1px] bg-gray-200"></div>
                                <div>
                                    <p className="font-bold text-primary">Yape / Plin</p>
                                    <p className="font-mono text-gray-600">999 999 999</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GiftSection;
