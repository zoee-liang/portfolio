/* Hand-drawn SVG doodle illustrations for decorative use */

export function DataPipeline({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Source database */}
      <ellipse cx="40" cy="30" rx="28" ry="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 30 L12 55 Q12 65 40 65 Q68 65 68 55 L68 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="40" y="50" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="inherit" opacity="0.5">src</text>

      {/* Arrow 1 - wavy */}
      <path d="M70 45 Q85 42, 95 45 Q105 48, 115 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M110 41 L117 45 L110 49" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Transform gears */}
      <circle cx="145" cy="38" r="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
      <path d="M138 38 L142 34 L148 42 L152 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="145" y="63" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="inherit" opacity="0.5">dbt</text>

      {/* Arrow 2 */}
      <path d="M165 42 Q180 38, 190 42 Q200 46, 210 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M205 38 L212 42 L205 46" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Warehouse - snowflake-ish */}
      <rect x="222" y="22" width="36" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M240 26 L240 54 M228 40 L252 40 M231 29 L249 51 M249 29 L231 51" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <text x="240" y="70" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="inherit" opacity="0.5">warehouse</text>

      {/* Arrow 3 */}
      <path d="M260 42 Q275 38, 285 42 Q295 46, 305 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M300 38 L307 42 L300 46" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Dashboard / chart */}
      <rect x="317" y="22" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M325 46 L325 36 M333 46 L333 30 M341 46 L341 38 M349 46 L349 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <text x="337" y="66" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="inherit" opacity="0.5">BI</text>

      {/* Sparkle accents */}
      <path d="M90 25 L92 20 L94 25 L99 27 L94 29 L92 34 L90 29 L85 27Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M280 20 L281 17 L282 20 L285 21 L282 22 L281 25 L280 22 L277 21Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
    </svg>
  )
}

export function SketchyBarChart({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Axis */}
      <path d="M20 70 L20 10 M18 70 L180 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Bars - slightly wobbly */}
      <path d="M35 70 L36 35 L52 34 L51 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" opacity="0.06" />
      <path d="M62 70 L63 48 L79 47 L78 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" opacity="0.08" />
      <path d="M89 70 L90 22 L106 21 L105 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" opacity="0.1" />
      <path d="M116 70 L117 40 L133 39 L132 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" opacity="0.08" />
      <path d="M143 70 L144 15 L160 14 L159 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" opacity="0.12" />
      {/* Trend line */}
      <path d="M36 33 Q70 50, 95 20 Q130 42, 155 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" opacity="0.25" />
    </svg>
  )
}

export function SquigglyDivider({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M0 6 Q10 2, 20 6 Q30 10, 40 6 Q50 2, 60 6 Q70 10, 80 6 Q90 2, 100 6 Q110 10, 120 6 Q130 2, 140 6 Q150 10, 160 6 Q170 2, 180 6 Q190 10, 200 6 Q210 2, 220 6 Q230 10, 240 6 Q250 2, 260 6 Q270 10, 280 6 Q290 2, 300 6 Q310 10, 320 6 Q330 2, 340 6 Q350 10, 360 6 Q370 2, 380 6 Q390 10, 400 6"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round"
      />
    </svg>
  )
}

export function DatabaseIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <ellipse cx="12" cy="6" rx="9" ry="4" />
      <path d="M3 6 L3 12 Q3 16 12 16 Q21 16 21 12 L21 6" />
      <path d="M3 12 L3 18 Q3 22 12 22 Q21 22 21 18 L21 12" />
    </svg>
  )
}

export function PipelineIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="4" cy="12" r="2.5" />
      <circle cx="20" cy="6" r="2.5" />
      <circle cx="20" cy="18" r="2.5" />
      <path d="M6.5 11 L17.5 7" />
      <path d="M6.5 13 L17.5 17" />
    </svg>
  )
}

export function ChartIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="18" rx="2" />
      <path d="M6 16 L6 12 M10 16 L10 8 M14 16 L14 11 M18 16 L18 6" strokeWidth="2" />
    </svg>
  )
}

export function TerminalIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M6 9 L10 12 L6 15" />
      <path d="M13 15 L18 15" />
    </svg>
  )
}

export function BrainIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2 Q8 2 7 5 Q4 5 4 8 Q3 11 5 13 Q4 16 6 18 Q8 20 10 19 Q11 22 14 22 Q17 22 18 19 Q20 20 22 18 Q24 16 22 13 Q24 11 22 8 Q22 5 19 5 Q18 2 14 2 Q12 2 12 2" />
      <path d="M12 2 L12 22" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  )
}

