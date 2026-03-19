const links = [
  { label: "GitHub", handle: "@ck4sp3r", icon: "⌥", href: "https://github.com" },
  { label: "Twitter / X", handle: "@ck4sp3r", icon: "✕", href: "https://twitter.com" },
  { label: "LinkedIn", handle: "ck4sp3r", icon: "in", href: "https://linkedin.com" },
  { label: "Email", handle: "ck4sp3r@proton.me", icon: "✉", href: "mailto:ck4sp3r@proton.me" },
];

export default function ContactWindow() {
  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <div className="text-3xl mb-2">👋</div>
        <h2 className="text-white font-semibold mb-1">Let's Connect</h2>
        <p className="text-gray-500 text-xs">
          Open to interesting projects, collaborations, or just a good convo.
        </p>
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-sm text-gray-400 font-mono group-hover:text-white transition-colors border border-white/[0.07]">
              {link.icon}
            </div>
            <div>
              <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">{link.label}</div>
              <div className="text-gray-500 text-xs font-mono">{link.handle}</div>
            </div>
            <div className="ml-auto text-gray-700 group-hover:text-gray-400 transition-colors text-sm">↗</div>
          </a>
        ))}
      </div>

      <div className="mt-5 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
        <p className="text-gray-600 text-[11px] font-mono">
          PGP fingerprint: <span className="text-gray-400">4A3B 9F2E C1D7 8506</span>
        </p>
      </div>
    </div>
  );
}
