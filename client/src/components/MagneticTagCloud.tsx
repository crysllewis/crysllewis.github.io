import { useCallback, useEffect, useState, useRef } from 'react'

interface SkillNode {
  label: string
  x: number
  y: number
  animClass: string
  duration: string
  delay: string
}

const SKILLS: SkillNode[] = [
  { label: 'Design', x: 30, y: 30, animClass: 'animate-float1', duration: '6s', delay: '0s' },
  { label: 'Research', x: 55, y: 42, animClass: 'animate-float2', duration: '7s', delay: '0.5s' },
  { label: 'Wireframes', x: 42, y: 18, animClass: 'animate-float3', duration: '5.5s', delay: '1s' },
  { label: 'Prototypes', x: 18, y: 52, animClass: 'animate-float4', duration: '6.5s', delay: '0.3s' },
  { label: 'User Stories', x: 48, y: 58, animClass: 'animate-float2', duration: '5s', delay: '0.8s' },
  { label: 'Mockups', x: 72, y: 65, animClass: 'animate-float3', duration: '6s', delay: '0.2s' },
  { label: 'Sketches', x: 75, y: 32, animClass: 'animate-float1', duration: '5.5s', delay: '0.6s' },
  { label: 'Workshops', x: 38, y: 76, animClass: 'animate-float3', duration: '6.5s', delay: '0.9s' },
]

export default function MagneticTagCloud() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        })
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 })
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] select-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label="Magnetic cloud of design skills"
    >
      {SKILLS.map((skill) => {
        let repelX = 0
        let repelY = 0
        if (containerSize.w > 0 && containerSize.h > 0) {
          const tagX = (skill.x / 100) * containerSize.w
          const tagY = (skill.y / 100) * containerSize.h
          const dx = tagX - mousePos.x
          const dy = tagY - mousePos.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 140
          const maxRepel = 70
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist
            const safeDist = dist || 1
            repelX = (dx / safeDist) * force * maxRepel
            repelY = (dy / safeDist) * force * maxRepel
          }
        }

        return (
          <div
            key={skill.label}
            className={`absolute ${skill.animClass}`}
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              animationDuration: skill.duration,
              animationDelay: skill.delay,
              zIndex: 10,
            }}
          >
            <span
              className="inline-block rounded-sm px-4 py-3.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-1"
              style={{
                backgroundColor: '#FFF9E0',
                color: '#111827',
                boxShadow: '2px 4px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06), inset 0 -2px 0 rgba(0,0,0,0.04)',
                transform: `translate(-50%, -50%) rotate(${(skill.x % 7) - 3}deg) translate(${repelX}px, ${repelY}px)`,
                borderBottom: '3px solid #EED880',
                minWidth: '70px',
                textAlign: 'center',
              }}
            >
              {skill.label}
            </span>
          </div>
        )
      })}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(205,163,60,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </div>
  )
}
