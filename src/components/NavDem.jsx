import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, ChevronRight, Search, Sparkles, Brain, Cpu, ShieldCheck, Zap, Activity, Layers, Database, Globe, Code, Terminal, FileCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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

  // 1. DATA STRUCTURE UPDATE: Added 'desc' for the Mega Menu look
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
        { title: "Training Engine", desc: "Automated hyperparameter optimization", icon: <Brain className="w-5 h-5" />, href: "#hero" },
        { title: "Architectures", desc: "Pre-configured LLM & Vision models", icon: <Cpu className="w-5 h-5" />, href: "#models" },
        { title: "Services", desc: "Managed fine-tuning pipelines", icon: <Bot className="w-5 h-5" />, href: "#models" },
        { title: "Case Studies", desc: "Real-world production metrics", icon: <Activity className="w-5 h-5" />, href: "#cases" },
      ] 
    },
    { 
      name: "AI", 
      path: "/ai",
      sections: [
        { title: "Multimodal", desc: "Text, Image, and Audio generation", icon: <Sparkles className="w-5 h-5" />, href: "#hero" },
        { title: "Prompt Engine", desc: "Low-latency inference API", icon: <Terminal className="w-5 h-5" />, href: "#models" },
        { title: "Agents", desc: "Autonomous workflow automation", icon: <Bot className="w-5 h-5" />, href: "#models" },
        { title: "Integration", desc: "SDKs for Python and Node.js", icon: <Code className="w-5 h-5" />, href: "#aidev" },
      ] 
    },
    { 
      name: "Blockchain", 
      path: "/blockchain",
      sections: [
        { title: "Protocol Layer", desc: "L2 Rollups and ZK-Proofs", icon: <ShieldCheck className="w-5 h-5" />, href: "#protocol" },
        { title: "Ecosystem", desc: "DeFi and DAO governance tools", icon: <Globe className="w-5 h-5" />, href: "#projects" },
        { title: "Smart Contracts", desc: "Audited Solidity templates", icon: <FileCode className="w-5 h-5" />, href: "#models" },
        { title: "Tokenomics", desc: "On-chain asset management", icon: <Zap className="w-5 h-5" />, href: "#cases" },
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
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div 
          className={`relative transition-all duration-300 ease-out flex items-center justify-between px-4
            ${scrolled 
              ? 'w-[90%] max-w-5xl h-14 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-purple-900/10' 
              : 'w-full max-w-7xl h-16 bg-transparent border-transparent'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group pl-2">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 overflow-hidden">
               <Sparkles className="w-4 h-4 text-white animate-pulse" />
               <div className="absolute inset-0 bg-white/20 group-hover:opacity-0 transition-opacity"></div>
            </div>
            <span className={`font-bold tracking-tight transition-colors ${scrolled ? 'text-lg' : 'text-xl'}`}>
              Esth<span className="text-violet-400">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm" onMouseLeave={() => setHoveredIndex(null)}>
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Link 
                  to={link.path}
                  className="relative px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full block"
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {location.pathname === link.path && (
                     <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-400 rounded-full"></span>
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>

                {/* --- MEGA MENU DROPDOWN --- */}
                <AnimatePresence>
                  {hoveredIndex === index && link.sections.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      // Changed: Much wider width, centered transform
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
                    >
                      {/* Invisible Bridge */}
                      <div className="absolute -top-6 left-0 w-full h-6 bg-transparent"></div>

                      {/* Sourcegraph-style Panel */}
                      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
                        
                        {/* Grid Layout: 2 Columns */}
                        <div className="grid grid-cols-2 gap-4">
                          {link.sections.map((section, i) => (
                            <Link 
                              key={i} 
                              to={`${link.path}${section.href}`}
                              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all"
                            >
                              {/* Icon Container */}
                              <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/5 text-violet-400 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-colors">
                                {section.icon}
                              </div>
                              
                              {/* Text Content */}
                              <div>
                                <div className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors flex items-center gap-1">
                                  {section.title}
                                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </div>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed group-hover:text-slate-400">
                                  {section.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Optional Footer Strip inside Menu */}
                        {/* <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500 px-2">
                           <span>Explore {link.name} Documentation</span>
                           <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">View All <ChevronRight className="w-3 h-3" /></span>
                        </div> */}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 pr-1">
             {/* Add search/buttons here if needed */}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-400 hover:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Menu Overlay (Unchanged logic, kept simpler) */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           className="fixed inset-x-4 top-24 p-4 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl z-40 shadow-2xl md:hidden"
         >
           <div className="flex flex-col gap-2">
             {navLinks.map((link) => (
               <div key={link.name}>
                 <Link 
                   to={link.path}
                   onClick={() => setIsOpen(false)}
                   className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-all"
                 >
                   <span className="font-medium">{link.name}</span>
                   <ChevronRight className="w-4 h-4 opacity-50" />
                 </Link>
                 
                 {/* Mobile Sub-links */}
                 {link.sections.length > 0 && (
                    <div className="pl-4 pb-2 grid grid-cols-1 gap-1">
                       {link.sections.map((section, i) => (
                          <Link 
                            key={i}
                            to={`${link.path}${section.href}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-violet-400"
                          >
                             <div className="scale-75 opacity-70">{section.icon}</div>
                             <span className="text-sm">{section.title}</span>
                          </Link>
                       ))}
                    </div>
                 )}
               </div>
             ))}
             <div className="h-px bg-white/10 my-2"></div>
             <button className="w-full py-3 rounded-xl bg-white text-black font-bold">
               Get Started
             </button>
           </div>
         </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;