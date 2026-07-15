export function getRank(score: number, questionCount: number) {
  if (questionCount <= 0) return 'C'
  const average = score / questionCount
  if (average >= 180) return 'S'
  if (average >= 150) return 'A'
  if (average >= 120) return 'B'
  return 'C'
}
