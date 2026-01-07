import React, { useRef, useEffect } from 'react';

const CryptoNetworkBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const nodeCount = 45;
    const connectionDistance = 180;
    const mouseDistance = 250;
    const colors = ['#22d3ee', '#a78bfa', '#34d399']; // Cyan, Violet, Emerald

    // Data structures
    let nodes = [];
    let packets = []; // "Transactions" moving between nodes
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

    // Helper: Draw a Hexagon
    const drawHexagon = (x, y, radius, color, alpha) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + radius * Math.cos(angle);
        const hy = y + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Fill slightly
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha * 0.1;
      ctx.fill();
      ctx.globalAlpha = 1.0;
    };

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 8 + 5; // Bigger for hexagons
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulse = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse Repulsion (Decentralized nodes resisting centralization)
        if (mouse.x) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDistance) {
            const force = (mouseDistance - dist) / mouseDistance;
            this.vx -= (dx / dist) * force * 0.02; // Gentle push
            this.vy -= (dy / dist) * force * 0.02;
            this.pulse = Math.min(this.pulse + 0.05, 1); // Highlight near mouse
          } else {
            this.pulse = Math.max(this.pulse - 0.02, 0);
          }
        }
      }

      draw() {
        // Draw the Hexagon "Block"
        const opacity = 0.3 + this.pulse * 0.7;
        drawHexagon(this.x, this.y, this.size + (this.pulse * 3), this.color, opacity);
      }
    }

    class Packet {
      constructor(startNode, endNode) {
        this.x = startNode.x;
        this.y = startNode.y;
        this.targetX = endNode.x;
        this.targetY = endNode.y;
        this.speed = 0.05 + Math.random() * 0.05; // 0.0 to 1.0 progress per frame
        this.progress = 0;
        this.color = '#ffffff'; // Data is white/pure
        this.done = false;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.done = true;
        }
        
        // Linear interpolation
        this.x = this.x + (this.targetX - this.x) * this.speed;
        this.y = this.y + (this.targetY - this.y) * this.speed;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      nodes = [];
      packets = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update Nodes
      nodes.forEach(node => node.update());

      // Draw Connections & Spawn Packets
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // 1. Draw The Line (The "Chain")
            ctx.beginPath();
            const opacity = 1 - dist / connectionDistance;
            ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.2})`; // Slate-500, faint
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // 2. Randomly Spawn a "Transaction Packet"
            // Chance is based on closeness (closer nodes talk more)
            if (Math.random() < 0.002 && packets.length < 20) {
              packets.push(new Packet(nodes[i], nodes[j]));
            }
          }
        }

        // Connect to Mouse (The "Wallet/User")
        if (mouse.x) {
            const dx = nodes[i].x - mouse.x;
            const dy = nodes[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(6, 182, 212, ${1 - dist / mouseDistance})`; // Cyan Connection
                ctx.lineWidth = 1;
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
      }

      // Update & Draw Packets (Transactions)
      for (let i = packets.length - 1; i >= 0; i--) {
        packets[i].update();
        packets[i].draw();
        if (packets[i].done) {
          packets.splice(i, 1);
        }
      }

      // Draw Nodes (Hexagons) last so they sit on top
      nodes.forEach(node => node.draw());

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

export default CryptoNetworkBg;