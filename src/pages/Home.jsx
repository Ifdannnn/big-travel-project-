import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Star, Anchor, Home as HomeIcon, Compass } from 'lucide-react';
import Community from '../components/Community';
import heroImg from '../assets/bali hero.jpg';
import aboutImg from '../assets/about.jpg';
import ricefield from '../assets/ricefield.jpg';
import beach from '../assets/beach.jpg';
import underwater from '../assets/underwater.jpg';
import { useState } from 'react';




const Home = () => {
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

    return (
        <div className="bg-neutral-50">
            {/* Hero Section */}
            <section className="relative h-screen bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: `url(${heroImg})` }}>

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white ">
                    <span className="text-secondary tracking-[0.2em] font-medium mb-4 uppercase text-sm animate-fade-in-up">Welcome to Big Travel</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight max-w-4xl animate-fade-in-up delay-100">
                        Experience the Extraordinary in Bali
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light animate-fade-in-up delay-200">
                        Exclusive concierge, luxury villas, and private yacht charters. We curate unforgettable journeys tailored to your discerning taste.
                    </p>
                    <div className="flex gap-4 animate-fade-in-up delay-300">
                        <Link to="/packages" className="bg-primary text-white px-8 py-3.5 font-medium hover:bg-opacity-90 transition-all uppercase tracking-wide text-sm">
                            Explore Packages
                        </Link>
                        <Link to="/contact" className="border border-white text-white px-8 py-3.5 font-medium hover:bg-white hover:text-primary transition-all uppercase tracking-wide text-sm">
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900">Curated Luxury Experiences</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* 1 */}
                        <div className="group text-center p-8 border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                            <div className="inline-flex items-center justify-center p-4 bg-secondary/20 rounded-full mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <HomeIcon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Luxury Villas</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Hand-picked private estates offering unparalleled privacy, comfort, and breathtaking views of Bali's landscapes.
                            </p>
                        </div>
                        {/* 2 */}
                        <div className="group text-center p-8 border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                            <div className="inline-flex items-center justify-center p-4 bg-secondary/20 rounded-full mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Anchor size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Yacht Charters</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Sail the Indonesian archipelago in style. Our first-class fleet ensures a journey as magnificent as the destination.
                            </p>
                        </div>
                        {/* 3 */}
                        <div className="group text-center p-8 border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                            <div className="inline-flex items-center justify-center p-4 bg-secondary/20 rounded-full mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Compass size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Personalized Concierge</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                From restaurant reservations to exclusive event access, our dedicated team handles every detail of your stay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-neutral-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10">
                                <img src={aboutImg} alt="Bali Gate" className="shadow-2xl w-full h-auto object-cover" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 z-0"></div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Who We Are</span>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Redefining Luxury Travel in Bali</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We are a high-end lifestyle company specializing in exclusive personalized concierge, travel, and entertainment experiences. We serve a discerning clientele who demand nothing but the absolute best.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our extensive global expertise allows us to bring you exceptional properties and holiday experiences. Every aspect of your journey is tailored to your unique tastes.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors uppercase tracking-wide text-sm border-b border-primary pb-1">
                                Read Our Story <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Our Collections</span>
                            <h2 className="text-4xl font-serif font-bold text-gray-900">Featured Packages</h2>
                        </div>
                        <Link to="/packages" className="hidden md:flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                            View All Collections <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Ubud Retreat", img: ricefield, price: "Start from $2,500" },
                            { title: "Coastal Escape", img: beach, price: "Start from $3,200" },
                            { title: "Underwater Paradise", img: underwater, price: "Start from $1,800" },
                        ].map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="overflow-hidden mb-4 relative h-80">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center md:hidden">
                        <Link to="/packages" className="inline-block bg-neutral-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide">
                            View All Collections
                        </Link>
                    </div>
                </div>
            </section>

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

            {/* Community Section */}
            < Community />

            {/* Appointment CTA */}
            < section className="py-24 bg-primary bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed text-white text-center relative overflow-hidden" style={{ backgroundImage: `url(${heroImg})` }} >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 ">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Begin Your Journey</h2>
                    <p className="text-white/80 text-lg mb-10 font-light">
                        Ready to experience the best of Bali? Book an appointment with our travel specialists today.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-secondary transition-colors">
                        Book Appointment
                    </Link>
                </div>
            </section >
        </div >
    );
};

export default Home; 
