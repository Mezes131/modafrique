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
        <div className="mx-auto max-w-5xl border border-secondary/35 px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
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
                <p className="font-display text-2xl font-black uppercase tracking-wide">
                  Inscription confirmée
                </p>
                <p className="max-w-md text-sm leading-relaxed text-secondary/70">
                  Votre code −10&nbsp;% arrive par e-mail. Bienvenue dans
                  l&apos;univers ModAfrique.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                className="flex flex-col items-center gap-8 sm:gap-10"
                noValidate
              >
                <div className="max-w-2xl space-y-4">
                  <h2
                    id="newsletter-title"
                    className="font-display text-display-md font-black uppercase tracking-[0.08em]"
                  >
                    Abonnez-vous à notre newsletter
                  </h2>
                  <p className="mx-auto max-w-lg text-sm leading-relaxed text-secondary/70 sm:text-base">
                    Recevez −10&nbsp;% sur votre première commande, les
                    avant-premières collection et les invitations lookbook.
                    Une sélection soignée, directement dans votre boîte mail.
                  </p>
                </div>

                <div className="flex w-full flex-col items-stretch gap-8 md:flex-row md:items-end md:gap-6 lg:gap-8">
                  <label className="flex flex-1 flex-col gap-2 text-left">
                    <span className="text-xs font-medium tracking-wide text-secondary/80">
                      Votre nom
                    </span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      className="w-full border-0 border-b border-secondary/40 bg-transparent pb-2.5 pt-1 text-sm text-secondary outline-none transition placeholder:text-secondary/30 focus:border-secondary"
                      placeholder=" "
                    />
                  </label>

                  <label className="flex flex-1 flex-col gap-2 text-left">
                    <span className="text-xs font-medium tracking-wide text-secondary/80">
                      Votre adresse e-mail
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched(true)}
                      autoComplete="email"
                      aria-invalid={showError}
                      aria-describedby={showError ? "email-error" : undefined}
                      className={`w-full border-0 border-b bg-transparent pb-2.5 pt-1 text-sm text-secondary outline-none transition placeholder:text-secondary/30 ${
                        showError
                          ? "border-red-400"
                          : "border-secondary/40 focus:border-secondary"
                      }`}
                      placeholder=" "
                    />
                    {showError && (
                      <span
                        id="email-error"
                        className="text-xs text-red-400"
                      >
                        Adresse e-mail invalide
                      </span>
                    )}
                  </label>

                  <button
                    type="submit"
                    className="btn-primary shrink-0 self-center md:self-end md:mb-0.5"
                  >
                    S&apos;inscrire
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
