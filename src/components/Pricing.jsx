import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Toggle */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <motion.div 
                className="w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Yearly <span className="text-green-400 text-xs ml-1 font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <PricingCard 
            title="Starter" 
            price={isAnnual ? "$0" : "$0"} 
            desc="Perfect for hobbyists and side projects."
            features={["10k tokens/mo", "Community Support", "1 Seat", "Public Models only"]}
          />
          
          {/* Pro Tier (Highlighted) */}
          <PricingCard 
            title="Pro" 
            price={isAnnual ? "$49" : "$59"} 
            desc="For professional developers scaling apps."
            features={["Unlimited tokens", "Priority Email Support", "5 Seats", "Fine-tuning available", "API Access"]}
            isPopular
          />

          {/* Enterprise */}
          <PricingCard 
            title="Enterprise" 
            price="Custom" 
            desc="For large teams with specific security needs."
            features={["Dedicated Inference", "24/7 Phone Support", "Unlimited Seats", "SSO & Audit Logs", "SLA Guarantee"]}
          />
        </div>

      </div>
    </section>
  );
};

const PricingCard = ({ title, price, desc, features, isPopular }) => (
  <div className={`relative p-8 rounded-3xl border ${isPopular ? 'border-purple-500/50 bg-purple-900/10' : 'border-white/10 bg-white/5'} flex flex-col`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
        Most Popular
      </div>
    )}
    
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm mb-6">{desc}</p>
    
    <div className="mb-6">
      <span className="text-4xl font-bold text-white">{price}</span>
      {price !== "Custom" && <span className="text-slate-500">/month</span>}
    </div>

    <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-transform active:scale-95 ${isPopular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
      {price === "Custom" ? "Contact Sales" : "Get Started"}
    </button>

    <div className="space-y-4 flex-grow">
      {features.map((feat, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          {feat}
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;