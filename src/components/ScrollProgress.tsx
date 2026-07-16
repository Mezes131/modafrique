import { motion } from "framer-motion";
import { useScrollProgress } from "./ui";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture"
    >
      <motion.div
        className="h-full origin-left bg-secondary"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
