import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/Team.css";

const TEAM = [
  {
    name: "Prem Patel",
    role: "Full-stack & backend",
    initials: "PP",
    github: "https://github.com/ignit-fury",
    linkedin: "https://www.linkedin.com/in/ignitfury/",
  },
  {
    name: "Shalin Rathod",
    role: "Full Stack Developer",
    initials: "SR",
    github: "https://github.com/shalin0078",
    linkedin: "https://www.linkedin.com/in/shalin-rathod-301400305/",
  },
  {
    name: "Kunj Patel",
    role: "Developer",
    initials: "KP",
  },
];

const PROXIMITY_RADIUS = 90;
const SMOOTHING_MS = 120;
const smoothCurve = (p) => p * p * (3 - 2 * p);

const mixColor = (a, b, t) => {
  const ah = a.replace("#", "");
  const bh = b.replace("#", "");
  const ar = parseInt(ah.substr(0, 2), 16);
  const ag = parseInt(ah.substr(2, 2), 16);
  const ab = parseInt(ah.substr(4, 2), 16);
  const br = parseInt(bh.substr(0, 2), 16);
  const bg = parseInt(bh.substr(2, 2), 16);
  const bb = parseInt(bh.substr(4, 2), 16);
  const r = Math.round(br + (ar - br) * t);
  const g = Math.round(bg + (ag - bg) * t);
  const bl = Math.round(bb + (ab - bb) * t);
  return `rgb(${r},${g},${bl})`;
};

const Team = () => {
  const listRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setInView(true);
      return;
    }

    const node = listRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const rowRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const runFrame = useCallback((now) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = Math.max(SMOOTHING_MS, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;
    const rows = rowRefs.current;
    for (let i = 0; i < rows.length; i++) {
      const el = rows[i];
      if (!el) continue;
      const target = targetsRef.current[i] || 0;
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      currentRef.current[i] = value;

      const avatar = el.querySelector(".team-avatar");
      const identity = el.querySelector(".team-identity");
      const name = el.querySelector(".team-name");
      const role = el.querySelector(".team-role");

      if (avatar) avatar.style.transform = `scale(${1 + value * 0.08})`;
      if (identity) identity.style.transform = `translateX(${value * 10}px)`;
      if (name) name.style.color = mixColor("#c1633d", "#1f1c18", value);
      if (role) role.style.opacity = 0.75 + value * 0.25;

      if (!settled) moving = true;
    }

    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) return;
    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback(
    (e) => {
      if (reducedMotionRef.current) return;
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const pointerY = e.clientY - rect.top;
      const rows = rowRefs.current;
      for (let i = 0; i < rows.length; i++) {
        const el = rows[i];
        if (!el) continue;
        const center = el.offsetTop + el.offsetHeight / 2;
        const distance = Math.abs(pointerY - center);
        targetsRef.current[i] = smoothCurve(
          Math.max(0, 1 - distance / PROXIMITY_RADIUS)
        );
      }
      startLoop();
    },
    [startLoop]
  );

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="team-card">
      <div className="team-eyebrow-row">
        <span className="team-eyebrow">THE TEAM</span>
        <div className="team-eyebrow-line"></div>
      </div>

      <ul
        className={`team-list${inView ? " team-list--in-view" : ""}`}
        ref={listRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {TEAM.map((member, i) => (
          <li
            className="team-row"
            key={member.name}
            style={{ "--i": i }}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
          >
            <span className="team-avatar" aria-hidden="true">
              {member.initials}
            </span>
            <span className="team-identity">
              <span className="team-name">{member.name}</span>
              <span className="team-role">{member.role}</span>
            </span>
            <span className="team-links">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
