import { useEffect, useRef, useState } from "react";

// Custom basketball cursor (desktop, precise pointers only).
// Native cursor remains until the ball initializes; inputs keep native cursors.

export const CURSOR_EVENT = "flight:cursor-toggle";

export function readCursorPref() {
  const v = localStorage.getItem("flight-cursor");
  return v === null ? true : v === "on";
}

export function useCursorEnabled() {
  const [enabled, setEnabled] = useState(() =>
    typeof window === "undefined" ? true : readCursorPref()
  );
  useEffect(() => {
    const h = (e) => setEnabled(e.detail === "on");
    window.addEventListener(CURSOR_EVENT, h);
    return () => window.removeEventListener(CURSOR_EVENT, h);
  }, []);
  return [enabled, setEnabled];
}

function Ball({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#C6561A" />
      <g stroke="#1C1C1C" strokeWidth="1.1" fill="none">
        <path d="M12 1 V23" />
        <path d="M1 12 H23" />
        <path d="M4.2 4.2 C 9 8.6, 9 15.4, 4.2 19.8" />
        <path d="M19.8 4.2 C 15 8.6, 15 15.4, 19.8 19.8" />
      </g>
      <circle cx="12" cy="12" r="11" fill="none" stroke="#1C1C1C" strokeWidth="1.2" />
    </svg>
  );
}

export default function BallCursor() {
  const [enabled] = useCursorEnabled();
  const ballRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [overText, setOverText] = useState(false);
  const fine = useRef(
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!enabled || !fine.current || ballRef.current === null) {
      document.documentElement.classList.remove("ball-cursor");
      return;
    }
    const root = document.documentElement;
    const ball = ballRef.current;

    root.classList.add("ball-cursor");
    const move = (e) => {
      setVisible(true);
      ball.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
    };
    const over = (e) => {
      const t = e.target;
      const interactive = t.closest?.("a, button, [role='button'], summary, label");
      const text = t.closest?.("input, textarea, select");
      setHovering(!!interactive);
      setOverText(!!text);
    };
    const down = (e) => {
      if (e.target.closest?.("input, textarea, select")) return;
      if (reduced.current) return;
      // Restart cleanly — WAAPI animations replace, never stack.
      innerRef.current?.animate(
        [
          { transform: "translateY(0) scale(1)" },
          { transform: "translateY(-7px) scale(1)" },
          { transform: "translateY(2px) scaleY(0.82) scaleX(1.12)" },
          { transform: "translateY(0) scale(1)" },
        ],
        { duration: 420, easing: "cubic-bezier(.3,.7,.3,1)" }
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      root.classList.remove("ball-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled || !fine.current) return null;

  return (
    <div
      ref={ballRef}
      data-testid="basketball-cursor"
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ opacity: visible && !overText ? 1 : 0, transition: "opacity 160ms ease" }}
    >
      <div
        ref={innerRef}
        style={{
          transformOrigin: "50% 80%",
          transition: "transform 200ms cubic-bezier(.2,.8,.3,1)",
          transform: hovering ? "scale(1.55)" : "scale(1)",
        }}
      >
        <Ball />
      </div>
    </div>
  );
}
