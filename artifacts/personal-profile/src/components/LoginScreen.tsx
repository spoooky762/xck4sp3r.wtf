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

  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");
  const ss = time.getSeconds().toString().padStart(2, "0");
  const date = time.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <div style={{ fontSize: "56px", fontWeight: 300, color: "var(--theme-text)", lineHeight: 1, letterSpacing: "-2px", fontFamily: "var(--font-family-mono)" }}>
        {hh}:{mm}<span style={{ fontSize: "32px", opacity: 0.5 }}>:{ss}</span>
      </div>
      <div style={{ color: "var(--theme-border)", fontSize: "12px", marginTop: "8px", letterSpacing: "0.05em" }}>
        {date}
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  border: "2px solid var(--theme-text)",
  background: "var(--theme-background)",
  fontFamily: "var(--font-family-mono)",
};

const cardTitleStyle: React.CSSProperties = {
  borderBottom: "2px solid var(--theme-text)",
  padding: "0.5rem 1ch",
  fontSize: "11px",
  letterSpacing: "0.1em",
  color: "var(--theme-border)",
  textTransform: "uppercase",
};

const cardBodyStyle: React.CSSProperties = {
  padding: "1rem 1.5ch",
};

function GreenButton({ onClick, disabled, children }: { onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? "transparent" : "var(--theme-text)",
        color: disabled ? "var(--theme-border)" : "var(--theme-background)",
        border: "2px solid var(--theme-text)",
        fontFamily: "var(--font-family-mono)",
        fontSize: "12px",
        letterSpacing: "0.1em",
        padding: "0.5rem 1.5ch",
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
        textAlign: "center",
        transition: "all 0.1s",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  );
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [selected, setSelected] = useState(false);
  const [password, setPassword] = useState("");

  const handleSelectUser = () => {
    if (loggingIn) return;
    setSelected(true);
  };

  const handleLogin = () => {
    if (loggingIn) return;
    setLoggingIn(true);
    setTimeout(onLogin, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{ background: "var(--theme-background)", position: "absolute", inset: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Clock />

      <div style={{ width: "36ch" }}>
        <div style={cardStyle}>
          <div style={cardTitleStyle}>CK4SP3ROS — Login</div>
          <div style={cardBodyStyle}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {!selected ? (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                >
                  <div style={{ color: "var(--theme-border)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    SELECT USER
                  </div>
                  <button
                    onClick={handleSelectUser}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.5rem 0",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid var(--theme-border)",
                      cursor: "pointer",
                      width: "100%",
                      color: "var(--theme-text)",
                      fontFamily: "var(--font-family-mono)",
                    }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        background: "var(--theme-border)",
                        color: "var(--theme-background)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      CK
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ color: "var(--theme-text)", fontSize: "14px" }}>ck4sp3r</div>
                      <div style={{ color: "var(--theme-border)", fontSize: "11px" }}>▸ click to sign in</div>
                    </div>
                  </button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key="password-form"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <div
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          background: "var(--theme-text)",
                          color: "var(--theme-background)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        CK
                      </div>
                      <div>
                        <div style={{ color: "var(--theme-text)", fontSize: "14px" }}>ck4sp3r</div>
                      </div>
                    </div>

                    <div style={{ color: "var(--theme-border)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      PASSWORD (optional)
                    </div>
                    <div
                      style={{
                        background: "var(--theme-background-input)",
                        border: "2px solid var(--theme-border)",
                        padding: "0.4rem 0.75rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="password"
                        autoFocus
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="_"
                        style={{
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          color: "var(--theme-text)",
                          fontFamily: "var(--font-family-mono)",
                          fontSize: "14px",
                          width: "100%",
                        }}
                      />
                    </div>

                    <GreenButton onClick={handleLogin} disabled={loggingIn}>
                      {loggingIn ? "AUTHENTICATING..." : "SIGN IN →"}
                    </GreenButton>
                    <button
                      onClick={() => setSelected(false)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--theme-border)",
                        fontFamily: "var(--font-family-mono)",
                        fontSize: "11px",
                        cursor: "pointer",
                        textAlign: "left",
                        padding: 0,
                      }}
                    >
                      ← back
                    </button>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between", color: "var(--theme-border)", fontSize: "11px", fontFamily: "var(--font-family-mono)" }}>
          <span>CK4SP3ROS v1.0.0</span>
          <span>⏻ Power off</span>
        </div>
      </div>

      {loggingIn && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--theme-background)",
            zIndex: 50,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />
      )}
    </motion.div>
  );
}
