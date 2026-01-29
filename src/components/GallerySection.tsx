import React from 'react';
import { motion } from 'framer-motion';

// Using placeholders for now, straightforward to swap
const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1627556722077-8415b3e1a0b6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
];

const GallerySection: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="px-4 text-center mb-8">
                <h3 className="text-2xl font-serif text-primary">Nuestros Momentos</h3>
            </div>

            <div className="grid grid-cols-2 gap-2 px-2 md:max-w-2xl md:mx-auto">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-md aspect-square"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
