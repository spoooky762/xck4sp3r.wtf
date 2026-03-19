export default function AboutWindow() {
  return (
    <div className="p-6 text-sm font-mono">
      <div className="flex gap-5 mb-6">
        <div
          className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl font-bold text-white"
          style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0a192f 100%)" }}
        >
          CK
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-1">ck4sp3r</h2>
          <p className="text-[#e05a2b] text-xs uppercase tracking-widest mb-2">Developer & Hacker</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            Building things that matter. Passionate about systems, security, and elegant code.
          </p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div className="flex gap-3 border-b border-white/5 pb-3">
          <span className="text-gray-600 w-20 flex-shrink-0">Location</span>
          <span className="text-gray-300">🌍 Earth, probably</span>
        </div>
        <div className="flex gap-3 border-b border-white/5 pb-3">
          <span className="text-gray-600 w-20 flex-shrink-0">Interests</span>
          <span className="text-gray-300">Security, Linux, Open Source, Music</span>
        </div>
        <div className="flex gap-3 border-b border-white/5 pb-3">
          <span className="text-gray-600 w-20 flex-shrink-0">Status</span>
          <span className="text-green-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
            Available for projects
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-600 w-20 flex-shrink-0">OS</span>
          <span className="text-gray-300">CK4SP3ROS — crafted with ☕ & 🤬</span>
        </div>
      </div>

      <div className="mt-6 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <p className="text-gray-400 text-xs leading-relaxed italic">
          "I don't just write code. I write systems that breathe, networks that think, 
          and interfaces that feel human. Every project is a chance to push boundaries."
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "Projects", value: "30+" },
          { label: "Years Exp.", value: "5+" },
          { label: "Coffee/Day", value: "∞" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="text-white font-bold text-lg">{stat.value}</div>
            <div className="text-gray-600 text-[10px] uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
