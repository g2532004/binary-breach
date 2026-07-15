import type { CharacterData, CharacterKey } from '../types/game'

export const characterData: Record<CharacterKey, CharacterData> = {
  knight: {
    name: 'コードナイト',
    role: '耐久型',
    description: '剣と盾でバグに立ち向かう王道キャラクター。',
    ability: '最大HPが120になる。',
    image: '/characters/knight.png',
    fallbackIcon: '🛡️',
    maxHp: 120,
    timeBonus: 0,
    autoHint: false,
    hintPenaltyFree: false
  },
  hacker: {
    name: 'サイバーハッカー',
    role: '時間型',
    description: '端末を使って素早くバグを解析するキャラクター。',
    ability: '難易度ごとの制限時間が15秒延長される。',
    image: '/characters/hacker.png',
    fallbackIcon: '💻',
    maxHp: 100,
    timeBonus: 15,
    autoHint: false,
    hintPenaltyFree: false
  },
  mage: {
    name: 'ロジックメイジ',
    role: '知識型',
    description: 'ロジックを組み立て、魔法のように戦うキャラクター。',
    ability: '最初からヒントが表示され、ヒントによる減点がない。',
    image: '/characters/mage.png',
    fallbackIcon: '🧙',
    maxHp: 100,
    timeBonus: 0,
    autoHint: true,
    hintPenaltyFree: true
  }
}
