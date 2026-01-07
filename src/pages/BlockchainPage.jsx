import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cuboid, Link as LinkIcon, ShieldCheck, Database, ArrowRight, Layers, Coins, Cpu, Lock, 
  FileCode, Server, Globe, Zap, Vote, TrendingUp, Box, Gamepad2, ChevronRight, Workflow 
} from 'lucide-react';
import CryptoNetworkBg from '../components/CryptoNetworkBg';

const BlockchainPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="pt-20 min-h-screen bg-[#020617] overflow-hidden selection:bg-cyan-500/30 relative">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
         <div className="w-full h-full pointer-events-auto"> 
            <CryptoNetworkBg />
         </div>
         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020617] to-transparent"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            Web3 Infrastructure Live
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Trustless <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
              Intelligence
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            The first decentralized compute network powering the next generation of AI. 
            <span className="text-cyan-400"> Verifiable</span>, <span className="text-purple-400">Immutable</span>, and <span className="text-emerald-400">Scalable</span>.
          </motion.p>
        </div>

        <FloatingBlock className="top-1/4 left-[10%] border-cyan-500/20" delay={0} />
        <FloatingBlock className="bottom-1/3 right-[10%] border-purple-500/20" delay={2} />
      </section>

      {/* 2. LIVE NETWORK VISUALIZATION */}
      <section className="py-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-xl p-8 h-[500px] flex flex-col items-center justify-center overflow-hidden group"
            >
               <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
               <div className="relative z-10 w-full max-w-sm aspect-square">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.5)] z-20">
                     <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <SatelliteNode angle={0} icon={<Database />} color="cyan" delay={0} />
                  <SatelliteNode angle={120} icon={<Lock />} color="emerald" delay={1} />
                  <SatelliteNode angle={240} icon={<ShieldCheck />} color="pink" delay={2} />
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 visible">
                    <motion.circle cx="50%" cy="50%" r="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                    <motion.circle 
                      cx="50%" cy="50%" r="120" stroke="rgba(6,182,212,0.5)" strokeWidth="2" fill="none"
                      strokeDasharray="10 20"
                      animate={{ strokeDashoffset: [0, 100] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
               </div>
            </motion.div>

            <div className="space-y-8">
               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Protocol Layer</h2>
                 <p className="text-lg text-slate-400">
                   NexusAI bridges the gap between on-chain data and off-chain compute.
                 </p>
               </motion.div>

               <div className="space-y-6">
                  <FeatureRow icon={<Database className="text-cyan-400" />} title="Decentralized Storage" desc="Model weights are sharded and stored across a distributed network of nodes." />
                  <FeatureRow icon={<ShieldCheck className="text-emerald-400" />} title="Proof of Inference" desc="Cryptographic verification ensures that the AI model ran exactly as intended." />
                  <FeatureRow icon={<Layers className="text-purple-400" />} title="Tokenized Compute" desc="A liquid marketplace where GPU power is traded as a programmable asset." />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. [NEW] BLOCKCHAIN ARSENAL SECTION */}
      <BlockchainArsenalSection />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. CASE STUDIES SECTION */}
      <CaseStudiesSection />

      {/* 6. PROJECT CARDS */}
      <section className="py-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
             <h2 className="text-4xl font-bold text-white mb-4">Ecosystem Projects</h2>
             <p className="text-slate-400">Live dApps running on the Nexus Protocol.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
             <TiltCard title="Nexus Chain" tag="L2 Rollup" desc="Zero-knowledge rollup optimized for high-throughput AI inference verification." color="cyan" />
             <TiltCard title="DeCompute DAO" tag="Marketplace" desc="Peer-to-peer GPU rental platform. Earn $NXS by providing compute." color="emerald" />
             <TiltCard title="VeriModel" tag="Security" desc="On-chain registry for AI model provenance and copyright auditing." color="purple" />
          </div>
        </div>
      </section>

    </div>
  );
};

