import { Code2, Terminal, Cpu } from "lucide-react";
import "./ProblemSolving.css";

const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="problem-solving section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Algorithms & Problem Solving</h2>
                <div className="ps-content">
                    <div className="ps-text fade-in" style={{ animationDelay: "0.2s" }}>
                        <p>
                            Beyond building web applications, I invest significant time in mastering <span className="highlight">Data Structures and Algorithms (DSA)</span>. I believe that understanding underlying time and space complexities is crucial for writing truly scalable backend systems.
                        </p>
                        <p>
                            My approach involves competitive programming and rigorous practice on platforms like LeetCode. I focus on recognizing patterns, handling edge cases gracefully, and producing code that is not just correct, but optimal.
                        </p>
                    </div>

                    <div className="ps-cards fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="ps-card">
                            <Code2 className="ps-icon" size={28} />
                            <h3>Data Structures</h3>
                            <p>Trees, Graphs, Hash Maps, Heaps</p>
                        </div>
                        <div className="ps-card">
                            <Terminal className="ps-icon" size={28} />
                            <h3>Algorithms</h3>
                            <p>Dynamic Programming, BFS/DFS, Binary Search</p>
                        </div>
                        <div className="ps-card">
                            <Cpu className="ps-icon" size={28} />
                            <h3>Metrics</h3>
                            <p>O(N) Time & O(1) Space Optimization</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
