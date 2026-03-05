import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Start fading out after the bar loads (0.9 seconds)
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 900);

        // Remove from DOM completely after fade out completes (1.5 seconds)
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    Varun<span className="dot">.</span>
                </div>
                <div className="loader-bar-container">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
