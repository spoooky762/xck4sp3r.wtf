import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BootScreenProps {
  onComplete: () => void;
}

const bootMessages = [
  { ok: true,  text: "Initializing kernel modules..." },
  { ok: true,  text: "Loading NetworkManager..." },
  { ok: true,  text: "Mounting filesystems..." },
  { ok: true,  text: "Starting display server..." },
  { ok: false, text: "Failed to start: Social Life..." },
  { ok: true,  text: "Loading user profile: ck4sp3r..." },
  { ok: true,  text: "Starting desktop environment..." },
  { ok: true,  text: "System ready." },
];

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [msgCount, setMsgCount] = useState(0);

  useEffect(() => {
    const total = 4200;
    const tick = 40;
    const steps = total / tick;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = Math.min((step / steps) * 100, 100);
      setProgress(p);
      setMsgCount(Math.floor((p / 100) * bootMessages.length));

      if (p >= 100) {
        clearInterval(timer);
        setTimeout(onComplete, 700);
      }
    }, tick);

    return () => clearInterval(timer);
  }, [onComplete]);

  const bars = 30;
  const filled = Math.round((progress / 100) * bars);

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{ background: "var(--theme-background)", position: "absolute", inset: 0 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        style={{ width: "38ch", display: "flex", flexDirection: "column", gap: "1rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          <div style={{ color: "var(--theme-border)", fontSize: "11px", letterSpacing: "0.1em" }}>
            ck4sp3r.dev©
          </div>
          <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--theme-text)", lineHeight: 1.2 }}>
            CK4SP3R<sup style={{ fontSize: "12px", color: "var(--theme-border)", fontWeight: 400 }}>OS</sup>
          </div>
          <div style={{ color: "var(--theme-border)", fontSize: "13px" }}>Reborn</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "12px", color: "var(--theme-text)", letterSpacing: "0.05em" }}>
            {"█".repeat(filled)}<span style={{ opacity: 0.2 }}>{"░".repeat(bars - filled)}</span>
            {" "}{Math.round(progress)}%
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "0.25rem" }}>
          {bootMessages.slice(0, msgCount).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.08 }}
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-family-mono)",
                color: msg.ok ? "var(--theme-border)" : "#ff4040",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: msg.ok ? "var(--theme-text)" : "#ff4040" }}>
                [{msg.ok ? " OK " : "FAIL"}]
              </span>{" "}
              {msg.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
