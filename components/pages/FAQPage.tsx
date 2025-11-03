
import React, { useState } from 'react';
import { FAQS } from '../../constants';
import { FAQItem } from '../../types';
import SectionHeader from '../SectionHeader';
import FadeInOnScroll from '../FadeInOnScroll';

const FaqItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-6">
            <dt>
                <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-start justify-between text-left text-gray-300">
                    <span className="text-lg font-medium text-white">{item.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <svg className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-4 pr-12 animate-fade-in">
                    <p className="text-base leading-7 text-gray-400">{item.answer}</p>
                </dd>
            )}
        </div>
    );
};

const FAQPage: React.FC = () => {
    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>
            
            <div className="relative z-10 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInOnScroll>
                        <SectionHeader
                            subtitle="Frequently Asked Questions"
                            title="Answers to Your Common Inquiries"
                            description="Have questions? We have answers. If you don't find what you're looking for, feel free to contact us directly."
                        />
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <div className="mt-20 max-w-4xl mx-auto">
                            <dl className="space-y-4">
                                {FAQS.map((faq, index) => (
                                    <FaqItemComponent key={index} item={faq} />
                                ))}
                            </dl>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
