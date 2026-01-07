import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, BarChart3, Cpu, ShieldCheck, Zap, Stethoscope } from 'lucide-react';

// Data Database (In a real app, this would come from an API)
const caseStudiesData = [
  {
    id: 0,
    client: "FinTech Corp",
    title: "Fraud Detection at Scale",
    stat: "99.8%",
    statLabel: "Fraud Detection Rate",
    icon: <ShieldCheck className="w-12 h-12 text-emerald-400" />,
    color: "emerald",
    tags: ["FinTech", "Ensemble Learning", "Real-Time"],
    challenge: "FinTech Corp was facing a 12% false positive rate in their transaction monitoring system. Legitimate users were being blocked, leading to a 5% churn rate and significant support costs. They needed a solution that could process 50,000 transactions per second (TPS) with <100ms latency.",
    solution: "We deployed a hybrid ensemble model combining XGBoost for tabular data and an LSTM network for sequential user behavior analysis. The pipeline was optimized using TensorRT and deployed on our Edge Network to ensure low latency.",
    results: [
      "Reduced false positives by 40% in the first week.",
      "Achieved 99.8% detection rate for known fraud patterns.",
      "Processing latency stabilized at 45ms at peak load."
    ]
  },
  {
    id: 1,
    client: "MediScan AI",
    title: "Accelerating MRI Diagnostics",
    stat: "< 50ms",
    statLabel: "Inference Latency",
    icon: <Stethoscope className="w-12 h-12 text-rose-400" />,
    color: "rose",
    tags: ["Healthcare", "Computer Vision", "3D-CNN"],
    challenge: "Radiologists were spending 45 minutes on average analyzing 3D MRI scans. MediScan needed an AI assistant to pre-screen scans and highlight potential anomalies, but existing models took over 30 seconds to run inference.",
    solution: "We utilized a 3D-U-Net architecture with custom quantization layers. By pruning 30% of the model weights without accuracy loss and utilizing our proprietary neural accelerator, we achieved real-time segmentation.",
    results: [
      "Inference time dropped from 30s to <50ms.",
      "Radiologist throughput increased by 300%.",
      "Early detection accuracy improved by 15%."
    ]
  },
  {
    id: 2,
    client: "AutoDrive",
    title: "Edge Object Detection",
    stat: "60 FPS",
    statLabel: "On Edge Devices",
    icon: <Zap className="w-12 h-12 text-amber-400" />,
    color: "amber",
    tags: ["Automotive", "Edge Computing", "YOLO"],
    challenge: "AutoDrive's autonomous delivery bots struggled with pedestrian detection in low-light conditions. Their cloud-based inference had too much latency for safety-critical braking decisions.",
    solution: "We fine-tuned a YOLO v8 model specifically for low-light thermal imagery. We then compiled the model to WebAssembly (Wasm) to run directly on the bot's onboard low-power chips, eliminating network lag entirely.",
    results: [
      "Achieved stable 60 FPS on embedded hardware.",
      "Zero network dependency for safety features.",
      "Collision risks reduced by 95% in simulation."
    ]
  }
];

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const data = caseStudiesData[Number(id)];

  if (!data) return <div className="text-white pt-32 text-center">Case Study Not Found</div>;

  const colors = {
    emerald: "from-emerald-500",
    rose: "from-rose-500",
    amber: "from-amber-500",
    indigo: "from-indigo-500",
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-20 selection:bg-indigo-500/30">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Link to="/ml" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to ML
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10`}>
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
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{data.title}</h1>
          <p className="text-xl text-slate-400">Client: <span className="text-white font-semibold">{data.client}</span></p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-4xl mx-auto px-4 mt-16 grid gap-12">
        
        {/* Stat Banner */}
        <motion.div 
           initial={{ scale: 0.95, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${colors[data.color]} to-slate-900 p-1`}
        >
          <div className="bg-[#0A0A0A] rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
               <div className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-2">Key Outcome</div>
               <div className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors[data.color]} to-white`}>
                 {data.stat}
               </div>
             </div>
             <div className="text-right">
               <div className="text-2xl font-bold text-white">{data.statLabel}</div>
               <div className="text-slate-500">Verified by 3rd party audit</div>
             </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-12">
           <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-white/20 rounded-full"></span> The Challenge
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">{data.challenge}</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-white/20 rounded-full"></span> The Solution
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">{data.solution}</p>
              </section>
           </div>

           {/* Sidebar: Results */}
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-fit">
              <h3 className="text-lg font-bold text-white mb-6">Impact Summary</h3>
              <ul className="space-y-4">
                {data.results.map((result, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 text-sm">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 text-${data.color}-400`} />
                    {result}
                  </li>
                ))}
              </ul>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyDetailPage;