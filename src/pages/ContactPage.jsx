import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] pt-20 selection:bg-violet-500/30 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Visuals & Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Let's build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  Impossible.
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                Our engineers are ready to deploy your infrastructure. 
                Tell us about your project, and we'll spin up a dedicated node.
              </p>
            </motion.div>

            {/* The 3D Holographic Globe */}
            <div className="relative h-[300px] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center group mb-10">
               <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-50"></div>
               <ParticleGlobe />
               
               {/* Floating Location Badge */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-6 left-6 p-3 px-4 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-2xl"
               >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Global HQ Online</span>
               </motion.div>
            </div>

            {/* NEW: Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
               <ContactDetail 
                  icon={<Mail className="w-5 h-5" />} 
                  label="Email Support" 
                  value="webloxic@gmail.com" 
                  href="mailto:webloxic@gmail.com"
               />
               <ContactDetail 
                  icon={<Phone className="w-5 h-5" />} 
                  label="Call Us" 
                  value="+91 9310731225" 
                  href="tel:+919310731225"
               />
               <div className="sm:col-span-2">
                  <ContactDetail 
                     icon={<MapPin className="w-5 h-5" />} 
                     label="Visit Office" 
                     value=" 203 , Second Floor , Kundan Bhavan , Azadpur, Delhi, India" 
                     href="#"
                  />
               </div>
            </div>

            {/* Social Proof */}
            <div className="flex gap-4">
               <SocialButton icon={<Twitter className="w-5 h-5" />} label="Twitter" />
               <SocialButton icon={<Github className="w-5 h-5" />} label="GitHub" />
               <SocialButton icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            </div>
          </div>

          {/* RIGHT COLUMN: The Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-24"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

// 1. Contact Detail Card (NEW)
const ContactDetail = ({ icon, label, value, href }) => (
  <a 
    href={href}
    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-violet-400 transition-colors">
        {label}
      </div>
      <div className="text-white font-medium text-sm sm:text-base">
        {value}
      </div>
    </div>
  </a>
);

// 2. Interactive Form
const ContactForm = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  if (formState === 'success') {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="h-[600px] rounded-3xl border border-green-500/30 bg-green-500/5 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">Message Received</h3>
        <p className="text-slate-400 mb-8">Our neural network is processing your request. <br/> We'll be in touch shortly.</p>
        <button 
          onClick={() => setFormState('idle')}
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-3xl border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50"></div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
           <InputGroup label="First Name" placeholder="MS" />
           <InputGroup label="Last Name" placeholder="Dhoni" />
        </div>
        <InputGroup label="Email" placeholder="msdhoni07@gmail.com" type="email" />
        
        <div className="space-y-2">
           <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Topic</label>
           <div className="grid grid-cols-2 gap-3">
              {['Enterprise', 'Careers', 'Support', 'Other'].map(topic => (
                 <label key={topic} className="cursor-pointer">
                    <input type="radio" name="topic" className="peer sr-only" />
                    <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm font-medium hover:bg-white/10 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-violet-500 transition-all text-center">
                       {topic}
                    </div>
                 </label>
              ))}
           </div>
        </div>

        <InputGroup label="Message" placeholder="Tell us about your infrastructure needs..." isTextArea />
      </div>

      <button 
        disabled={formState === 'sending'}
        className="mt-8 w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === 'sending' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            Inititate Sequence <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};

const InputGroup = ({ label, placeholder, type = "text", isTextArea }) => (
  <div className="space-y-2 group">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-violet-400 transition-colors">
      {label}
    </label>
    {isTextArea ? (
      <textarea 
        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all h-32 resize-none"
        placeholder={placeholder}
      />
    ) : (
      <input 
        type={type}
        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
        placeholder={placeholder}
      />
    )}
  </div>
);

const SocialButton = ({ icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

// 3. The 3D Particle Globe (Canvas)
const ParticleGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    // Create Points on a Sphere
    const createParticles = () => {
      const count = 400;
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = 100; // Radius

        particles.push({
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi),
          size: Math.random() * 2 + 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      angle += 0.005; // Rotation Speed

      particles.forEach(p => {
        // Rotate around Y axis
        const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
        const z = p.z * Math.cos(angle) + p.x * Math.sin(angle);
        
        // Project to 2D
        const scale = 300 / (300 + z);
        const alpha = Math.max(0, (z + 120) / 240); // Fade back particles

        ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.arc(cx + x * scale, cy + p.y * scale, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default ContactPage;