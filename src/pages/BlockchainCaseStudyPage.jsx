import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Box, Gamepad2, Hash, Server, Globe, Key } from 'lucide-react';

const blockchainCaseStudies = [
  {
    id: 0,
    client: "Liquid Markets",
    title: "DeFi Yield Aggregator",
    stat: "$2.4B",
    statLabel: "TVL Secured",
    icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
    color: "cyan",
    tags: ["DeFi", "Smart Contracts", "Layer 2"],
    challenge: "Liquid Markets faced an existential crisis due to Ethereum network congestion. Gas fees for their yield-farming strategies were costing users $50-100 per transaction, making the platform unusable for retail investors and stalling TVL growth.",
    solution: "We engineered a custom Layer-2 Rollup solution using ZK-Snarks. This allowed Liquid Markets to batch thousands of transactions off-chain and submit a single validity proof to Ethereum Mainnet, drastically reducing costs while inheriting L1 security.",
    results: [
      "Gas fees reduced by 98% (Avg $0.45 per txn).",
      "TVL grew from $200M to $2.4B in 3 months.",
      "Transaction throughput increased to 2,000 TPS."
    ]
  },
  {
    id: 1,
    client: "TraceChain",
    title: "Pharma Supply Chain",
    stat: "0%",
    statLabel: "Counterfeit Incidents",
    icon: <Box className="w-12 h-12 text-emerald-400" />,
    color: "emerald",
    tags: ["Supply Chain", "IoT", "Private Chain"],
    challenge: "Counterfeit pharmaceuticals were slipping into the supply chain in Southeast Asia, costing the client $40M annually in lost revenue and posing severe health risks. Traditional database tracking was being manipulated by bad actors at distribution points.",
    solution: "We implemented a permissioned consortium blockchain integrated with IoT sensors. Every package scan creates an immutable on-chain record hashed with the GPS location and timestamp. Any discrepancy triggers an immediate smart contract alert.",
    results: [
      "100% traceability from factory to pharmacy.",
      "Insurance premiums reduced by 25%.",
      "Regulatory compliance audit time cut by 90%."
    ]
  },
  {
    id: 2,
    client: "PixelVerse",
    title: "Web3 Gaming Ecosystem",
    stat: "1M+",
    statLabel: "Daily Transactions",
    icon: <Gamepad2 className="w-12 h-12 text-purple-400" />,
    color: "purple",
    tags: ["GameFi", "NFTs", "Sidechain"],
    challenge: "PixelVerse launched an MMORPG where every item was an NFT. The massive volume of item trading and crafting crashed their initial Polygon subnet, leading to 5-minute transaction delays that ruined the gameplay experience.",
    solution: "We architected a custom Application-Specific Blockchain (AppChain) utilizing a Proof-of-Authority consensus mechanism optimized for speed. We also built a 'lazy minting' bridge that only commits assets to the mainnet when users cash out.",
    results: [
      "Sub-second latency for in-game item trades.",
      "Supported 100k concurrent players on launch day.",
      "Zero gas fees for in-game actions (meta-transactions)."
    ]
  }
];

const BlockchainCaseStudyPage = () => {
  const { id } = useParams();
  const data = blockchainCaseStudies[Number(id)];

  if (!data) return <div className="text-white pt-32 text-center">Case Study Not Found</div>;

  const colors = {
    cyan: "from-cyan-500",
    emerald: "from-emerald-500",
    purple: "from-purple-500",
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-20 selection:bg-cyan-500/30">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-${data.color}-500/20`}></div>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Link to="/blockchain" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Ecosystem
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]`}>
              {data.icon}
            </div>
            <div className="flex gap-2">
              {data.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400">Network: <span className="text-white font-semibold font-mono">{data.client}</span></p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-4xl mx-auto px-4 mt-16 grid gap-12 relative z-10">
        
        {/* Metric Banner */}
        <motion.div 
           initial={{ scale: 0.95, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${colors[data.color]} to-slate-900 p-[1px]`}
        >
          <div className="bg-[#0A0A0A] rounded-[23px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             {/* Abstract Grid Background */}
             <div className="absolute inset-0 bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] opacity-20"></div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-2 text-slate-400 uppercase tracking-widest text-sm font-bold mb-2">
                  <Hash className="w-4 h-4" /> On-Chain Metric
               </div>
               <div className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors[data.color]} to-white`}>
                 {data.stat}
               </div>
             </div>
             <div className="text-right relative z-10">
               <div className="text-2xl font-bold text-white">{data.statLabel}</div>
               <div className="text-slate-500 font-mono text-xs mt-1">Block #1849204 Verified</div>
             </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-12">
           <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${data.color}-500/20 flex items-center justify-center`}>
                    <Server className={`w-4 h-4 text-${data.color}-400`} />
                  </div>
                  The Challenge
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-white/10 pl-6">
                  {data.challenge}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${data.color}-500/20 flex items-center justify-center`}>
                    <Key className={`w-4 h-4 text-${data.color}-400`} />
                  </div>
                  The Architecture
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-white/10 pl-6">
                  {data.solution}
                </p>
              </section>
           </div>

           {/* Sidebar: Results */}
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-fit backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                 <Globe className="w-4 h-4 text-slate-400" /> Network Impact
              </h3>
              <ul className="space-y-6">
                {data.results.map((result, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 text-sm">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-${data.color}-500/20 flex items-center justify-center`}>
                       <CheckCircle className={`w-3 h-3 text-${data.color}-400`} />
                    </div>
                    <span className="leading-snug">{result}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                 <button className={`w-full py-3 rounded-xl border border-${data.color}-500/30 text-${data.color}-400 font-bold text-xs uppercase tracking-wider hover:bg-${data.color}-500/10 transition-colors`}>
                    View Audit Report
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default BlockchainCaseStudyPage;