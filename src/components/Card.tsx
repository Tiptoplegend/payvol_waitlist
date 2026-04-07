import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import "./Card.css";

function Card() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#a855f7', '#3b82f6'],
        zIndex: 100
      });
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className="card">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="card-content"
          >
            <h2>Join our waitlist!</h2>
            <p className="card-description">
              Sign up for our newsletter to receive the latest updates
              <br />
              and insights straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="input-group">
              <input
                type="email"
                placeholder="Enter email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button 
                type="submit" 
                className="join-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            className="success-state"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
          >
            <motion.div 
              className="success-icon-wrapper"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Check size={32} strokeWidth={3} color="white" />
            </motion.div>
            <h2>You're on the list!</h2>
            <p className="card-description">
              Keep an eye on <strong style={{color:"white"}}>{email}</strong> for exclusive updates.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Card;
