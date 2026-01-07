import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, MessageSquare, Image as ImageIcon, Mic, Terminal, Zap, Wand2, 
  Layers, Database, Lock, Search, Workflow, PenTool, ArrowRight, TrendingUp,
  Code2, Users, Brain, Cpu, Code, ChevronRight
} from 'lucide-react';
import NeuralNetworkBg from '../components/NeuralNetworkBg';

const AIPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#020617] overflow-hidden selection:bg-purple-500/30 relative">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <NeuralNetworkBg />
      </div>

      {/* 1. HERO: The Prompt Interface */}
      <section className="relative py-24 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 pointer-events-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6"
             >
               <Sparkles className="w-4 h-4" /> Generative Intelligence
             </motion.div>
             
             <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
               Dream it. <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                 Generate it.
               </span>
             </h1>
             
             <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Access the world's most powerful foundation models through a single, unified API. Text, image, audio, and video generation at the speed of thought.
             </p>
          </div>

          <PromptSimulator />
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4">
           <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Multimodal Capabilities</h2>
              <p className="text-slate-400">One model to rule them all. Process and generate any modality.</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CapabilityCard 
                title="Natural Language" 
                desc="Summarization, translation, and creative writing with human-level nuance."
                icon={<MessageSquare className="w-6 h-6" />}
                color="purple"
              />
              <CapabilityCard 
                title="Computer Vision" 
                desc="Generate photorealistic images or analyze video feeds in real-time."
                icon={<ImageIcon className="w-6 h-6" />}
                color="pink"
              />
              <CapabilityCard 
                title="Audio Synthesis" 
                desc="Text-to-speech and voice cloning with emotional intonation."
                icon={<Mic className="w-6 h-6" />}
                color="cyan"
              />
              <CapabilityCard 
                title="Code Generation" 
                desc="Convert natural language instructions into executable Python, JS, or Rust."
                icon={<Terminal className="w-6 h-6" />}
                color="emerald"
              />
           </div>
        </div>
      </section>

      {/* 3. NEURAL STACK (ARSENAL) */}
      <AIArsenalSection />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. CASE STUDIES SECTION */}
      <CaseStudiesSection />

      {/* 6. API INTEGRATION DEMO */}
      <section className="py-24 relative z-10 pointer-events-auto bg-[#0A0A0A]/50" id='aidev'>
         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
               <h2 className="text-4xl font-bold text-white mb-6">Designed for Developers</h2>
               <p className="text-lg text-slate-400 mb-8">
                 Integrate state-of-the-art AI into your app with just a few lines of code. Our SDK handles tokenization, streaming, and error correction automatically.
               </p>
               
               <div className="space-y-4">
                  <FeatureItem text="OpenAI-compatible API format" />
                  <FeatureItem text="Streaming responses (< 20ms TTFT)" />
                  <FeatureItem text="Automatic retries and failover" />
                  <FeatureItem text="Type-safe SDKs for TS, Python, Go" />
               </div>

               {/* <button className="mt-10 px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2">
                  Get API Key <Zap className="w-4 h-4 fill-black" />
               </button> */}
            </div>

            {/* Code Block Visual */}
            <div className="relative rounded-2xl bg-[#1e1e1e] border border-white/10 p-6 shadow-2xl font-mono text-sm overflow-hidden group">
               <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"/>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                     <div className="w-3 h-3 rounded-full bg-green-500"/>
                  </div>
                  <span className="text-slate-500 text-xs">generate.js</span>
               </div>

               <div className="text-slate-300">
                  <p><span className="text-purple-400">import</span> {'{ Nexus }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@nexus/ai'</span>;</p>
                  <p className="mt-4"><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> Nexus({'{'} key: <span className="text-green-400">'sk_live...'</span> {'}'});</p>
                  <p className="mt-4"><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> client.generate({'{'}</p>
                  <p className="pl-4">model: <span className="text-green-400">'nexus-gpt-4'</span>,</p>
                  <p className="pl-4">prompt: <span className="text-green-400">'Design a futuristic city...'</span>,</p>
                  <p className="pl-4">stream: <span className="text-orange-400">true</span></p>
                  <p>{'}'});</p>
                  <p className="mt-4"><span className="text-slate-500">// Output: A sprawling metropolis...</span></p>
               </div>

               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[80px] group-hover:bg-purple-500/30 transition-colors"></div>
            </div>

         </div>
      </section>

    </div>
  );
};

// --- SUB COMPONENTS ---

// 1. Prompt Simulator
const PromptSimulator = () => {
  const [text, setText] = useState("");
  const fullText = "Design a sleek, futuristic dashboard for an AI startup...";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
         setIsTyping(false);
         clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="relative max-w-3xl mx-auto rounded-2xl bg-[#0A0A0A] border border-white/10 p-2 shadow-2xl"
    >
       <div className="flex items-center gap-4 px-4 py-3">
          <Wand2 className="w-5 h-5 text-purple-400 animate-pulse" />
          <div className="flex-1 bg-transparent border-none outline-none text-white text-lg font-medium font-mono h-8 flex items-center">
             {text}
             <span className="w-2 h-5 bg-purple-500 ml-1 animate-blink"></span>
          </div>
          <button className="px-6 py-2 rounded-lg bg-white text-black font-bold text-sm hover:bg-slate-200 transition-colors">
             Generate
          </button>
       </div>
       
       {!isTyping && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="border-t border-white/10 bg-white/5 p-6 mt-2 rounded-xl"
          >
             <div className="flex gap-4">
                <div className="w-1/3 aspect-video rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 animate-pulse"></div>
                <div className="w-1/3 aspect-video rounded-lg bg-gradient-to-br from-pink-900 to-rose-900 animate-pulse delay-75"></div>
                <div className="w-1/3 aspect-video rounded-lg bg-gradient-to-br from-cyan-900 to-blue-900 animate-pulse delay-150"></div>
             </div>
          </motion.div>
       )}
    </motion.div>
  );
};

