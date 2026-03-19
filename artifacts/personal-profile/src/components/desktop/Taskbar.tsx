import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TaskbarProps {
  openWindows: string[];
  onOpenWindow: (id: string) => void;
}

const dockApps = [
  { id: "about",    icon: "👤", label: "ABOUT" },
  { id: "projects", icon: "💼", label: "PROJECTS" },
  { id: "skills",   icon: "⚡", label: "SKILLS" },
  { id: "terminal", icon: "⌨", label: "TERMINAL" },
  { id: "contact",  icon: "✉", label: "CONTACT" },
];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ textAlign: "right", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size)", color: "var(--theme-text)" }}>
      <div>{time.toLocaleTimeString("en-US", { hour12: false })}</div>
      <div style={{ color: "var(--theme-border)", fontSize: "11px" }}>
        {time.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
      </div>
    </div>
  );
}

export default function Taskbar({ openWindows, onOpenWindow }: TaskbarProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "1rem",
        left: "50%",
        translateX: "-50%",
        display: "flex",
        alignItems: "center",
        gap: "0",
        boxShadow: "inset 0 0 0 2px var(--theme-text)",
        background: "var(--theme-background)",
        padding: "0 1ch",
      }}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 30, delay: 0.2 }}
    >
      {dockApps.map((app, i) => (
        <div key={app.id} style={{ display: "flex", alignItems: "stretch" }}>
          <motion.button
            onClick={() => onOpenWindow(app.id)}
            style={{
              background: openWindows.includes(app.id) ? "var(--theme-focused-foreground)" : "none",
              border: "none",
              borderRight: "2px solid var(--theme-text)",
              color: "var(--theme-text)",
              fontFamily: "var(--font-family-mono)",
              fontSize: "11px",
              cursor: "pointer",
              padding: "0.5rem 1.5ch",
              letterSpacing: "0.08em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              minWidth: "7ch",
              position: "relative",
            }}
            whileHover={{ background: "var(--theme-focused-foreground)" }}
            transition={{ duration: 0.1 }}
          >
            <span style={{ fontSize: "16px" }}>{app.icon}</span>
            <span>{app.label}</span>
            {openWindows.includes(app.id) && (
              <span style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", color: "var(--theme-text)", fontSize: "8px" }}>▲</span>
            )}
          </motion.button>
          {i === dockApps.length - 1 && null}
        </div>
      ))}

      <div
        style={{
          width: "2px",
          alignSelf: "stretch",
          background: "var(--theme-text)",
          margin: "0",
        }}
      />

      <div style={{ padding: "0.5rem 1.5ch" }}>
        <Clock />
      </div>
    </motion.div>
  );
}
