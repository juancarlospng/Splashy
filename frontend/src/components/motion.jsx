import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Masked line-by-line reveal for hero headlines (plays on mount).
export function Lines({ lines, className = "", delay = 0, as: Tag = "span" }) {
  const reduce = useReducedMotion();
  return (
    <Tag className={`block ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            initial={reduce ? { opacity: 0 } : { y: "112%" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: delay + i * 0.14, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// Scroll-triggered reveal (plays once when 15% visible).
export function Reveal({ children, className = "", delay = 0, y = 30 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Subtle vertical parallax for editorial images.
export function ParallaxBox({ children, className = "", amount = 60 }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, amount]);
  return (
    <motion.div className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

export { EASE };
