import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate send or redirect to mailto
        window.location.href = `mailto:concierge@bigtravel.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
    };

    return (
        <div className="bg-neutral-50 min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 animate-fade-in-up">Get in Touch</h1>
                    <p className="text-gray-500 max-w-xl mx-auto animate-fade-in-up delay-100">We are here to help you plan your perfect getaway. Contact us for inquiries or appointments.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="animate-fade-in-up delay-200">
                        <div className="bg-white p-10 shadow-sm border border-neutral-100 h-full">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Contact Information</h2>
                            <ul className="space-y-8">
                                <li className="flex items-start">
                                    <div className="bg-secondary/20 p-3 rounded-full text-primary mr-6">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">WhatsApp & Phone</h4>
                                        <p className="text-gray-500">+62 812 3456 7890</p>
                                        <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-primary text-sm font-medium hover:underline mt-1 inline-block">Chat on WhatsApp</a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-secondary/20 p-3 rounded-full text-primary mr-6">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Email Us</h4>
                                        <p className="text-gray-500">concierge@bigtravel.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-secondary/20 p-3 rounded-full text-primary mr-6">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Our Office</h4>
                                        <p className="text-gray-500">Jalan Raya Seminyak No. 101<br />Kuta, Badung Regency<br />Bali, Indonesia</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="animate-fade-in-up delay-300">
                        <form onSubmit={handleSubmit} className="bg-white p-10 shadow-sm border border-neutral-100">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send a Message</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-900"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-900"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-900"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-neutral-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-primary transition-colors flex justify-center items-center">
                                    Send Message <Send size={18} className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
