import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Image as ImageIcon, Code2, Users, Sparkles, Wand2, Zap, MessageSquare } from 'lucide-react';

const aiCaseStudies = [
  {
    id: 0,
    client: "AdStudio",
    title: "Automated Marketing",
    stat: "15x",
    statLabel: "ROI on Ad Spend",
    icon: <ImageIcon className="w-12 h-12 text-pink-400" />,
    color: "pink",
    tags: ["Marketing", "Image Gen", "Automated A/B Testing"],
    challenge: "AdStudio's creative team was bottlenecked. Producing high-quality ad variations for 50+ clients took weeks. They needed a way to generate thousands of on-brand visuals instantly to test across social media platforms.",
    solution: "We deployed a custom Stable Diffusion pipeline fine-tuned on their historical high-performing ads. We integrated this with an automated A/B testing agent that generates, posts, and analyzes ad performance in real-time.",
    results: [
      "Generated 10,000+ unique ad creatives in 24 hours.",
      "Cost per acquisition (CPA) dropped by 60%.",
      "Creative team shifted focus to strategy instead of asset production."
    ]
  },
  {
    id: 1,
    client: "DevFlow",
    title: "AI Pair Programmer",
    stat: "40%",
    statLabel: "Faster Feature Shipping",
    icon: <Code2 className="w-12 h-12 text-cyan-400" />,
    color: "cyan",
    tags: ["DevTools", "LLMs", "Code Completion"],
    challenge: "DevFlow's engineering team was bogged down by boilerplate code and writing unit tests. Senior engineers spent 50% of their time reviewing basic PRs, slowing down the release cycle for critical features.",
    solution: "We integrated a secure, self-hosted LLM (Llama 3 70B) directly into their VS Code environment. The model was indexed on their entire codebase, allowing it to write context-aware boilerplate, generating unit tests, and documentation automatically.",
    results: [
      "Test coverage increased from 65% to 95%.",
      "Senior engineer code review time reduced by half.",
      "Onboarding time for new devs cut from 3 weeks to 1 week."
    ]
  },
  {
    id: 2,
    client: "GlobalSupport",
    title: "Autonomous Customer Agents",
    stat: "85%",
    statLabel: "Ticket Deflection",
    icon: <Users className="w-12 h-12 text-purple-400" />,
    color: "purple",
    tags: ["Customer Service", "RAG", "Chatbots"],
    challenge: "GlobalSupport was drowning in Level 1 support tickets (password resets, refund status). Their existing chatbot was rule-based and frustrated users, leading to a low CSAT score and high agent burnout.",
    solution: "We built a RAG (Retrieval-Augmented Generation) system connected to their knowledge base and order history. The AI agent handles complex multi-turn conversations with empathy and only escalates to humans for sensitive issues.",
    results: [
      "24/7 support availability in 30 languages.",
      "CSAT scores improved from 3.5 to 4.8 stars.",
      "Support costs reduced by $2M annually."
    ]
  }
];

const AICaseStudyPage = () => {
  const { id } = useParams();
  const data = aiCaseStudies[Number(id)];

  if (!data) return <div className="text-white pt-32 text-center">Case Study Not Found</div>;

  const colors = {
    pink: "from-pink-500",
    cyan: "from-cyan-500",
    purple: "from-purple-500",
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-20 selection:bg-purple-500/30">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-${data.color}-500/20`}></div>
         <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-${data.color}-500/10`}></div>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Link to="/ai" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to AI
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
          <p className="text-xl text-slate-400">Client: <span className="text-white font-semibold font-mono">{data.client}</span></p>
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
             
             {/* Sparkle Overlay */}
             <div className="absolute top-0 right-0 p-8 opacity-20">
                <Sparkles className={`w-32 h-32 text-${data.color}-400`} />
             </div>

             <div className="relative z-10">
               <div className="flex items-center gap-2 text-slate-400 uppercase tracking-widest text-sm font-bold mb-2">
                  <Zap className="w-4 h-4" /> Performance Metric
               </div>
               <div className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors[data.color]} to-white`}>
                 {data.stat}
               </div>
             </div>
             <div className="text-right relative z-10">
               <div className="text-2xl font-bold text-white">{data.statLabel}</div>
               <div className="text-slate-500 font-mono text-xs mt-1">Verified via Analytics</div>
             </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-12">
           <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${data.color}-500/20 flex items-center justify-center`}>
                    <MessageSquare className={`w-4 h-4 text-${data.color}-400`} />
                  </div>
                  The Problem
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-white/10 pl-6">
                  {data.challenge}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${data.color}-500/20 flex items-center justify-center`}>
                    <Wand2 className={`w-4 h-4 text-${data.color}-400`} />
                  </div>
                  The Generative Solution
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-white/10 pl-6">
                  {data.solution}
                </p>
              </section>
           </div>

           {/* Sidebar: Results */}
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-fit backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-slate-400" /> Key Outcomes
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
                    View Model Config
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AICaseStudyPage;