
import React from 'react';
import { Page } from '../../types';
import SectionHeader from '../SectionHeader';
import FadeInOnScroll from '../FadeInOnScroll';

interface ResourcesPageProps {
    navigateTo: (page: Page) => void;
}

const blogPosts = [
    {
        title: 'Lock in High Yields Before Rates Drop',
        excerpt: 'With interest rates predicted to fall, now is the crucial time to secure high-yield investments. Discover strategies to maximize your returns for the long term.',
        imageUrl: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        url: 'https://keystonefinancialtx.wordpress.com/2025/11/01/lock-in-high-yields-before-rates-drop/',
    },
    {
        title: 'Why Local Bookkeepers Beat DIY for North Texas Businesses',
        excerpt: 'Learn why partnering with a local North Texas expert for bookkeeping and tax preparation can save you time, money, and headaches compared to going it alone.',
        imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        url: 'https://keystonefinancialtx.wordpress.com/2025/09/11/why-north-texas-small-businesses-should-choose-local-bookkeepers-and-tax-preparers-over-diy-financial-management/',
    }
];

const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigateTo }) => {
    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>
            
            <div className="relative z-10 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInOnScroll>
                        <SectionHeader
                            subtitle="Insights & Resources"
                            title="Your Guide to Financial Wellness"
                            description="Explore our latest articles and insights on bookkeeping, tax strategies, and business growth to help you navigate the world of finance with confidence."
                        />
                    </FadeInOnScroll>

                    <div className="mt-20 max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
                        {blogPosts.map((post, index) => (
                           <FadeInOnScroll key={post.title} delay={index * 100}>
                                <a 
                                    href={post.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group block bg-gray-900/40 rounded-xl border border-gray-700 overflow-hidden hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1 h-full"
                                >
                                    <img className="h-56 w-full object-cover" src={post.imageUrl} alt="" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-serif font-bold text-brand-gold group-hover:underline">{post.title}</h3>
                                        <p className="mt-3 text-gray-400">{post.excerpt}</p>
                                        <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">
                                            Read More &rarr;
                                        </span>
                                    </div>
                                </a>
                            </FadeInOnScroll>
                        ))}
                         <FadeInOnScroll delay={blogPosts.length * 100}>
                            <button 
                                onClick={() => navigateTo(Page.LedgerDemo)}
                                className="group block bg-gray-900/40 rounded-xl border border-gray-700 overflow-hidden hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1 text-left w-full h-full"
                            >
                                <img className="h-56 w-full object-cover" src="https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ledger book and calculator" />
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-brand-gold group-hover:underline">Keystone Ledger - Live Demo</h3>
                                    <p className="mt-3 text-gray-400">Try our free, user-friendly bookkeeping tool. Manage transactions and see your finances in real-time. A complimentary gift for our clients.</p>
                                    <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">
                                        Launch Demo &rarr;
                                    </span>
                                </div>
                            </button>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
