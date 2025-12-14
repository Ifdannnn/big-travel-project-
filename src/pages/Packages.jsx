import React from 'react';
import { MessageCircle } from 'lucide-react';
import Community from '../components/Community';
import heroImg from '../assets/hero.jpg';
import ricefield from '../assets/ricefield.jpg';
import beach from '../assets/beach.jpg';
import underwater from '../assets/underwater.jpg';
import aboutImg from '../assets/about.jpg';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Star } from 'lucide-react';

const Packages = () => {
    const [current, setcurrent] = useState(0);
    const testimonials = [{
        quote: "Big Travel crafted the most magical honeymoon for us. The villa in Uluwatu was beyond our wildest dreams, and the attention to detail was impeccable.",
        name: "abdul & Syntia",
        location: "Dubai, UAE"
    }, {
        quote: "The experience was nothing short of magical. The villa was perfect for our honeymoon, and the service was impeccable.",
        name: "Charles & Lidiana",
        location: "London, UK"
    }, {
        quote: "with this tour package, finally i've found the perfect place to snorkelling and see all the sea life in bali",
        name: "Jimmy & Rebecca",
        location: "Madrid, Spain"
    }]
    const nextSlide = () => {
        setcurrent((prev) => (prev + 1) % testimonials.length)
    }
    const prevSlide = () => {
        setcurrent((prev) => prev == 0 ? testimonials.length - 1 : prev - 1)
    }

    const packages = [
        { title: "The Royal Bali Tour", price: "$3,500", duration: "7 Days", img: heroImg },
        { title: "Ubud Wellness Retreat", price: "$2,800", duration: "5 Days", img: ricefield },
        { title: "Nusa Penida Yacht", price: "$4,200", duration: "3 Days", img: underwater },
        { title: " Uluwatu Cliffside Luxury", price: "$3,100", duration: "4 Days", img: beach },
        { title: "Cultural Heritage Journey", price: "$2,500", duration: "6 Days", img: aboutImg },
        { title: "East Bali Hidden Gems", price: "$2,900", duration: "5 Days", img: ricefield },
    ];

    const handleBook = (title) => {
        const message = `Hi Big Travel, I am interested in the ${title} package.`;
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="bg-neutral-50 min-h-screen" >
            <div className="relative min-h-[80vh] bg-neutral-900 py-32 px-4 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${beach})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 "></div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up">Our Collections</h1>
                <p className="text-white max-w-2xl mx-auto animate-fade-in-up delay-100">Exclusive itineraries crafted for the sophisticated traveler.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className="bg-white group hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col animate-fade-in-up" parse-style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="h-64 overflow-hidden relative">
                                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                    {pkg.duration}
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{pkg.title}</h3>
                                <p className="text-gray-500 font-light mb-6 flex-grow">Experience the ultimate luxury with our curated {pkg.title}, offering exclusive access and premium amenities.</p>
                                <div className="flex justify-between items-center border-t border-neutral-100 pt-6">
                                    <span className="text-lg font-medium text-primary">{pkg.price}</span>
                                    <button
                                        onClick={() => handleBook(pkg.title)}
                                        className="flex items-center text-sm font-bold uppercase tracking-wide text-gray-900 hover:text-green-600 transition-colors"
                                    >
                                        Book Now <MessageCircle size={18} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Testimonials */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    {/* arrowleft */}
                    <button onClick={() => setcurrent((prev) => prev == 0 ? testimonials.length - 1 : prev - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 border rounded-full hover:bg-primary hover:text-white transition"><ArrowLeft size={18} /></button>
                    {/* arrowright */}
                    <button onClick={() => setcurrent((prev) => prev == testimonials.length - 1 ? 0 : prev + 1)} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 border rounded-full hover:bg-primary hover:text-white transition"><ArrowRight size={18} /></button>
                    <Star size={24} className="text-primary mx-auto mb-6 fill-current" />
                    <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-8 leading-snug">
                        "{testimonials[current].quote}"
                    </h2>
                    <div>
                        <p className="font-bold text-gray-900 uppercase tracking-wide text-sm">{testimonials[current].name}</p>
                        <p className="text-gray-500 text-sm mt-1">"{testimonials[current].location}"</p>
                    </div>
                </div>
            </section >
            <Community />

        </div>
    );
};
export default Packages;
