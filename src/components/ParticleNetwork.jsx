import { useEffect, useRef } from "react";

const ParticleNetwork = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        // Disable on mobile for performance
        if (window.innerWidth < 768) return;

        const THREE = window.THREE;
        if (!THREE) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // ── Renderer ───────────────────────────────────────────────
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // ── Camera ─────────────────────────────────────────────────
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        camera.position.z = 80;

        // ── Particle Data ──────────────────────────────────────────
        const PARTICLE_COUNT = 120;
        const SPREAD = 70;

        const positions = [];
        const velocities = [];
        const originalPositions = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const x = (Math.random() - 0.5) * SPREAD * 2;
            const y = (Math.random() - 0.5) * SPREAD;
            const z = (Math.random() - 0.5) * 30;
            positions.push(x, y, z);
            originalPositions.push(x, y, z);
            velocities.push(
                (Math.random() - 0.5) * 0.04,
                (Math.random() - 0.5) * 0.04,
                (Math.random() - 0.5) * 0.01
            );
        }

        // ── Particle Points ────────────────────────────────────────
        const particleGeo = new THREE.BufferGeometry();
        const posArr = new Float32Array(positions);
        particleGeo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));

        const particleMat = new THREE.PointsMaterial({
            color: 0x7eb5ff,
            size: 0.9,
            transparent: true,
            opacity: 0.55,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(particleGeo, particleMat);
        scene.add(points);

        // ── Connection Lines ───────────────────────────────────────
        const MAX_CONNECTIONS = PARTICLE_COUNT * 5;
        const linePositions = new Float32Array(MAX_CONNECTIONS * 6);
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        lineGeo.setDrawRange(0, 0);

        const lineMat = THREE.LineSegmentsMaterial
            ? new THREE.LineSegmentsMaterial({
                  color: 0x3b82f6,
                  transparent: true,
                  opacity: 0.18,
              })
            : new THREE.LineBasicMaterial({
                  color: 0x3b82f6,
                  transparent: true,
                  opacity: 0.18,
              });

        const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
        scene.add(lineSegments);

        // ── Mouse State ────────────────────────────────────────────
        const mouse = { x: 99999, y: 99999 };
        const CONNECT_DIST = 120;   // px in world-space approx
        const REPEL_DIST = 150;     // px in world-space approx
        const REPEL_STRENGTH = 0.12;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            // Map to NDC then unproject
            const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            // Approximate world position at z=0 plane
            const fovRad = (camera.fov * Math.PI) / 180;
            const worldHeight = 2 * Math.tan(fovRad / 2) * camera.position.z;
            const worldWidth = worldHeight * camera.aspect;
            mouse.x = (ndcX * worldWidth) / 2;
            mouse.y = (ndcY * worldHeight) / 2;
        };

        // Attach to the parent hero section so repel works while hovering text too
        const heroSection = canvas.closest("section") || canvas.parentElement;
        heroSection.addEventListener("mousemove", handleMouseMove);
        heroSection.addEventListener("mouseleave", () => {
            mouse.x = 99999;
            mouse.y = 99999;
        });

        // ── Resize Handler ─────────────────────────────────────────
        const resize = () => {
            const w = canvas.parentElement.offsetWidth;
            const h = canvas.parentElement.offsetHeight;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        // ── Animation Loop ─────────────────────────────────────────
        let animId;
        const pos = particleGeo.attributes.position.array;

        const animate = () => {
            animId = requestAnimationFrame(animate);

            // Move particles + wrap
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const base = i * 3;

                // Apply velocity
                pos[base]     += velocities[base];
                pos[base + 1] += velocities[base + 1];
                pos[base + 2] += velocities[base + 2];

                // Wrap boundaries
                if (pos[base]     >  SPREAD)  pos[base]     = -SPREAD;
                if (pos[base]     < -SPREAD)  pos[base]     =  SPREAD;
                if (pos[base + 1] >  SPREAD / 2) pos[base + 1] = -SPREAD / 2;
                if (pos[base + 1] < -SPREAD / 2) pos[base + 1] =  SPREAD / 2;

                // Mouse repulsion
                const dx = pos[base] - mouse.x;
                const dy = pos[base + 1] - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < REPEL_DIST && dist > 0) {
                    const force = (1 - dist / REPEL_DIST) * REPEL_STRENGTH;
                    pos[base]     += (dx / dist) * force;
                    pos[base + 1] += (dy / dist) * force;
                }
            }
            particleGeo.attributes.position.needsUpdate = true;

            // Build connection lines
            let lineIdx = 0;
            const lp = lineGeo.attributes.position.array;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                for (let j = i + 1; j < PARTICLE_COUNT; j++) {
                    if (lineIdx >= MAX_CONNECTIONS) break;
                    const ai = i * 3, bi = j * 3;
                    const dx = pos[ai] - pos[bi];
                    const dy = pos[ai + 1] - pos[bi + 1];
                    const dz = pos[ai + 2] - pos[bi + 2];
                    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (d < CONNECT_DIST * 0.55) {
                        lp[lineIdx * 6]     = pos[ai];
                        lp[lineIdx * 6 + 1] = pos[ai + 1];
                        lp[lineIdx * 6 + 2] = pos[ai + 2];
                        lp[lineIdx * 6 + 3] = pos[bi];
                        lp[lineIdx * 6 + 4] = pos[bi + 1];
                        lp[lineIdx * 6 + 5] = pos[bi + 2];
                        lineIdx++;
                    }
                }
            }
            lineGeo.setDrawRange(0, lineIdx * 2);
            lineGeo.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // ── Cleanup ────────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(animId);
            heroSection.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
            renderer.dispose();
            particleGeo.dispose();
            particleMat.dispose();
            lineGeo.dispose();
            lineMat.dispose();
        };
    }, []);

    // Hidden on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) return null;

    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
            aria-hidden="true"
        />
    );
};

export default ParticleNetwork;