// 2. Capability Card
const CapabilityCard = ({ title, desc, icon, color }) => {
   const colors = {
      purple: "hover:border-purple-500/50 hover:shadow-purple-500/20 text-purple-400",
      pink: "hover:border-pink-500/50 hover:shadow-pink-500/20 text-pink-400",
      cyan: "hover:border-cyan-500/50 hover:shadow-cyan-500/20 text-cyan-400",
      emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/20 text-emerald-400",
   };

   return (
      <motion.div 
         whileHover={{ y: -5 }}
         className={`p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group ${colors[color]}`}
      >
         <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-4 ${colors[color]}`}>
            {icon}
         </div>
         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
         <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
      </motion.div>
   );
};

// 3. AI Arsenal Section
const AIArsenalSection = () => {
  const stack = [
    {
      category: "Foundation Models",
      icon: <Brain className="w-5 h-5" />,
      color: "purple",
      tools: ["GPT-4o", "Claude 3.5", "Llama 3", "Mistral Large", "Stable Diffusion XL", "Midjourney v6"]
    },
    {
      category: "Frameworks & Orchestration",
      icon: <Workflow className="w-5 h-5" />,
      color: "pink",
      tools: ["LangChain", "LlamaIndex", "AutoGPT", "CrewAI", "Vercel AI SDK", "Hugging Face Transformers"]
    },
    {
      category: "Vector & Data Infrastructure",
      icon: <Database className="w-5 h-5" />,
      color: "cyan",
      tools: ["Pinecone", "Weaviate", "ChromaDB", "Supabase Vector", "MongoDB Atlas", "Redis"]
    },
    {
      category: "Deployment & Inference",
      icon: <Cpu className="w-5 h-5" />,
      color: "emerald",
      tools: ["NVIDIA TensorRT", "vLLM", "Ollama", "Replicate", "Modal", "AWS Bedrock"]
    }
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Neural Stack</h2>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
             Built on the shoulders of giants. We orchestrate the world's most advanced AI technologies.
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
    purple: "border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5",
    pink: "border-pink-500/20 hover:border-pink-500/50 bg-pink-500/5",
    cyan: "border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-500/5",
    emerald: "border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5",
  };

  const pillColors = {
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    pink: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
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

// 4. Services Section
const ServicesSection = () => {
  const services = [
    { title: "Enterprise RAG", desc: "Connect LLMs to your private data. Vector database integration with citations and source tracking.", icon: <Database className="w-6 h-6" />, color: "purple" },
    { title: "Model Fine-Tuning", desc: "Train custom versions of Llama or Mistral on your specific brand voice and industry terminology.", icon: <Layers className="w-6 h-6" />, color: "pink" },
    { title: "AI Agents", desc: "Autonomous agents that can browse the web, execute code, and perform complex multi-step workflows.", icon: <Workflow className="w-6 h-6" />, color: "cyan" },
    { title: "Prompt Engineering", desc: "Expert consulting to optimize system prompts for maximum accuracy and minimal hallucinations.", icon: <PenTool className="w-6 h-6" />, color: "emerald" },
    { title: "Safety Guardrails", desc: "Real-time content filtering to prevent PII leakage and ensure brand-safe outputs.", icon: <Lock className="w-6 h-6" />, color: "purple" },
    { title: "Semantic Search", desc: "Replace keyword search with intent-based vector search for e-commerce and knowledge bases.", icon: <Search className="w-6 h-6" />, color: "pink" },
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto bg-gradient-to-b from-transparent to-[#0A0A0A]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Generative Services</h2>
           <p className="text-xl text-slate-400 max-w-2xl">
             We help you navigate the chaos of the AI revolution with managed infrastructure.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${s.color}-500/10 text-${s.color}-400 group-hover:scale-110 transition-transform`}>
                 {s.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{s.title}</h3>
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

// 5. Case Studies Section
const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 0,
      client: "AdStudio",
      title: "Automated Marketing",
      desc: "Generated 10,000+ unique ad creatives in 24 hours.",
      stat: "15x",
      statLabel: "ROI Increase",
      icon: <ImageIcon className="w-6 h-6" />,
      color: "pink"
    },
    {
      id: 1,
      client: "DevFlow",
      title: "AI Pair Programmer",
      desc: "Reduced coding time by 40% for engineering teams.",
      stat: "40%",
      statLabel: "Faster Shipping",
      icon: <Code2 className="w-6 h-6" />,
      color: "cyan"
    },
    {
      id: 2,
      client: "GlobalSupport",
      title: "Customer Agents",
      desc: "Automated 85% of L1 support tickets with human-like empathy.",
      stat: "24/7",
      statLabel: "Availability",
      icon: <Users className="w-6 h-6" />,
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
               AI in the Wild
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

                      {/* Visual Graph Bar */}
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden flex mb-auto">
                         <div className="w-1/4 h-full bg-slate-600/50"></div>
                         <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                            className={`h-full bg-${cases[activeCase].color}-500`}
                         />
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/10">
                        <Link to={`/ai/case-study/${cases[activeCase].id}`}>
                            <button className={`group flex items-center gap-2 text-${cases[activeCase].color}-400 font-bold hover:text-white transition-colors`}>
                                Read Full Case Study 
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

const FeatureItem = ({ text }) => (
   <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
         <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <span className="text-slate-300">{text}</span>
   </div>
);

export default AIPage;