export function CodeIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 4 L4 12 L8 20" />
      <path d="M16 4 L20 12 L16 20" />
      <path d="M14 3 L10 21" strokeDasharray="2 2" />
    </svg>
  )
}

export function ShieldIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2 L3 7 L3 13 Q3 19 12 22 Q21 19 21 13 L21 7Z" />
      <path d="M8 12 L11 15 L16 9" />
    </svg>
  )
}

export function GearIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1 L12 4 M12 20 L12 23 M4.2 4.2 L6.3 6.3 M17.7 17.7 L19.8 19.8 M1 12 L4 12 M20 12 L23 12 M4.2 19.8 L6.3 17.7 M17.7 6.3 L19.8 4.2" />
    </svg>
  )
}

export function SqlSnippet({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="136" height="76" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Window dots */}
      <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="20" cy="10" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="28" cy="10" r="2" fill="currentColor" opacity="0.2" />
      {/* SQL text lines */}
      <text x="10" y="30" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.35">SELECT</text>
      <text x="18" y="40" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.25">user_id,</text>
      <text x="18" y="50" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.25">metric_value</text>
      <text x="10" y="60" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.35">FROM</text>
      <text x="18" y="70" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.25">analytics.fct_events</text>
    </svg>
  )
}

export function ScatterPlot({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <path d="M15 68 L15 8 M13 68 L90 68" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      {/* Dots */}
      <circle cx="22" cy="58" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="30" cy="52" r="2.5" fill="currentColor" opacity="0.15" />
      <circle cx="35" cy="48" r="1.5" fill="currentColor" opacity="0.15" />
      <circle cx="42" cy="42" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="48" cy="44" r="2.5" fill="currentColor" opacity="0.15" />
      <circle cx="55" cy="35" r="1.5" fill="currentColor" opacity="0.15" />
      <circle cx="60" cy="30" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="65" cy="28" r="2.5" fill="currentColor" opacity="0.15" />
      <circle cx="72" cy="22" r="1.5" fill="currentColor" opacity="0.15" />
      <circle cx="80" cy="18" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="85" cy="14" r="2.5" fill="currentColor" opacity="0.15" />
      {/* Trend line */}
      <path d="M20 60 Q50 40, 87 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="3 2" opacity="0.2" />
    </svg>
  )
}

/* ---- Project-specific illustrations ---- */

export function ChatbotDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble */}
      <rect x="8" y="8" width="65" height="42" rx="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 50 L14 62 L32 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Typing dots */}
      <circle cx="28" cy="29" r="3" fill="currentColor" opacity="0.25" />
      <circle cx="40" cy="29" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="52" cy="29" r="3" fill="currentColor" opacity="0.45" />
      {/* Data/brain icon floating beside */}
      <circle cx="95" cy="25" r="16" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M88 25 Q91 18, 95 22 Q99 18, 102 25 Q99 32, 95 28 Q91 32, 88 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Connection line */}
      <path d="M73 26 Q80 24, 79 25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
      {/* Small data rows */}
      <path d="M82 55 L110 55 M82 61 L104 61 M82 67 L108 67" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}

export function ContextLayersDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stacked layers */}
      <path d="M60 20 L15 38 L60 52 L105 38 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.03" />
      <path d="M15 48 L60 62 L105 48" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 58 L60 72 L105 58" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Labels on layers */}
      <text x="60" y="40" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.4">context</text>
      <text x="60" y="56" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.3">synonyms</text>
      <text x="60" y="66" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.25">tags</text>
      {/* Floating metadata bits */}
      <rect x="8" y="8" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      <text x="19" y="15" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="monospace" opacity="0.3">key:val</text>
      <rect x="90" y="6" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      <text x="102" y="13" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="monospace" opacity="0.3">metric</text>
      {/* Arrows pointing in */}
      <path d="M30 13 L42 28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.2" />
      <path d="M90 11 L78 28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.2" />
    </svg>
  )
}

export function CiCdDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Git branch lines */}
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="45" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="105" cy="32" r="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
      {/* Branch paths */}
      <path d="M20 24 L20 41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 21 Q37 22, 46 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 44 Q37 42, 46 34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M54 32 L76 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M84 32 L101 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Labels */}
      <text x="20" y="10" textAnchor="middle" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.35">main</text>
      <text x="20" y="58" textAnchor="middle" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.35">feature</text>
      <text x="65" y="26" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="monospace" opacity="0.3">test</text>
      <text x="105" y="22" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="monospace" opacity="0.3">deploy</text>
      {/* Check mark at deploy */}
      <path d="M100 36 L103 39 L110 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Arrows */}
      <path d="M72 32 L76 32 M74 30 L76 32 L74 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M96 32 L101 32 M99 30 L101 32 L99 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Action blocks */}
      <rect x="35" y="62" width="50" height="16" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <text x="60" y="72" textAnchor="middle" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.25">github actions</text>
    </svg>
  )
}

