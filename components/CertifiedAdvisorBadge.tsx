import React from 'react';

interface CertifiedAdvisorBadgeProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const CertifiedAdvisorBadge: React.FC<CertifiedAdvisorBadgeProps> = ({ size = 'medium', className = '' }) => {
    const sizeClasses = {
        small: 'h-20',
        medium: 'h-24',
        large: 'h-32',
    };

    return (
        <div className={`inline-flex flex-col items-center ${className}`}>
            <img 
                src="https://i.postimg.cc/YCMVJNXQ/IMG-1157.png" 
                alt="QuickBooks Certified ProAdvisor" 
                className={`${sizeClasses[size]} w-auto`}
            />
            <p className="text-sm text-gray-400 mt-2 font-medium tracking-wide">QuickBooks Certified ProAdvisor</p>
        </div>
    );
};

export default CertifiedAdvisorBadge;
