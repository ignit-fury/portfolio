import React, { useEffect, useRef, useState, useCallback } from "react";
import "../styles/LoadingScreen.css";

export default function LoadingScreen({
  progress = null,
  minDuration = 1400,
  label = "COMPILING PREM.PATEL",
  onComplete = () => {},
}) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [phase, setPhase] = useState("loading");
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (progress !== null) return;

    if (reducedMotion.current) {
      setDisplayProgress(100);
      return;
    }

    const tick = (t) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const raw = Math.min(1, elapsed / minDuration);
      const eased = 1 - Math.pow(1 - raw, 2);
      setDisplayProgress(Math.round(eased * 100));
      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [progress, minDuration]);

  useEffect(() => {
    if (progress === null) return;
    setDisplayProgress((prev) => {
      const clamped = Math.max(0, Math.min(100, progress));
      return reducedMotion.current ? clamped : prev;
    });
  }, [progress]);

  const finish = useCallback(() => {
    setPhase("done");
    const holdMs = reducedMotion.current ? 0 : 320;
    window.setTimeout(() => {
      setPhase("exiting");
      const exitMs = reducedMotion.current ? 0 : 620;
      window.setTimeout(() => {
        setPhase("gone");
        onComplete();
      }, exitMs);
    }, holdMs);
  }, [onComplete]);

  useEffect(() => {
    if (displayProgress >= 100 && phase === "loading") {
      finish();
    }
  }, [displayProgress, phase, finish]);

  if (phase === "gone") return null;

  const shownValue = progress !== null ? Math.round(Math.max(0, Math.min(100, progress))) : displayProgress;

  return (
    <div
      className={`ls-overlay ls-${phase}`}
      role="status"
      aria-live="polite"
      aria-label={phase === "loading" ? "Loading portfolio" : "Portfolio ready"}
    >
      <div className="ls-content">
        <p className="ls-eyebrow">{label}</p>

        <div className="ls-counter" aria-hidden="true">
          <span className="ls-bracket">{"{"}</span>
          <span className="ls-value">
            {phase === "loading"
              ? String(shownValue).padStart(2, "0")
              : "done"}
          </span>
          <span className="ls-bracket">{"}"}</span>
        </div>

        <div className="ls-rule-track">
          <div
            className="ls-rule-fill"
            style={{ width: `${phase === "loading" ? shownValue : 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
