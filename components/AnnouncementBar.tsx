import React, { useState, useEffect } from 'react';

const AnnouncementBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check session storage to see if the bar was already dismissed
        const isDismissed = sessionStorage.getItem('announcementDismissed');
        if (!isDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem('announcementDismissed', 'true');
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold text-brand-dark font-semibold p-3 text-center text-sm relative shadow-md">
            <p>
                Schedule a free consultation and receive complimentary access to our Keystone Ledger App!
            </p>
            <button
                onClick={handleDismiss}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-brand-dark hover:bg-black/10 rounded-full p-1 transition-colors"
                aria-label="Dismiss announcement"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default AnnouncementBar;
