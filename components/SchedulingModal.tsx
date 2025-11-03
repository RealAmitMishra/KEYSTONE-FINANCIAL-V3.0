
import React, { useState } from 'react';

interface SchedulingModalProps {
    onClose: () => void;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ onClose }) => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState(1); // 1: Select date/time, 2: Confirmation

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
    
    const handleConfirm = () => {
        // Here you would typically handle the booking (e.g., API call)
        setStep(2);
    }
    
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl max-w-md w-full p-8 animate-fade-scale-in" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-brand-gold">Schedule Your Free Consultation</h2>
                        <p className="mt-2 text-gray-400">Select a time for your 45-minute session. You'll receive free access to the Keystone Ledger app as a gift!</p>
                        
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-brand-gold">Select an available time slot</label>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {timeSlots.map(time => (
                                    <button 
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`p-2 rounded-md text-center text-sm font-semibold transition-colors ${selectedTime === time ? 'bg-brand-gold text-brand-dark' : 'bg-gray-700/50 text-white hover:bg-gray-600/50'}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button 
                            onClick={handleConfirm}
                            disabled={!selectedTime}
                            className="mt-8 w-full justify-center rounded-md border border-transparent bg-brand-gold py-3 px-4 text-lg font-bold text-brand-dark shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                        >
                           Confirm Time
                        </button>
                    </div>
                )}
                
                {step === 2 && (
                     <div className="text-center">
                        <svg className="mx-auto h-16 w-16 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="mt-4 text-2xl font-serif font-bold text-brand-gold">Booking Confirmed!</h2>
                        <p className="mt-2 text-gray-300">
                            Your consultation for <span className="font-bold text-white">{selectedTime}</span> is booked. We've sent a confirmation and details about your free Keystone Ledger app to your email.
                        </p>
                        <button 
                            onClick={onClose}
                            className="mt-8 w-full justify-center rounded-md border border-transparent bg-brand-gold py-3 px-4 text-lg font-bold text-brand-dark shadow-sm hover:bg-opacity-90"
                        >
                           Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SchedulingModal;
