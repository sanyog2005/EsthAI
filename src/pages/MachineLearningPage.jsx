import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Sparkles, Activity, GitBranch, Fingerprint, ChevronRight, 
  ShieldCheck, Stethoscope, Zap, Sliders, Workflow, Smartphone, 
  Database, Shield, Lightbulb, Layers, Cpu, Wrench
} from 'lucide-react';
import NeuralNetworkBg from '../components/NeuralNetworkBg';

const MachineLearningPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#020617] overflow-hidden selection:bg-rose-500/30 relative">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <NeuralNetworkBg />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative py-24 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 pointer-events-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                 <Brain className="w-4 h-4" /> Automated Training
               </div>
               
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                 Optimize <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
                   Hyperparameters
                 </span>
               </h1>
               
               <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                 Our AutoML engine automatically selects the best architecture for your dataset. 
                 From <span className="text-white">Transformers</span> to <span className="text-white">CNNs</span>, train state-of-the-art models with zero boilerplate.
               </p>

               <div className="flex gap-4">
                 <button className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                   Start Training
                 </button>
                 <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium flex items-center gap-2 transition-colors backdrop-blur-sm">
                   View Benchmarks <ChevronRight className="w-4 h-4" />
                 </button>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative"
            >
               <TrainingSimulation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MODEL ARCHITECTURES */}
      <section className="py-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Supported Architectures</h2>
            <p className="text-slate-400">Pre-optimized models ready for fine-tuning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ModelCard 
              title="LLMs & NLP" 
              icon={<Sparkles />}
              models={["Llama 3", "Mistral 7B", "BERT"]}
              color="indigo"
            />
            <ModelCard 
              title="Computer Vision" 
              icon={<Fingerprint />}
              models={["Stable Diffusion", "YOLO v8", "ResNet"]}
              color="rose"
            />
            <ModelCard 
              title="Reinforcement" 
              icon={<GitBranch />}
              models={["PPO", "DQN", "AlphaZero"]}
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* 3. [NEW] TECH STACK SECTION */}
      <TechStackSection />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. CASE STUDIES SECTION */}
      <CaseStudiesSection />

      {/* 6. FEATURES STRIP */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02] relative z-10 pointer-events-auto">
         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            <StatBox number="99.9%" label="Uptime SLA" />
            <StatBox number="10x" label="Faster Inference" />
            <StatBox number="0s" label="Cold Start" />
            <StatBox number="24/7" label="Expert Support" />
         </div>
      </section>

    </div>
  );
};

