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
  return (
    <motion.div
      style={{
        position: "absolute",
        width,
        zIndex,
        x: defaultX,
        y: defaultY,
        maxHeight: "78vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "inset 0 0 0 2px var(--theme-text)",
        background: "var(--theme-background)",
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
      drag
      dragMomentum={false}
      onPointerDown={onFocus}
    >
      {/* Title bar — top border built with SRCL card-like header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1ch",
          borderBottom: "2px solid var(--theme-text)",
          background: "var(--theme-background)",
          cursor: "grab",
          height: "calc(var(--font-size) * var(--theme-line-height-base) * 2)",
          flexShrink: 0,
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "var(--theme-text)",
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size)",
            cursor: "pointer",
            padding: "0 1ch",
            lineHeight: 1,
          }}
        >
          [X]
        </button>
        <span
          style={{
            color: "var(--theme-text)",
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size)",
            letterSpacing: "0.05em",
          }}
        >
          {icon} {title}
        </span>
        <span style={{ width: "4ch" }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
        {children}
      </div>
    </motion.div>
  );
}
