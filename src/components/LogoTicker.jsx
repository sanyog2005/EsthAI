import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Layers, Command, Hexagon, Triangle } from 'lucide-react';

const logos = [
  { name: "Acme Corp", icon: <Bot /> },
  { name: "Quantum", icon: <Layers /> },
  { name: "Echo Valley", icon: <Command /> },
  { name: "Pulse AI", icon: <Hexagon /> },
  { name: "Apex", icon: <Triangle /> },
  { name: "Acme Corp", icon: <Bot /> },
  { name: "Quantum", icon: <Layers /> },
  { name: "Echo Valley", icon: <Command /> },
];

const LogoTicker = () => {
  return (
    <div className="py-10 bg-black border-y border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
          Trusted by innovative teams at
        </p>
        
        <div className="flex overflow-hidden relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

            <motion.div 
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-400 group cursor-pointer">
                   <span className="group-hover:text-white transition-colors">{logo.icon}</span>
                   <span className="text-xl font-bold group-hover:text-white transition-colors">{logo.name}</span>
                </div>
              ))}
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;