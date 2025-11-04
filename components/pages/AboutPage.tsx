import React from 'react';
import { TEAM_MEMBERS } from '../../constants';
import SectionHeader from '../SectionHeader';
import FadeInOnScroll from '../FadeInOnScroll';

const AboutPage: React.FC = () => {
    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>
            
            <div className="relative z-10 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* Introduction */}
                    <FadeInOnScroll>
                        <section className="max-w-4xl mx-auto text-center">
                            <SectionHeader
                                subtitle="Our Story"
                                title="Your Trusted Financial Partner in North Texas"
                                description="Keystone Financial was founded on the belief that every local business deserves access to high-level financial expertise combined with personal, dedicated service. With deep roots in the Justin and Fort Worth communities, we are committed to helping our neighbors build strong financial futures."
                            />
                        </section>
                    </FadeInOnScroll>

                    {/* Meet the Team */}
                    <FadeInOnScroll>
                        <section>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white">Meet Our Team</h2>
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                                {TEAM_MEMBERS.map((member) => (
                                    <div key={member.name} className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
                                        <img className="h-48 w-48 rounded-full object-cover flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105" src={member.imageUrl} alt={member.name} />
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

                    {/* Our Values */}
                    <FadeInOnScroll>
                        <section className="bg-gray-900/40 rounded-xl p-12 border border-gray-700">
                             <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white">Our Core Values</h2>
                             <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="p-4">
                                    <h3 className="text-xl font-serif font-bold text-brand-gold">Integrity</h3>
                                    <p className="mt-2 text-gray-400">We uphold the highest standards of honesty and ethics in all our actions.</p>
                                </div>
                                 <div className="p-4">
                                    <h3 className="text-xl font-serif font-bold text-brand-gold">Partnership</h3>
                                    <p className="mt-2 text-gray-400">We work alongside you, building relationships based on trust and mutual respect.</p>
                                </div>
                                 <div className="p-4">
                                    <h3 className="text-xl font-serif font-bold text-brand-gold">Community</h3>
                                    <p className="mt-2 text-gray-400">We are committed to the growth and prosperity of our local North Texas community.</p>
                                </div>
                             </div>
                        </section>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;