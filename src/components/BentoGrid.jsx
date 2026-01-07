import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Shield, Zap, Code, BarChart3 } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="bg-[#020617] py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for <span className="text-purple-400">Scale</span>.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Everything you need to build production-ready AI applications. 
              Deploy globally, secure instantly, and scale infinitely.
            </p>
          </motion.div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          
          {/* Card 1: Large Span */}
          <Card className="md:col-span-2">
            <CardHeader 
              icon={<Globe className="w-6 h-6 text-blue-400" />} 
              title="Global Edge Network" 
              desc="Deploy your models to 300+ edge locations worldwide."
            />
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
            <div className="absolute bottom-4 right-4 flex gap-2">
               {/* Decorative "Server Status" dots */}
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
            </div>
          </Card>

          {/* Card 2: Tall Span */}
          <Card className="md:row-span-2 bg-gradient-to-br from-purple-900/10 to-transparent">
            <CardHeader 
              icon={<Zap className="w-6 h-6 text-purple-400" />} 
              title="Instant Inference" 
              desc="Optimized for <10ms latency on all major LLMs."
            />
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {/* Abstract visualization */}
                <div className="w-40 h-40 border border-purple-500 rounded-full animate-[spin_10s_linear_infinite] border-t-transparent"></div>
                <div className="absolute w-32 h-32 border border-purple-400 rounded-full animate-[spin_5s_linear_infinite_reverse] border-b-transparent"></div>
             </div>
          </Card>

          {/* Card 3: Standard */}
          <Card>
            <CardHeader 
              icon={<Shield className="w-6 h-6 text-green-400" />} 
              title="Enterprise Security" 
              desc="SOC2 Type II certified. End-to-end encryption."
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-50"></div>
          </Card>

          {/* Card 4: Standard */}
          <Card>
             <CardHeader 
              icon={<Code className="w-6 h-6 text-orange-400" />} 
              title="API First" 
              desc="Drop-in compatibility with OpenAI and Anthropic SDKs."
            />
             <div className="p-6 mt-4 font-mono text-xs text-slate-500 bg-black/20 rounded-lg mx-6 border border-white/5">
                <p>import EsthAI</p>
                <p className="text-orange-400">await Esth.connect()</p>
             </div>
          </Card>

           {/* Card 5: Wide Span */}
           <Card className="md:col-span-2">
             <div className="flex flex-col md:flex-row h-full">
                <div className="p-8 flex-1">
                   <CardHeader 
                    icon={<BarChart3 className="w-6 h-6 text-pink-400" />} 
                    title="Real-time Analytics" 
                    desc="Monitor token usage, costs, and latency in real-time."
                   />
                </div>
                <div className="flex-1 relative overflow-hidden bg-white/5 border-l border-white/5">
                   {/* Fake Chart Bars */}
                   <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-8 pb-8 h-32 gap-2">
                      {[40, 70, 50, 90, 60, 80].map((h, i) => (
                         <motion.div 
                           key={i}
                           initial={{ height: 0 }}
                           whileInView={{ height: `${h}%` }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           className="w-full bg-gradient-to-t from-pink-500/50 to-pink-500/10 rounded-t-sm"
                         />
                      ))}
                   </div>
                </div>
             </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

// --- Sub-Components for the Card Effect ---

const Card = ({ children, className = "" }) => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.current = clientX - left;
    mouseY.current = clientY - top;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 ${className}`}
    >
      {/* 1. Spotlight Overlay (Reveals border) */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX.current}px ${mouseY.current}px, rgba(255,255,255,0.1), transparent 40%)`
        }}
      />
      
      {/* 2. Inner Content */}
      <div className="relative h-full">
         {children}
      </div>

    </motion.div>
  );
};

const CardHeader = ({ title, desc, icon }) => (
  <div className="p-8">
    <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{desc}</p>
  </div>
);

export default BentoGrid;