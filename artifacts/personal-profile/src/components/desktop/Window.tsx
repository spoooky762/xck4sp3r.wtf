import { useRef } from "react";
import { motion } from "framer-motion";

interface WindowProps {
  title: string;
  icon: string;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  defaultX?: number;
  defaultY?: number;
  width?: number;
  children: React.ReactNode;
}

export default function Window({
  title,
  icon,
  onClose,
  onFocus,
  zIndex,
  defaultX = 100,
  defaultY = 80,
  width = 560,
  children,
}: WindowProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="absolute rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
      style={{
        width,
        zIndex,
        background: "rgba(18,18,20,0.95)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        maxHeight: "75vh",
      }}
      initial={{ opacity: 0, scale: 0.92, x: defaultX, y: defaultY }}
      animate={{ opacity: 1, scale: 1, x: defaultX, y: defaultY }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      drag
      dragMomentum={false}
      onPointerDown={onFocus}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] cursor-grab active:cursor-grabbing"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div className="flex gap-1.5">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
          >
            <span className="opacity-0 group-hover:opacity-100 text-red-900 text-[8px] leading-none">✕</span>
          </button>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-400 text-xs font-medium tracking-wide">{icon} {title}</span>
        </div>
        <div className="w-12" />
      </div>

      <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
        {children}
      </div>
    </motion.div>
  );
}
