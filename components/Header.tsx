
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    navigateTo: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, navigateTo, children }) => {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => navigateTo(page)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive 
                ? 'text-brand-gold' 
                : 'text-brand-light hover:text-brand-gold'
            }`}
        >
            {children}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <button onClick={() => navigateTo(Page.Home)} className="flex items-center">
                           <img src="https://i.postimg.cc/GpLtscmX/IMG_0815.png" alt="Keystone Financial Logo" className="h-16 w-auto" />
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo}>Home</NavLink>
                            <NavLink page={Page.Services} currentPage={currentPage} navigateTo={navigateTo}>Services</NavLink>
                            <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo}>About Us</NavLink>
                            <NavLink page={Page.Resources} currentPage={currentPage} navigateTo={navigateTo}>Resources</NavLink>
                            <NavLink page={Page.FAQ} currentPage={currentPage} navigateTo={navigateTo}>FAQ</NavLink>
                            <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={navigateTo}>Contact</NavLink>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-brand-dark inline-flex items-center justify-center p-2 rounded-md text-brand-gold hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo}>Home</NavLink>
                        <NavLink page={Page.Services} currentPage={currentPage} navigateTo={navigateTo}>Services</NavLink>
                        <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo}>About Us</NavLink>
                        <NavLink page={Page.Resources} currentPage={currentPage} navigateTo={navigateTo}>Resources</NavLink>
                        <NavLink page={Page.FAQ} currentPage={currentPage} navigateTo={navigateTo}>FAQ</NavLink>
                        <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={navigateTo}>Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
