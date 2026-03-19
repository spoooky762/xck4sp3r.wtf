import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TaskbarProps {
  openWindows: string[];
  onOpenWindow: (id: string) => void;
}

const dockApps = [
  { id: "about", icon: "👤", label: "About" },
  { id: "projects", icon: "💼", label: "Projects" },
  { id: "skills", icon: "⚡", label: "Skills" },
  { id: "terminal", icon: "⌨️", label: "Terminal" },
  { id: "contact", icon: "✉️", label: "Contact" },
];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="text-right">
      <div className="text-white text-xs font-medium tabular-nums">
        {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
      </div>
      <div className="text-gray-500 text-[10px]">
        {time.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
      </div>
    </div>
  );
}

export default function Taskbar({ openWindows, onOpenWindow }: TaskbarProps) {
  return (
    <motion.div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-2 rounded-2xl border border-white/10"
      style={{
        background: "rgba(20,20,22,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
    >
      {dockApps.map((app) => (
        <motion.button
          key={app.id}
          onClick={() => onOpenWindow(app.id)}
          className="relative flex flex-col items-center group"
          whileHover={{ scale: 1.2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all ${
              openWindows.includes(app.id)
                ? "bg-white/15 shadow-inner"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {app.icon}
          </div>
          <span className="absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            {app.label}
          </span>
          {openWindows.includes(app.id) && (
            <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" />
          )}
        </motion.button>
      ))}

      <div className="w-px h-8 bg-white/10 mx-1" />

      <div className="px-2">
        <Clock />
      </div>
    </motion.div>
  );
}
