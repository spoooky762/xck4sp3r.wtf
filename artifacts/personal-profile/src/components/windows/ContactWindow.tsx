const links = [
  { label: "GITHUB", handle: "github.com/ck4sp3r", href: "https://github.com", prefix: "gh://" },
  { label: "TWITTER", handle: "@ck4sp3r", href: "https://twitter.com", prefix: "tw://" },
  { label: "LINKEDIN", handle: "ck4sp3r", href: "https://linkedin.com", prefix: "li://" },
  { label: "EMAIL", handle: "ck4sp3r@proton.me", href: "mailto:ck4sp3r@proton.me", prefix: "mail://" },
];

export default function ContactWindow() {
  return (
    <div style={{ padding: "1rem 1.5ch", fontFamily: "var(--font-family-mono)" }}>
      <div
        style={{
          color: "var(--theme-border)",
          fontSize: "12px",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
          borderLeft: "3px solid var(--theme-text)",
          paddingLeft: "1ch",
        }}
      >
        Open to interesting projects, collaborations,<br />
        or just a good conversation about tech.
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5ch",
              padding: "0.6rem 0",
              borderBottom: i < links.length - 1 ? "1px solid var(--theme-border)" : "none",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span style={{ color: "var(--theme-border)", fontSize: "11px", width: "9ch", flexShrink: 0, letterSpacing: "0.05em" }}>
              {link.label}
            </span>
            <span style={{ color: "var(--theme-text)", fontSize: "13px" }}>
              <span style={{ opacity: 0.4 }}>{link.prefix}</span>
              {link.handle}
            </span>
            <span style={{ marginLeft: "auto", color: "var(--theme-border)", fontSize: "12px" }}>↗</span>
          </a>
        ))}
      </div>

      <div style={{ marginTop: "1.25rem" }}>
        <button
          onClick={() => window.open("mailto:ck4sp3r@proton.me")}
          style={{
            background: "var(--theme-text)",
            color: "var(--theme-background)",
            border: "2px solid var(--theme-text)",
            fontFamily: "var(--font-family-mono)",
            fontSize: "12px",
            letterSpacing: "0.1em",
            padding: "0.5rem 1.5ch",
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
          }}
        >
          SEND MESSAGE →
        </button>
      </div>

      <div
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1ch",
          background: "var(--theme-background-input)",
          fontSize: "11px",
          color: "var(--theme-border)",
          letterSpacing: "0.04em",
          border: "1px solid var(--theme-border)",
        }}
      >
        PGP: <span style={{ color: "var(--theme-text)" }}>4A3B 9F2E C1D7 8506 3A1C</span>
      </div>
    </div>
  );
}