// --- NEW COMPONENT: Blockchain Arsenal ---
const BlockchainArsenalSection = () => {
  const stack = [
    {
      category: "L1 & L2 Chains",
      icon: <Globe className="w-5 h-5" />,
      color: "cyan",
      tools: ["Ethereum", "Solana", "Polygon", "Avalanche", "Arbitrum", "Optimism"]
    },
    {
      category: "Smart Contracts",
      icon: <FileCode className="w-5 h-5" />,
      color: "purple",
      tools: ["Solidity", "Rust", "Hardhat", "Foundry", "Truffle", "OpenZeppelin"]
    },
    {
      category: "Infrastructure",
      icon: <Server className="w-5 h-5" />,
      color: "emerald",
      tools: ["Alchemy", "Infura", "The Graph", "IPFS", "Chainlink", "Arweave"]
    },
    {
      category: "Wallets & Identity",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "pink",
      tools: ["MetaMask", "WalletConnect", "RainbowKit", "ENS", "Privy", "Dynamic"]
    }
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Decentralized Stack</h2>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
             Building on the most robust protocols to ensure security, speed, and interoperability.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stack.map((group, idx) => (
            <ArsenalCard key={idx} {...group} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArsenalCard = ({ category, icon, color, tools, delay }) => {
  const colors = {
    cyan: "border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5",
    purple: "border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5",
    emerald: "border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5",
    pink: "border-pink-500/20 hover:border-pink-500/50 bg-pink-500/5",
  };

  const pillColors = {
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    pink: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 group ${colors[color]}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {React.cloneElement(icon, { className: `w-6 h-6 text-${color}-400` })}
        </div>
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <span 
            key={i} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all cursor-default hover:bg-white/10 ${pillColors[color]}`}
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// --- SERVICES SECTION COMPONENT ---
const ServicesSection = () => {
  const services = [
    { title: "Smart Contract Audits", desc: "Rigorous formal verification and AI-assisted vulnerability scanning for Solidity and Rust contracts.", icon: <FileCode className="w-6 h-6" />, color: "cyan" },
    { title: "Node Infrastructure", desc: "Enterprise-grade RPC nodes and validator infrastructure with 99.99% uptime guarantees.", icon: <Server className="w-6 h-6" />, color: "purple" },
    { title: "ZK-Rollup Integration", desc: "Scale your dApp with our plug-and-play Zero Knowledge proof generation API.", icon: <Zap className="w-6 h-6" />, color: "emerald" },
    { title: "Tokenomics Design", desc: "Mathematical modeling and simulation of crypto-economic incentives and vesting schedules.", icon: <Coins className="w-6 h-6" />, color: "cyan" },
    { title: "DAO Governance", desc: "Setup and tooling for decentralized autonomous organizations, including voting and treasury management.", icon: <Vote className="w-6 h-6" />, color: "purple" },
    { title: "Cross-Chain Bridges", desc: "Secure interoperability protocols connecting your assets across Ethereum, Solana, and Cosmos.", icon: <Globe className="w-6 h-6" />, color: "emerald" },
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto bg-gradient-to-b from-transparent to-[#0A0A0A]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enterprise Web3 Services</h2>
           <p className="text-xl text-slate-400 max-w-2xl">
             We don't just build the chain; we build the future on top of it.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${s.color}-500/10 text-${s.color}-400 group-hover:scale-110 transition-transform`}>
                 {s.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{s.title}</h3>
               <p className="text-slate-400 leading-relaxed text-sm">
                 {s.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CASE STUDIES SECTION COMPONENT ---
const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 0,
      client: "Liquid Markets",
      title: "DeFi Yield Aggregator",
      desc: "Optimized gas fees by 60% using our L2 batching service.",
      stat: "$2.4B",
      statLabel: "TVL Secured",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "cyan"
    },
    {
      id: 1,
      client: "TraceChain",
      title: "Global Supply Chain",
      desc: "Immutable tracking for pharmaceutical shipments across 4 continents.",
      stat: "0%",
      statLabel: "Counterfeit Rate",
      icon: <Box className="w-6 h-6" />,
      color: "emerald"
    },
    {
      id: 2,
      client: "PixelVerse",
      title: "Web3 Gaming",
      desc: "Supported 100k daily active users with sub-second on-chain asset minting.",
      stat: "1M+",
      statLabel: "Daily Txns",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "purple"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]/50 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: List */}
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
               Impact at Scale
             </h2>
             <div className="space-y-4">
               {cases.map((item, index) => (
                 <div 
                   key={index}
                   onClick={() => setActiveCase(index)}
                   className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 group ${
                     activeCase === index 
                       ? "bg-white/10 border-white/20 shadow-2xl" 
                       : "bg-transparent border-transparent hover:bg-white/5"
                   }`}
                 >
                    <div className="flex items-center justify-between mb-2">
                       <h3 className={`text-xl font-bold transition-colors ${activeCase === index ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                         {item.title}
                       </h3>
                       {activeCase === index && <ChevronRight className="text-white" />}
                    </div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative h-[500px] rounded-3xl border border-white/10 bg-[#020617] p-8 flex flex-col justify-between overflow-hidden">
             
             {/* Background Glow */}
             <AnimatePresence mode="wait">
               <motion.div 
                 key={activeCase}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.2 }}
                 exit={{ opacity: 0 }}
                 className={`absolute inset-0 bg-gradient-to-br from-${cases[activeCase].color}-500 to-transparent`}
               />
             </AnimatePresence>

             {/* Content */}
             <div className="relative z-10 h-full flex flex-col">
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeCase}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.3 }}
                     className="flex flex-col h-full"
                   >
                      <div className="flex items-center gap-3 mb-6">
                         <div className={`p-3 rounded-xl bg-white/10 text-${cases[activeCase].color}-400`}>
                            {cases[activeCase].icon}
                         </div>
                         <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                           CASE STUDY: {cases[activeCase].client}
                         </span>
                      </div>
                      
                      <div className="mt-4 mb-8">
                         <div className={`text-7xl font-bold text-${cases[activeCase].color}-400 mb-2`}>
                            {cases[activeCase].stat}
                         </div>
                         <div className="text-xl text-white">
                            {cases[activeCase].statLabel}
                         </div>
                      </div>

                      {/* Crypto Chart Visualization */}
                      <div className="h-32 w-full mt-auto mb-8 opacity-50">
                         <div className="flex items-end justify-between h-full gap-2">
                            {[40, 70, 45, 90, 60, 85, 55, 95].map((h, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ height: "10%" }}
                                 animate={{ height: `${h}%` }}
                                 transition={{ delay: i * 0.05, duration: 0.5 }}
                                 className={`w-full rounded-t-sm bg-${cases[activeCase].color}-500`}
                               />
                            ))}
                         </div>
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/10">
                        <Link to={`/blockchain/case-study/${cases[activeCase].id}`}>
                            <button className={`group flex items-center gap-2 text-${cases[activeCase].color}-400 font-bold hover:text-white transition-colors`}>
                                View On-Chain Data 
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                      </div>

                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- HELPER SUB-COMPONENTS ---
const FloatingBlock = ({ className, delay }) => (
  <motion.div 
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute w-24 h-24 rounded-3xl border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm z-0 ${className}`}
  />
);

const SatelliteNode = ({ angle, icon, color, delay }) => {
  const colors = {
    cyan: "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-cyan-500/30",
    emerald: "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-emerald-500/30",
    pink: "bg-pink-500/20 border-pink-500 text-pink-400 shadow-pink-500/30",
  };
  return (
    <motion.div
      className={`absolute w-16 h-16 rounded-xl border flex items-center justify-center backdrop-blur-md shadow-lg z-20 ${colors[color]}`}
      style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)` }}
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: delay * 0.2, type: "spring" }}
    >
      {icon}
    </motion.div>
  );
};

