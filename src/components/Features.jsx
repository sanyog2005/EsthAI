import React, { useRef, useState } from 'react';
import { Cpu, Globe, Zap, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: "Neural Processing",
    desc: "Proprietary tensor algorithms that process data 10x faster than open-source models.",
    color: "from-purple-500/20 to-purple-500/0"
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Global Edge Network",
    desc: "Deploy instantly to 300+ regions. Zero-latency inference wherever your users are.",
    color: "from-blue-500/20 to-blue-500/0"
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Enterprise Security",
    desc: "SOC2 Type II compliant with end-to-end encryption for model weights and datasets.",
    color: "from-green-500/20 to-green-500/0"
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    title: "Real-time Inference",
    desc: "Optimized cold-start times of <50ms. Built for high-frequency trading and gaming.",
    color: "from-amber-500/20 to-amber-500/0"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Why top engineering teams <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              build on EsthAI
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Stop wrestling with infrastructure. Start shipping intelligence.
          </motion.p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual spotlight logic
const SpotlightCard = ({ feature, index }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-2xl border border-white/10 bg-[#0A0A0A]/50 overflow-hidden group"
    >
      {/* 1. The Moving Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* 2. Card Content */}
      <div className="relative h-full p-8 flex flex-col">
        {/* Icon with Glow */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {feature.icon}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {feature.desc}
        </p>

        {/* Learn More Link (Appears on Hover) */}
        <div className="flex items-center text-sm font-medium text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
           Learn more <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default Features;