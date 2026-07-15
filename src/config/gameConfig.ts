import type { Difficulty } from '../data/questionBank'

export const QUESTIONS_PER_GAME = 10
export const QUESTIONS_PER_ENEMY = 2
export const DAMAGE_TO_PLAYER = 20
export const MAX_MISTAKES_PER_ENEMY = 3
export const WRONG_SCORE_PENALTY = 20
export const FEEDBACK_DELAY = 900

// 難易度ごとの基本制限時間
export const DIFFICULTY_TIME: Record<Difficulty, number> = {
  beginner: 40,
  intermediate: 55,
  advanced: 70
}

// キャラクターの時間ボーナスを加えた実際の制限時間
export function getQuestionTime(
  difficulty: Difficulty,
  timeBonus: number
): number {
  return DIFFICULTY_TIME[difficulty] + timeBonus
}
