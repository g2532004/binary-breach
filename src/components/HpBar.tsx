type HpBarProps = { value: number; max: number; color: string }

export function HpBar({ value, max, color }: HpBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="hpBarBackground">
      <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: color, transition: 'width 0.4s ease' }} />
    </div>
  )
}
