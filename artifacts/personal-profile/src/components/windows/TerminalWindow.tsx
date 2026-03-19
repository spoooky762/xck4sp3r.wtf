import { useState, useRef, useEffect } from "react";

const HOSTNAME = "ck4sp3r-os";
const USER = "ck4sp3r";

type Line = { type: "input" | "output" | "error"; text: string };

const commands: Record<string, string> = {
  help: `AVAILABLE COMMANDS
  ─────────────────────────────────────
  whoami    — who is ck4sp3r
  skills    — list technical skills
  projects  — list projects
  contact   — contact info
  uname     — system info
  date      — current date & time
  ls        — list desktop files
  cat bio   — read biography
  clear     — clear terminal`,
  whoami: `ck4sp3r
  ─────────────────────────────────────
  Role:    Developer / Hacker / Builder
  Based:   Earth (approx.)
  Fuel:    Coffee + Spite`,
  skills: `LANGUAGES
  TypeScript [████████████████░░░░] 92%
  Python     [█████████████████░░░] 88%
  Rust       [██████████████░░░░░░] 74%
  Go         [██████████████░░░░░░] 70%
  Bash       [█████████████████░░░] 85%

FRAMEWORKS
  React/Next [██████████████████░░] 90%
  Node.js    [█████████████████░░░] 86%
  Docker/K8s [███████████████░░░░░] 78%`,
  projects: `PROJECTS
  ─────────────────────────────────────
  NetScan Pro   ★284  Python, Scapy
  ShadowProxy   ★571  Go, WireGuard
  TermKit       ★129  Rust, TypeScript
  CK4SP3R.dev   ★you  React, Framer`,
  contact: `CONTACT
  ─────────────────────────────────────
  GitHub  gh://ck4sp3r
  Twitter tw://@ck4sp3r
  Email   mail://ck4sp3r@proton.me
  PGP     4A3B 9F2E C1D7 8506 3A1C`,
  uname: `CK4SP3ROS 1.0.0 RELEASE
  Kernel:  React 18 + Vite 7
  Runtime: Node.js 24
  Shell:   bash 5.2
  Uptime:  since you opened this tab`,
  date: new Date().toString(),
  ls: `drwxr-xr-x  ABOUT.TXT
  drwxr-xr-x  PROJECTS/
  -rw-r--r--  SKILLS.JSON
  -rw-r--r--  CONTACT.VCF
  drwx------  SECRETS/      [permission denied]`,
  "cat bio": `NAME:    ck4sp3r
  ROLE:    Developer / Hacker / Builder
  STACK:   TypeScript, Python, Rust, Go
  STATUS:  [████████████] Available
  QUOTE:   "The quieter you become, the more you can hear."`,
};

export default function TerminalWindow() {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "CK4SP3ROS v1.0.0 — Type 'help' for commands.\n" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ type: "input", text: cmd }];

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (!trimmed) {
      setHistory((h) => [...h, { type: "input", text: "" }]);
      setInput("");
      return;
    }

    const output = commands[trimmed];
    if (output) {
      newLines.push({ type: "output", text: output });
    } else {
      newLines.push({
        type: "error",
        text: `bash: ${trimmed}: command not found\nType 'help' to see available commands.`,
      });
    }

    setHistory((h) => [...h, ...newLines]);
    setCmdHistory((c) => [trimmed, ...c]);
    setHistIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(i);
      setInput(cmdHistory[i] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(histIdx - 1, -1);
      setHistIdx(i);
      setInput(i === -1 ? "" : cmdHistory[i] ?? "");
    }
  };

  const prompt = (
    <span>
      <span style={{ color: "var(--theme-text)", fontWeight: 700 }}>{USER}</span>
      <span style={{ color: "var(--theme-border)" }}>@{HOSTNAME}</span>
      <span style={{ color: "var(--theme-border)" }}>:~$ </span>
    </span>
  );

  return (
    <div
      style={{
        padding: "1rem 1.5ch",
        fontFamily: "var(--font-family-mono)",
        fontSize: "12px",
        minHeight: "260px",
        background: "var(--theme-background)",
        cursor: "text",
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: "2px" }}>
          {line.type === "input" ? (
            <div>
              {prompt}
              <span style={{ color: "var(--theme-text)" }}>{line.text}</span>
            </div>
          ) : (
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                color: line.type === "error" ? "#ff5555" : "var(--theme-border)",
              }}
            >
              {line.text}
            </pre>
          )}
        </div>
      ))}

      <div style={{ display: "flex", alignItems: "center" }}>
        {prompt}
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--theme-text)",
            fontFamily: "var(--font-family-mono)",
            fontSize: "12px",
            caretColor: "var(--theme-text)",
          }}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