// --- NEW COMPONENT: Tech Stack / Skill Tree ---
const TechStackSection = () => {
  const stack = [
    {
      title: "AI / ML Core",
      icon: <Layers className="w-6 h-6" />,
      color: "indigo",
      skills: [
        "Python", "Statistics", "Probability", "Linear Algebra", 
        "Data Preprocessing", "Feature Engineering", "EDA", 
        "Supervised Learning", "Unsupervised Learning", "Regression", 
        "Classification", "Clustering", "Model Training", 
        "Model Evaluation", "Hyperparameter Tuning", 
        "Overfitting / Underfitting", "Scikit-learn"
      ]
    },
    {
      title: "Trending & Deep Learning",
      icon: <Cpu className="w-6 h-6" />,
      color: "rose",
      skills: [
        "Deep Learning", "Neural Networks", "CNN", "RNN", "LSTM", 
        "Transformers", "Generative AI", "LLMs", "Prompt Engineering", 
        "NLP", "Embeddings", "Computer Vision", "Image Classification", 
        "Object Detection", "OCR", "Recommendation Systems", 
        "Time Series", "Reinforcement Learning", "MLOps"
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="w-6 h-6" />,
      color: "cyan",
      skills: [
        "TensorFlow", "PyTorch", "Keras", "NumPy", "Pandas", 
        "Matplotlib", "Seaborn"
      ]
    }
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
             A full-spectrum stack optimized for high-performance machine learning workflows.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stack.map((category, idx) => (
            <SkillCard key={idx} {...category} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, icon, color, skills, delay }) => {
  const colors = {
    indigo: "border-indigo-500/20 bg-indigo-500/5 text-indigo-400 hover:border-indigo-500/50",
    rose: "border-rose-500/20 bg-rose-500/5 text-rose-400 hover:border-rose-500/50",
    cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:border-cyan-500/50",
  };

  const pillColors = {
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20",
    rose: "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 ${colors[color]}`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-default ${pillColors[color]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// --- SERVICES SECTION ---
const ServicesSection = () => {
  const services = [
    { 
      title: "Custom Fine-Tuning", 
      desc: "Adapt foundation models to your specific domain data using LoRA and QLoRA techniques for maximum efficiency.", 
      icon: <Sliders className="w-6 h-6" />,
      color: "indigo"
    },
    { 
      title: "MLOps Pipeline", 
      desc: "End-to-end CI/CD for machine learning. Automated retraining, version control, and model drift monitoring.", 
      icon: <Workflow className="w-6 h-6" />,
      color: "rose"
    },
    { 
      title: "Edge Deployment", 
      desc: "Optimize models for low-latency inference on IoT devices, mobile phones, and browser environments via WebAssembly.", 
      icon: <Smartphone className="w-6 h-6" />,
      color: "amber"
    },
    { 
      title: "Data Engineering", 
      desc: "Scalable ETL pipelines to clean, vectorise, and manage your training datasets at petabyte scale.", 
      icon: <Database className="w-6 h-6" />,
      color: "indigo"
    },
    { 
      title: "AI Security", 
      desc: "Adversarial testing and bias detection audits to ensure your models are safe and compliant for production.", 
      icon: <Shield className="w-6 h-6" />,
      color: "rose"
    },
    { 
      title: "Strategic Consulting", 
      desc: "Roadmap planning and feasibility studies to help your executive team maximize ROI on AI initiatives.", 
      icon: <Lightbulb className="w-6 h-6" />,
      color: "amber"
    },
  ];

  return (
    <section className="py-24 relative z-10 pointer-events-auto bg-gradient-to-b from-transparent to-[#0A0A0A]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Managed Services</h2>
           <p className="text-xl text-slate-400 max-w-2xl">
             Beyond infrastructure, our team of PhD researchers and engineers works with you to build the impossible.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${s.color}-500/10 text-${s.color}-400 group-hover:scale-110 transition-transform`}>
                 {s.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{s.title}</h3>
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

// --- EXISTING COMPONENTS ---

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 0,
      client: "FinTech Corp",
      title: "Fraud Detection",
      desc: "Reduced false positives by 40% using our ensemble learning pipeline.",
      stat: "99.8%",
      statLabel: "Detection Rate",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "emerald"
    },
    {
      id: 1,
      client: "MediScan AI",
      title: "Medical Imaging",
      desc: "Accelerated tumor detection in MRI scans with 10x faster inference.",
      stat: "< 50ms",
      statLabel: "Inference Time",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "rose"
    },
    {
      id: 2,
      client: "AutoDrive",
      title: "Autonomous Systems",
      desc: "Real-time object detection processing 60 frames per second on edge devices.",
      stat: "60 FPS",
      statLabel: "Real-Time Processing",
      icon: <Zap className="w-6 h-6" />,
      color: "amber"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]/50 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Tab Selection */}
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
               Case Studies
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

          {/* Right: Dynamic Visualization Card */}
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

                      {/* Bar Graph Animation */}
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden flex mb-auto">
                         <div className="w-1/2 h-full bg-slate-600/50"></div>
                         <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "50%" }}
                            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                            className={`h-full bg-${cases[activeCase].color}-500`}
                         />
                      </div>

                      <div className="mt-8 pt-8 border-t border-white/10">
                        <Link to={`/ml/case-study/${cases[activeCase].id}`}>
                            <button className={`group flex items-center gap-2 text-${cases[activeCase].color}-400 font-bold hover:text-white transition-colors`}>
                                Read Full Case Study 
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

const TrainingSimulation = () => {
    const [epoch, setEpoch] = useState(0);
    const controls = useAnimation();
  
    useEffect(() => {
      const interval = setInterval(() => {
        setEpoch(prev => (prev < 100 ? prev + 1 : 0));
      }, 100);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden group">
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
           <div className="flex items-center gap-3">
              <Activity className="text-rose-500 w-5 h-5 animate-pulse" />
              <div>
                 <div className="text-sm font-bold text-white">Training Run #842</div>
                 <div className="text-xs text-slate-500 font-mono">cluster-us-east-1</div>
              </div>
           </div>
           <div className="text-right">
              <div className="text-xs text-slate-500">Epoch</div>
              <div className="text-xl font-mono text-indigo-400">{epoch}/100</div>
           </div>
        </div>
        <div className="h-64 w-full relative bg-white/5 rounded-lg overflow-hidden flex items-end px-2">
           <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
              {[...Array(24)].map((_, i) => (
                 <div key={i} className="border-r border-t border-white/5"></div>
              ))}
           </div>
           <svg className="absolute inset-0 w-full h-full overflow-visible">
              <motion.path
                 d="M0,250 C50,200 100,50 150,100 C200,150 250,200 300,50 C350,0 400,100 500,20"
                 fill="none"
                 stroke="url(#gradient)"
                 strokeWidth="3"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: epoch / 100 }}
                 transition={{ ease: "linear", duration: 0.1 }} 
              />
              <defs>
                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#f43f5e" />
                 </linearGradient>
              </defs>
           </svg>
           <motion.div 
              className="absolute top-1/2 left-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/20"
              animate={{ x: (epoch * 4) - 200, y: Math.sin(epoch) * 50 }}
           >
              Loss: {(1 - epoch/120).toFixed(4)}
           </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
           <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Accuracy</div>
              <div className="text-lg font-bold text-green-400">{(85 + epoch * 0.14).toFixed(1)}%</div>
           </div>
           <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Loss</div>
              <div className="text-lg font-bold text-rose-400">{(0.8 - epoch * 0.007).toFixed(4)}</div>
           </div>
           <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Time</div>
              <div className="text-lg font-bold text-white">00:0{Math.floor(epoch/12)}:42</div>
           </div>
        </div>
      </div>
    );
  };
  
  const ModelCard = ({ title, icon, models, color }) => {
     const colors = {
        indigo: "text-indigo-400 border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-indigo-500/20",
        rose: "text-rose-400 border-rose-500/20 hover:border-rose-500/50 hover:shadow-rose-500/20",
        amber: "text-amber-400 border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/20"
     };
     return (
        <motion.div 
           whileHover={{ y: -5 }}
           className={`p-6 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-md border transition-all duration-300 shadow-xl ${colors[color]}`}
        >
           <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-white/5 ${colors[color].split(" ")[0]}`}>
                 {icon}
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
           </div>
           <div className="space-y-3">
              {models.map((m, i) => (
                 <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <span className="text-slate-300 group-hover:text-white transition-colors">{m}</span>
                    <div className={`w-2 h-2 rounded-full ${colors[color].split(" ")[0].replace("text", "bg")}`}></div>
                 </div>
              ))}
           </div>
        </motion.div>
     );
  };
  
  const StatBox = ({ number, label }) => (
     <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">{number}</div>
        <div className="text-sm text-slate-500 uppercase tracking-widest">{label}</div>
     </div>
  );

export default MachineLearningPage;