const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('canvas-container').appendChild(canvas);

let width, height;
let particles = [];
const numParticles = 100;
const connectionDistance = 150;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 200; // Depth for pseudo-3D
        this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Bounce off edges (keep within bounds with some buffer)
        if (this.x < -100 || this.x > width + 100) this.vx *= -1;
        if (this.y < -100 || this.y > height + 100) this.vy *= -1;
        if (this.z < 0 || this.z > 200) this.vz *= -1;
    }
}

// Initialize Loop
for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
}

// 4D Rotation Logic (simplified as 3D rotation of the whole set)
let angle = 0;

function draw() {
    ctx.fillStyle = '#050510'; // Deep space background
    ctx.fillRect(0, 0, width, height);

    // Rotate the perspective slowly
    angle += 0.002;
    const cx = width / 2;
    const cy = height / 2;

    ctx.lineWidth = 1;

    particles.forEach(p => {
        p.update();

        // Simple 3D projection
        // Apply rotation around Y axis
        let x = p.x - cx;
        let z = p.z - 100;
        let x1 = x * Math.cos(angle) - z * Math.sin(angle);
        let z1 = z * Math.cos(angle) + x * Math.sin(angle);

        let screenX = x1 + cx;
        let screenY = p.y;

        // Draw particle
        ctx.beginPath();
        ctx.arc(screenX, screenY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 247, 255, 0.5)'; // Neon Blue dots
        ctx.fill();

        // Connect
        particles.forEach(p2 => {
            let dx = p.x - p2.x;
            let dy = p.y - p2.y;
            let dz = p.z - p2.z;
            let dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDistance) {
                // Calculate projected position for p2 roughly
                let x2_rel = p2.x - cx;
                let z2_rel = p2.z - 100;
                let x2_rot = x2_rel * Math.cos(angle) - z2_rel * Math.sin(angle);
                let screenX2 = x2_rot + cx;

                ctx.beginPath();
                ctx.moveTo(screenX, screenY);
                ctx.lineTo(screenX2, p2.y);
                ctx.strokeStyle = `rgba(0, 247, 255, ${1 - dist / connectionDistance})`;
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(draw);
}

draw();
