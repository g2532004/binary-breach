export type Screen =
  | 'start'
  | 'difficulty'
  | 'character'
  | 'game'
  | 'gameover'
  | 'clear'

export type CharacterKey = 'knight' | 'hacker' | 'mage'
export type ToastKind = 'correct' | 'wrong' | 'timeout'

export type CharacterData = {
  name: string
  role: string
  description: string
  ability: string
  image: string
  fallbackIcon: string
  maxHp: number
  timeBonus: number
  autoHint: boolean
  hintPenaltyFree: boolean
}

export type FeedbackToast = {
  kind: ToastKind
  title: string
  detail: string
}
