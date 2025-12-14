import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-secondary">Big Travel</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Curating exclusive luxury villas and yacht charters for the discerning traveler. Your journey, tailored to perfection.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-medium mb-6 text-white">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/packages" className="text-gray-400 hover:text-secondary transition-colors text-sm">Our Packages</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors text-sm">Journal</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-medium mb-6 text-white">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-secondary mt-0.5" />
                                <span className="text-gray-400 text-sm">Jalan Raya Seminyak, Bali, Indonesia</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-secondary" />
                                <span className="text-gray-400 text-sm">+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-secondary" />
                                <span className="text-gray-400 text-sm">concierge@bigtravel.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-serif font-medium mb-6 text-white">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and travel inspiration.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-neutral-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                            />
                            <button className="bg-primary text-white px-4 py-2 hover:bg-opacity-90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs">© 2024 Big Travel. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
