import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import beach from '../assets/beach.jpg';
import ricefield from '../assets/ricefield.jpg';
import underwater from '../assets/underwater.jpg';

const Article = () => {
    const { id } = useParams();

    // Mock data - in a real app this would come from an API or shared data file
    const posts = {
        1: {
            title: "The Hidden Beaches of Uluwatu",
            date: "October 12, 2024",
            category: "Hidden Gems",
            img: beach,
            introduction: "Bali is famous for its beaches, but beyond the crowded sands of Kuta and Seminyak lies Uluwatu. Known for its clifftop views and world-class surf, it also hides some of the most pristine, secluded shores on the island. In this guide, we take you off the beaten path to discover the secret beaches that only the locals know about.",
            content: [
                {
                    type: "h2",
                    text: "Nyang Nyang Beach: The Untouched Paradise"
                },
                {
                    type: "paragraph",
                    text: "Getting to Nyang Nyang is an adventure in itself. A winding descent down hundreds of steps rewards you with a stretch of white sand that seems to go on forever. Because of the trek, it remains one of the least crowded beaches in the south. It’s perfect for long walks, shell collecting, and simply disconnecting from the world."
                },
                {
                    type: "image",
                    src: beach,
                    alt: "Nyang Nyang Beach coastline"
                },
                {
                    type: "quote",
                    text: "The climb down is steep, but the silence and beauty that await at the bottom are worth every step."
                },
                {
                    type: "h2",
                    text: "Green Bowl Beach: A Cave of Wonders"
                },
                {
                    type: "paragraph",
                    text: "Named after the algae-covered rocks revealed at low tide, Green Bowl Beach is small but spectacular. Access is via a steep concrete staircase. At the bottom, you'll find bat caves that offer shade and a unique atmosphere. The strong currents make it better for surfing than swimming, but the scenery is unmatched."
                },
                {
                    type: "list",
                    items: [
                        "Best time to visit: Low tide for beach access.",
                        "Difficulty: Moderate hike down.",
                        "Facilities: Minimal, bring your own water."
                    ]
                }
            ],
            conclusion: "Uluwatu's hidden beaches offer a side of Bali that feels raw and undiscovered. Whether you're a surfer chasing the perfect wave or a traveler seeking solitude, these coastal gems provide a sanctuary away from the hustle. Pack light, wear good shoes, and respect the natural beauty of these secluded spots.",
            cta: "Ready to explore the hidden side of Bali? Book our 'Uluwatu Explorer' package today and let us guide you to these secret paradises."
        },
        2: {
            title: "A Culinary Journey Through Ubud",
            date: "November 05, 2024",
            category: "Food & Culture",
            img: ricefield,
            introduction: "Ubud is not just the spiritual heart of Bali; it is a playground for the palate. From traditional warungs serving spicy sambal to modern gastronomic experiences, Ubud offers a diverse culinary landscape. Join us as we explore the flavors that define this highland town.",
            content: [
                { type: "h2", text: "The Art of Babi Guling" },
                { type: "paragraph", text: "No trip to Ubud is complete without tasting Babi Guling (suckling pig). The skin is crisp, the meat tender, and the spice mix complex. Ibu Oka is the most famous spot, but venturing to smaller local spots can yield even more authentic flavors." },
                { type: "image", src: ricefield, alt: "Traditional Balinese spices" },
                { type: "highlight", text: "Tip: Arrive early for lunch as the best portions sell out quickly!" },
                { type: "h2", text: "Organic Markets and Farm-to-Table" },
                { type: "paragraph", text: "Ubud's focus on wellness extends to its food. The weekly organic markets showcase fresh produce from the volcanic soils. Many restaurants here pride themselves on farm-to-table concepts, ensuring every bite is fresh, healthy, and supports local farmers." }
            ],
            conclusion: "Eating your way through Ubud is a journey of discovery. It connects you to the land, the culture, and the people. Don't be afraid to try something new, whether it's a mysterious fruit at the market or a spicy local dish.",
            cta: "Taste the authentic flavors of Bali. Join our 'Ubud Culinary Tour' for an unforgettable gastronomic adventure."
        },
        3: {
            title: "Diving in Menjangan Island",
            date: "December 01, 2024",
            category: "Adventure",
            img: underwater,
            introduction: "Far from the busy tourist hubs, off the northwest coast of Bali, lies Menjangan Island. Part of the West Bali National Park, this island offers some of the best wall diving in Indonesia. Crystal clear waters, calm conditions, and vibrant coral reefs make it a diver's dream.",
            content: [
                { type: "h2", text: "The Underwater Temple" },
                { type: "paragraph", text: "One of the most unique sites is the underwater temple garden. Statues of Hindu gods covered in coral create an ethereal, almost mystical underwater landscape. It's an accessible dive that combines culture with nature." },
                { type: "quote", text: "Swimming among the statues feels like discovering a lost civilization." },
                { type: "image", src: underwater, alt: "Diver observing coral reef" },
                { type: "h2", text: "Marine Life Galore" },
                { type: "paragraph", text: "Expect to see electric clams, pygmy seahorses, and schools of batfish. The walls are covered in massive gorgonian fans. If you're lucky, you might spot a whale shark passing by in the deeper channels." }
            ],
            conclusion: "Menjangan Island proves that Bali's beauty isn't just on land. The underwater world here is pristine and full of life. It's a reminder of why ocean conservation is so crucial.",
            cta: "Dive into the deep blue. Book your Menjangan diving trap with Big Travel today!"
        }
    };

    const post = posts[id] || posts[1]; // Default to first post if ID not found

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* 1. Article Section */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header / Meta */}
                <div className="mb-8 text-center animate-fade-in-up">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">{post.category}</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                        {post.title}
                    </h1>
                    <div className="mt-4 flex items-center justify-center text-gray-500 text-sm space-x-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="mb-12 rounded-xl overflow-hidden shadow-2xl animate-fade-in-up delay-100">
                    <img src={post.img} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>

                {/* 2. Content Container */}
                <div className="prose prose-lg prose-neutral mx-auto animate-fade-in-up delay-200">

                    {/* 3. Introduction */}
                    <p className="text-xl text-gray-600 leading-relaxed font-light mb-10 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-1 first-letter:float-left">
                        {post.introduction}
                    </p>

                    {/* 4. Body Content */}
                    {post.content.map((block, index) => {
                        switch (block.type) {
                            case 'h2':
                                return <h2 key={index} className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">{block.text}</h2>;
                            case 'paragraph':
                                return <p key={index} className="text-gray-700 leading-relaxed mb-6">{block.text}</p>;
                            case 'image':
                                return (
                                    <figure key={index} className="my-10">
                                        <img src={block.src} alt={block.alt} className="w-full rounded-lg shadow-lg" />
                                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">{block.alt}</figcaption>
                                    </figure>
                                );
                            case 'quote':
                                return (
                                    <blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-10 italic text-xl text-gray-800 bg-gray-50 rounded-r-lg">
                                        "{block.text}"
                                    </blockquote>
                                );
                            case 'highlight':
                                return (
                                    <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8 flex items-start">
                                        <span className="text-yellow-600 font-bold mr-2">TIP:</span>
                                        <p className="text-gray-800 m-0">{block.text}</p>
                                    </div>
                                );
                            case 'list':
                                return (
                                    <ul key={index} className="list-disc pl-6 space-y-2 mb-8 text-gray-700 marker:text-primary">
                                        {block.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            default:
                                return null;
                        }
                    })}

                    {/* Divider */}
                    <hr className="my-12 border-gray-200" />

                    {/* 5. Sub Conclusion / Insight */}
                    <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100 mb-12">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Key Takeaway</h3>
                        <p className="text-gray-600 italic">
                            {post.conclusion}
                        </p>
                    </div>

                    {/* Share & Tag Area (Optional embellishment) */}
                    <div className="flex justify-between items-center mb-16">
                        <Link to="/blog" className="flex items-center text-primary font-bold hover:underline">
                            <ArrowLeft size={20} className="mr-2" /> Back to Blog
                        </Link>
                        <div className="flex space-x-4 text-gray-400">
                            <Share2 size={20} className="hover:text-gray-900 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* 6. CTA Ringan (Optional) */}
                {post.cta && (
                    <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Start Your Adventure</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{post.cta}</p>
                        <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
                            Book Now
                        </Link>
                    </div>
                )}

            </article>
        </div>
    );
};

export default Article;
