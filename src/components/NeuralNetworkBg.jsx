import React, { useRef, useEffect } from 'react';

const NeuralNetworkBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const particleCount = 60;
    const connectionDistance = 180; // Longer connections for "web" look
    const mouseRadius = 250;
    
    // ML Theme Colors: Indigo (Input) -> Rose (Activation)
    const baseColor = { r: 99, g: 102, b: 241 }; // Indigo-500
    const activeColor = { r: 244, g: 63, b: 94 }; // Rose-500

    let particles = [];
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Neuron {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow, organic movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.pulse = 0; // 0 to 1 activation level
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen (Infinite space feel)
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Neural Activation (Mouse Interaction)
        if (mouse.x) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // If mouse is near, "excite" the neuron
          if (dist < mouseRadius) {
            this.pulse = Math.min(this.pulse + 0.05, 1); // Charge up
          } else {
            this.pulse = Math.max(this.pulse - 0.02, 0); // Decay
          }
        } else {
             this.pulse = Math.max(this.pulse - 0.02, 0); // Decay
        }
      }

      draw() {
        // Color Interpolation: Indigo -> Rose based on 'pulse'
        const r = baseColor.r + (activeColor.r - baseColor.r) * this.pulse;
        const g = baseColor.g + (activeColor.g - baseColor.g) * this.pulse;
        const b = baseColor.b + (activeColor.b - baseColor.b) * this.pulse;
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.5 + this.pulse * 0.5})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size + (this.pulse * 2), 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect for active neurons
        if (this.pulse > 0.1) {
            ctx.shadowBlur = 15 * this.pulse;
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 1)`;
            ctx.fill();
            ctx.shadowBlur = 0; // Reset
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Neuron());
      }
    };

    const animate = () => {
      // Clear with trail effect for "smear" motion
      ctx.fillStyle = 'rgba(2, 6, 23, 0.3)'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => p.update());

      // Draw Connections (Synapses)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Calculate average pulse of the two neurons
            const activation = (particles[i].pulse + particles[j].pulse) / 2;
            const opacity = (1 - dist / connectionDistance) * (0.2 + activation * 0.8);
            
            ctx.beginPath();
            
            // Active synapses are Rose, dormant are Indigo/Grey
            if (activation > 0.1) {
                ctx.strokeStyle = `rgba(244, 63, 94, ${opacity})`; // Active
            } else {
                ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`; // Dormant
            }

            ctx.lineWidth = 1 + activation; // Active lines get thicker
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Draw Nodes
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-auto" />;
};

export default NeuralNetworkBg;