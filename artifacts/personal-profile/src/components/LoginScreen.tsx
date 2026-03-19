import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginScreenProps {
  onLogin: () => void;
}

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="text-center mb-12">
      <div className="text-8xl font-thin text-white tracking-tight tabular-nums">
        {hours}:{minutes}
      </div>
      <div className="text-gray-400 text-base mt-1 tracking-wide">{dateStr}</div>
    </div>
  );
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [clicked, setClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [shake, setShake] = useState(false);

  const handleUserClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setShowPassword(true), 300);
  };

  const handleLogin = () => {
    if (loggingIn) return;
    setLoggingIn(true);
    setTimeout(() => {
      onLogin();
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <motion.div
      className="w-full h-full relative flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at 30% 40%, #1a1a2e 0%, #0d0d0d 60%, #000 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <Clock />

      <motion.div
        className="flex flex-col items-center gap-4 cursor-pointer"
        onClick={handleUserClick}
        whileHover={!clicked ? { scale: 1.02 } : {}}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-white/20 overflow-hidden flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0a192f 100%)" }}
          animate={clicked ? { scale: 1.1, borderColor: "rgba(255,255,255,0.4)" } : {}}
          transition={{ duration: 0.3 }}
        >
          <span className="text-3xl font-bold text-white/90 tracking-tighter">CK</span>
        </motion.div>

        <div className="text-center">
          <p className="text-white text-lg font-medium tracking-wide">ck4sp3r</p>
          {!clicked && (
            <p className="text-gray-500 text-xs mt-0.5">Click to sign in</p>
          )}
        </div>

        <AnimatePresence>
          {showPassword && (
            <motion.div
              className="flex flex-col items-center gap-3 mt-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.input
                type="password"
                placeholder="Password (optional)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                animate={shake ? { x: [-6, 6, -4, 4, 0] } : {}}
                className="w-52 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder-gray-500 outline-none focus:border-white/40 text-center backdrop-blur-sm"
              />
              <motion.button
                onClick={handleLogin}
                disabled={loggingIn}
                className="px-8 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {loggingIn ? "Signing in..." : "Sign In →"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 text-gray-600 text-xs">
        <span>CK4SP3ROS</span>
        <div className="flex gap-4">
          <button className="hover:text-gray-400 transition-colors">⏻ Power</button>
        </div>
      </div>

      {loggingIn && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      )}
    </motion.div>
  );
}
