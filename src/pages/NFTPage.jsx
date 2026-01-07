import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Hexagon, Palette, Tag, Globe, Wallet, Zap, Layers, Image as ImageIcon, 
  Ticket, Key, Music, Box, ArrowRight, ShieldCheck, ScanLine, TrendingUp, Activity, 
  Gamepad2, Brush, Coins, Database, Code, Server, Cpu
} from 'lucide-react';
import CryptoNetworkBg from '../components/CryptoNetworkBg'; 

const NFTPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] overflow-hidden selection:bg-pink-500/30 relative font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />
         <div className="opacity-30 h-full w-full">
            <CryptoNetworkBg />
         </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            Nexus Protocol V2.0
          </motion.div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter relative inline-block">
            Tokenize <br />
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 animate-gradient-x">
              Everything.
            </span>
            {/* Glow behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl -z-10" />
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 border-l-2 border-slate-800 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            The enterprise standard for dynamic NFTs. Mint millions of assets with 
            <span className="text-white font-semibold"> zero gas fees </span> 
            using our Compressed NFT API.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
             <button className="group relative px-8 py-4 rounded-xl bg-white text-black font-bold overflow-hidden transition-transform active:scale-95">
               <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative flex items-center gap-2">
                 Start Minting <Zap className="w-4 h-4 fill-black group-hover:rotate-12 transition-transform" />
               </div>
             </button>
          </div>
        </div>
      </section>

      {/* 2. LIVE MINTING TICKER */}
      <LiveMintTicker />

      {/* 3. FEATURED COLLECTIONS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
           <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div>
               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                 Featured Drops <TrendingUp className="text-green-400 w-8 h-8" />
               </h2>
               <p className="text-slate-400">Exclusive collections powered by Nexus Infrastructure.</p>
             </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8 perspective-1000">
              <HolographicCard 
                title="Cyber Punks Gen2" 
                floor="12.5" 
                volume="4.2K" 
                imageColor="from-pink-600 to-purple-800"
                id="#8291"
              />
              <HolographicCard 
                title="MetaVerse Land" 
                floor="2.1" 
                volume="18K" 
                imageColor="from-cyan-600 to-blue-800"
                id="#104A"
              />
              <HolographicCard 
                title="Gaming Artifacts" 
                floor="0.05" 
                volume="850" 
                imageColor="from-emerald-600 to-teal-800"
                id="#992X"
              />
           </div>
        </div>
      </section>

      {/* 4. [NEW] NFT ARSENAL SECTION */}
      <NFTArsenalSection />

      {/* 5. UTILITY & USE CASES */}
      <section className="py-24 relative z-10">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-20">
               <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-4 uppercase tracking-widest">
                  <Activity className="w-4 h-4" /> Protocol Utility
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Beyond Static JPEGs</h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                 Unlock the true potential of blockchain with dynamic, functional NFTs that react to data.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <UtilityCard 
                 icon={<Ticket className="w-6 h-6" />} 
                 title="Smart Ticketing" 
                 desc="Eliminate scalping with non-transferable soulbound tokens (SBTs)."
                 color="pink"
               />
               <UtilityCard 
                 icon={<Key className="w-6 h-6" />} 
                 title="Token Gating" 
                 desc="Grant access to exclusive Discord channels, websites, or events."
                 color="purple"
               />
               <UtilityCard 
                 icon={<Box className="w-6 h-6" />} 
                 title="Digital Twins" 
                 desc="Link physical luxury goods to digital assets for provenance."
                 color="cyan"
               />
               <UtilityCard 
                 icon={<Zap className="w-6 h-6" />} 
                 title="Dynamic Assets" 
                 desc="NFTs that evolve over time based on real-world data interactions."
                 color="emerald"
               />
               <UtilityCard 
                 icon={<Wallet className="w-6 h-6" />} 
                 title="Loyalty 2.0" 
                 desc="Replace points with tradable assets. Customers own their rewards."
                 color="pink"
               />
               <UtilityCard 
                 icon={<Music className="w-6 h-6" />} 
                 title="Royalty Splits" 
                 desc="Automated revenue sharing embedded directly in the contract."
                 color="purple"
               />
            </div>
         </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <ServicesSection />

      {/* 7. CASE STUDIES SECTION */}
      <CaseStudiesSection />

      {/* 8. INFRASTRUCTURE STATS */}
      <section className="py-20 border-y border-white/5 bg-[#050A1F] relative z-10">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0">
               <StatBox number="10M+" label="Assets Minted" icon={<Layers className="w-5 h-5" />} />
               <StatBox number="$0.00" label="Gas Fees (L2)" icon={<Zap className="w-5 h-5" />} />
               <StatBox number="<1s" label="Finality Time" icon={<TrendingUp className="w-5 h-5" />} />
               <StatBox number="100%" label="Uptime" icon={<ShieldCheck className="w-5 h-5" />} />
            </div>
         </div>
      </section>

    </div>
  );
};

