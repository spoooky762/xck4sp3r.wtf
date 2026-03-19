import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Window from "@/components/desktop/Window";
import Taskbar from "@/components/desktop/Taskbar";
import AboutWindow from "@/components/windows/AboutWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import SkillsWindow from "@/components/windows/SkillsWindow";
import ContactWindow from "@/components/windows/ContactWindow";
import TerminalWindow from "@/components/windows/TerminalWindow";

type WindowId = "about" | "projects" | "skills" | "terminal" | "contact";

interface WindowConfig {
  id: WindowId;
  title: string;
  icon: string;
  defaultX: number;
  defaultY: number;
  width: number;
  component: React.ReactNode;
}

const windowConfigs: WindowConfig[] = [
  { id: "about",    title: "ABOUT — ck4sp3r",  icon: "👤", defaultX: 90,  defaultY: 50,  width: 420, component: <AboutWindow /> },
  { id: "projects", title: "PROJECTS",           icon: "💼", defaultX: 180, defaultY: 60,  width: 520, component: <ProjectsWindow /> },
  { id: "skills",   title: "SKILLS",             icon: "⚡", defaultX: 270, defaultY: 70,  width: 430, component: <SkillsWindow /> },
  { id: "terminal", title: "TERMINAL — ck4sp3r", icon: "⌨", defaultX: 150, defaultY: 80,  width: 580, component: <TerminalWindow /> },
  { id: "contact",  title: "CONTACT",            icon: "✉", defaultX: 220, defaultY: 90,  width: 390, component: <ContactWindow /> },
];

const desktopIcons: { id: WindowId; icon: string; label: string }[] = [
  { id: "about",    icon: "👤", label: "ABOUT.TXT" },
  { id: "projects", icon: "💼", label: "PROJECTS/" },
  { id: "skills",   icon: "⚡", label: "SKILLS.JSON" },
  { id: "terminal", icon: "⌨", label: "TERMINAL" },
  { id: "contact",  icon: "✉", label: "CONTACT.VCF" },
];

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);
    const chars = "ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ ノ 0 1 2 3 4 5 6 7 8 9 A B C D E F".split(" ");

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}
    />
  );
}

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WindowId[]>(["about"]);
  const [zOrders, setZOrders] = useState<WindowId[]>(["about"]);

  const openWindow = (id: WindowId) => {
    if (!openWindows.includes(id)) setOpenWindows((p) => [...p, id]);
    focusWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setOpenWindows((p) => p.filter((w) => w !== id));
    setZOrders((p) => p.filter((w) => w !== id));
  };

  const focusWindow = (id: WindowId) => {
    setZOrders((p) => [...p.filter((w) => w !== id), id]);
  };

  const getZ = (id: WindowId) => {
    const idx = zOrders.indexOf(id);
    return idx === -1 ? 10 : 10 + idx;
  };

  return (
    <motion.div
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0, overflow: "hidden", background: "var(--theme-background)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MatrixRain />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1.5ch",
          height: "32px",
          borderBottom: "1px solid var(--theme-border)",
          background: "var(--theme-background)",
          zIndex: 5,
          fontFamily: "var(--font-family-mono)",
          fontSize: "11px",
        }}
      >
        <span style={{ color: "var(--theme-text)", letterSpacing: "0.08em" }}>CK4SP3ROS</span>
        <span style={{ color: "var(--theme-border)" }}>v1.0.0 — reborn</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: "48px",
          left: "1.5ch",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          zIndex: 4,
        }}
      >
        {desktopIcons.map((icon) => (
          <motion.button
            key={icon.id}
            onClick={() => openWindow(icon.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              background: openWindows.includes(icon.id) ? "var(--theme-focused-foreground)" : "transparent",
              border: openWindows.includes(icon.id) ? "1px solid var(--theme-border)" : "1px solid transparent",
              padding: "6px 8px",
              cursor: "pointer",
              fontFamily: "var(--font-family-mono)",
              width: "9ch",
            }}
            whileHover={{ background: "var(--theme-focused-foreground)", borderColor: "var(--theme-border)" }}
            transition={{ duration: 0.1 }}
          >
            <span style={{ fontSize: "20px" }}>{icon.icon}</span>
            <span style={{ color: "var(--theme-text)", fontSize: "10px", textAlign: "center", letterSpacing: "0.04em", lineHeight: 1.3, wordBreak: "break-all" }}>
              {icon.label}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {windowConfigs
          .filter((cfg) => openWindows.includes(cfg.id))
          .map((cfg) => (
            <Window
              key={cfg.id}
              title={cfg.title}
              icon={cfg.icon}
              onClose={() => closeWindow(cfg.id)}
              onFocus={() => focusWindow(cfg.id)}
              zIndex={getZ(cfg.id)}
              defaultX={cfg.defaultX}
              defaultY={cfg.defaultY}
              width={cfg.width}
            >
              {cfg.component}
            </Window>
          ))}
      </AnimatePresence>

      <Taskbar openWindows={openWindows} onOpenWindow={(id) => openWindow(id as WindowId)} />
    </motion.div>
  );
}
