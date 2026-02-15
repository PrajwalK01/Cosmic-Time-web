/* Utility */
function drawAxes(ctx, w, h) {
    ctx.strokeStyle = "#444";
    ctx.beginPath();
    ctx.moveTo(40, 10);
    ctx.lineTo(40, h - 30);
    ctx.lineTo(w - 10, h - 30);
    ctx.stroke();
}

/* Cosmic Time (Log Scale) */
(function () {
    const c = document.getElementById("cosmicTime");
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;

    drawAxes(ctx, c.width, c.height);
    ctx.strokeStyle = "#6cf";

    ctx.beginPath();
    for (let i = 1; i <= 10; i++) {
        let x = 40 + i * (c.width - 60) / 10;
        let y = c.height - 30 - Math.log10(i + 1) * 60;
        if (i === 1) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
})();

/* Cyclic vs Linear */
(function () {
    const c = document.getElementById("cycleGraph");
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;

    drawAxes(ctx, c.width, c.height);

    ctx.strokeStyle = "#ff9";
    ctx.beginPath();
    for (let x = 0; x < 300; x++) {
        let y = Math.sin(x / 20) * 80;
        ctx.lineTo(40 + x, c.height / 2 - y);
    }
    ctx.stroke();

    ctx.strokeStyle = "#f66";
    ctx.beginPath();
    ctx.moveTo(40, c.height - 30);
    ctx.lineTo(c.width - 10, 40);
    ctx.stroke();
})();

/* Velocity Time Dilation */
(function () {
    const velSlider = document.getElementById("velocity");
    const velCanvas = document.getElementById("velocityGraph");

    if (velSlider && velCanvas) {
        const velCtx = velCanvas.getContext("2d");

        function drawVelocity() {
            velCanvas.width = velCanvas.offsetWidth;
            velCanvas.height = velCanvas.offsetHeight;

            drawAxes(velCtx, velCanvas.width, velCanvas.height);
            velCtx.strokeStyle = "#7ff";

            velCtx.beginPath();
            for (let v = 0; v < 0.99; v += 0.01) {
                let gamma = 1 / Math.sqrt(1 - v * v);
                let x = 40 + v * (velCanvas.width - 60);
                let y = velCanvas.height - 30 - gamma * 40;

                // Prevent drawing off-screen for very high gamma
                if (y < 0) y = 0;

                if (v === 0) velCtx.moveTo(x, y);
                else velCtx.lineTo(x, y);
            }
            velCtx.stroke();

            // Draw current point
            const currentV = parseFloat(velSlider.value);
            const currentGamma = 1 / Math.sqrt(1 - currentV * currentV);
            const cx = 40 + currentV * (velCanvas.width - 60);
            const cy = velCanvas.height - 30 - currentGamma * 40;

            velCtx.fillStyle = "#fff";
            velCtx.beginPath();
            velCtx.arc(cx, cy, 5, 0, Math.PI * 2);
            velCtx.fill();
        }
        velSlider.oninput = drawVelocity;
        // Initial draw
        setTimeout(drawVelocity, 100);
    }
})();

/* Gravity Time Dilation */
(function () {
    const gSlider = document.getElementById("gravity");
    const gCanvas = document.getElementById("gravityGraph");

    if (gSlider && gCanvas) {
        const gCtx = gCanvas.getContext("2d");

        function drawGravity() {
            gCanvas.width = gCanvas.offsetWidth;
            gCanvas.height = gCanvas.offsetHeight;

            drawAxes(gCtx, gCanvas.width, gCanvas.height);
            gCtx.strokeStyle = "#fc7";

            gCtx.beginPath();
            for (let r = 1; r < 20; r += 0.2) {
                let t = Math.sqrt(1 - 1 / r);
                let x = 40 + r * (gCanvas.width - 60) / 20;
                let y = gCanvas.height - 30 - t * 200;

                if (r === 1) gCtx.moveTo(x, y);
                else gCtx.lineTo(x, y);
            }
            gCtx.stroke();

            // Draw current point
            const currentR = parseFloat(gSlider.value);
            const currentT = Math.sqrt(1 - 1 / currentR);
            const cx = 40 + currentR * (gCanvas.width - 60) / 20;
            const cy = gCanvas.height - 30 - currentT * 200;

            gCtx.fillStyle = "#fff";
            gCtx.beginPath();
            gCtx.arc(cx, cy, 5, 0, Math.PI * 2);
            gCtx.fill();
        }
        gSlider.oninput = drawGravity;
        setTimeout(drawGravity, 100);
    }
})();


/* Entropy */
(function () {
    const c = document.getElementById("entropyGraph");
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;

    drawAxes(ctx, c.width, c.height);
    ctx.strokeStyle = "#9f9";

    ctx.beginPath();
    let S = 0;
    for (let t = 0; t < 300; t++) {
        S += Math.random() * 0.5;
        let x = 40 + t * (c.width - 60) / 300; // Scale x to fit width
        let y = c.height - 30 - S;
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
})();

/* Timeline Scroll Animation */
(function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
})();
