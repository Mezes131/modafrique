const FOOTER_LINKS = [
  {
    title: "À propos",
    links: ["Notre histoire", "Carrières", "Presse"],
  },
  {
    title: "Aide",
    links: ["FAQ", "Livraison", "Retours", "Guide des tailles"],
  },
  {
    title: "Légal",
    links: ["Mentions légales", "Confidentialité", "CGV"],
  },
] as const;

const SOCIAL = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.2.9.3 1.9.4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.9.4-1.9.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.9-.3-1.9-.4-1.3-.1-1.6-.1-4.8-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm6.4-.9a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0z",
  },
  {
    label: "X",
    path: "M18.2 2H21l-6.6 7.5L22 22h-6.2l-4.8-6.3L5.6 22H3l7-8L2 2h6.4l4.4 5.8L18.2 2zm-1.1 18h1.7L7 3.9H5.2L17.1 20z",
  },
  {
    label: "Facebook",
    path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z",
  },
  {
    label: "Pinterest",
    path: "M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.2-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.4 1.9 1.5 1.9 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.1.2-.3.1-1.2-.6-2-2.3-2-3.7 0-3 2.2-5.8 6.3-5.8 3.3 0 5.9 2.4 5.9 5.5 0 3.3-2.1 6-5 6-1 0-1.9-.5-2.2-1.1l-.6 2.3c-.2.8-.8 1.8-1.2 2.4 1 .3 2 .5 3.1.5 5.5 0 10-4.5 10-10S17.5 2 12 2z",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto grid max-w-site gap-10 px-gutter py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-lg font-bold tracking-[0.2em] uppercase">
            ModAfrique
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-muted">
            Mode contemporaine africaine : wax, silhouettes modernes et
            savoir-faire artisanal, livrés partout en Afrique centrale et
            au-delà.
          </p>
          <ul className="mt-6 flex gap-3" aria-label="Réseaux sociaux">
            {SOCIAL.map(({ label, path }) => (
              <li key={label}>
                <a
                  href="#"
                  className="inline-flex rounded-full border border-surface-border p-2 transition hover:border-secondary hover:bg-secondary/10"
                  aria-label={label}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden
                  >
                    <path d={path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <p className="text-overline uppercase tracking-[0.18em] text-secondary/80">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-secondary-muted transition hover:text-secondary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-surface-border px-gutter py-5">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-3 text-xs text-secondary-muted sm:flex-row">
          <p>© {new Date().getFullYear()} ModAfrique. Tous droits réservés.</p>
          <a
            href="https://mezescorp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-secondary"
          >
            Made by Mezes
          </a>
        </div>
      </div>
    </footer>
  );
}
