import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./Card.css";

function Card() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) return;

    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const trimmedName = fullName.trim();
      const trimmedEmail = email.trim().toLowerCase();

      await addDoc(collection(db, "waitlist"), {
        name: trimmedName,
        email: trimmedEmail,
        phone: phone.trim(),
        joinedAt: serverTimestamp(),
      });

      // Fire-and-forget: send welcome email via server
      fetch("/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
      }).catch((err) => console.warn("Welcome email request failed:", err));

      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#a855f7", "#3b82f6"],
        zIndex: 100,
      });
    } catch (err) {
      console.error("Firestore error:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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

            <form onSubmit={handleSubmit} className="waitlist-form">
              <div className="form-field">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+233 (000) 000-0000"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {submitError ? (
                <p className="form-error" role="alert">
                  {submitError}
                </p>
              ) : null}
              <motion.button
                type="submit"
                className="join-btn"
                disabled={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.97 }}
              >
                {isSubmitting ? "Joining…" : "Join Waitlist"}
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
            <h2>You&apos;re on the list. We&apos;ll be in touch</h2>
            <p className="card-description">
              Thanks, <strong style={{color:"white"}}>{fullName.split(" ")[0]}</strong>! Keep an eye on <strong style={{color:"white"}}>{email}</strong> for exclusive updates.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Card;
