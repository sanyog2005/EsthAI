import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, ChevronRight, Search, Sparkles, Brain, Cpu, ShieldCheck, Zap, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. YOUR ORIGINAL CONTENT (Restored)
  // Added "description" fields to match the UI style, but kept your titles/icons.
  const navLinks = [
    { 
      name: "Home", 
      path: "/",
      sections: [] 
    },
    { 
      name: "ML", 
      path: "/ml",
      sections: [
        { title: "Training Engine", description: "High-performance model training", icon: <Brain className="w-5 h-5" />, href: "#hero" },
        { title: "Architectures", description: "State-of-the-art model structures", icon: <Cpu className="w-5 h-5" />, href: "#models" },
        { title: "Services", description: "Scalable AI integration services", icon: <Bot className="w-5 h-5" />, href: "#models" },
        { title: "Case Studies", description: "Real-world implementation success", icon: <Activity className="w-5 h-5" />, href: "#cases" },
      ] 
    },
    { 
      name: "AI",
      path: "/ai",
      sections: [
        { title: "Multimodal", description: "Text, image, and audio processing", icon: <Brain className="w-5 h-5" />, href: "#hero" },
        { title: "Architectures", description: "Next-gen neural networks", icon: <Cpu className="w-5 h-5" />, href: "#models" },
        { title: "Services", description: "Custom AI solutions for enterprise", icon: <Bot className="w-5 h-5" />, href: "#models" },
        { title: "Case Studies", description: "Transformation stories", icon: <Activity className="w-5 h-5" />, href: "#cases" },
      ]
    },
    { 
      name: "Blockchain", 
      path: "/blockchain",
      sections: [
        { title: "Protocol Layer", description: "Base layer consensus mechanisms", icon: <ShieldCheck className="w-5 h-5" />, href: "#protocol" },
        { title: "Ecosystem", description: "DApps and smart contracts", icon: <Zap className="w-5 h-5" />, href: "#projects" },
        { title: "Services", description: "Blockchain consulting & audit", icon: <Bot className="w-5 h-5" />, href: "#models" },
        { title: "Case Studies", description: "DeFi and Web3 implementations", icon: <Activity className="w-5 h-5" />, href: "#cases" },
      ]
    },
    { 
  name: "NFTs", 
  path: "/nft",
  sections: [
    { title: "Featured Drops", description: "Base layer consensus mechanisms", icon: <ShieldCheck className="w-5 h-5" />, href: "#protocol" },
        { title: "Static JPEGs", description: "DApps and smart contracts", icon: <Zap className="w-5 h-5" />, href: "#projects" },
        { title: "Services", description: "Blockchain consulting & audit", icon: <Bot className="w-5 h-5" />, href: "#models" },
        { title: "Case Studies", description: "DeFi and Web3 implementations", icon: <Activity className="w-5 h-5" />, href: "#cases" },
  ] 
},
    { 
      name: "Contact", 
      path: "/contact",
      sections: []
    },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        {/* Main Navbar Bar */}
        <div className={`w-full max-w-7xl flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          
          {/* Logo (Restored EsthAI) */}
          <Link to="/" className="flex items-center gap-2 group">
  {/* Replaced CSS div with Image */}
  <img 
    src={logoImg} 
    alt="EsthAI Logo" 
    className="w-35 h-12 rounded-lg object-cover" // Adjust w/h as needed
  />
  
  {/* <span className="font-bold tracking-tight text-xl text-white">
    Esth<span className="text-violet-400">AI</span>
  </span> */}
</Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center h-full gap-6">
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Link 
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    hoveredIndex === index ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
                {/* Active Indicator Line */}
                {hoveredIndex === index && (
                    <motion.div 
                        layoutId="nav-line"
                        className="absolute bottom-5 left-0 right-0 h-[2px] bg-violet-400"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* <button className="text-sm font-medium text-slate-300 hover:text-white">Log in</button> */}
            <button className="text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
                Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-400 hover:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ===========================================
           MEGA MENU - FULL WIDTH CONTAINER 
           ===========================================
        */}
        <AnimatePresence>
          {hoveredIndex !== null && navLinks[hoveredIndex].sections.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full bg-[#0A0A0A] border-b border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Full Width Grid - No Sidebar
                   Adjusted to grid-cols-4 to spread your items nicely across the full width
                */}
                <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                    {navLinks[hoveredIndex].sections.map((section, i) => (
                      <Link 
                        key={i} 
                        to={`${navLinks[hoveredIndex].path}${section.href}`}
                        className="group flex items-start gap-3 p-3 -ml-3 rounded-lg hover:bg-white/5 transition-all"
                      >
                        <div className="mt-1 p-2 rounded-md bg-white/5 group-hover:bg-violet-500/20 text-slate-400 group-hover:text-violet-400 transition-colors">
                          {section.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {section.title}
                          </h4>
                          <p className="text-xs text-slate-500 group-hover:text-slate-400 mt-1 leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           className="fixed inset-0 top-16 bg-[#0A0A0A] z-40 overflow-y-auto md:hidden"
         >
           <div className="p-6 flex flex-col gap-6">
             {navLinks.map((link) => (
               <div key={link.name}>
                 <Link 
                   to={link.path}
                   onClick={() => setIsOpen(false)}
                   className="text-lg font-medium text-white block mb-4"
                 >
                   {link.name}
                 </Link>
                 
                 {link.sections.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 pl-2">
                       {link.sections.map((section, i) => (
                          <Link 
                            key={i}
                            to={`${link.path}${section.href}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                          >
                             <div className="text-violet-400">{section.icon}</div>
                             <div>
                                <div className="text-sm font-medium text-white">{section.title}</div>
                                <div className="text-xs text-slate-400">{section.description}</div>
                             </div>
                          </Link>
                       ))}
                    </div>
                 )}
               </div>
             ))}
           </div>
         </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;