import React, { useState } from 'react';
import { Page } from '../../types';
import { SERVICES, TEAM_MEMBERS } from '../../constants';
import SchedulingModal from '../SchedulingModal';
import SectionHeader from '../SectionHeader';
import FadeInOnScroll from '../FadeInOnScroll';

interface HomePageProps {
    navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>
            
            <div className="relative z-10">
                <div className="space-y-24 md:space-y-32 pb-24">
                    {/* Hero Section */}
                    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                           
                                <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight animate-fade-in-up">
                                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-brand-gold to-gray-200 pb-4">
                                        Clarity & Confidence in Your Finances
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                                    Keystone Financial provides expert bookkeeping, tax, and business advisory services with a personal, local touch. We help North Texas businesses thrive.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                    <button 
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
                                    >
                                        Schedule Free Consultation
                                    </button>
                                    <button 
                                        onClick={() => navigateTo(Page.Services)}
                                        className="inline-block bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-gold hover:text-brand-dark transition-colors"
                                    >
                                        Explore Our Services
                                    </button>
                                </div>
                            
                        </div>
                    </section>
                    
                    {/* Services Section */}
                    <FadeInOnScroll>
                        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <SectionHeader
                                subtitle="What We Do"
                                title="Your Financial Foundation, Fortified"
                            />
                            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {SERVICES.map((service) => (
                                    <div key={service.title} className="bg-gray-900/40 p-8 rounded-xl border border-gray-700 text-center hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="flex justify-center">{service.icon}</div>
                                        <h3 className="mt-6 text-xl font-serif font-bold text-brand-gold">{service.title}</h3>
                                        <p className="mt-2 text-gray-400">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </FadeInOnScroll>

                    {/* CTA Section */}
                    <FadeInOnScroll>
                        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-gray-900/40 rounded-xl border border-gray-700 p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
                                <div className="lg:w-0 lg:flex-1">
                                    <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-4xl">
                                        Get a Free Consultation & a Powerful Gift
                                    </h2>
                                    <p className="mt-4 max-w-3xl text-lg text-gray-300">
                                        Schedule a no-obligation, 45-minute consultation to discuss your business needs. As a thank you, you'll receive complimentary access to our Keystone Ledger App—a powerful, user-friendly bookkeeping tool comparable to QuickBooks.
                                    </p>
                                </div>
                                <div className="mt-8 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-brand-dark bg-brand-gold hover:bg-opacity-90 transition-transform transform hover:scale-105"
                                    >
                                        Book Your Free Session
                                    </button>
                                </div>
                            </div>
                        </section>
                    </FadeInOnScroll>

                    {/* Testimonial Section */}
                    <FadeInOnScroll>
                        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                             <SectionHeader
                                subtitle="What Our Clients Say"
                                title="Trusted by North Texas Businesses"
                            />
                            <div className="mt-12 max-w-3xl mx-auto">
                                <div className="aspect-w-16 aspect-h-9 bg-gray-900/40 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/PlYakGfxwWc?si=zb1w_cOHI0ik7DdW" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        style={{aspectRatio: "16/9"}}
                                    ></iframe>
                                </div>
                            </div>
                        </section>
                    </FadeInOnScroll>
                    
                    {/* Team Section */}
                    <FadeInOnScroll>
                        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                             <SectionHeader
                                subtitle="Our Experts"
                                title="The Team Behind Your Success"
                            />
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                                {TEAM_MEMBERS.map((member) => (
                                    <div key={member.name} className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
                                        <img className="h-40 w-40 rounded-full object-cover flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105" src={member.imageUrl} alt={member.name} />
                                        <div>
                                            <h3 className="text-2xl font-bold font-serif text-brand-gold">{member.name}</h3>
                                            <p className="text-lg text-gray-300">{member.role}</p>
                                            <p className="mt-4 text-gray-400">{member.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </FadeInOnScroll>
                </div>
            </div>
            {isModalOpen && <SchedulingModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default HomePage;