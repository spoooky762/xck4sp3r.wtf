const projects = [
  {
    name: "NetScan Pro",
    desc: "Advanced network scanner with real-time port analysis, service detection, and vulnerability mapping.",
    tags: ["Python", "Scapy", "React"],
    status: "ACTIVE",
    stars: "★ 284",
  },
  {
    name: "ShadowProxy",
    desc: "Lightweight anonymization proxy with multi-hop routing and traffic obfuscation capabilities.",
    tags: ["Go", "WireGuard", "Docker"],
    status: "MAINTAINED",
    stars: "★ 571",
  },
  {
    name: "TermKit",
    desc: "A plugin-based terminal toolkit with themes, snippets, session manager, and AI autocomplete.",
    tags: ["Rust", "TypeScript", "Wasm"],
    status: "BETA",
    stars: "★ 129",
  },
  {
    name: "CK4SP3R.dev",
    desc: "This very desktop OS simulation you're running right now. Built with React & Framer Motion.",
    tags: ["React", "TypeScript", "Framer"],
    status: "v1.0",
    stars: "★ you",
  },
];

export default function ProjectsWindow() {
  return (
    <div style={{ padding: "1rem 1.5ch", fontFamily: "var(--font-family-mono)", display: "flex", flexDirection: "column", gap: "0" }}>
      {projects.map((project, i) => (
        <div
          key={project.name}
          style={{
            padding: "0.75rem 1ch",
            borderBottom: i < projects.length - 1 ? "1px solid var(--theme-border)" : "none",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.4rem" }}>
            <div>
              <span style={{ color: "var(--theme-text)", fontSize: "14px", fontWeight: 600 }}>
                {project.name}
              </span>
              <span
                style={{
                  marginLeft: "1.5ch",
                  fontSize: "10px",
                  color: "var(--theme-border)",
                  letterSpacing: "0.08em",
                  border: "1px solid var(--theme-border)",
                  padding: "0 0.5ch",
                }}
              >
                {project.status}
              </span>
            </div>
            <span style={{ color: "var(--theme-border)", fontSize: "11px" }}>{project.stars}</span>
          </div>

          <div style={{ color: "var(--theme-border)", fontSize: "12px", lineHeight: 1.6, marginBottom: "0.5rem" }}>
            {project.desc}
          </div>

          <div style={{ display: "flex", gap: "1ch", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  color: "var(--theme-text)",
                  background: "var(--theme-background-input)",
                  padding: "0 0.75ch",
                  border: "1px solid var(--theme-border)",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
