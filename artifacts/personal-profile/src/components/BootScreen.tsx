import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BootScreenProps {
  onComplete: () => void;
}

const bootMessages = [
  "[ OK ] Initializing system...",
  "[ OK ] Loading kernel modules...",
  "[ OK ] Starting NetworkManager...",
  "[ OK ] Mounting filesystems...",
  "[ OK ] Starting display server...",
  "[ FAILED ] Failed to start: Social Life...",
  "[ OK ] Loading user profile: ck4sp3r...",
  "[ OK ] Starting desktop environment...",
];

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const totalDuration = 3800;
    const interval = 50;
    const steps = totalDuration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const newProgress = Math.min((step / steps) * 100, 100);
      setProgress(newProgress);

      const messageIndex = Math.floor((newProgress / 100) * bootMessages.length);
      setMessages(bootMessages.slice(0, messageIndex));

      if (newProgress >= 100) {
        clearInterval(timer);
        setShowLogo(false);
        setTimeout(onComplete, 600);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="w-full h-full bg-black flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showLogo && (
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <p className="text-[11px] text-gray-500 tracking-widest uppercase mb-1">ck4sp3r.dev</p>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              CK4SP3R<span className="text-[#e05a2b] text-2xl align-super font-normal">OS</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1 tracking-wide">Reborn</p>
          </div>

          <div className="w-52 mt-2">
            <div className="w-full h-[3px] bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {messages.length > 0 && (
            <motion.div
              className="absolute bottom-16 left-16 text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {messages.map((msg, i) => (
                <motion.p
                  key={i}
                  className={`text-[11px] font-mono mb-0.5 ${
                    msg.includes("FAILED") ? "text-red-500" : "text-gray-500"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {msg}
                </motion.p>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
