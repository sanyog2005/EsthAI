import React, { useRef, useEffect } from 'react';

const InteractiveGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const spacing = 35; // Space between dots
    const mouseRadius = 200; // Radius of influence
    const dotSize = 1.5;
    const springFactor = 0.1; // How fast it snaps back
    const friction = 0.90; // How much it slows down (lower = jiggly)

    let points = [];
    let cols, rows;
    
    // Mouse State
    let mouse = { x: -1000, y: -1000 }; // Start off-screen

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    // Point Class
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0; // Velocity X
        this.vy = 0; // Velocity Y
      }

      update() {
        // 1. Calculate distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        // 2. Mouse Repulsion Force (The "Warp")
        const maxDistance = mouseRadius;
        let force = 0;

        if (distance < maxDistance) {
          force = (maxDistance - distance) / maxDistance;
        }

        // Push away from mouse (negative value) or pull (positive)
        // Let's pull slightly for a "gravity" effect, or push for "ripple"
        // Here we PUSH (-50 strength)
        const directionX = forceDirectionX * force * -50; 
        const directionY = forceDirectionY * force * -50;

        if (distance < maxDistance) {
            this.vx += directionX;
            this.vy += directionY;
        }

        // 3. Spring Force (Return to Origin)
        const springX = (this.originX - this.x) * springFactor;
        const springY = (this.originY - this.y) * springFactor;

        this.vx += springX;
        this.vy += springY;

        // 4. Apply Physics
        this.vx *= friction;
        this.vy *= friction;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        // Calculate intensity based on displacement from origin
        const dx = this.x - this.originX;
        const dy = this.y - this.originY;
        const displacement = Math.sqrt(dx * dx + dy * dy);
        
        // Dynamic Color:
        // Still = Dark Grey
        // Moving = Cyan/Purple Glow
        const r = 139 + (displacement * 5); // Leans towards Purple (139, 92, 246)
        const g = 92 + (displacement * 5);
        const b = 246 + (displacement * 2);
        const alpha = 0.2 + (displacement * 0.05); // Brighter when moving

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(alpha, 1)})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initGrid = () => {
      points = [];
      cols = Math.ceil(canvas.width / spacing);
      rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push(new Point(i * spacing, j * spacing));
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = '#020617'; // Deep black background (clears previous frame)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      points.forEach(point => {
        point.update();
        point.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default InteractiveGrid;