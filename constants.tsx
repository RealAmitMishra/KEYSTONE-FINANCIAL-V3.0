
import React from 'react';
import { TeamMember, Service, FAQItem } from './types';

// SVG Icons
const BookkeepingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const TaxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const BusinessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Priti Mishra',
        role: 'Principal Accountant',
        imageUrl: 'https://i.postimg.cc/vmYT6QZX/IMG_0708.jpg',
        bio: 'With over 25 years of results-oriented accounting experience, Priti is an expert in full-cycle accounting, financial reporting, and enhancing procedural efficiency. Her proficiency in SAP HANA, Peoplesoft, and Oracle ensures financial accuracy for our clients in fast-paced environments.'
    },
    {
        name: 'Amit Mishra',
        role: 'Marketing & Business Development Manager',
        imageUrl: 'https://i.postimg.cc/0yLKXBM2/IMG-4792.jpg',
        bio: 'Amit is a seasoned administrator with over eight years of experience driving growth and operational excellence. He excels in managing client relations, building robust referral networks, and implementing strategic initiatives to ensure the highest quality of care for our clients.'
    }
];

export const SERVICES: Service[] = [
    {
        icon: <BookkeepingIcon />,
        title: 'Full-Cycle Bookkeeping',
        description: 'We provide comprehensive bookkeeping services to keep your finances accurate, up-to-date, and organized.',
        details: [
            'Accounts Payable & Receivable',
            'Bank & Credit Card Reconciliation',
            'General Ledger Management',
            'Month-End & Year-End Closing',
            'Custom Financial Reporting'
        ]
    },
    {
        icon: <TaxIcon />,
        title: 'Tax Preparation & Planning',
        description: 'Navigate the complexities of tax season with confidence. We offer expert tax services for individuals and businesses.',
        details: [
            'Individual & Business Tax Returns',
            'Strategic Tax Planning',
            'Multi-State Tax Processing',
            'Sales Tax Reconciliation',
            '1099 Preparation'
        ]
    },
    {
        icon: <BusinessIcon />,
        title: 'Business Registration & Advisory',
        description: 'Start your business on the right foot. We guide you through the registration process and provide ongoing advisory.',
        details: [
            'LLC & Corporation Formation',
            'EIN Application Assistance',
            'Business Structure Consultation',
            'Procedural Efficiency Analysis',
            'Financial Policy Development'
        ]
    }
];

export const FAQS: FAQItem[] = [
    {
        question: 'What bookkeeping software do you use?',
        answer: 'We are proficient in a wide range of accounting software, including QuickBooks Online, SAP HANA, Peoplesoft, and Oracle. We can adapt to your existing system or help you migrate to a more efficient platform.'
    },
    {
        question: 'What types of businesses do you work with?',
        answer: 'We work with a diverse range of small and medium-sized businesses across various industries in the North Texas area. Our services are tailored to meet the unique needs of your specific business.'
    },
    {
        question: 'How much do your services cost?',
        answer: 'Our pricing is customized based on the scope of services you require. We offer a free 45-minute consultation to understand your needs and provide a transparent, no-obligation quote.'
    },
    {
        question: 'What is the Keystone Ledger App?',
        answer: 'The Keystone Ledger is our proprietary, user-friendly bookkeeping tool, comparable to QuickBooks. We offer it as a complimentary gift to clients who schedule a free consultation, providing a powerful tool to manage your finances at no cost.'
    },
    {
        question: 'Do you offer personal tax services?',
        answer: 'Yes, in addition to business tax preparation and planning, we offer comprehensive tax services for individuals and families to help you maximize your returns and navigate tax season with confidence.'
    }
];
