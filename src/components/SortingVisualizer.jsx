import { useEffect, useRef, useState } from "react";
import "./SortingVisualizer.css";

// ─── Bubble Sort Generator ───────────────────────────────────────────────────
function* bubbleSortGen(arr) {
    const n = arr.length;
    const sorted = new Set();
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            yield { type: "compare", a: j, b: j + 1, sorted };
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                yield { type: "swap", a: j, b: j + 1, arr: [...arr], sorted };
            }
        }
        sorted.add(n - 1 - i);
        yield { type: "sorted_one", idx: n - 1 - i, sorted: new Set(sorted) };
    }
    sorted.add(0);
    yield { type: "done", sorted };
}

// ─── Constants ────────────────────────────────────────────────────────────────
const BAR_COUNT = 20;
const BLUE   = new (window.THREE?.Color || class {})("#3b82f6");
const YELLOW = new (window.THREE?.Color || class {})("#facc15");
const GREEN  = new (window.THREE?.Color || class {})("#22c55e");

function generateHeights() {
    return Array.from({ length: BAR_COUNT }, () => Math.random() * 0.75 + 0.25);
}

// ─── Component ────────────────────────────────────────────────────────────────
const SortingVisualizer = () => {
    const canvasRef  = useRef(null);
    const stateRef   = useRef(null); // { bars, gen, step }
    const [key, setKey] = useState(0); // bump to restart

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const THREE = window.THREE;
        if (!THREE) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // ── Renderer ──────────────────────────────────────────────
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // ── Scene / Camera ────────────────────────────────────────
        const scene  = new THREE.Scene();
        const W = canvas.parentElement.offsetWidth;
        const H = 280;
        renderer.setSize(W, H, false);

        const camera = new THREE.OrthographicCamera(
            -BAR_COUNT / 2, BAR_COUNT / 2,
            3.5, -0.5,
            0.1, 100
        );
        camera.position.z = 10;

        // ── Lighting ──────────────────────────────────────────────
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const dir = new THREE.DirectionalLight(0xffffff, 0.8);
        dir.position.set(5, 10, 5);
        scene.add(dir);

        // ── Build Bars ────────────────────────────────────────────
        const heights = generateHeights();
        const arr     = [...heights];
        const bars    = [];

        const barW = 0.6;
        const gap  = 1.0;

        for (let i = 0; i < BAR_COUNT; i++) {
            const geo  = new THREE.BoxGeometry(barW, heights[i] * 3, barW);
            const mat  = new THREE.MeshStandardMaterial({ color: "#3b82f6" });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.x = i * gap - (BAR_COUNT / 2 - 0.5) * gap;
            mesh.position.y = (heights[i] * 3) / 2 - 0.25;
            scene.add(mesh);
            bars.push({ mesh, height: heights[i] });
        }

        // Helper to rebuild a bar's geometry at a new height
        const setBarHeight = (i, h) => {
            bars[i].mesh.geometry.dispose();
            bars[i].mesh.geometry = new THREE.BoxGeometry(barW, h * 3, barW);
            bars[i].mesh.position.y = (h * 3) / 2 - 0.25;
            bars[i].height = h;
        };

        // ── Sorting State ─────────────────────────────────────────
        let gen      = bubbleSortGen(arr);
        let frame    = 0;
        const SPEED  = 4; // steps per frame at 60fps — increase for faster
        let comparing = [-1, -1];
        let sortedSet = new Set();
        let done      = false;
        let restartTimer = null;

        stateRef.current = { restart: null };

        const resetScene = () => {
            clearTimeout(restartTimer);
            // Reset colors
            bars.forEach((b) => {
                b.mesh.material.color.set("#3b82f6");
            });
            // Rebuild heights
            const newHeights = generateHeights();
            const newArr     = [...newHeights];
            for (let i = 0; i < BAR_COUNT; i++) setBarHeight(i, newHeights[i]);
            arr.length = 0;
            arr.push(...newArr);
            gen       = bubbleSortGen(arr);
            frame     = 0;
            comparing = [-1, -1];
            sortedSet = new Set();
            done      = false;
        };
        stateRef.current.restart = resetScene;

        // ── Animation Loop ────────────────────────────────────────
        let animId;

        const animate = () => {
            animId = requestAnimationFrame(animate);
            frame++;

            if (!done && frame % SPEED === 0) {
                for (let s = 0; s < 1; s++) {
                    const result = gen.next();
                    if (result.done) { done = true; break; }
                    const step = result.value;

                    if (step.type === "compare") {
                        // Reset previous compare pair
                        if (comparing[0] >= 0 && !sortedSet.has(comparing[0]))
                            bars[comparing[0]].mesh.material.color.set("#3b82f6");
                        if (comparing[1] >= 0 && !sortedSet.has(comparing[1]))
                            bars[comparing[1]].mesh.material.color.set("#3b82f6");

                        comparing = [step.a, step.b];
                        if (!sortedSet.has(step.a)) bars[step.a].mesh.material.color.set("#facc15");
                        if (!sortedSet.has(step.b)) bars[step.b].mesh.material.color.set("#facc15");
                    }

                    if (step.type === "swap") {
                        // Swap heights
                        const ha = bars[step.a].height;
                        const hb = bars[step.b].height;
                        setBarHeight(step.a, hb);
                        setBarHeight(step.b, ha);
                    }

                    if (step.type === "sorted_one") {
                        sortedSet = step.sorted;
                        sortedSet.forEach(idx => {
                            bars[idx].mesh.material.color.set("#22c55e");
                        });
                        // Clear comparing
                        if (!sortedSet.has(comparing[0])) bars[comparing[0]]?.mesh.material.color.set("#3b82f6");
                        if (!sortedSet.has(comparing[1])) bars[comparing[1]]?.mesh.material.color.set("#3b82f6");
                        comparing = [-1, -1];
                    }

                    if (step.type === "done") {
                        sortedSet = step.sorted;
                        bars.forEach(b => b.mesh.material.color.set("#22c55e"));
                        done = true;
                        restartTimer = setTimeout(resetScene, 1800);
                    }
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        // ── Resize ────────────────────────────────────────────────
        const resize = () => {
            const newW = canvas.parentElement.offsetWidth;
            renderer.setSize(newW, H, false);
        };
        window.addEventListener("resize", resize);

        // ── Cleanup ───────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(animId);
            clearTimeout(restartTimer);
            window.removeEventListener("resize", resize);
            bars.forEach(b => { b.mesh.geometry.dispose(); b.mesh.material.dispose(); });
            renderer.dispose();
        };
    }, [key]);

    const handleRestart = () => setKey(k => k + 1);

    if (typeof window !== "undefined" && window.innerWidth < 768) {
        return (
            <div className="sort-mobile-fallback">
                <div className="sort-mobile-bars">
                    {[65, 90, 40, 75, 55, 85, 30, 70, 95, 45].map((h, i) => (
                        <div
                            key={i}
                            className="sort-mobile-bar"
                            style={{ height: `${h}%`, background: i === 7 ? "#22c55e" : i === 4 ? "#facc15" : "#3b82f6" }}
                        />
                    ))}
                </div>
                <p className="sort-mobile-label">Bubble Sort Visualization</p>
            </div>
        );
    }

    return (
        <div className="sorting-visualizer-wrapper">
            <div className="sort-legend">
                <span className="sort-legend-item blue">Unsorted</span>
                <span className="sort-legend-item yellow">Comparing</span>
                <span className="sort-legend-item green">Sorted</span>
            </div>
            <div className="sort-canvas-wrapper">
                <canvas ref={canvasRef} className="sort-canvas" />
            </div>
            <button className="sort-restart-btn" onClick={handleRestart} id="sort-restart-btn">
                ↺ Restart
            </button>
        </div>
    );
};

export default SortingVisualizer;
