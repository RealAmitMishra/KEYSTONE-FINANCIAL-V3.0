import React from 'react';

interface TrustAdvisorBadgeProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const TrustAdvisorBadge: React.FC<TrustAdvisorBadgeProps> = ({ size = 'medium', className = '' }) => {
    const sizeClasses = {
        small: 'h-20',
        medium: 'h-24',
        large: 'h-32',
    };

    return (
        <div className={`inline-flex flex-col items-center ${className}`}>
            <img 
                src="https://i.postimg.cc/HLQrVg0m/images-q-tbn-ANd9Gc-Sm-I6x-RUArk0n-Yi4SN4Yk7p-K5n-YWV6Hn-KS1v-Q-s.png" 
                alt="Trust Advisor Verified" 
                className={`${sizeClasses[size]} w-auto`}
            />
            <p className="text-sm text-gray-400 mt-2 font-medium tracking-wide">Trusted Advisor Verified</p>
        </div>
    );
};

export default TrustAdvisorBadge;
