const projects = [
  {
    name: "NetScan Pro",
    desc: "Advanced network scanner with real-time port analysis, service detection, and vulnerability mapping.",
    tags: ["Python", "Scapy", "React"],
    status: "Active",
    stars: "★ 284",
  },
  {
    name: "ShadowProxy",
    desc: "Lightweight anonymization proxy with multi-hop routing and traffic obfuscation capabilities.",
    tags: ["Go", "WireGuard", "Docker"],
    status: "Maintained",
    stars: "★ 571",
  },
  {
    name: "TermKit",
    desc: "A plugin-based terminal toolkit — themes, snippets, session manager, and AI autocomplete built in.",
    tags: ["Rust", "TypeScript", "Wasm"],
    status: "Beta",
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

const statusColors: Record<string, string> = {
  Active: "text-green-400",
  Maintained: "text-blue-400",
  Beta: "text-yellow-400",
  "v1.0": "text-purple-400",
};

export default function ProjectsWindow() {
  return (
    <div className="p-4 space-y-3">
      {projects.map((project) => (
        <div
          key={project.name}
          className="p-4 rounded-xl border border-white/[0.07] hover:border-white/[0.14] transition-all group"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors">
                {project.name}
              </h3>
              <span className={`text-[10px] font-mono ${statusColors[project.status] ?? "text-gray-400"}`}>
                ● {project.status}
              </span>
            </div>
            <span className="text-gray-600 text-[11px] font-mono">{project.stars}</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md text-gray-400 border border-white/[0.08]"
                style={{ background: "rgba(255,255,255,0.03)" }}
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
