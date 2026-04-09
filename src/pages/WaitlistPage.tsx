import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import Badge from "../components/Badge";
import Card from "../components/Card";
import BentoGrid from "../components/BentoGrid";
import "./WaitlistPage.css";

type TypewriterProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
};

function TypewriterText({
  text,
  speed = 38,
  startDelay = 0,
  onComplete,
  className,
  showCursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    let index = 0;
    setDisplayed("");
    setDone(false);

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
          onComplete?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && <span className="typewriter-cursor">|</span>}
    </span>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function WaitlistPage() {
  const [headlineDone, setHeadlineDone] = useState(false);
  const { scrollY } = useScroll();
  // Move the background 50% slower than the page scrolls
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  return (
    <div className="waitlist-page-wrapper">
      <motion.div
        className="waitlist-background"
        style={{ y: backgroundY }}
      ></motion.div>
      <div className="bento-background"></div>

      <div className="background-text">Payvol</div>

      <main className="waitlist-root">
        <motion.div
          className="page-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              label="Payvol"
              icon={<Zap size={18} strokeWidth={2.5} color="white" />}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="hero-text-block">
            <p className="hero-headline">
              <TypewriterText
                text="Payments that build your financial future"
                speed={35}
                startDelay={600}
                onComplete={() => setHeadlineDone(true)}
              />
            </p>
            <p className="hero-subheadline">
              {headlineDone && (
                <TypewriterText
                  text="Send, spend, and grow your money — all in one app."
                  speed={30}
                />
              )}
            </p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading">
            Coming soon!
          </motion.h1>

          <motion.div variants={itemVariants} className="card-container">
            <Card />
          </motion.div>

        </motion.div>
      </main>

      {/* Social icons — below the Payvol background text */}
      <div className="social-links-footer">
        <div className="social-links">
          <a href="https://x.com/PayVol" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/payvolhq?igsh=d2g2OGRxN29iZmZ3" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@payvolhq" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Interactive Section */}
      <BentoGrid />
    </div>
  );
}

export default WaitlistPage;
