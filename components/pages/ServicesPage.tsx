
import React, { useState } from 'react';
import { SERVICES } from '../../constants';
import { Service } from '../../types';
import SectionHeader from '../SectionHeader';
import FadeInOnScroll from '../FadeInOnScroll';

const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl max-w-2xl w-full p-8 animate-fade-scale-in" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-4">
                            {service.icon}
                            <h2 className="text-3xl font-serif font-bold text-brand-gold">{service.title}</h2>
                        </div>
                        <p className="mt-4 text-lg text-gray-300">{service.description}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-6">
                    <h3 className="text-xl font-semibold text-white">What's Included:</h3>
                    <ul className="mt-4 space-y-3">
                        {service.details.map((detail) => (
                             <li key={detail} className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-5 text-brand-gold mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <span className="text-gray-400">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>
        
            <div className="relative z-10 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInOnScroll>
                        <SectionHeader
                            subtitle="Our Services"
                            title="Comprehensive Financial Solutions"
                            description="We offer a tailored suite of services designed to meet the unique needs of individuals and businesses in our community. Let us handle the numbers, so you can focus on what you do best."
                        />
                    </FadeInOnScroll>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service, index) => (
                            <FadeInOnScroll key={service.title} delay={index * 100}>
                                <button onClick={() => setSelectedService(service)} className="bg-gray-900/40 p-8 rounded-xl border border-gray-700 text-center hover:border-brand-gold hover:scale-105 transform transition-all duration-300 flex flex-col items-center h-full">
                                    <div className="flex-shrink-0">{service.icon}</div>
                                    <h3 className="mt-6 text-xl font-serif font-bold text-brand-gold">{service.title}</h3>
                                    <p className="mt-2 text-gray-400 flex-grow">{service.description}</p>
                                    <span className="mt-6 text-sm font-semibold text-brand-gold">Learn More &rarr;</span>
                                </button>
                            </FadeInOnScroll>
                        ))}
                    </div>
                </div>
            </div>
            {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
        </div>
    );
};

export default ServicesPage;