const FeatureRow = ({ icon, title, desc }) => (
  <motion.div whileHover={{ x: 10 }} className="group flex gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
    <div className="mt-1 h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-colors">{icon}</div>
    <div><h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3><p className="text-slate-400 leading-relaxed">{desc}</p></div>
  </motion.div>
);

const TiltCard = ({ title, tag, desc, color }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5); y.set((clientY - top) / height - 0.5);
  }
  function handleMouseLeave() { x.set(0); y.set(0); }
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const colors = { cyan: "from-cyan-500", emerald: "from-emerald-500", purple: "from-purple-500" };
  return (
    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative h-[400px] rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 group z-10">
      <div style={{ transform: "translateZ(50px)" }} className="absolute inset-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between p-6">
        <div>
           <div className="flex justify-between items-start mb-6"><div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[color]} to-transparent opacity-80 blur-md`}></div><span className="font-mono text-xs text-white/50 border border-white/10 px-2 py-1 rounded-full uppercase">{tag}</span></div>
           <h3 className="text-3xl font-bold text-white mb-4">{title}</h3><p className="text-slate-400 leading-relaxed">{desc}</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">Explore dApp <ArrowRight className="w-4 h-4" /></div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${colors[color]} to-transparent opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
    </motion.div>
  );
};

export default BlockchainPage;