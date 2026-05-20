import React, { useState, useEffect, useRef, useCallback } from 'react';
import TimelineNode from './TimelineNode';
import { Skill, TimelineEventData } from '../../types';
import { CalendarMonth, LocationOn } from '@mui/icons-material';
import './Timeline.scss';

interface TimelineProps {
  events: TimelineEventData[];
  skills: Skill[];
}

// ── 水墨竹 — Shuǐmòhuà Bamboo ──
//
// Design principles:
//   骨法用笔 — Each internode is a single brush-stroke, not a tube.
//              Waisted in the middle, flared at the nodes.
//   气韵      — A tiny gap (breath/Qi) separates each segment.
//   墨分五色  — Vertical tonal gradient per segment: watery bottom → dense top.
//              Palette: olive / charcoal / tea-green, NOT digital green.
//   竹节      — Nodes are the darkest ink: sharp 心-shaped calligraphic hooks.
//   竹叶      — Leaves arranged in 个 / 介 groupings, press-and-flick strokes
//              tapering to a zero-width point.
//   飞白      — Dry-brush grain on the stalk edges, not a center highlight.
//   留白      — Most joints have NO leaves. Emptiness is the composition.

interface InkSegment {
  body: string;       // filled internode outline (waisted shape)
  gradId: string;     // unique vertical gradient id
  y1: number;
  y2: number;
}

interface InkNode {
  hook: string;       // dark calligraphic 心-crescent
  y: number;
}

interface InkLeaf {
  d: string;          // press-and-flick path tapering to a point
  tone: number;       // 0 = darkest ink, 1 = lightest wash
}

interface BambooData {
  cx: number;
  segments: InkSegment[];
  nodes: InkNode[];
  leaves: InkLeaf[];
}

const QI_GAP = 2.5; // breath gap between segments (px)

