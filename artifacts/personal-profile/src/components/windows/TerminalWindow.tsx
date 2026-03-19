import { useState, useRef, useEffect } from "react";

const HOSTNAME = "ck4sp3r-os";
const USER = "ck4sp3r";

type Line = { type: "input" | "output" | "error"; text: string };

const commands: Record<string, string> = {
  help: `Available commands:
  whoami    — who is ck4sp3r
  skills    — list technical skills
  projects  — list projects
  contact   — contact info
  uname     — system info
  date      — current date
  clear     — clear terminal
  ls        — list files
  cat bio   — read bio file`,
  whoami: `ck4sp3r — Developer, Hacker, Builder.
Based on Earth. Powered by coffee.`,
  skills: `LANGUAGES:  TypeScript, Python, Rust, Go, Bash
FRAMEWORKS: React, Next.js, Node.js, Docker
SECURITY:   Network Analysis, Pen Testing, OSINT`,
  projects: `NetScan Pro   — network scanner (Python, Scapy)
ShadowProxy  — anonymization proxy (Go)
TermKit      — terminal toolkit (Rust)
CK4SP3R.dev — this OS simulation (React)`,
  contact: `GitHub:  github.com/ck4sp3r
Twitter: @ck4sp3r
Email:   ck4sp3r@proton.me`,
  uname: `CK4SP3ROS 1.0.0 (React 18 + Vite) x86_64
Kernel: framer-motion 12.x
Uptime: since you visited`,
  date: new Date().toString(),
  ls: `Desktop/
  about.txt
  projects/
  skills.json
  contact.vcard
  secrets/ (permission denied)`,
  "cat bio": `Name:    ck4sp3r
Role:    Developer & Hacker
Stack:   TypeScript, Python, Rust
Status:  Building things that matter.
Quote:   "The quieter you become, the more you can hear."`,
};

export default function TerminalWindow() {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "CK4SP3ROS v1.0.0 — Type 'help' for available commands." },
    { type: "output", text: "" },
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
        text: `bash: ${trimmed}: command not found. Type 'help' to see available commands.`,
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
      const newIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(newIdx);
      setInput(cmdHistory[newIdx] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(histIdx - 1, -1);
      setHistIdx(newIdx);
      setInput(newIdx === -1 ? "" : cmdHistory[newIdx] ?? "");
    }
  };

  return (
    <div
      className="p-4 font-mono text-xs h-full min-h-64 cursor-text"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} className="mb-0.5">
          {line.type === "input" ? (
            <div className="flex gap-1">
              <span className="text-green-400">{USER}@{HOSTNAME}</span>
              <span className="text-gray-600">:~$</span>
              <span className="text-white">{line.text}</span>
            </div>
          ) : (
            <pre
              className={`whitespace-pre-wrap leading-relaxed ${
                line.type === "error" ? "text-red-400" : "text-gray-300"
              }`}
            >
              {line.text}
            </pre>
          )}
        </div>
      ))}

      <div className="flex gap-1 items-center mt-1">
        <span className="text-green-400">{USER}@{HOSTNAME}</span>
        <span className="text-gray-600">:~$</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white outline-none caret-green-400"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
