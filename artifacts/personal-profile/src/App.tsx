import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BootScreen from "@/components/BootScreen";
import LoginScreen from "@/components/LoginScreen";
import Desktop from "@/components/Desktop";

type Phase = "boot" | "login" | "desktop";

export default function App() {
  const [phase, setPhase] = useState<Phase>("boot");

  return (
    <div className="w-screen h-screen overflow-hidden bg-black select-none">
      <AnimatePresence mode="wait">
        {phase === "boot" && (
          <BootScreen key="boot" onComplete={() => setPhase("login")} />
        )}
        {phase === "login" && (
          <LoginScreen key="login" onLogin={() => setPhase("desktop")} />
        )}
        {phase === "desktop" && (
          <Desktop key="desktop" />
        )}
      </AnimatePresence>
    </div>
  );
}
