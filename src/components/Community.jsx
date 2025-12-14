import React from 'react';
import { Gem, Crown, Shield, Globe } from 'lucide-react';

const Community = () => {
    const partners = [
        { name: "Luxury Retreats", icon: Crown },
        { name: "Elite Airways", icon: Globe },
        { name: "Secure Travels", icon: Shield },
        { name: "Diamond Concierge", icon: Gem },
        { name: "Royal Yachting", icon: Crown },
        { name: "Global Villas", icon: Globe },
    ];

    return (
        <section className="py-20 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our Network</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">Trusted by World-Class Partners</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 cursor-pointer group">
                            <partner.icon size={40} strokeWidth={1} className="text-gray-400 group-hover:text-primary mb-3 transition-colors" />
                            <span className="font-serif text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
