import React, { useEffect } from 'react';

interface SchedulingModalProps {
    onClose: () => void;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ onClose }) => {
    useEffect(() => {
        const scriptId = 'calendly-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.type = 'text/javascript';
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }

        // Prevent background page from scrolling
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto" 
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl max-w-4xl w-full my-8 animate-fade-scale-in" 
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                    aria-label="Close scheduling modal"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div 
                    className="calendly-inline-widget w-full h-[700px] overflow-hidden rounded-lg" 
                    data-url="https://calendly.com/keystonefinancialtx/45min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=2A3F3C&text_color=f3f4f6&primary_color=d4c1a2"
                    style={{ minWidth: '320px' }}
                ></div>
            </div>
        </div>
    );
};

export default SchedulingModal;
