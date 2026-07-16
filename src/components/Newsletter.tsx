import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionReveal } from "./ui";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailValid = EMAIL_RE.test(email.trim());
  const showError = touched && email.length > 0 && !emailValid;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!emailValid || !name.trim()) return;
    setSuccess(true);
  };

  return (
    <section
      id="newsletter"
      className="px-gutter pb-section"
      aria-labelledby="newsletter-title"
    >
      <SectionReveal>
        <div className="mx-auto max-w-xl border border-surface-border px-6 py-12 text-center sm:px-10">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="h-7 w-7" />
                </span>
                <p className="font-display text-2xl font-black">
                  Inscription confirmée
                </p>
                <p className="text-sm text-secondary-muted">
                  Votre code −10&nbsp;% arrive par e-mail. Bienvenue dans
                  l&apos;univers ModAfrique.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <h2
                  id="newsletter-title"
                  className="font-display text-display-md font-black uppercase tracking-wide"
                >
                  Newsletter
                </h2>
                <p className="text-sm text-secondary-muted">
                  Recevez −10&nbsp;% sur votre première commande, les
                  avant-premières collection et les invitations lookbook.
                </p>
                <label className="block text-left">
                  <span className="sr-only">Prénom</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Prénom"
                    className="w-full border-b border-surface-border bg-transparent py-3 text-sm outline-none transition focus:border-secondary"
                  />
                </label>
                <label className="block text-left">
                  <span className="sr-only">E-mail</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="Votre e-mail"
                    aria-invalid={showError}
                    aria-describedby={showError ? "email-error" : undefined}
                    className={`w-full border-b bg-transparent py-3 text-sm outline-none transition ${
                      showError
                        ? "border-red-400"
                        : "border-surface-border focus:border-secondary"
                    }`}
                  />
                  {showError && (
                    <span id="email-error" className="mt-1 block text-xs text-red-400">
                      Adresse e-mail invalide
                    </span>
                  )}
                </label>
                <button type="submit" className="btn-primary mt-2 self-center">
                  S&apos;inscrire
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