const buildBambooData = (rowTops: number[], containerHeight: number): BambooData => {
  const cx = 26;       // center x of stalk
  const baseHW = 7;    // half-width at widest (node ends)
  const waist = 1.2;   // how much narrower the middle is

  const segments: InkSegment[] = [];
  const nodes: InkNode[] = [];
  const leaves: InkLeaf[] = [];

  const jy = rowTops.map((t) => t + 10);
  // Extend stalk well past the last row so it visually covers all entries
  jy.push(Math.max(containerHeight, jy[jy.length - 1] + 80));

  // ── Internodes — individual brush strokes ──
  for (let i = 0; i < jy.length - 1; i++) {
    const y1 = jy[i] + QI_GAP;       // leave breath below previous node
    const y2 = jy[i + 1] - QI_GAP;   // leave breath above next node
    if (y2 <= y1) continue;           // segment too short

    const len = y2 - y1;
    const sway = (i % 2 === 0 ? 1 : -1) * Math.min(1.2, len * 0.003);

    // Width: full at ends (near nodes), waisted in the middle
    const wEnd = baseHW;
    const wMid = baseHW - waist;
    const my = y1 + len * 0.5;
    const q1 = y1 + len * 0.3;
    const q2 = y1 + len * 0.7;

    // Left edge: press → narrow → press
    // Right edge mirrors
    const body = [
      `M${cx - wEnd},${y1}`,
      `C${cx - wEnd + sway},${q1} ${cx - wMid + sway},${my - 5} ${cx - wMid},${my}`,
      `C${cx - wMid + sway},${my + 5} ${cx - wEnd + sway},${q2} ${cx - wEnd},${y2}`,
      `L${cx + wEnd},${y2}`,
      `C${cx + wEnd + sway},${q2} ${cx + wMid + sway},${my + 5} ${cx + wMid},${my}`,
      `C${cx + wMid + sway},${my - 5} ${cx + wEnd + sway},${q1} ${cx + wEnd},${y1}`,
      'Z',
    ].join(' ');

    segments.push({ body, gradId: `stalkGrad${i}`, y1, y2 });
  }

  // ── Leaf helper: press-and-flick stroke from node to a zero-width tip ──
  const makeLeaf = (
    nodeY: number, side: number,
    tipDx: number, tipDy: number,
    c1Dx: number, c1Dy: number,
    c2Dx: number, c2Dy: number,
    tone: number,
    baseW: number = 2.5,
  ): InkLeaf => {
    // Base sits on the stalk edge at the node's Y position
    const bx = cx + side * baseHW;
    const b1y = nodeY - baseW * 0.4;
    const b2y = nodeY + baseW * 0.4;
    // Tip and control points are offsets from the node position
    const tipX = cx + side * tipDx;
    const tipY = nodeY + tipDy;
    const cx1 = cx + side * c1Dx;
    const cy1 = nodeY + c1Dy;
    const cx2 = cx + side * c2Dx;
    const cy2 = nodeY + c2Dy;
    return {
      d: [
        `M${bx},${b1y}`,
        `C${cx1},${cy1} ${tipX - side * 1},${tipY + 1} ${tipX},${tipY}`,
        `C${tipX - side * 1},${tipY - 1} ${cx2},${cy2} ${bx},${b2y}`,
        'Z',
      ].join(' '),
      tone,
    };
  };

  // ── Build nodes AND leaves together — one-to-one correspondence ──
  // Every row position gets a node hook + a leaf cluster.
  // The end-cap (last jy entry) gets only a node, no leaves.
  const nw = baseHW + 4; // node half-width (wider than stalk)

  for (let i = 0; i < jy.length; i++) {
    const y = jy[i];
    const isEndCap = i === jy.length - 1;

    // ── Node: 心-shaped calligraphic hook ──
    const hook = [
      `M${cx - nw},${y - 0.3}`,
      `Q${cx - nw * 0.4},${y - 3} ${cx},${y - 1.5}`,
      `Q${cx + nw * 0.4},${y - 3} ${cx + nw},${y - 0.3}`,
      `Q${cx + nw * 0.4},${y + 1.8} ${cx},${y + 1.2}`,
      `Q${cx - nw * 0.4},${y + 1.8} ${cx - nw},${y - 0.3}`,
      'Z',
    ].join(' ');
    nodes.push({ hook, y });

    // ── Leaves: 个/介 cluster at this node ──
    if (isEndCap) continue; // no leaves on the bottom terminus

    const side = i % 2 === 0 ? 1 : -1;
    const s = side === 1
      ? (1.0 + (i % 3) * 0.2)   // right side: smaller 1.0 / 1.2 / 1.4
      : (2.0 + (i % 3) * 0.4);  // left side: bigger 2.0 / 2.4 / 2.8

    // Leaf 1: long upward sweep (darkest ink)
    leaves.push(makeLeaf(y, side,
      38 * s, -40 * s,
      14 * s, -16 * s,
      16 * s, -14 * s,
      0.1 + (i % 3) * 0.1,
      5.0,
    ));
    // Leaf 2: shorter, more horizontal (medium wash)
    leaves.push(makeLeaf(y, side,
      30 * s, -16 * s,
      12 * s, -9 * s,
      14 * s, -5 * s,
      0.3 + (i % 3) * 0.08,
      4.5,
    ));
    // Leaf 3: drooping downward — 介 tail (lightest wash)
    leaves.push(makeLeaf(y, side,
      22 * s, 14 * s,
      9 * s,  3 * s,
      11 * s, 5 * s,
      0.5 + (i % 3) * 0.05,
      4.0,
    ));
  }

  return { cx, segments, nodes, leaves };
};

