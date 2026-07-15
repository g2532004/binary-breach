import type { CSSProperties } from 'react'

export const pageBaseStyle: CSSProperties = {
  minHeight: '100vh',
  padding: 16,
  backgroundColor: '#0a0a0a',
  color: '#00ff00',
  fontFamily: 'monospace'
}

export const pageCenterStyle: CSSProperties = {
  ...pageBaseStyle,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40
}

export const titlePanelStyle: CSSProperties = {
  width: '100%',
  maxWidth: 820,
  padding: 34,
  backgroundColor: '#111',
  border: '1px solid #00ff00',
  textAlign: 'center',
  boxShadow: '0 0 18px rgba(0,255,0,0.25)'
}

export const descriptionStyle: CSSProperties = {
  color: '#aaa',
  lineHeight: 1.7
}

export const centerButtonRowStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 12,
  marginTop: 20
}

export const largeSelectButtonStyle: CSSProperties = {
  padding: '15px 34px',
  color: '#00ff00',
  backgroundColor: 'transparent',
  border: '1px solid #00ff00',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1.1rem'
}

export const difficultyGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 16,
  margin: '30px 0'
}

export const difficultyCardStyle: CSSProperties = {
  minHeight: 220,
  padding: 20,
  color: '#00ff00',
  backgroundColor: '#080808',
  border: '1px solid #00ff00',
  cursor: 'pointer'
}

export const characterGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 18,
  margin: '30px 0'
}

export const characterCardStyle: CSSProperties = {
  minHeight: 390,
  padding: 24,
  color: '#00ff00',
  backgroundColor: '#080808',
  border: '1px solid #00ff00',
  cursor: 'pointer'
}

export const greenButtonStyle: CSSProperties = {
  padding: '12px 24px',
  color: '#00ff00',
  backgroundColor: 'transparent',
  border: '1px solid #00ff00',
  cursor: 'pointer',
  fontWeight: 'bold'
}

export const yellowButtonStyle: CSSProperties = {
  padding: '12px 24px',
  color: 'yellow',
  backgroundColor: 'transparent',
  border: '1px solid yellow',
  cursor: 'pointer',
  fontWeight: 'bold'
}

export const redButtonStyle: CSSProperties = {
  padding: '12px 24px',
  color: '#fff',
  backgroundColor: '#a00000',
  border: '1px solid red',
  cursor: 'pointer',
  fontWeight: 'bold'
}

export function resultPanelStyle(borderColor: string): CSSProperties {
  return {
    maxWidth: 1050,
    margin: '0 auto',
    padding: 25,
    backgroundColor: '#111',
    border: `1px solid ${borderColor}`
  }
}

export const resultGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 15,
  marginTop: 20
}

export function statusPanelStyle(borderColor: string): CSSProperties {
  return {
    padding: 14,
    textAlign: 'center',
    backgroundColor: '#080808',
    border: `1px solid ${borderColor}`
  }
}

export const answerBoxStyle: CSSProperties = {
  marginTop: 25,
  padding: 15,
  backgroundColor: '#080808',
  border: '1px solid yellow'
}

export const reviewQuestionStyle: CSSProperties = {
  marginTop: 18,
  paddingTop: 15,
  borderTop: '1px solid #333'
}

