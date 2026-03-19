import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {
    id: "about",
    title: "About — ck4sp3r",
    icon: "👤",
    defaultX: 80,
    defaultY: 60,
    width: 420,
    component: <AboutWindow />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: "💼",
    defaultX: 200,
    defaultY: 80,
    width: 520,
    component: <ProjectsWindow />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: "⚡",
    defaultX: 320,
    defaultY: 100,
    width: 420,
    component: <SkillsWindow />,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "⌨️",
    defaultX: 140,
    defaultY: 120,
    width: 560,
    component: <TerminalWindow />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: "✉️",
    defaultX: 260,
    defaultY: 90,
    width: 380,
    component: <ContactWindow />,
  },
];

const desktopIcons: { id: WindowId; icon: string; label: string }[] = [
  { id: "about", icon: "👤", label: "About.txt" },
  { id: "projects", icon: "💼", label: "Projects" },
  { id: "skills", icon: "⚡", label: "Skills.json" },
  { id: "terminal", icon: "⌨️", label: "Terminal" },
  { id: "contact", icon: "✉️", label: "Contact.vcard" },
];

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WindowId[]>(["about"]);
  const [zOrders, setZOrders] = useState<WindowId[]>(["about"]);

  const openWindow = (id: WindowId) => {
    if (!openWindows.includes(id)) {
      setOpenWindows((prev) => [...prev, id]);
    }
    focusWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
    setZOrders((prev) => prev.filter((w) => w !== id));
  };

  const focusWindow = (id: WindowId) => {
    setZOrders((prev) => [...prev.filter((w) => w !== id), id]);
  };

  const getZ = (id: WindowId) => {
    const idx = zOrders.indexOf(id);
    return idx === -1 ? 10 : 10 + idx;
  };

  return (
    <motion.div
      className="w-full h-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(30,58,95,0.4) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(88,28,135,0.25) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 80%, rgba(14,59,77,0.3) 0%, transparent 55%),
          #080810
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
        <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">CK4SP3ROS v1.0</span>
      </div>

      <div className="absolute top-16 left-6 flex flex-col gap-4">
        {desktopIcons.map((icon) => (
          <motion.button
            key={icon.id}
            className="flex flex-col items-center gap-1.5 group w-16"
            onDoubleClick={() => openWindow(icon.id)}
            onClick={() => openWindow(icon.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all ${
                openWindows.includes(icon.id)
                  ? "bg-white/20 ring-1 ring-white/30"
                  : "bg-white/[0.06] hover:bg-white/[0.12]"
              }`}
              style={{ backdropFilter: "blur(8px)" }}
            >
              {icon.icon}
            </div>
            <span
              className="text-white text-[10px] text-center leading-tight px-1 rounded"
              style={{
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
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