const Timeline: React.FC<TimelineProps> = ({ events, skills }) => {
  const [isMobile, setIsMobile] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [bamboo, setBamboo] = useState<ReturnType<typeof buildBambooData> | null>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const isPhDEntry = (event: TimelineEventData) =>
    ('position' in event && event.position?.includes('Ph.D')) ||
    ('major' in event && event.major?.includes('Ph.D'));

  const [expandedNodes, setExpandedNodes] = useState<{ [key: string]: boolean }>(() =>
    events.reduce((acc, event) => {
      acc[event.id] = isPhDEntry(event);
      return acc;
    }, {} as { [key: string]: boolean })
  );

  const handleNodeClick = (id: string) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    setExpandedNodes(events.reduce((acc, event) => {
      acc[event.id] = isPhDEntry(event);
      return acc;
    }, {} as { [key: string]: boolean }));
  }, [isMobile, events]);

  // Measure row positions — re-measure on any layout change
  // Uses ResizeObserver so the bamboo tracks expand/collapse animations in real time
  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const tops = rowRefs.current
        .filter(Boolean)
        .map((el) => el!.getBoundingClientRect().top - containerRect.top);
      if (tops.length > 0) {
        setSvgHeight(containerRect.height);
        setBamboo(buildBambooData(tops, containerRect.height));
      }
    };

    // Initial measurement
    measure();

    // Re-measure whenever the container or any row resizes (expand/collapse).
    // Defer to the next frame so setState from the observer doesn't fire
    // before the current layout pass finishes (avoids the "ResizeObserver
    // loop completed with undelivered notifications" warning).
    let rafId = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    });
    ro.observe(container);
    rowRefs.current.forEach((el) => { if (el) ro.observe(el); });

    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [events, isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('ink-visible');
        });
      },
      { threshold: 0.15 }
    );
    rowRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [events]);

  const setRowRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    rowRefs.current[index] = el;
  }, []);

  const parseDate = (dateString: string): Date | null => {
    if (['now', 'current', 'present'].includes(dateString.toLowerCase())) return new Date();
    const [monthName, yearStr] = dateString.split(' ');
    if (monthName && yearStr) {
      const month = new Date(`${monthName} 1, ${yearStr}`).getMonth();
      const year = parseInt(yearStr);
      if (!isNaN(month) && !isNaN(year)) return new Date(year, month);
    }
    return null;
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseDate(a.startDate);
    const dateB = parseDate(b.startDate);
    if (dateA && dateB) return dateB.getTime() - dateA.getTime();
    if (dateA) return -1;
    if (dateB) return 1;
    return 0;
  });

  return (
    <div className="tree-page">
      <h1 className="tree-heading">Education & Experience</h1>
      <div className="tree-timeline" ref={timelineRef}>
        {/* ── 水墨竹 — Ink-wash bamboo ── */}
        {bamboo && svgHeight > 0 && (
          <svg
            className="bamboo-svg"
            viewBox={`0 0 70 ${svgHeight}`}
            preserveAspectRatio="none"
            style={{ height: svgHeight }}
          >
            <defs>
              {/* ── Per-segment vertical gradients (墨分五色) ──
                   Each segment fades from watery bottom → dense top.
                   Palette: olive charcoal, NOT digital green.            */}
              {bamboo.segments.map((seg) => (
                <linearGradient
                  key={seg.gradId}
                  id={seg.gradId}
                  x1="0" y1="1" x2="0" y2="0"
                  gradientUnits="objectBoundingBox"
                >
                  {/* bottom — bright green wash */}
                  <stop offset="0%"  stopColor="#20a600" stopOpacity="0.65" />
                  {/* middle — vivid green */}
                  <stop offset="45%" stopColor="#1c9500" stopOpacity="0.85" />
                  {/* top — deep green near the node */}
                  <stop offset="100%" stopColor="#2d7904" stopOpacity="0.95" />
                </linearGradient>
              ))}

              {/* Node ink — the darkest element on the painting */}
              <radialGradient id="nodeInk" cx="50%" cy="40%" r="60%">
                <stop offset="0%"  stopColor="#1c6b00" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#2d7904" stopOpacity="0.7" />
              </radialGradient>

              {/* 飞白 (Flying White) — edge grain filter
                   Erodes the EDGES of the stalk with paper-texture noise,
                   simulating a fast, dry brush dragged across Xuan paper.  */}
              <filter id="flyingWhite" x="-8%" y="-1%" width="116%" height="102%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.04 0.25"
                  numOctaves="5"
                  seed="7"
                  result="grain"
                />
                <feComponentTransfer in="grain" result="mask">
                  <feFuncA type="discrete" tableValues="0 0.15 0.5 0.8 1 1 1" />
                </feComponentTransfer>
                <feComposite in="SourceGraphic" in2="mask" operator="in" />
              </filter>

              {/* Soft edge bleed (晕染) — very slight */}
              <filter id="inkBleed" x="-4%" y="-0.5%" width="108%" height="101%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
              </filter>
            </defs>

            {/* ── Layer 1: Stalk segments — individual brush strokes ──
                 Each has its own vertical gradient, waisted shape,
                 and the flying-white edge erosion.                       */}
            <g filter="url(#flyingWhite)">
              {bamboo.segments.map((seg) => (
                <path
                  key={seg.gradId}
                  d={seg.body}
                  fill={`url(#${seg.gradId})`}
                />
              ))}
            </g>

            {/* ── Layer 2: Nodes — dark 心-hooks (sharpest ink) ──
                 Rendered WITHOUT blur so they stay crisp and calligraphic
                 against the softer stalk.                                 */}
            {bamboo.nodes.map((node, i) => (
              <path
                key={`node-${i}`}
                d={node.hook}
                fill="url(#nodeInk)"
              />
            ))}

            {/* ── Layer 3: Leaves — 个/介 press-and-flick strokes ──
                 Each leaf tapers from a thick base to a zero-width tip.
                 Tone varies: darkest leaf = freshest ink, lightest = dilute wash.
                 Slight bleed gives the watercolour edge.                  */}
            <g filter="url(#inkBleed)">
              {bamboo.leaves.map((leaf, i) => {
                // Map tone (0=dark, 1=light) to bambus.svg green palette
                const t = leaf.tone;
                const r = Math.round(28 + t * 20);   // 28-48
                const g = Math.round(149 + t * 30);  // 149-179
                const b = Math.round(0 + t * 10);    // 0-10
                const a = (0.85 - t * 0.35).toFixed(2);
                return (
                  <path
                    key={`leaf-${i}`}
                    d={leaf.d}
                    fill={`rgba(${r},${g},${b},${a})`}
                  />
                );
              })}
            </g>
          </svg>
        )}

        {/* ── Pandas clinging to bamboo — positioned as HTML elements ── */}
        {bamboo && bamboo.segments
          .filter((_, i) => i % 3 === 1)
          .map((seg, i) => {
            const midY = (seg.y1 + seg.y2) / 2;
            const size = 350;
            return (
              <img
                key={`panda-${i}`}
                src="/panda.svg"
                alt=""
                className="bamboo-panda"
                style={{
                  position: 'absolute',
                  left: -150,
                  top: midY - size / 2 - 80,
                  width: size,
                  height: size,
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            );
          })}

        {/* ── Ladybirds on bamboo — in segments without pandas ── */}
        {bamboo && bamboo.segments
          .filter((_, i) => i % 3 === 2)
          .map((seg, i) => {
            const midY = (seg.y1 + seg.y2) / 2;
            const size = 80;
            return (
              <img
                key={`ladybird-${i}`}
                src="/ladybirds.svg"
                alt=""
                className="bamboo-ladybird"
                style={{
                  position: 'absolute',
                  left: -10,
                  top: midY - 20,
                  width: 25,
                  height: 25,
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            );
          })}

        {sortedEvents.map((event, index) => (
          <div key={event.id} className="tree-row" ref={setRowRef(index)}>
            <div className="tree-node-col">
              <span className="tree-date-range">
                <CalendarMonth className="tree-icon" />
                {event.startDate} – {event.endDate === 'present' ? 'Present' : event.endDate}
              </span>
              <span className="tree-location">
                <LocationOn className="tree-icon" />
                {event.location}
              </span>
            </div>
            <div className="tree-content-col">
              <TimelineNode
                event={event}
                isExpanded={expandedNodes[event.id]}
                onClick={() => handleNodeClick(event.id)}
                skills={skills}
                period="present"
                index={index}
                totalCount={sortedEvents.length}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
