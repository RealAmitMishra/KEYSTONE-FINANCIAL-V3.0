import React from 'react';
import { Page } from '../types';

interface FooterProps {
    navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
    return (
        <footer className="bg-gray-900/50 border-t border-brand-gold/20">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center">
                            <img src="https://i.postimg.cc/GpLtscmX/IMG_0815.png" alt="Keystone Financial Logo" className="h-20 w-auto" />
                        </div>
                        <p className="text-gray-400 text-base">Your trusted local partner for bookkeeping, tax, and business services in North Texas.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                             <a href="#" className="text-gray-400 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                <span className="sr-only">X</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.316 2.427-.364C9.793 2.013 10.147 2 12.315 2zm0 1.62c-2.403 0-2.741.01-3.72.058-1.01.046-1.634.21-2.144.41a3.272 3.272 0 00-1.18 1.18c-.2.51-.364 1.135-.41 2.144-.048.98-.058 1.318-.058 3.72s.01 2.74.058 3.72c.046 1.01.21 1.634.41 2.144a3.272 3.272 0 001.18 1.18c.51.2 1.135.364 2.144.41.98.048 1.318.058 3.72.058s2.74-.01 3.72-.058c1.01-.046 1.634-.21 2.144-.41a3.272 3.272 0 001.18-1.18c.2-.51.364-1.135-.41-2.144.048-.98.058-1.318-.058-3.72s-.01-2.74-.058-3.72c-.046-1.01-.21-1.634-.41-2.144a3.272 3.272 0 00-1.18-1.18c-.51-.2-1.135-.364-2.144-.41-.98-.048-1.318-.058-3.72-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.62a3.515 3.515 0 110 7.03 3.515 3.515 0 010-7.03zM16.965 6.57c-.742 0-1.344.602-1.344 1.344s.602 1.344 1.344 1.344 1.344-.602 1.344-1.344-.602-1.344-1.344-1.344z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-brand-gold tracking-wider uppercase">Navigation</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><button onClick={() => navigateTo(Page.Home)} className="text-base text-gray-400 hover:text-white">Home</button></li>
                                    <li><button onClick={() => navigateTo(Page.Services)} className="text-base text-gray-400 hover:text-white">Services</button></li>
                                    <li><button onClick={() => navigateTo(Page.About)} className="text-base text-gray-400 hover:text-white">About Us</button></li>
                                    <li><button onClick={() => navigateTo(Page.Resources)} className="text-base text-gray-400 hover:text-white">Resources</button></li>
                                    <li><button onClick={() => navigateTo(Page.FAQ)} className="text-base text-gray-400 hover:text-white">FAQ</button></li>
                                    <li><button onClick={() => navigateTo(Page.Contact)} className="text-base text-gray-400 hover:text-white">Contact</button></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-brand-gold tracking-wider uppercase">Contact</h3>
                                <ul className="mt-4 space-y-4">
                                    <li className="text-base text-gray-400">Justin, TX 76247</li>
                                    <li className="text-base text-gray-400">(817) 983-8875</li>
                                    <li className="text-base text-gray-400">Info@keystonefinancialtx.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-brand-gold tracking-wider uppercase">Serving</h3>
                                <p className="mt-4 text-base text-gray-400">Proudly serving Justin, Fort Worth, and the greater North Texas community with deep local roots.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Keystone Financial. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;