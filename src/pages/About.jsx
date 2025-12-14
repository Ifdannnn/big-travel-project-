import React from 'react';
import { Link } from 'react-router-dom';
import Community from '../components/Community';
import aboutImg from '../assets/about.jpg';
import heroImg from '../assets/hero.jpg';
import ctaImg from '../assets/ricefield.jpg';

const About = () => {
    return (
        <div className="bg-neutral-50">
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={aboutImg} alt="About Us" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative text-center text-white z-10 max-w-4xl px-4">
                    <h1 className="text-5xl text-center md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">Our Story</h1>
                    <p className="text-lg font-light tracking-wide uppercase animate-fade-in-up delay-100">Curators of the Exceptional</p>
                </div>
            </section>

            {/* Narrative */}
            <section className="py-24 max-w-4xl mx-auto px-4 text-center">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">The Journey</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                    "We believe that travel is not just about the destination, but about the artistry of the experience."
                </h2>
                <div className="prose prose-lg mx-auto text-gray-500 font-light leading-relaxed">
                    <p className="mb-6">
                        Big Travel was founded on a simple yet ambitious premise: to provide access to the inaccessible. We started as a boutique concierge service in Bali, catering to a select group of friends and families who sought more than just a holiday—they wanted immersion, privacy, and flawless execution.
                    </p>
                    <p>
                        Today, we have grown into a high-end lifestyle company, but our core philosophy remains unchanged. We draw on extensive global expertise to bring you the most exceptional luxury villas and first-class yacht charters. From the moment you contact us, your journey is personalized to your exact tastes.
                    </p>
                </div>
            </section>

            {/* Expertise Recap */}
            <section className="bg-white py-20 border-t border-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Expertise</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start group">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Luxury Villa Rentals</h4>
                                        <p className="text-gray-500 mt-1 font-light">Exclusive access to private estates not listed on public platforms, offering complete seclusion.</p>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Yacht Charters</h4>
                                        <p className="text-gray-500 mt-1 font-light">Voyages through Komodo, Raja Ampat, and beyond on world-class vessels staffed by expert crews.</p>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">VIP Concierge</h4>
                                        <p className="text-gray-500 mt-1 font-light">24/7 support for reservations, security, and private events planning.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="h-96 relative overflow-hidden group">
                            <img src={heroImg} alt="Expertise" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Community */}
            <Community />

            {/* CTA to Packages */}
            <section className="relative py-24 bg-secondary/10 text-center bg-scroll md:bg-fixed" style={{ backgroundImage: `url(${ctaImg})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                <div className="relative max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Explore Our Collections</h2>
                    <p className="text-white mb-8 font-light">Discover our hand-picked selection of packages designed to inspire your next getaway.</p>
                    <Link to="/packages" className="inline-block bg-primary text-white px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-colors text-sm">
                        View Packages
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
