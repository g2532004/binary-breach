import { useState } from 'react'

type AssetImageProps = {
  src: string
  alt: string
  fallbackIcon: string
  size?: number
}

export function AssetImage({ src, alt, fallbackIcon, size = 120 }: AssetImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '1px solid #333', backgroundColor: '#050505', fontSize: size * 0.55 }}>
        {fallbackIcon}
      </div>
    )
  }

  return (
    <img
      className="pixelImage"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, objectFit: 'contain', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.25))' }}
    />
  )
}
