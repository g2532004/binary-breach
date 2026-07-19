import type { Difficulty } from '../data/questionBank'

// 発表時は true、通常公開へ戻すときは false
export const DEMO_MODE = true

const NORMAL_QUESTIONS_PER_GAME = 10
const DEMO_QUESTIONS_PER_GAME = 2

export const QUESTIONS_PER_GAME = DEMO_MODE
  ? DEMO_QUESTIONS_PER_GAME
  : NORMAL_QUESTIONS_PER_GAME

export const QUESTIONS_PER_ENEMY = 2
export const DAMAGE_TO_PLAYER = 20
export const MAX_MISTAKES_PER_ENEMY = 3
export const WRONG_SCORE_PENALTY = 20
export const FEEDBACK_DELAY = 900

const NORMAL_DIFFICULTY_TIME: Record<Difficulty, number> = {
  beginner: 40,
  intermediate: 55,
  advanced: 70
}

const DEMO_DIFFICULTY_TIME: Record<Difficulty, number> = {
  beginner: 10,
  intermediate: 12,
  advanced: 15
}

// DEMO_MODEの値に応じて自動で切り替わる
export const DIFFICULTY_TIME: Record<Difficulty, number> =
  DEMO_MODE ? DEMO_DIFFICULTY_TIME : NORMAL_DIFFICULTY_TIME

// サイバーハッカーのtimeBonus（+15秒）も通常どおり加算される。
// 時間切れを見せる実演では、コードナイトかロジックメイジがおすすめ。
export function getQuestionTime(
  difficulty: Difficulty,
  timeBonus: number
): number {
  return DIFFICULTY_TIME[difficulty] + timeBonus
}
