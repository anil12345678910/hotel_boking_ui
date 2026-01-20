import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import {
    Menu, X, Calendar, Users, Star,
    MapPin, Wifi, Coffee, Utensils,
    ArrowRight, CheckCircle, Smartphone,
    Facebook, Instagram, Twitter, Gem, ChevronRight
} from 'lucide-react';



const Navigation = ({ isScrolled, setIsMobileMenuOpen, isMobileMenuOpen, openBooking }) => {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Suites', href: '#rooms' },
        { name: 'Dining', href: '#dining' },
        { name: 'Ayurveda', href: '#wellness' },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-gray-100'
                    : 'bg-transparent py-6 border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-3 group">
                        <div className={`w-10 h-10 border rounded-sm flex items-center justify-center font-serif font-bold text-2xl transition-all duration-500 ${isScrolled ? 'border-brand-dark text-brand-dark group-hover:bg-brand-dark group-hover:text-white' : 'border-white text-white bg-white/10 backdrop-blur-sm'}`}>
                            A
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-serif text-xl font-bold tracking-tight leading-none transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                                ANANTA
                            </span>
                            <span className={`text-[0.6rem] uppercase tracking-[0.2em] font-medium transition-colors ${isScrolled ? 'text-brand-gold' : 'text-white/80'}`}>
                                Heritage Udaipur
                            </span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-xs tracking-[0.2em] uppercase font-bold hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all hover:after:w-full ${isScrolled ? 'text-brand-dark' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={openBooking}
                            className={`${isScrolled ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'} px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-md`}
                        >
                            Book Stay
                        </button>
                    </div>

                    <button
                        className="md:hidden text-brand-gold"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-brand-dark' : 'text-white'} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-0 left-0 w-full z-[45] bg-brand-dark text-white flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-serif text-3xl hover:text-brand-gold transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => { setIsMobileMenuOpen(false); openBooking(); }}
                            className="mt-8 px-8 py-3 bg-brand-gold text-white text-lg font-serif"
                        >
                            Reserve Your Stay
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Hero = ({ openBooking }) => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 200]);
    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent z-10" />
                <img
                    src="/src/assets/images/hero.jpg"
                    alt="Udaipur Palace Hotel"
                    className="w-full h-full object-cover scale-105"
                />
            </motion.div>

            <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto mt-[-50px]">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <div className="h-[1px] w-12 bg-white/60"></div>
                    <span className="text-brand-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold shadow-black drop-shadow-md">Estd. 1920</span>
                    <div className="h-[1px] w-12 bg-white/60"></div>
                </motion.div>

                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-medium leading-[0.9] mb-8"
                >
                    Royal <span className="italic text-brand-gold">Heritage</span> <br /> Awaits
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.8 }}
                    className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed font-serif tracking-wide"
                >
                    An sanctuary of Rajputana grandeur in the heart of the City of Lakes.
                </motion.p>
            </div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, type: 'spring', stiffness: 50 }}
                className="absolute bottom-8 md:bottom-16 w-[95%] md:w-auto z-30"
            >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full flex flex-col md:flex-row gap-2 items-center shadow-2xl">
                    <div className="flex gap-4 px-6 py-3 border-b md:border-b-0 md:border-r border-white/20">
                        <div className="text-left">
                            <span className="block text-[10px] uppercase tracking-wider text-brand-gold font-bold">Check In</span>
                            <span className="text-white font-serif">12 Feb 2026</span>
                        </div>
                        <Calendar className="text-white/50" />
                    </div>
                    <div className="flex gap-4 px-6 py-3 border-b md:border-b-0 md:border-r border-white/20">
                        <div className="text-left">
                            <span className="block text-[10px] uppercase tracking-wider text-brand-gold font-bold">Check Out</span>
                            <span className="text-white font-serif">15 Feb 2026</span>
                        </div>
                        <Calendar className="text-white/50" />
                    </div>
                    <div className="flex gap-4 px-6 py-3 md:pr-8">
                        <div className="text-left">
                            <span className="block text-[10px] uppercase tracking-wider text-brand-gold font-bold">Guests</span>
                            <span className="text-white font-serif">2 Adults</span>
                        </div>
                        <Users className="text-white/50" />
                    </div>
                    <button
                        onClick={openBooking}
                        className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors w-full md:w-auto"
                    >
                        Check Availability
                    </button>
                </div>
            </motion.div>
        </header>
    );
};



const HotelLandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-[100]"
                style={{ scaleX }}
            />

            <div className="font-sans text-brand-dark overflow-x-hidden selection:bg-brand-gold selection:text-white bg-brand-cream">
                <Navigation
                    isScrolled={isScrolled}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen={isMobileMenuOpen}
                    openBooking={() => { }}
                />

                <Hero openBooking={() => { }} />

                <section className="py-20 px-6 md:px-12 bg-brand-cream relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <img src="/src/assets/images/arabesque.png" alt="" className="w-[500px]" />
                    </div>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-[1px] bg-brand-gold"></div>
                                <h4 className="text-brand-dark tracking-[0.2em] uppercase text-xs font-bold">100 Years of Royalty</h4>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-brand-dark leading-[1.1]">
                                Where Heritage <br /> Meets <span className="text-brand-gold italic">Luxury</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                                <p>
                                    Standing majestically on the banks of Lake Pichola, <strong className="text-brand-dark font-medium">Ananta Heritage</strong> is more than a hotel—it is a living legacy of the Mewar dynasty.
                                </p>
                                <p>
                                    Every stone tells a story, every corridor echoes with history. Renovated to perfection, we blend the architectural marvels of the 19th century with the sophisticated comforts of the modern world.
                                </p>
                            </div>
                            <div className="mt-12 flex gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif text-brand-gold">54</span>
                                    <span className="text-xs uppercase tracking-widest mt-2 border-t border-brand-dark/20 pt-2">Royal Suites</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif text-brand-gold">3</span>
                                    <span className="text-xs uppercase tracking-widest mt-2 border-t border-brand-dark/20 pt-2">Restaurants</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif text-brand-gold">15</span>
                                    <span className="text-xs uppercase tracking-widest mt-2 border-t border-brand-dark/20 pt-2">Awards</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                className="relative z-10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    src="/src/assets/images/hotel-2.jpg"
                                    className="w-full h-[600px] object-cover shadow-2xl rounded-sm"
                                    alt="Palace Interior"
                                />
                            </motion.div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-dark p-6 z-20 flex flex-col justify-center items-center text-center shadow-xl">
                                <Star className="text-brand-gold mb-2" fill="#d4af37" />
                                <p className="text-white font-serif text-xl italic leading-tight">"Best Heritage Hotel 2025"</p>
                                <span className="text-white/50 text-xs uppercase tracking-widest mt-2">Ananta Heritage</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="rooms" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-20 px-6">
                            <div className="max-w-xl">
                                <span className="text-brand-gold tracking-[0.2em] uppercase text-xs font-bold">Accommodations</span>
                                <h2 className="text-5xl font-serif mt-4 text-brand-dark">Suites & Havelis</h2>
                            </div>
                            <a href="#" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-xs font-bold border-b border-gray-300 pb-2 hover:border-brand-gold transition-all">
                                View All Rooms <ArrowRight size={14} />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Lake View Haveli",
                                    price: "₹18,000",
                                    desc: "Panoramic views of the lake with authentic Jharokha seating.",
                                    image: "/src/assets/images/hotel-1.jpg"
                                },
                                {
                                    title: "Maharaja Royal Suite",
                                    price: "₹35,000",
                                    desc: "Expansive living spaces adorned with frescoes and crystal chandeliers.",
                                    image: "/src/assets/images/hotel-2.jpg"
                                },
                                {
                                    title: "Heritage Garden Villa",
                                    price: "₹25,000",
                                    desc: "Private courtyard access with a plunge pool and outdoor shower.",
                                    image: "/src/assets/images/hotel-3.jpg"
                                }
                            ].map((room, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="overflow-hidden relative h-[500px] mb-8 bg-gray-100">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                        <div className="absolute top-6 right-6">
                                            <span className="bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-widest uppercase">
                                                {room.price} <span className="text-gray-400 font-normal">/ Night</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-serif mb-3 text-brand-dark group-hover:text-brand-gold transition-colors">{room.title}</h3>
                                        <p className="text-gray-500 mb-6 font-light leading-relaxed">{room.desc}</p>
                                        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform duration-300">
                                            Book This Suite <ChevronRight size={14} className="text-brand-gold" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 flex justify-center md:hidden">
                            <a href="#" className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold border-b border-gray-300 pb-2 hover:border-brand-gold transition-all">
                                View All Rooms <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-brand-dark text-white relative">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <span className="text-brand-gold tracking-[0.2em] uppercase text-xs font-bold">Curated Experiences</span>
                                <h2 className="text-5xl font-serif mt-6 mb-8 leading-tight">We Craft <br /> Memories.</h2>
                                <p className="text-gray-400 font-light text-lg leading-relaxed mb-10">
                                    From the moment you arrive, every detail is meticulously planned. Whether it's a private boat ride on Pichola or a spa therapy using ancient Vedic oils, your stay is our masterpiece.
                                </p>
                                <button className="border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all">
                                    Explore Experiences
                                </button>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                                {[
                                    { icon: Utensils, title: "Royal Dining", desc: "Authentic Mewari cuisine served under the stars." },
                                    { icon: Gem, title: "Jiva Spa", desc: "Rejuvenate with therapies inspired by Indian royalty." },
                                    { icon: MapPin, title: "Heritage Walks", desc: "Guided tours through the old city's hidden gems." },
                                    { icon: Star, title: "Cultural Evenings", desc: "Live folk music and Ghoomar dance performances." },
                                ].map((feature, i) => (
                                    <div key={i} className="bg-[#1a1a1a] p-12 hover:bg-[#222] transition-colors group">
                                        <feature.icon size={40} className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                                        <h3 className="text-2xl font-serif mb-3">{feature.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <footer id="footer" className="bg-[#111] text-white pt-24 pb-12 border-t border-white/10 font-sans">
                    <div className="container mx-auto px-6">

                        <div className="flex flex-col lg:flex-row justify-between items-end border-b border-white/10 pb-16 mb-16 gap-10">
                            <div className="max-w-lg">
                                <span className="text-brand-gold tracking-[0.2em] uppercase text-xs font-bold mb-4 block">Newsletter</span>
                                <h3 className="text-3xl font-serif mb-4 text-white">Join our guest list</h3>
                                <p className="text-gray-400 mb-8 font-light leading-relaxed">Be the first to receive updates on seasonal offers, exclusive events, and the stories of Ananta.</p>
                                <form className="flex flex-col sm:flex-row gap-0 w-full" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="bg-white/5 border border-white/10 px-6 py-4 outline-none w-full sm:w-80 text-white placeholder:text-gray-600 focus:border-brand-gold transition-colors"
                                    />
                                    <button className="bg-brand-gold text-brand-dark px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors whitespace-nowrap">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                            <div className="hidden lg:block text-right">
                                <div className="w-12 h-12 border border-brand-gold flex items-center justify-center font-serif font-bold text-xl text-brand-gold mb-4 ml-auto">
                                    A
                                </div>
                                <div className="font-serif text-2xl font-bold mb-1 text-white">ANANTA</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Heritage Udaipur</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-sm">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-gold">Address</h4>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        Lake Pichola, The Oberoi Rd,<br />
                                        Udaipur, Rajasthan<br />
                                        India 313001
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-gold">Contact</h4>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        <a href="tel:+919737315326" className="hover:text-white transition-colors block mb-2">+91 97373 15326</a>
                                        <a href="mailto:patelanil311@gmail.com" className="hover:text-white transition-colors block">patelanil311@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">Explore</h4>
                                <ul className="space-y-4 text-gray-400 font-light">
                                    <li><a href="#rooms" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Suites & Havelis</a></li>
                                    <li><a href="#dining" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Royal Dining</a></li>
                                    <li><a href="#wellness" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Jiva Spa</a></li>
                                    <li><a href="#experiences" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Curated Experiences</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">About Us</h4>
                                <ul className="space-y-4 text-gray-400 font-light">
                                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Our History</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>The Mewar Legacy</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Awards & Recognition</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Sustainability</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-300"></span>Careers</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">Legal</h4>
                                <ul className="space-y-4 text-gray-400 font-light">
                                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-6">
                            <p>&copy; 2026 Ananta Heritage. All Rights Reserved.</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all group">
                                    <Instagram size={16} className="text-gray-400 group-hover:text-brand-dark transition-colors" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all group">
                                    <Facebook size={16} className="text-gray-400 group-hover:text-brand-dark transition-colors" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all group">
                                    <Twitter size={16} className="text-gray-400 group-hover:text-brand-dark transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default HotelLandingPage;
