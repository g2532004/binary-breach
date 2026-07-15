import { questionBank } from '../data/questionBank'
import type { Difficulty, LanguageKey, Question } from '../data/questionBank'

export function getQuestions(
  language: LanguageKey,
  difficulty: Difficulty
): Question[] {
  return questionBank.filter(
    (question) =>
      question.language === language &&
      question.difficulty === difficulty
  )
}

export function shuffleQuestions(items: Question[]): Question[] {
  const result = [...items]

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }

  return result
}

export function getRandomQuestions(
  language: LanguageKey,
  difficulty: Difficulty,
  count: number
): Question[] {
  return shuffleQuestions(getQuestions(language, difficulty)).slice(0, count)
}
