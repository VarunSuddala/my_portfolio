import { Terminal, Cpu, Network, GitBranch, Binary, LayoutTemplate, Database, Braces } from "lucide-react";
import SortingVisualizer from "./SortingVisualizer";
import "./ProblemSolving.css";

const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="problem-solving section-padding">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Algorithms & Problem Solving</h2>
                    <div className="header-line"></div>
                </div>
                
                <div className="ps-content">
                    <div className="ps-info fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="ps-text">
                            <p>
                                Beyond building web applications, I invest significant time in mastering <span className="highlight">Data Structures and Algorithms (DSA)</span>. I believe that understanding underlying time and space complexities is crucial for writing truly scalable backend systems.
                            </p>
                            <p>
                                My approach involves competitive programming and rigorous practice on platforms like LeetCode. I focus on recognizing patterns, handling edge cases gracefully, and producing code that is not just correct, but optimal.
                            </p>
                        </div>
                        
                        <div className="ps-metrics">
                            <div className="metric-box">
                                <span className="metric-value">350+</span>
                                <span className="metric-label">Problems Solved</span>
                            </div>
                        </div>

                        <div className="ps-focus-areas">
                            <h3 className="focus-title">Focus Areas</h3>
                            <div className="focus-tags">
                                <span className="focus-tag"><Network size={16} /> Graphs</span>
                                <span className="focus-tag"><GitBranch size={16} /> Dynamic Programming</span>
                                <span className="focus-tag"><Binary size={16} /> Trees</span>
                                <span className="focus-tag"><LayoutTemplate size={16} /> Sliding Window</span>
                            </div>
                        </div>
                    </div>

                    <div className="ps-engineering-panel fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="panel-header">
                            <div className="panel-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="panel-title">System.Algorithm</div>
                        </div>
                        <div className="panel-body">
                            <div className="ps-cards">
                                <div className="ps-card">
                                    <Database className="ps-icon" size={24} />
                                    <div className="card-content">
                                        <h3>Data Structures</h3>
                                        <p>Trees, Graphs, Hash Maps, Heaps</p>
                                    </div>
                                </div>
                                <div className="ps-card">
                                    <Terminal className="ps-icon" size={24} />
                                    <div className="card-content">
                                        <h3>Algorithms</h3>
                                        <p>Dynamic Programming, BFS/DFS, Binary Search</p>
                                    </div>
                                </div>
                                <div className="ps-card">
                                    <Cpu className="ps-icon" size={24} />
                                    <div className="card-content">
                                        <h3>Optimization</h3>
                                        <p>O(N) Time & O(1) Space Complexity</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="ps-visualizer-container fade-in" style={{ animationDelay: "0.6s" }}>
                    <div className="visualizer-header">
                        <Braces size={16} />
                        <span>Dynamic Algorithm Animation: Bubble Sort</span>
                    </div>
                    {/* Three.js Bubble Sort Visualizer — visual accent */}
                    <SortingVisualizer />
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
