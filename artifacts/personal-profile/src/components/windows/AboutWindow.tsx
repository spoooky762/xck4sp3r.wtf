const Row = ({ label, value, valueStyle }: { label: string; value: React.ReactNode; valueStyle?: React.CSSProperties }) => (
  <div style={{ display: "flex", gap: "2ch", borderBottom: "1px solid var(--theme-border)", padding: "0.4rem 0", alignItems: "flex-start" }}>
    <span style={{ color: "var(--theme-border)", width: "12ch", flexShrink: 0, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em", paddingTop: "1px" }}>
      {label}
    </span>
    <span style={{ color: "var(--theme-text)", fontSize: "13px", ...valueStyle }}>{value}</span>
  </div>
);

export default function AboutWindow() {
  return (
    <div style={{ padding: "1rem 1.5ch", fontFamily: "var(--font-family-mono)" }}>
      <div style={{ display: "flex", gap: "1.5ch", marginBottom: "1.25rem", alignItems: "flex-start" }}>
        <div
          style={{
            width: "5rem",
            height: "5rem",
            flexShrink: 0,
            background: "var(--theme-text)",
            color: "var(--theme-background)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "var(--font-family-mono)",
          }}
        >
          CK
        </div>
        <div>
          <div style={{ color: "var(--theme-text)", fontSize: "16px", fontWeight: 700 }}>ck4sp3r</div>
          <div style={{ color: "var(--theme-border)", fontSize: "11px", letterSpacing: "0.1em", marginTop: "4px", textTransform: "uppercase" }}>
            Developer / Hacker / Builder
          </div>
          <div style={{ color: "var(--theme-text)", fontSize: "12px", marginTop: "8px", lineHeight: 1.6, opacity: 0.8 }}>
            Building things that matter.<br />
            Passionate about systems, security, and elegant code.
          </div>
        </div>
      </div>

      <div style={{ borderTop: "2px solid var(--theme-text)", paddingTop: "1rem", display: "flex", flexDirection: "column" }}>
        <Row label="location" value="🌍 Earth, probably" />
        <Row label="interests" value="Security, Linux, Open Source, Music" />
        <Row label="status" value={
          <span style={{ color: "var(--theme-text)" }}>
            <span style={{ display: "inline-block", width: "1ch", height: "1ch", background: "var(--theme-text)", marginRight: "1ch", animation: "blink 1.2s step-start infinite" }} />
            Available for projects
          </span>
        } />
        <Row label="os" value="CK4SP3ROS — crafted with ☕ & 🤬" />
        <Row label="uptime" value="since birth, probably" />
      </div>

      <div style={{ marginTop: "1rem", padding: "0.75rem 1ch", borderLeft: "3px solid var(--theme-text)", color: "var(--theme-border)", fontSize: "12px", lineHeight: 1.7 }}>
        "I don't just write code. I write systems that breathe, networks<br />
        that think, and interfaces that feel human."
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", marginTop: "1rem", border: "2px solid var(--theme-text)" }}>
        {[
          { label: "PROJECTS", value: "30+" },
          { label: "YRS EXP", value: "5+" },
          { label: "COFFEE/D", value: "∞" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            style={{
              textAlign: "center",
              padding: "0.75rem",
              borderRight: i < 2 ? "2px solid var(--theme-text)" : "none",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 700, color: "var(--theme-text)" }}>{stat.value}</div>
            <div style={{ fontSize: "10px", color: "var(--theme-border)", letterSpacing: "0.1em" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
