import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/Team.css";

const TEAM = [
  {
    name: "Prem Patel",
    role: "Full-stack & backend",
    initials: "PP",
    github: "https://github.com/ignit-fury",
    linkedin: "https://www.linkedin.com/in/prem-patel-9742aa388/",
  },
  {
    name: "Teammate Two",
    role: "Frontend & UI",
    initials: "T2",
    github: "https://github.com/handle-2",
    linkedin: "https://linkedin.com/in/handle-2",
  },
  {
    name: "Teammate Three",
    role: "Design & content",
    initials: "T3",
    github: "https://github.com/handle-3",
    linkedin: "https://linkedin.com/in/handle-3",
  },
  {
    name: "Teammate Four",
    role: "Testing & deployment",
    initials: "T4",
    github: "https://github.com/handle-4",
    linkedin: "https://linkedin.com/in/handle-4",
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
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on GitHub`}
              >
                GH
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
              >
                IN
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
