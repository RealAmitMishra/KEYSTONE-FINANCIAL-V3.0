
import React from 'react';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description }) => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-gold">{subtitle}</h2>
            <p className="mt-2 text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">
                {title}
            </p>
            {description && (
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