// --- NEW COMPONENT: NFT Arsenal ---
const NFTArsenalSection = () => {
  const stack = [
    {
      category: "Token Standards",
      icon: <Tag className="w-5 h-5" />,
      color: "pink",
      tools: ["ERC-721", "ERC-1155", "ERC-6551 (TBA)", "Solana SPL", "Bitcoin Ordinals", "Metaplex"]
    },
    {
      category: "Decentralized Storage",
      icon: <Database className="w-5 h-5" />,
      color: "cyan",
      tools: ["IPFS", "Arweave", "Filecoin", "Pinata", "Ceramic Network", "Shadow Drive"]
    },
    {
      category: "Development SDKs",
      icon: <Code className="w-5 h-5" />,
      color: "purple",
      tools: ["Thirdweb", "Alchemy NFT API", "Morails", "Tatum", "Center.dev", "Sequence"]
    },
    {
      category: "Marketplace Infrastructure",
      icon: <Globe className="w-5 h-5" />,
      color: "emerald",
      tools: ["OpenSea Seaport", "Blur API", "Reservoir", "Rarible Protocol", "0x Protocol", "Magic Eden"]
    }
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Digital Asset Stack</h2>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
             Orchestrating the standards, storage, and protocols that power the next generation of ownership.
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
    pink: "border-pink-500/20 hover:border-pink-500/50 bg-pink-500/5",
    cyan: "border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5",
    purple: "border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5",
    emerald: "border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5",
  };

  const pillColors = {
    pink: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
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
    { title: "Minting API", desc: "High-throughput REST API for minting millions of NFTs per minute directly to your wallet.", icon: <Zap className="w-6 h-6" />, color: "cyan" },
    { title: "White-Label Marketplace", desc: "Launch your own branded NFT marketplace with custom UI and zero coding required.", icon: <Globe className="w-6 h-6" />, color: "purple" },
    { title: "Generative Art Engine", desc: "Upload layers and rules, and we'll generate and mint thousands of unique art pieces.", icon: <Palette className="w-6 h-6" />, color: "pink" },
    { title: "Wallet Integration", desc: "Seamless connect widgets for MetaMask, Phantom, and WalletConnect.", icon: <Wallet className="w-6 h-6" />, color: "emerald" },
    { title: "Dynamic Metadata", desc: "Update NFT traits in real-time based on off-chain events or user actions.", icon: <Activity className="w-6 h-6" />, color: "cyan" },
    { title: "IP Rights Management", desc: "Embed legal contracts and licensing terms directly into NFT metadata.", icon: <ShieldCheck className="w-6 h-6" />, color: "purple" },
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto bg-gradient-to-b from-transparent to-[#0A0A0A]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enterprise NFT Services</h2>
           <p className="text-xl text-slate-400 max-w-2xl">
             Comprehensive tools for brands and creators to launch and manage digital assets.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${s.color}-500/10 text-${s.color}-400 group-hover:scale-110 transition-transform`}>
                 {s.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">{s.title}</h3>
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
      client: "MetaFashion",
      title: "Digital Wearables",
      desc: "Launched a phygital collection linking hoodies to AR filters.",
      stat: "$1.2M",
      statLabel: "Primary Sales",
      icon: <ImageIcon className="w-6 h-6" />,
      color: "pink"
    },
    {
      id: 1,
      client: "GameVerse",
      title: "In-Game Assets",
      desc: "Tokenized 500k game items allowing players to trade freely.",
      stat: "500k+",
      statLabel: "Items Minted",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "cyan"
    },
    {
      id: 2,
      client: "ArtDAO",
      title: "Generative Drop",
      desc: "Sold out 10,000 unique generative art pieces in 15 minutes.",
      stat: "15m",
      statLabel: "Sellout Time",
      icon: <Brush className="w-6 h-6" />,
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
               Success Stories
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
                       {activeCase === index && <ArrowRight className="text-white w-4 h-4" />}
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

                      {/* Simplified Chart Visualization */}
                      <div className="h-32 w-full mt-auto mb-8 opacity-50 flex items-end gap-2">
                         {[30, 50, 40, 70, 50, 80, 60, 90].map((h, i) => (
                            <div key={i} className={`w-full rounded-t-sm bg-${cases[activeCase].color}-500`} style={{ height: `${h}%` }} />
                         ))}
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/10">
                         <Link to={`/nft/case-study/${cases[activeCase].id}`}>
                            <button className={`group flex items-center gap-2 text-${cases[activeCase].color}-400 font-bold hover:text-white transition-colors`}>
                                View Full Case Study 
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

// --- SUB COMPONENTS (UNCHANGED) ---

const HolographicCard = ({ title, floor, volume, imageColor, id }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]); 
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ rotateX, rotateY, z: 100 }}
        whileHover={{ scale: 1.02 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="relative h-[480px] w-full rounded-3xl bg-[#0F172A] border border-white/10 overflow-hidden group cursor-pointer shadow-2xl"
      >
        {/* HUD Elements */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
            <div className="px-2 py-1 bg-black/40 backdrop-blur-md rounded border border-white/10 text-[10px] text-slate-400 font-mono">
                NET_ID: {id}
            </div>
        </div>
        
        <div className="absolute top-4 right-4 z-20">
           <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> Live
           </div>
        </div>

        {/* Image Area */}
        <div className={`h-[65%] w-full bg-gradient-to-br ${imageColor} relative overflow-hidden`}>
           {/* Scanline Effect */}
           <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
           <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
           
           {/* Central Glitch Element (Simulated) */}
           <div className="absolute inset-0 flex items-center justify-center">
               <Hexagon className="w-32 h-32 text-white/10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" strokeWidth={0.5} />
           </div>
        </div>

        {/* Content Area */}
        <div className="absolute bottom-0 inset-x-0 h-[35%] bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between group-hover:bg-[#0A0A0A]/80 transition-colors">
           <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                <div className="text-xs text-slate-500 font-mono mt-1">ERC-721 • ETHEREUM</div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-2 mt-4 bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Floor</span>
                 <div className="text-white font-mono font-medium flex items-center gap-1">
                    <ScanLine className="w-3 h-3 text-cyan-400" /> {floor} <span className="text-slate-500 text-xs">ETH</span>
                 </div>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-3">
                 <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Volume</span>
                 <div className="text-white font-mono font-medium">{volume} <span className="text-slate-500 text-xs">ETH</span></div>
              </div>
           </div>
        </div>

        {/* Holographic Sheen */}
        <motion.div 
           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
           style={{
             background: "linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.1) 40%, transparent 50%)",
             backgroundSize: "200% 100%",
             x: useTransform(x, [-200, 200], ["-100%", "100%"])
           }}
        />
      </motion.div>
    </div>
  );
};

const UtilityCard = ({ icon, title, desc, color }) => {
   const colorStyles = {
      pink: { text: "text-pink-400", border: "group-hover:border-pink-500/50", glow: "group-hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.3)]" },
      purple: { text: "text-purple-400", border: "group-hover:border-purple-500/50", glow: "group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]" },
      cyan: { text: "text-cyan-400", border: "group-hover:border-cyan-500/50", glow: "group-hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]" },
      emerald: { text: "text-emerald-400", border: "group-hover:border-emerald-500/50", glow: "group-hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.3)]" },
   };

   const s = colorStyles[color];

   return (
      <div className={`p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden ${s.border} ${s.glow}`}>
         {/* Background gradient on hover */}
         <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
         
         <div className="relative z-10">
            <div className={`w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl ${s.text}`}>
               {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">{desc}</p>
         </div>
      </div>
   );
};

const LiveMintTicker = () => {
   const mints = [
      { id: "#8291", col: "CyberPunks", time: "2s", price: "0.5 ETH" },
      { id: "#102", col: "MetaLand", time: "5s", price: "1.2 ETH" },
      { id: "#4920", col: "ApeClub", time: "8s", price: "0.8 ETH" },
      { id: "#8821", col: "PixelArt", time: "12s", price: "0.1 ETH" },
      { id: "#992", col: "GhostDiv", time: "15s", price: "0.3 ETH" },
      { id: "#11", col: "Genesis", time: "18s", price: "2.5 ETH" },
   ];

   return (
      <div className="w-full bg-[#020617] border-y border-white/10 overflow-hidden py-4 relative z-20 select-none">
         {/* Fade masks */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

         <div className="flex items-center gap-12 animate-scroll whitespace-nowrap min-w-full">
            {[...mints, ...mints, ...mints].map((mint, i) => (
               <div key={i} className="flex items-center gap-3 text-sm group cursor-pointer hover:opacity-100 opacity-60 transition-opacity">
                  <div className="relative">
                     <span className="absolute -inset-1 bg-green-500/20 rounded-full blur-sm animate-pulse"></span>
                     <span className="relative w-2 h-2 rounded-full bg-green-400 block"></span>
                  </div>
                  <div className="flex flex-col leading-none gap-1">
                     <span className="text-white font-bold tracking-wide text-xs uppercase">{mint.col}</span>
                     <span className="text-[10px] text-slate-500">Just Minted</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-2 py-1 rounded text-xs font-mono text-cyan-400">
                     {mint.id}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

const StatBox = ({ number, label, icon }) => (
   <div className="flex flex-col items-center justify-center p-8 text-center group hover:bg-white/[0.02] transition-colors">
      <div className="mb-4 p-3 rounded-full bg-white/5 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all">
          {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
          {number}
      </div>
      <div className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{label}</div>
   </div>
);

export default NFTPage;