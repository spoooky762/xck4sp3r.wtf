const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    items: [
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 88 },
      { name: "Rust", level: 74 },
      { name: "Go", level: 70 },
      { name: "Bash", level: 85 },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "⚙️",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js", level: 86 },
      { name: "Docker / K8s", level: 78 },
      { name: "Linux / Sys Admin", level: 84 },
      { name: "Git / CI/CD", level: 88 },
    ],
  },
  {
    category: "Security",
    icon: "🔐",
    items: [
      { name: "Network Analysis", level: 82 },
      { name: "Penetration Testing", level: 75 },
      { name: "Cryptography", level: 70 },
      { name: "OSINT", level: 80 },
    ],
  },
];

export default function SkillsWindow() {
  return (
    <div className="p-5 space-y-6">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span>{group.icon}</span>
            {group.category}
          </h3>
          <div className="space-y-2.5">
            {group.items.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400 text-xs font-mono">{skill.name}</span>
                  <span className="text-gray-600 text-[10px] font-mono">{skill.level}%</span>
                </div>
                <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
