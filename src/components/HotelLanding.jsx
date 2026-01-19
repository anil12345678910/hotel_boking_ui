import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Calendar, Users, Star, ArrowRight, Menu, X, MapPin,
    Wifi, Coffee, Waves as Pool, Tv
} from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className={`text-2xl font-bold font-serif tracking-tighter ${scrolled || mobileMenuOpen ? 'text-blue-900' : 'text-white'
                    }`}>
                    LuxeStay<span className="text-blue-500">.</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {['Destinations', 'Hotels', 'Flights', 'Offers'].map((item) => (
                        <a key={item} href="#" className={`font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                            }`}>
                            {item}
                        </a>
                    ))}
                    <Button variant={scrolled ? 'primary' : 'outline'} className="py-2 px-5 text-sm">
                        Sign In
                    </Button>
                </div>

                <button
                    className="md:hidden p-2 rounded-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ?
                        <X className={scrolled ? 'text-slate-900' : 'text-white'} /> :
                        <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
                    }
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {['Destinations', 'Hotels', 'Flights', 'Offers'].map((item) => (
                                <a key={item} href="#" className="text-slate-700 font-medium py-2">
                                    {item}
                                </a>
                            ))}
                            <Button variant="primary" className="w-full">Sign In</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Hotel"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/30" />
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-20 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
                        Discover Your Next <br />
                        <span className="text-blue-400 italic">Extraordinary</span> Escape
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
                        Experience world-class hospitality in the most breathtaking locations across the globe.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {/* Search Widget Component would go here, effectively defined below for modularity */}
                    <SearchWidget />
                </motion.div>
            </div>
        </div>
    );
};

const SearchWidget = () => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                <div className="px-4 py-2 flex items-center gap-3">
                    <MapPin className="text-blue-500 w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col text-left">
                        <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</label>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="outline-none text-slate-800 font-medium placeholder-slate-400 w-full"
                        />
                    </div>
                </div>

                <div className="px-4 py-2 flex items-center gap-3">
                    <Calendar className="text-blue-500 w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col text-left">
                        <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Check-in - Check-out</label>
                        <input
                            type="text"
                            placeholder="Add dates"
                            className="outline-none text-slate-800 font-medium placeholder-slate-400 w-full"
                        />
                    </div>
                </div>

                <div className="px-4 py-2 flex items-center gap-3">
                    <Users className="text-blue-500 w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col text-left">
                        <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Guests</label>
                        <input
                            type="text"
                            placeholder="Add guests"
                            className="outline-none text-slate-800 font-medium placeholder-slate-400 w-full"
                        />
                    </div>
                </div>

            </div>

            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-14 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span className="md:hidden">Search</span>
            </Button>
        </div>
    );
};

const HotelCard = ({ hotel, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {hotel.rating}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{hotel.name}</h3>
                        <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            {hotel.location}
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 my-4 border-t border-slate-50 pt-4">
                    <div className="flex flex-col items-center">
                        <Wifi className="w-4 h-4 text-slate-400 mb-1" />
                        <span className="text-[10px] text-slate-400 uppercase">Wifi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Pool className="w-4 h-4 text-slate-400 mb-1" />
                        <span className="text-[10px] text-slate-400 uppercase">Pool</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Tv className="w-4 h-4 text-slate-400 mb-1" />
                        <span className="text-[10px] text-slate-400 uppercase">TV</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-2xl font-bold text-slate-900">${hotel.price}</span>
                        <span className="text-slate-500 text-sm"> / night</span>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-100 hover:bg-blue-50 py-2 [&>*]:text-sm">
                        Details
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

const FeaturedHotels = () => {
    const hotels = [
        {
            id: 1,
            name: "The Royal Atlantis",
            location: "Dubai, UAE",
            price: 450,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 2,
            name: "Grand Hotel Tremezzo",
            location: "Lake Como, Italy",
            price: 620,
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 3,
            name: "Six Senses",
            location: "Bali, Indonesia",
            price: 320,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1449&q=80"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
                    >
                        Exclusive Stays
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-slate-900 mt-2 mb-4 font-serif"
                    >
                        Featured Luxury Destinations
                    </motion.h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Handpicked distinct hotels that offer an unforgettable experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotels.map((hotel, idx) => (
                        <HotelCard key={hotel.id} hotel={hotel} index={idx} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="ghost" className="gap-2">
                        View All Hotels <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: Star, title: "5-Star Service", desc: "Experience the highest standard of hospitality and care." },
                        { icon: MapPin, title: "Prime Locations", desc: "Stay in the heart of the city or hidden natural gems." },
                        { icon: Calendar, title: "Easy Booking", desc: "Seamless reservation process with flexible cancellation." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-500">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold font-serif text-white tracking-tighter mb-4 block">
                            LuxeStay<span className="text-blue-500">.</span>
                        </a>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Curating the world's most exceptional hotels for the discerning traveler.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Destinations</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Hotels</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Offers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>support@luxestay.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; 2024 LuxeStay Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function HotelLanding() {
    return (
        <div className="font-sans text-slate-900 bg-white min-h-screen">
            <Navbar />
            <Hero />
            <FeaturedHotels />
            <Features />
            <Footer />
        </div>
    );
}
