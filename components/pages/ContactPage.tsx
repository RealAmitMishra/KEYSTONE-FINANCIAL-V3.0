
import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            // Randomly succeed or fail for demo purposes
            if (Math.random() > 0.1) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <div 
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/4458514/pexels-photo-4458514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-brand-dark/60"></div>

            <div className="relative z-10 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-base font-semibold leading-7 text-brand-gold">Contact Us</h2>
                        <p className="mt-2 text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
                            Let's Start a Conversation
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We're here to help with your financial needs. Reach out for a free, no-obligation consultation to see how we can support you or your business.
                        </p>
                    </div>

                    <div className="mt-20 grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gray-900/40 p-8 rounded-xl border border-gray-700">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-gold">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} autoComplete="name" className="mt-1 block w-full rounded-md border-gray-600 bg-brand-dark/50 py-3 px-4 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold" />
                                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                                </div>
                                 <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-gold">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} autoComplete="email" className="mt-1 block w-full rounded-md border-gray-600 bg-brand-dark/50 py-3 px-4 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold" />
                                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                                </div>
                                 <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-brand-gold">Phone (Optional)</label>
                                    <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" className="mt-1 block w-full rounded-md border-gray-600 bg-brand-dark/50 py-3 px-4 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold" />
                                </div>
                                 <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-brand-gold">Message</label>
                                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} className="mt-1 block w-full rounded-md border-gray-600 bg-brand-dark/50 py-3 px-4 text-white shadow-sm focus:border-brand-gold focus:ring-brand-gold"></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                                </div>
                                <div>
                                    <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center rounded-md border border-transparent bg-brand-gold py-3 px-4 text-lg font-bold text-brand-dark shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                                {status === 'success' && <p className="text-center text-green-400">Message sent successfully! We'll be in touch soon.</p>}
                                {status === 'error' && <p className="text-center text-red-400">Something went wrong. Please try again later.</p>}
                            </form>
                        </div>
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-gray-900/40 p-8 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-serif font-bold text-brand-gold">Our Office</h3>
                                <p className="mt-2 text-gray-300">
                                    Justin, TX 76247<br />
                                    Serving all of North Texas
                                </p>
                            </div>
                            <div className="bg-gray-900/40 p-8 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-serif font-bold text-brand-gold">Email & Phone</h3>
                                 <p className="mt-2 text-gray-300">
                                    Info@keystonefinancialtx.com<br />
                                    (817) 983-8875
                                </p>
                            </div>
                            <div className="bg-gray-900/40 p-8 rounded-xl border border-gray-700">
                                 <h3 className="text-xl font-serif font-bold text-brand-gold">Business Hours</h3>
                                <p className="mt-2 text-gray-300">
                                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                                    Weekends: By Appointment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
