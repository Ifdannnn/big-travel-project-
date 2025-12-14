import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import beach from '../assets/beach.jpg';
import ricefield from '../assets/ricefield.jpg';
import underwater from '../assets/underwater.jpg';

const Blog = () => {
    const posts = [
        { id: 1, title: "The Hidden Beaches of Uluwatu", date: "Oct 12, 2024", img: beach, snippet: "Discover the secret shores that only the locals know about. Beyond the famous breaks lies a world of pristine white sands and turquoise waters." },
        { id: 2, title: "A Culinary Journey Through Ubud", date: "Nov 05, 2024", img: ricefield, snippet: "From street food to fine dining, experience the flavors of Bali. We guide you through the organic markets and chef's tables of the cultural capital." },
        { id: 3, title: "Diving in Menjangan Island", date: "Dec 01, 2024", img: underwater, snippet: "Explore the vibrant coral reefs and marine life of West Bali National Park. A diver's paradise with crystal clear visibility and abundant sea turtles." },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="pt-32 pb-12 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 animate-fade-in-up">The Journal</h1>
                <p className="text-gray-500 max-w-xl mx-auto animate-fade-in-up delay-100">Stories, guides, and inspiration for your next adventure.</p>
            </div>

            <div className="py-12 overflow-x-auto snap-x snap-mandatory flex space-x-6 px-4 pb-12 sm:justify-center max-w-7xl mx-auto scrollbar-hide">
                {posts.map((post, idx) => (
                    <div key={post.id} className="snap-center flex-shrink-0 w-80 md:w-96 bg-white border border-neutral-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                        <div className="h-60 overflow-hidden">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.date}</span>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-3 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{post.snippet}</p>
                            <Link to={`/blog/${post.id}`} className="flex items-center text-sm font-bold uppercase tracking-wide text-gray-900 hover:text-primary transition-colors">
                                Read Article <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Blog;
