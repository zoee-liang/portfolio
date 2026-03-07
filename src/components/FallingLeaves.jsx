const leaves = [
  { left: '6%', size: 18, duration: '18s', delay: '0s', opacity: 0.18 },
  { left: '20%', size: 14, duration: '22s', delay: '3s', opacity: 0.15 },
  { left: '42%', size: 20, duration: '20s', delay: '6s', opacity: 0.16 },
  { left: '65%', size: 15, duration: '24s', delay: '1s', opacity: 0.14 },
  { left: '82%', size: 17, duration: '19s', delay: '8s', opacity: 0.16 },
  { left: '33%', size: 13, duration: '26s', delay: '12s', opacity: 0.12 },
  { left: '53%', size: 19, duration: '21s', delay: '5s', opacity: 0.15 },
  { left: '73%', size: 16, duration: '23s', delay: '10s', opacity: 0.17 },
  { left: '14%', size: 14, duration: '25s', delay: '15s', opacity: 0.13 },
  { left: '90%', size: 15, duration: '20s', delay: '7s', opacity: 0.15 },
]

function LeafSVG({ size, className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 20 Q12 18, 17 10 Q20 4, 20 4 Q14 6, 10 10 Q4 16, 4 20Z" />
      <path d="M4 20 Q10 14, 17 10" />
    </svg>
  )
}

export default function FallingLeaves() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {leaves.map((l, i) => (
        <div
          key={i}
          className="falling-leaf"
          style={{
            left: l.left,
            '--fall-duration': l.duration,
            '--fall-delay': l.delay,
          }}
        >
          <LeafSVG
            size={l.size}
            className="text-gray-400"
            style={{ opacity: l.opacity }}
          />
        </div>
      ))}
    </div>
  )
}
