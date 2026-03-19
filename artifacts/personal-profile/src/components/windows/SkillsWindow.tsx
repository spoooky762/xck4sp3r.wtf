const skills = [
  {
    category: "LANGUAGES",
    items: [
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 88 },
      { name: "Rust", level: 74 },
      { name: "Go", level: 70 },
      { name: "Bash/Shell", level: 85 },
    ],
  },
  {
    category: "FRAMEWORKS & TOOLS",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js / Express", level: 86 },
      { name: "Docker / Kubernetes", level: 78 },
      { name: "Linux / SysAdmin", level: 84 },
      { name: "Git / CI/CD", level: 88 },
    ],
  },
  {
    category: "SECURITY",
    items: [
      { name: "Network Analysis", level: 82 },
      { name: "Penetration Testing", level: 75 },
      { name: "Cryptography", level: 70 },
      { name: "OSINT", level: 80 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const blocks = 20;
  const filled = Math.round((level / 100) * blocks);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5ch", marginBottom: "0.4rem" }}>
      <span style={{ color: "var(--theme-border)", fontSize: "12px", width: "16ch", flexShrink: 0 }}>{name}</span>
      <span style={{ color: "var(--theme-text)", fontSize: "12px", fontFamily: "var(--font-family-mono)", letterSpacing: "0" }}>
        {"█".repeat(filled)}
        <span style={{ opacity: 0.2 }}>{"░".repeat(blocks - filled)}</span>
      </span>
      <span style={{ color: "var(--theme-border)", fontSize: "11px", marginLeft: "auto", flexShrink: 0 }}>{level}%</span>
    </div>
  );
}

export default function SkillsWindow() {
  return (
    <div style={{ padding: "1rem 1.5ch", fontFamily: "var(--font-family-mono)" }}>
      {skills.map((group, i) => (
        <div key={group.category} style={{ marginBottom: i < skills.length - 1 ? "1.25rem" : 0 }}>
          <div
            style={{
              color: "var(--theme-text)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
              paddingBottom: "0.25rem",
              borderBottom: "1px solid var(--theme-border)",
            }}
          >
            {group.category}
          </div>
          {group.items.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      ))}
    </div>
  );
}
