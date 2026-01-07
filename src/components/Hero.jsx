import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Play, Terminal, Cpu, Globe } from 'lucide-react';
import InteractiveGrid from './InteractiveGrid'; // [!code ++]

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const dashboardRef = useRef(null);
  const glowRef = useRef(null);

  // GSAP Animation Logic
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Initial Load Sequence (Cinematic Entrance)
    tl.fromTo(".hero-badge", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(".hero-text-line", 
      { y: 50, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 1 },
      "-=0.4"
    )
    .fromTo(".hero-btn", 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.6"
    )
    .fromTo(dashboardRef.current, 
      { rotateX: 45, y: 100, opacity: 0 },
      { rotateX: 20, y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }, // Starts tilted
      "-=0.8"
    );

    // 2. Continuous Background Float (The "Alive" Feeling)
    gsap.to(".floating-orb", {
      y: -20,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 2
    });

  }, { scope: containerRef });

  // 3. High-Performance Mouse Interaction (3D Tilt)
  const handleMouseMove = (e) => {
    if (!dashboardRef.current) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate mouse position as a percentage (-1 to 1)
    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;

    // Use GSAP for smooth interpolation (no lag)
    gsap.to(dashboardRef.current, {
      rotateY: xPos * 10, // Tilt left/right
      rotateX: 20 - (yPos * 10), // Tilt up/down (keeping slightly tilted back)
      duration: 0.5,
      ease: "power2.out"
    });

    // Move the glow behind the dashboard
    gsap.to(glowRef.current, {
      x: xPos * 50,
      y: yPos * 50,
      duration: 1.5,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden perspective-1000"
    >
      {/* --- ADDED: The Physics Grid Background --- */}
      <div className="absolute inset-0 z-0">
         <InteractiveGrid />
      </div>

      {/* Background Gradients (Orb effects) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="floating-orb absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="floating-orb absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        {/* Optional: Keep the static grid overlay for texture if you like, or remove it */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8 opacity-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">Esth AI 2.0</span>
        </div>

        {/* Text Group */}
        <div ref={textRef} className="mb-10 space-y-2 perspective-500">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[0.9]">
            <div className="overflow-hidden"><div className="hero-text-line">Intelligence</div></div>
            <div className="overflow-hidden">
              <div className="hero-text-line text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400">
                Beyond Limits.
              </div>
            </div>
          </h1>
          <div className="overflow-hidden mt-6">
            <p className="hero-text-line text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              The neural engine for the next generation of apps. 
              <br className="hidden md:block"/> Zero latency. Infinite scalability.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="hero-btn group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-shadow">
            <span className="relative z-10 flex items-center gap-2">
              Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="hero-btn px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 transition-colors font-medium flex items-center gap-2">
            <Play className="w-4 h-4 fill-white" /> Showreel
          </button>
        </div>

        {/* 3D Dashboard Mockup */}
        <div className="relative perspective-1000">
          {/* Moving Glow Behind */}
          <div ref={glowRef} className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-[80px] opacity-20 transform scale-75"></div>
          
          {/* Main Card */}
          <div 
            ref={dashboardRef} 
            className="relative mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl shadow-2xl overflow-hidden transform-style-3d opacity-0"
          >
            {/* Fake UI Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="text-xs font-mono text-slate-500">dashboard.Esth.ai</div>
            </div>

            {/* Fake UI Content */}
            <div className="p-8 grid grid-cols-3 gap-6 text-left h-[300px]">
              {/* Card 1 */}
              <div className="col-span-2 space-y-4">
                <div className="h-32 rounded-lg bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <Cpu className="w-8 h-8 text-purple-400 mb-2" />
                  <div className="text-2xl font-bold text-white">98.4%</div>
                  <div className="text-xs text-purple-300">Model Accuracy</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4">
                     <div className="text-sm text-slate-400 mb-2">Latency</div>
                     <div className="text-xl font-mono text-green-400">12ms</div>
                  </div>
                  <div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4">
                     <div className="text-sm text-slate-400 mb-2">Requests</div>
                     <div className="text-xl font-mono text-blue-400">2.4M</div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 (Right) */}
              <div className="col-span-1 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[40px]"></div>
                 <div>
                    <Globe className="w-6 h-6 text-slate-400 mb-4" />
                    <div className="space-y-2">
                       <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[70%]"></div>
                       </div>
                       <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 w-[40%]"></div>
                       </div>
                       <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[90%]"></div>
                       </div>
                    </div>
                 </div>
                 <div className="text-xs text-slate-500 font-mono mt-4">
                    System Operational
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;