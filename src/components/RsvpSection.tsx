import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const RsvpSection: React.FC = () => {
    // Replace with actual phone number
    const phoneNumber = "51999999999";
    const message = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia a la Graduación de Contabilidad y Auditoría 2025.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className="py-12 px-6 bg-white text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
            >
                <h3 className="text-2xl font-serif text-primary mb-6">Confirmación de Asistencia</h3>
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-[#25D366] text-white py-4 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
                >
                    <MessageCircle className="w-6 h-6" />
                    Confirmar por WhatsApp
                </motion.a>
                <p className="mt-4 text-sm text-gray-500">
                    Por favor confirmar antes del 20 de Enero
                </p>
            </motion.div>
        </section>
    );
};

export default RsvpSection;