export function SpeedometerDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gauge arc */}
      <path d="M20 70 Q20 20, 60 15 Q100 20, 100 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Tick marks */}
      <path d="M25 62 L30 58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M30 48 L36 46" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M42 34 L46 33" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M58 27 L60 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M76 30 L78 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M90 42 L85 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M96 58 L91 56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Needle — pointing to fast side */}
      <path d="M60 68 L88 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="68" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2" />
      {/* Labels */}
      <text x="22" y="78" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.3">slow</text>
      <text x="88" y="78" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.3">fast</text>
      {/* 60% label */}
      <text x="60" y="86" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" fontWeight="bold" opacity="0.4">-60%</text>
    </svg>
  )
}

/* ---- Contact illustrations ---- */

export function EnvelopeDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Envelope body */}
      <rect x="10" y="25" width="140" height="85" rx="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Envelope flap */}
      <path d="M10 25 L80 70 L150 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Letter peeking out */}
      <rect x="30" y="10" width="100" height="40" rx="2" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.25" />
      <path d="M45 22 L115 22 M45 30 L100 30 M45 38 L110 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      {/* Small heart / star accents */}
      <path d="M135 15 L137 10 L139 15 L144 17 L139 19 L137 24 L135 19 L130 17Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2" />
      <path d="M18 18 L20 14 L22 18 L26 19 L22 21 L20 25 L18 21 L14 19Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.15" />
    </svg>
  )
}

export function CoffeeChatDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coffee cup */}
      <path d="M35 45 L30 100 Q30 108 50 108 L80 108 Q100 108 100 100 L95 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handle */}
      <path d="M95 55 Q115 55, 115 72 Q115 88, 95 88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Steam lines */}
      <path d="M50 40 Q48 30, 52 20 Q56 10, 52 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
      <path d="M65 38 Q63 28, 67 18 Q71 8, 67 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
      <path d="M80 40 Q78 30, 82 22 Q86 14, 82 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.15" />
      {/* Saucer */}
      <ellipse cx="65" cy="112" rx="50" ry="6" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      {/* Small chat bubble */}
      <rect x="2" y="50" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <path d="M10 66 L8 72 L16 66" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <path d="M8 56 L20 56 M8 60 L16 60" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    </svg>
  )
}

export function PaperPlaneDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Paper plane */}
      <path d="M5 45 L90 10 L55 70 L45 45 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.03" />
      <path d="M45 45 L90 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Motion trail */}
      <path d="M8 50 Q0 48, 2 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.2" />
      <path d="M12 56 Q4 55, 5 48" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.15" />
      <path d="M18 60 Q10 60, 10 54" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.1" />
    </svg>
  )
}

/* ---- About section doodles ---- */

export function TeaCupDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cup */}
      <path d="M15 25 L12 55 Q12 62 28 62 L48 62 Q64 62 64 55 L61 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handle */}
      <path d="M61 32 Q75 32, 75 42 Q75 52, 61 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Tea tag string */}
      <path d="M15 28 L8 22 L6 26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <rect x="2" y="26" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      {/* Steam */}
      <path d="M30 20 Q28 12, 32 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M40 18 Q38 10, 42 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M50 20 Q48 14, 52 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}

export function BookDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Open book */}
      <path d="M35 12 Q35 50, 35 52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Left page */}
      <path d="M5 10 Q5 8, 10 8 L35 12 L35 52 L10 48 Q5 48, 5 46 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.02" />
      {/* Right page */}
      <path d="M65 10 Q65 8, 60 8 L35 12 L35 52 L60 48 Q65 48, 65 46 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.02" />
      {/* Text lines left */}
      <path d="M12 20 L30 23 M12 26 L28 29 M12 32 L30 35 M12 38 L24 40" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
      {/* Text lines right */}
      <path d="M40 23 L58 20 M40 29 L56 26 M40 35 L58 32 M40 40 L52 38" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
    </svg>
  )
}

export function LeafDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Leaf shape */}
      <path d="M25 5 Q45 15, 40 30 Q35 45, 25 45 Q15 45, 10 30 Q5 15, 25 5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" fillOpacity="0.03" />
      {/* Vein */}
      <path d="M25 8 L25 42" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M25 18 L18 22 M25 25 L17 30 M25 32 L20 36" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
      <path d="M25 18 L32 22 M25 25 L33 30 M25 32 L30 36" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
    </svg>
  )
}
