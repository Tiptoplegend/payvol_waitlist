import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Calendar,
  Network,
  BarChart,
  Smartphone,
  Bell,
  LayoutTemplate,
  Link2,
} from "lucide-react";
import "./BentoGrid.css";

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // 3D Tilt properties
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    setPosition({ x: localX, y: localY });

    // For 3D Tilt
    x.set(localX / rect.width - 0.5);
    y.set(localY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleMouseLeave}
      className={`bento-card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
    >
      <div
        className="spotlight-overlay"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="bento-content">{children}</div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <div className="bento-wrapper">
      {/* Background massive text */}
      <div className="bento-background-text">MOBILE APP</div>

      <div className="bento-container">
        {/* Left Column */}
        <div className="bento-col">
          <BentoCard delay={0.1}>
            <div className="icon-box">
              <Calendar size={20} color="white" />
            </div>
            <h3>Smart Task Scheduling</h3>
            <p>
              Automatically prioritize and schedule tasks based on urgency,
              deadlines, and user preferences.
            </p>
          </BentoCard>

          <BentoCard delay={0.2}>
            <div className="icon-box">
              <Network size={20} color="white" />
            </div>
            <h3>Automated Workflows</h3>
            <p>
              Create and manage complex workflows with ease, automating
              repetitive tasks and multi-step processes.
            </p>
          </BentoCard>

          <BentoCard delay={0.3}>
            <div className="icon-box">
              <BarChart size={20} color="white" />
            </div>
            <h3>Analytics</h3>
            <p>
              Analyze data trends and receive predictions that help optimize
              business decisions and strategies.
            </p>
          </BentoCard>
        </div>

        {/* Middle Column */}
        <div className="bento-col middle-col">
          <BentoCard className="span-2-rows mobile-pane" delay={0.4}>
            <div className="icon-box">
              <Smartphone size={20} color="white" />
            </div>
            <h2>Go mobile</h2>
            <p>
              Our AI automation mobile app is designed to simplify and
              supercharge your productivity.
            </p>

            {/* CSS Only Mockup of a mobile wireframe! */}
            <div className="mobile-mockup">
              <div className="mockup-header">
                <span className="time">9:41</span>
                <div className="notch"></div>
                <div className="icons">
                  <div className="battery"></div>
                </div>
              </div>
              <div className="mockup-search">
                <span>🔍 Search..</span>
              </div>
              <div className="mockup-node-container">
                <div className="node start-node">Start</div>
                <div className="line line-1"></div>
                <div className="node icon-node">👤</div>
                <div className="node-text text-1">
                  New account <br />
                  <span>Action</span>
                </div>
                <div className="line line-2"></div>
                <div className="node icon-node">✉️</div>
                <div className="node-text text-2">
                  Send verification <br />
                  <span>Action</span>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.5}>
            <div className="bento-text-only">
              <p className="large-p">
                Easily access all app features with a user-friendly, intuitive
                menu design that streamlines navigation and enhances
                productivity.
              </p>
            </div>
            <div className="floating-dock">
              <div className="dock-icon">🏠</div>
              <div className="dock-icon active-icon">✨</div>
              <div className="dock-icon">🗑️</div>
              <div className="dock-icon">🖼️</div>
              <div className="dock-icon">⋯</div>
            </div>
          </BentoCard>
        </div>

        {/* Right Column */}
        <div className="bento-col">
          <BentoCard delay={0.6}>
            <div className="icon-box">
              <Bell size={20} color="white" />
            </div>
            <h3>Real-Time Notifications</h3>
            <p>
              Stay informed with real-time alerts and notifications for critical
              updates and task completions.
            </p>
          </BentoCard>

          <BentoCard delay={0.7}>
            <div className="icon-box">
              <LayoutTemplate size={20} color="white" />
            </div>
            <h3>Customizable Dashboards</h3>
            <p>
              Personalize your dashboard to display key metrics, tasks, and data
              that matter most to you.
            </p>
          </BentoCard>

          <BentoCard delay={0.8}>
            <div className="icon-box">
              <Link2 size={20} color="white" />
            </div>
            <h3>Seamless Third-Party Integration</h3>
            <p>
              Connect with other tools and apps effortlessly, integrating your
              existing systems into the automation process.
            </p>
          </BentoCard>
        </div>
      </div>

      <motion.div
        className="get-app-btn-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <button className="get-app-btn">Get App</button>
      </motion.div>
    </div>
  );
}
