import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  PieChart,
  Wallet,
  CreditCard,
  Receipt,
  TrendingUp,
  RefreshCcw,
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
          <BentoCard delay={0.1} className="features-card">
            <h3 className="features-heading">Features</h3>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon-box"><Wallet size={18} color="white" /></div>
                <div>
                  <p className="feature-title">Digital Wallet</p>
                  <p className="feature-desc">Send &amp; receive money</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box"><CreditCard size={18} color="white" /></div>
                <div>
                  <p className="feature-title">Prepaid Visa Card</p>
                  <p className="feature-desc">Online &amp; offline payments</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box"><Receipt size={18} color="white" /></div>
                <div>
                  <p className="feature-title">Bill Payments</p>
                  <p className="feature-desc">Pay utilities easily</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box"><TrendingUp size={18} color="white" /></div>
                <div>
                  <p className="feature-title">Financial Growth</p>
                  <p className="feature-desc">Build financial identity</p>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.2}>
            <div className="icon-box">
              <RefreshCcw size={20} color="white" />
            </div>
            <h3>Automated Workflows</h3>
            <p>
              Automate bill payments, savings rules, and spending limits —
              so your money works for you around the clock.
            </p>
            <div className="uvp-highlight">
              <p className="uvp-quote">&ldquo;Every transaction helps build your financial identity.&rdquo;</p>
            </div>
          </BentoCard>

          <BentoCard delay={0.3} className="financial-insights-card">
              <div className="icon-box">
                <PieChart size={20} color="white" />
              </div>
              <h3>Financial Insights</h3>
              <p>
                Track spending patterns, monitor cash flow, and get smart
                insights that help you grow and protect your money.
              </p>
              <div className="social-proof">
                <div className="sp-row">
                  <span className="sp-dot"></span>
                  <span className="sp-text">Launching soon in Ghana</span>
                </div>
                <div className="sp-row">
                  <div className="sp-avatars">
                    <div className="sp-avatar">A</div>
                    <div className="sp-avatar">K</div>
                    <div className="sp-avatar">E</div>
                  </div>
                  <span className="sp-text">Join others getting early access</span>
                </div>
              </div>
            </BentoCard>
        </div>

        {/* Middle Column — Product Preview */}
        <div className="bento-col middle-col">
          <BentoCard className="product-preview-pane" delay={0.4}>

            {/* Header */}
            <div className="pp-header">
              <span className="pp-label">Product Preview</span>
              <h2 className="pp-title">See Payvol in action</h2>
              <p className="pp-subtitle">Send, spend &amp; grow — all in one place.</p>
            </div>

            {/* Inner grid: phone left, card right */}
            <div className="pp-grid">

              {/* ── Phone mockup ── */}
              <div className="pp-phone-wrap">
                <div className="pp-phone-scene">
                  <div className="pp-phone">
                    <div className="pp-island"></div>

                    {/* Screen */}
                    <div className="pp-screen">

                      {/* Status bar */}
                      <div className="pp-status-bar">
                        <span className="pp-status-time">9:41</span>
                        <div className="pp-status-icons">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2" strokeLinecap="round"/></svg>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="pp-screen-header">
                        <p className="pp-screen-label">My Cards</p>
                        <div className="pp-screen-add">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                        </div>
                      </div>

                      {/* Floating card visual */}
                      <div className="pp-mini-card">
                        <div className="pp-mini-card-shine"></div>
                        <div className="pp-mini-card-top">
                          <div className="pp-mini-chip"></div>
                          <span className="pp-mini-logo">Payvol</span>
                        </div>
                        <p className="pp-mini-num">•••• •••• •••• 8374</p>
                        <div className="pp-mini-bot">
                          <span className="pp-mini-name">Mr.Anderson</span>
                          <span className="pp-mini-exp">08/29</span>
                        </div>
                      </div>

                      {/* Dots pagination */}
                      <div className="pp-card-dots">
                        <div className="pp-dot pp-dot-active"></div>
                        <div className="pp-dot"></div>
                        <div className="pp-dot"></div>
                      </div>

                      {/* Stats row */}
                      <div className="pp-stats-row">
                        <div className="pp-stat">
                          <p className="pp-stat-label">Balance</p>
                          <p className="pp-stat-val">GH₵ 4,250</p>
                        </div>
                        <div className="pp-stat-divider"></div>
                        <div className="pp-stat">
                          <p className="pp-stat-label">Spent</p>
                          <p className="pp-stat-val">GH₵ 892</p>
                        </div>
                        <div className="pp-stat-divider"></div>
                        <div className="pp-stat">
                          <p className="pp-stat-label">Saved</p>
                          <p className="pp-stat-val pp-stat-green">GH₵ 120</p>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="pp-quick-row">
                        <div className="pp-quick-btn">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          <p>Send</p>
                        </div>
                        <div className="pp-quick-btn">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                          <p>Top Up</p>
                        </div>
                        <div className="pp-quick-btn">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                          <p>Pay</p>
                        </div>
                        <div className="pp-quick-btn">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          <p>Block</p>
                        </div>
                      </div>

                    </div>

                    {/* Home bar */}
                    <div className="pp-home-bar"></div>
                  </div>

                  {/* 3D shadow/reflection under phone */}
                  <div className="pp-phone-shadow"></div>
                </div>
              </div>

              {/* ── Right: Payvol card + pills ── */}
              <div className="pp-right">
                {/* Payvol debit card */}
                <div className="pp-visa-card">
                  <div className="pp-card-glow pp-card-glow-1"></div>
                  <div className="pp-card-glow pp-card-glow-2"></div>

                  <div className="pp-card-top">
                    <div className="pp-chip">
                      <div className="pp-chip-h"></div>
                      <div className="pp-chip-v"></div>
                    </div>
                    <span className="pp-card-logo">Payvol</span>
                  </div>

                  <p className="pp-card-num">4291 •••• •••• 8374</p>

                  <div className="pp-card-bot">
                    <div className="pp-card-field">
                      <p className="pp-card-field-lbl">Card Holder</p>
                      <p className="pp-card-field-val">Mr.Anderson</p>
                    </div>
                    <div className="pp-card-field">
                      <p className="pp-card-field-lbl">Expires</p>
                      <p className="pp-card-field-val">08 / 29</p>
                    </div>
                    <div className="pp-visa-mark">
                      <div className="pp-visa-c pp-visa-l"></div>
                      <div className="pp-visa-c pp-visa-r"></div>
                      <span className="pp-visa-txt">VISA</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="pp-desc">
                  <p className="pp-desc-title">Your Payvol Card</p>
                  <p className="pp-desc-body">A prepaid Visa that works anywhere — issued instantly from the app.</p>
                </div>

                {/* Pills */}
                <div className="pp-pills">
                  <span className="pp-pill">Prepaid Visa</span>
                  <span className="pp-pill">Instant Issue</span>
                  <span className="pp-pill">Tap to Pay</span>
                </div>
              </div>

            </div>
          </BentoCard>

          <BentoCard delay={0.5} className="urgency-card">
            <div className="urgency-badge">Limited Early Access</div>
            <h3 className="urgency-heading">Be among the first to<br/>experience Payvol.</h3>
            <div className="urgency-bar-wrap">
              <div className="urgency-bar">
                <motion.div
                  className="urgency-bar-fill"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                />
              </div>
              <span className="urgency-bar-label">Spots filling fast</span>
            </div>
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
        <div className="bento-footer-left">
          <p className="bento-footer-name">Payvol Technologies Ltd</p>
          <p className="bento-footer-location">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Accra, Ghana
          </p>
        </div>
        <button className="get-app-btn">Get App</button>
      </motion.div>
    </div>
  );
}
