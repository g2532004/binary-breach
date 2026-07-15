export type EnemyImage = {
  name: string
  image: string
  fallbackIcon: string
}

export const enemyImages: EnemyImage[] = [
  { name: 'Loop_Bug', image: '/enemies/loop-bug.png', fallbackIcon: '🐛' },
  { name: 'If_Bug', image: '/enemies/if-bug.png', fallbackIcon: '👾' },
  { name: 'Function_Bug', image: '/enemies/function-bug.png', fallbackIcon: '🐉' }
]
