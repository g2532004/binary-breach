import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

import {
  difficultyLabels,
  type Difficulty,
  type LanguageKey,
  type Question
} from './data/questionBank'
import { getRandomQuestions } from './utils/questionUtils'
import type { Screen, CharacterKey, FeedbackToast } from './types/game'
import {
  QUESTIONS_PER_GAME,
  QUESTIONS_PER_ENEMY,
  DAMAGE_TO_PLAYER,
  MAX_MISTAKES_PER_ENEMY,
  WRONG_SCORE_PENALTY,
  FEEDBACK_DELAY,
  DEMO_MODE,
  getQuestionTime
} from './config/gameConfig'
import { languageLabels } from './data/languages'
import { characterData } from './data/characters'
import { enemyImages } from './data/enemies'
import { AssetImage } from './components/AssetImage'
import { CodeEditorView } from './components/CodeEditorView'
import { HpBar } from './components/HpBar'
import { getRank } from './utils/score'
import {
  pageBaseStyle,
  pageCenterStyle,
  titlePanelStyle,
  descriptionStyle,
  centerButtonRowStyle,
  largeSelectButtonStyle,
  difficultyGridStyle,
  difficultyCardStyle,
  characterGridStyle,
  characterCardStyle,
  greenButtonStyle,
  yellowButtonStyle,
  redButtonStyle,
  resultPanelStyle,
  resultGridStyle,
  statusPanelStyle,
  answerBoxStyle,
  reviewQuestionStyle
} from './styles/appStyles'

function App() {
  const [screen, setScreen] = useState<Screen>('start')
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageKey>('python')
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>('beginner')
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterKey>('knight')

  const [gameQuestions, setGameQuestions] = useState<Question[]>([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isReviewMode, setIsReviewMode] = useState(false)

  const [playerHp, setPlayerHp] = useState(100)
  const [enemyHp, setEnemyHp] = useState(100)
  const [mistakeCount, setMistakeCount] = useState(0)
  const [totalMistakeCount, setTotalMistakeCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(40)

  const [score, setScore] = useState(0)
  const [wrongQuestionIds, setWrongQuestionIds] = useState<string[]>([])
  const [questionHadMistake, setQuestionHadMistake] = useState(false)
  const [hintUsed, setHintUsed] = useState(false)

  const [codeBlocks, setCodeBlocks] = useState<string[]>([])
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [showHint, setShowHint] = useState(false)

  const [message, setMessage] = useState(
    '学習するプログラミング言語を選択してください。'
  )
  const [gameOverReason, setGameOverReason] = useState('')
  const [toast, setToast] = useState<FeedbackToast | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const [playerDamaged, setPlayerDamaged] = useState(false)
  const [enemyDamaged, setEnemyDamaged] = useState(false)
  const [damagePopup, setDamagePopup] = useState('')

  const timeoutHandledRef = useRef(false)
  const transitionTimerRef = useRef<number | null>(null)

  const currentCharacter = characterData[selectedCharacter]
  const currentMaxTime = getQuestionTime(
    selectedDifficulty,
    currentCharacter.timeBonus
  )
  const currentQuestion = gameQuestions[questionIndex]
  const enemyIndex = Math.floor(questionIndex / QUESTIONS_PER_ENEMY)
  const totalEnemies = Math.ceil(gameQuestions.length / QUESTIONS_PER_ENEMY)
  const currentEnemy = enemyImages[enemyIndex % enemyImages.length]
  const enemyStartQuestionIndex = enemyIndex * QUESTIONS_PER_ENEMY
  const currentEnemyQuestionCount = Math.min(
    QUESTIONS_PER_ENEMY,
    gameQuestions.length - enemyStartQuestionIndex
  )
  const currentQuestionNumberInEnemy =
    questionIndex - enemyStartQuestionIndex + 1
  const damageToCurrentEnemy = 100 / Math.max(currentEnemyQuestionCount, 1)

  const questionTypeLabel = useMemo(() => {
    if (!currentQuestion) return ''
    if (currentQuestion.type === 'order') return '並び替え'
    if (currentQuestion.type === 'blank') return '穴埋め'
    return '間違い探し'
  }, [currentQuestion])

  const wrongQuestions = useMemo(
    () =>
      gameQuestions.filter((question) =>
        wrongQuestionIds.includes(question.id)
      ),
    [gameQuestions, wrongQuestionIds]
  )

  const rank = getRank(score, gameQuestions.length)

  const clearTransitionTimer = useCallback(() => {
    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current)
      transitionTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => clearTransitionTimer()
  }, [clearTransitionTimer])

  const resetAnswerInput = useCallback(() => {
    setCodeBlocks([])
    setSelectedChoice(null)
  }, [])

  const prepareQuestion = useCallback(
    (resetMistakeState: boolean) => {
      resetAnswerInput()
      setTimeLeft(currentMaxTime)
      setShowHint(currentCharacter.autoHint)
      setHintUsed(false)
      setToast(null)
      setIsTransitioning(false)
      timeoutHandledRef.current = false

      if (resetMistakeState) {
        setQuestionHadMistake(false)
      }
    },
    [currentCharacter.autoHint, currentMaxTime, resetAnswerInput]
  )

  const showPlayerDamage = (text: string) => {
    setPlayerDamaged(true)
    setDamagePopup(text)

    window.setTimeout(() => {
      setPlayerDamaged(false)
      setDamagePopup('')
    }, 750)
  }

  const showEnemyDamage = (text: string) => {
    setEnemyDamaged(true)
    setDamagePopup(text)

    window.setTimeout(() => {
      setEnemyDamaged(false)
      setDamagePopup('')
    }, 750)
  }

  const startQuestionSet = (
    questions: Question[],
    character: CharacterKey,
    reviewMode: boolean
  ) => {
    clearTransitionTimer()

    const characterInfo = characterData[character]

    setSelectedCharacter(character)
    setGameQuestions(questions)
    setQuestionIndex(0)
    setIsReviewMode(reviewMode)

    setPlayerHp(characterInfo.maxHp)
    setEnemyHp(100)
    setMistakeCount(0)
    setTotalMistakeCount(0)
    setTimeLeft(
      getQuestionTime(selectedDifficulty, characterInfo.timeBonus)
    )

    setScore(0)
    setWrongQuestionIds([])
    setQuestionHadMistake(false)
    setHintUsed(false)

    setCodeBlocks([])
    setSelectedChoice(null)
    setShowHint(characterInfo.autoHint)
    setGameOverReason('')
    setToast(null)
    setIsTransitioning(false)
    setDamagePopup('')
    timeoutHandledRef.current = false

    setMessage(
      reviewMode
        ? `間違えた問題だけを復習します。全${questions.length}問です。`
        : `${difficultyLabels[selectedDifficulty]}・${languageLabels[selectedLanguage]}モード開始！`
    )
    setScreen('game')
  }

  const startGame = (character: CharacterKey) => {
    const selectedQuestions = getRandomQuestions(
      selectedLanguage,
      selectedDifficulty,
      QUESTIONS_PER_GAME
    )

    startQuestionSet(selectedQuestions, character, false)
  }

  const markCurrentQuestionWrong = useCallback(() => {
    if (!currentQuestion) return

    setWrongQuestionIds((previous) =>
      previous.includes(currentQuestion.id)
        ? previous
        : [...previous, currentQuestion.id]
    )
  }, [currentQuestion])

  const advanceAfterCorrect = useCallback(
    (enemyDefeated: boolean, isLastQuestion: boolean) => {
      if (isLastQuestion) {
        setToast(null)
        setIsTransitioning(false)
        setScreen('clear')
        return
      }

      setQuestionIndex((previous) => previous + 1)

      if (enemyDefeated) {
        setEnemyHp(100)
        setMistakeCount(0)
        setMessage('新しい敵が出現！')
      } else {
        setMessage('次の問題です。')
      }

      prepareQuestion(true)
    },
    [prepareQuestion]
  )

  const processWrongAnswer = useCallback(
    (result: 'wrong' | 'timeout') => {
      if (!currentQuestion || isTransitioning) return

      clearTransitionTimer()
      setIsTransitioning(true)

      const nextHp = Math.max(playerHp - DAMAGE_TO_PLAYER, 0)
      const nextMistakeCount = mistakeCount + 1
      const reason =
        nextHp <= 0
          ? result === 'timeout'
            ? '時間切れでHPが0になった'
            : 'HPが0になった'
          : nextMistakeCount >= MAX_MISTAKES_PER_ENEMY
            ? '同じ敵に3回ミスした'
            : ''

      markCurrentQuestionWrong()
      setQuestionHadMistake(true)
      setPlayerHp(nextHp)
      setMistakeCount(nextMistakeCount)
      setTotalMistakeCount((previous) => previous + 1)
      setScore((previous) => Math.max(0, previous - WRONG_SCORE_PENALTY))
      resetAnswerInput()
      showPlayerDamage(
        result === 'timeout'
          ? `時間切れ！-${DAMAGE_TO_PLAYER}HP`
          : `-${DAMAGE_TO_PLAYER}HP`
      )

      setToast({
        kind: result,
        title: result === 'timeout' ? '時間切れ' : '不正解',
        detail: `スコア -${WRONG_SCORE_PENALTY} / もう一度挑戦`
      })

      setMessage(
        result === 'timeout'
          ? '時間切れ。ヒントを確認して同じ問題に再挑戦しよう。'
          : '不正解。ヒントを確認して同じ問題に再挑戦しよう。'
      )

      if (reason) {
        setGameOverReason(reason)
      }

      transitionTimerRef.current = window.setTimeout(() => {
        setToast(null)

        if (reason) {
          setIsTransitioning(false)
          setScreen('gameover')
          return
        }

        if (result === 'timeout') {
          setTimeLeft(currentMaxTime)
        }

        setShowHint(currentCharacter.autoHint)
        setHintUsed(false)
        setIsTransitioning(false)
        timeoutHandledRef.current = false
      }, FEEDBACK_DELAY)
    },
    [
      clearTransitionTimer,
      currentCharacter.autoHint,
      currentMaxTime,
      currentQuestion,
      isTransitioning,
      markCurrentQuestionWrong,
      mistakeCount,
      playerHp,
      resetAnswerInput
    ]
  )

  useEffect(() => {
    if (screen !== 'game') return
    if (!currentQuestion) return
    if (isTransitioning) return
    if (enemyHp <= 0) return

    const timerId = window.setInterval(() => {
      setTimeLeft((previous) => Math.max(previous - 1, 0))
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [screen, currentQuestion, isTransitioning, enemyHp])

  useEffect(() => {
    if (screen !== 'game') return
    if (!currentQuestion) return
    if (isTransitioning) return
    if (timeLeft > 0) return
    if (timeoutHandledRef.current) return

    timeoutHandledRef.current = true
    processWrongAnswer('timeout')
  }, [
    screen,
    currentQuestion,
    isTransitioning,
    processWrongAnswer,
    timeLeft
  ])

  const handleLanguageSelect = (language: LanguageKey) => {
    setSelectedLanguage(language)
    setScreen('difficulty')
  }

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty)
    setScreen('character')
  }

  const handleAddBlock = (fragment: string) => {
    if (!currentQuestion || currentQuestion.type !== 'order') return
    if (isTransitioning) return

    setCodeBlocks((previous) => [...previous, fragment])
  }

  const handleChoiceSelect = (choice: string) => {
    if (isTransitioning) return
    setSelectedChoice(choice)
  }

  const handleClear = () => {
    if (isTransitioning) return
    resetAnswerInput()
    setMessage('入力をクリアしました。')
  }

  const handleHintToggle = () => {
    if (isTransitioning) return

    setShowHint((previous) => {
      const next = !previous
      if (next) setHintUsed(true)
      return next
    })
  }

  const hasInput = () => {
    if (!currentQuestion) return false
    if (currentQuestion.type === 'order') return codeBlocks.length > 0
    return selectedChoice !== null
  }

  const isCorrectAnswer = () => {
    if (!currentQuestion) return false

    if (currentQuestion.type === 'order') {
      return (
        JSON.stringify(codeBlocks) ===
        JSON.stringify(currentQuestion.correctCode)
      )
    }

    return selectedChoice === currentQuestion.correctAnswer
  }

  const handleCorrectAnswer = () => {
    if (!currentQuestion || isTransitioning) return

    clearTransitionTimer()
    setIsTransitioning(true)

    const basePoints = 100
    const timeBonus = Math.round(
      (timeLeft / currentMaxTime) * 50
    )
    const noMistakeBonus = questionHadMistake ? 0 : 30
    const hintBonus =
      !hintUsed || currentCharacter.hintPenaltyFree ? 20 : 0
    const earnedPoints =
      basePoints + timeBonus + noMistakeBonus + hintBonus

    const nextEnemyHp = Math.max(enemyHp - damageToCurrentEnemy, 0)
    const isLastQuestion = questionIndex >= gameQuestions.length - 1
    const enemyDefeated = nextEnemyHp <= 0

    setEnemyHp(nextEnemyHp)
    setScore((previous) => previous + earnedPoints)
    resetAnswerInput()
    showEnemyDamage(`-${Math.round(damageToCurrentEnemy)}HP`)

    setToast({
      kind: 'correct',
      title: '正解！',
      detail: `+${earnedPoints}点`
    })

    setMessage(`正解！ ${currentQuestion.explanation}`)

    transitionTimerRef.current = window.setTimeout(() => {
      advanceAfterCorrect(enemyDefeated, isLastQuestion)
    }, FEEDBACK_DELAY)
  }

  const handleExecute = () => {
    if (!currentQuestion || !hasInput() || isTransitioning) return

    if (isCorrectAnswer()) handleCorrectAnswer()
    else processWrongAnswer('wrong')
  }

  const retryAll = () => {
    startGame(selectedCharacter)
  }

  const startWrongQuestionReview = () => {
    if (wrongQuestions.length === 0) return
    startQuestionSet(wrongQuestions, selectedCharacter, true)
  }

  const backToStart = () => {
    clearTransitionTimer()
    setScreen('start')
    setGameQuestions([])
    setQuestionIndex(0)
    setIsReviewMode(false)
    setScore(0)
    setWrongQuestionIds([])
    setToast(null)
    setIsTransitioning(false)
    resetAnswerInput()
    setMessage('学習するプログラミング言語を選択してください。')
  }

  const renderHelpModal = () => {
    if (!showHelp) return null

    return (
      <div className="helpOverlay" onClick={() => setShowHelp(false)}>
        <section
          className="helpModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="helpModalHeader">
            <h2 id="help-title">遊び方</h2>
            <button
              className="helpCloseButton hoverPulseButton"
              onClick={() => setShowHelp(false)}
              aria-label="遊び方を閉じる"
            >
              ×
            </button>
          </div>

          <div className="helpModalBody">
            <div className="helpSection">
              <h3>ゲームの流れ</h3>
              <ol>
                <li>言語・難易度・キャラクターを選びます。</li>
                <li>問題に答えると敵へダメージを与えます。</li>
                <li>2問正解すると敵を撃破できます。</li>
                <li>不正解や時間切れでは20ダメージを受けます。</li>
                <li>同じ敵に3回ミスするとゲームオーバーです。</li>
              </ol>
            </div>

            <div className="helpSection">
              <h3>問題形式</h3>
              <p><strong>並び替え：</strong>必要なコードだけを、実行する順番に選びます。使わない選択肢もあります。</p>
              <p><strong>穴埋め：</strong>空欄に入る選択肢を1つ選びます。</p>
              <p><strong>間違い探し：</strong>間違っている部分を1つ選びます。</p>
            </div>

            <div className="helpSection">
              <h3>スコア</h3>
              <p>早く正解し、ミスやヒントの使用を減らすほど高得点になります。詳しい解説はクリア後に確認できます。</p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const renderQuestionArea = () => {
    if (!currentQuestion) return null

    if (currentQuestion.type === 'order') {
      return (
        <>
          <div className="questionSectionTitle">あなたのプログラム</div>
          <CodeEditorView codeBlocks={codeBlocks} compact />

          <div className="questionSectionTitle">コードフラグメント</div>
          <div className="questionInstruction">必要なコードだけを、正しい順番で選んでください。<strong> すべての選択肢を使う必要はありません。</strong></div>
          <div className="choiceContainer">
            {currentQuestion.fragments?.map((fragment, index) => (
              <button
                key={`${fragment}-${index}`}
                className="choiceButton hoverPulseButton"
                onClick={() => handleAddBlock(fragment)}
                disabled={isTransitioning}
              >
                {fragment}
              </button>
            ))}
          </div>
        </>
      )
    }

    if (currentQuestion.type === 'blank') {
      return (
        <>
          <div className="questionSectionTitle">穴埋めコード</div>
          <CodeEditorView
            codeBlocks={currentQuestion.codeTemplate ?? []}
            compact
          />

          <div className="questionSectionTitle">空欄に入るもの</div>
          <div className="questionInstruction">空欄に入る選択肢を1つ選んでください。</div>
          <div className="choiceContainer">
            {currentQuestion.choices?.map((choice, index) => (
              <button
                key={`${choice}-${index}`}
                className={`choiceButton hoverPulseButton ${
                  selectedChoice === choice ? 'choiceSelected' : ''
                }`}
                onClick={() => handleChoiceSelect(choice)}
                disabled={isTransitioning}
              >
                {choice}
              </button>
            ))}
          </div>
        </>
      )
    }

    return (
      <>
        <div className="questionSectionTitle">間違いを含むコード</div>
        <CodeEditorView
          codeBlocks={currentQuestion.errorCode ?? []}
          compact
        />

        <div className="questionSectionTitle">間違っている部分</div>
        <div className="questionInstruction">間違っている部分を1つ選んでください。</div>
        <div className="choiceContainer">
          {currentQuestion.choices?.map((choice, index) => (
            <button
              key={`${choice}-${index}`}
              className={`choiceButton hoverPulseButton ${
                selectedChoice === choice ? 'choiceSelected' : ''
              }`}
              onClick={() => handleChoiceSelect(choice)}
              disabled={isTransitioning}
            >
              {choice}
            </button>
          ))}
        </div>
      </>
    )
  }

  if (screen === 'start') {
    return (
      <div style={pageCenterStyle} className="screenFade">
        <div style={titlePanelStyle} className="titlePanelWithHelp">
          <button className="helpButton hoverPulseButton" onClick={() => setShowHelp(true)} aria-label="遊び方を開く" title="遊び方">?</button>
          <h1 style={{ fontSize: '2.6rem', marginBottom: 8 }}>
            💻 HACKER'S MISSION
          </h1>
          {DEMO_MODE && (
            <div className="demoModeBadge">
              DEMO MODE：2問・敵1体・短縮タイマー
            </div>
          )}
          <p style={descriptionStyle}>
            学習するプログラミング言語を選択してください。
          </p>

          <div style={centerButtonRowStyle}>
            {(Object.keys(languageLabels) as LanguageKey[]).map((language) => (
              <button
                key={language}
                className="hoverPulseButton"
                onClick={() => handleLanguageSelect(language)}
                style={largeSelectButtonStyle}
              >
                {languageLabels[language]}
              </button>
            ))}
          </div>
        </div>
        {renderHelpModal()}
      </div>
    )
  }

  if (screen === 'difficulty') {
    return (
      <div style={pageCenterStyle} className="screenFade">
        <div style={titlePanelStyle}>
          <h1>難易度選択</h1>
          <p style={{ color: 'yellow' }}>
            選択中の言語：{languageLabels[selectedLanguage]}
          </p>

          <div style={difficultyGridStyle} className="responsiveThreeColumn">
            {(Object.keys(difficultyLabels) as Difficulty[]).map(
              (difficulty) => (
                <button
                  key={difficulty}
                  className="characterCard"
                  onClick={() => handleDifficultySelect(difficulty)}
                  style={difficultyCardStyle}
                >
                  <h2 style={{ color: 'yellow' }}>
                    {difficultyLabels[difficulty]}
                  </h2>
                  <p style={descriptionStyle}>
                    {difficulty === 'beginner' &&
                      '変数・表示・基本的な条件分岐や繰り返し'}
                    {difficulty === 'intermediate' &&
                      '関数・配列・クラス・例外処理など'}
                    {difficulty === 'advanced' &&
                      '非同期処理・メモリ・ジェネリクスなど'}
                  </p>
                  <p style={{ color: '#00ff00' }}>全10問・敵5体</p>
                </button>
              )
            )}
          </div>

          <button
            className="hoverPulseButton"
            onClick={() => setScreen('start')}
            style={greenButtonStyle}
          >
            言語選択に戻る
          </button>
        </div>
      </div>
    )
  }

  if (screen === 'character') {
    return (
      <div style={pageCenterStyle} className="screenFade">
        <div style={{ ...titlePanelStyle, maxWidth: 1050 }}>
          <h1>キャラクター選択</h1>
          <p style={{ color: 'yellow' }}>
            {languageLabels[selectedLanguage]}・
            {difficultyLabels[selectedDifficulty]}
          </p>

          <div style={characterGridStyle} className="responsiveThreeColumn">
            {(Object.keys(characterData) as CharacterKey[]).map(
              (characterKey) => {
                const character = characterData[characterKey]

                return (
                  <button
                    key={characterKey}
                    className="characterCard"
                    onClick={() => startGame(characterKey)}
                    style={characterCardStyle}
                  >
                    <div className="spriteIdle">
                      <AssetImage
                        src={character.image}
                        alt={character.name}
                        fallbackIcon={character.fallbackIcon}
                        size={150}
                      />
                    </div>
                    <h2 style={{ color: 'yellow' }}>{character.name}</h2>
                    <p style={{ color: '#00ff00', fontWeight: 'bold' }}>
                      {character.role}
                    </p>
                    <p style={descriptionStyle}>{character.description}</p>
                    <p style={{ color: 'yellow' }}>
                      固有能力：{character.ability}
                    </p>
                  </button>
                )
              }
            )}
          </div>

          <button
            className="hoverPulseButton"
            onClick={() => setScreen('difficulty')}
            style={greenButtonStyle}
          >
            難易度選択に戻る
          </button>
        </div>
      </div>
    )
  }

  if (screen === 'gameover') {
    return (
      <div style={pageBaseStyle} className="screenFade">
        <div style={resultPanelStyle('red')}>
          <h1 style={{ color: 'red', textAlign: 'center' }}>GAME OVER</h1>
          <p style={{ color: 'yellow', fontSize: '1.2rem' }}>
            理由：{gameOverReason}
          </p>

          <div style={resultGridStyle} className="responsiveTwoColumn">
            <div style={statusPanelStyle('#00ff00')}>
              <AssetImage
                src={currentCharacter.image}
                alt={currentCharacter.name}
                fallbackIcon={currentCharacter.fallbackIcon}
                size={110}
              />
              <h2>{currentCharacter.name}</h2>
              <p>
                HP：{playerHp} / {currentCharacter.maxHp}
              </p>
              <p>合計ミス：{totalMistakeCount}</p>
            </div>

            <div style={statusPanelStyle('red')}>
              <AssetImage
                src={currentEnemy.image}
                alt={currentEnemy.name}
                fallbackIcon={currentEnemy.fallbackIcon}
                size={110}
              />
              <h2>{currentEnemy.name}</h2>
              <p>
                問題：{questionIndex + 1} / {gameQuestions.length}
              </p>
              <p>スコア：{score}</p>
            </div>
          </div>

          {currentQuestion && (
            <div style={answerBoxStyle}>
              <h2 style={{ color: 'yellow' }}>今回の問題</h2>
              <p>{currentQuestion.mission}</p>
              <CodeEditorView codeBlocks={currentQuestion.correctCode} />
              <p style={{ color: 'yellow' }}>
                解説：{currentQuestion.explanation}
              </p>
            </div>
          )}

          <div style={centerButtonRowStyle}>
            <button
              className="hoverPulseButton"
              onClick={retryAll}
              style={yellowButtonStyle}
            >
              同じ条件で最初から
            </button>
            <button
              className="hoverPulseButton"
              onClick={backToStart}
              style={greenButtonStyle}
            >
              言語選択に戻る
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (screen === 'clear') {
    return (
      <div style={pageBaseStyle} className="screenFade">
        <div style={resultPanelStyle('yellow')}>
          <h1 style={{ color: 'yellow', textAlign: 'center' }}>
            {isReviewMode ? 'REVIEW CLEAR!' : 'CLEAR!'}
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            {isReviewMode
              ? '間違えた問題の復習が終了しました。'
              : `${languageLabels[selectedLanguage]}・${difficultyLabels[selectedDifficulty]}をクリアしました。`}
          </p>

          <div style={resultGridStyle} className="responsiveTwoColumn">
            <div style={statusPanelStyle('#00ff00')}>
              <AssetImage
                src={currentCharacter.image}
                alt={currentCharacter.name}
                fallbackIcon={currentCharacter.fallbackIcon}
                size={110}
              />
              <h2>{currentCharacter.name}</h2>
              <p>{currentCharacter.ability}</p>
              <p>
                残りHP：{playerHp} / {currentCharacter.maxHp}
              </p>
            </div>

            <div style={statusPanelStyle('yellow')}>
              <h2>RESULT</h2>
              <p style={{ fontSize: '2rem', margin: '8px 0' }}>
                RANK {rank}
              </p>
              <p>スコア：{score}</p>
              <p>合計ミス：{totalMistakeCount}</p>
              <p>間違えた問題：{wrongQuestions.length}問</p>
            </div>
          </div>

          <div style={answerBoxStyle}>
            <h2 style={{ color: 'yellow' }}>📘 問題の復習</h2>

            {gameQuestions.map((question, index) => {
              const wasWrong = wrongQuestionIds.includes(question.id)

              return (
                <div key={question.id} style={reviewQuestionStyle}>
                  <h3 style={{ color: wasWrong ? 'red' : '#00ff00' }}>
                    問題{index + 1}：{question.mission}
                  </h3>
                  <p style={{ color: '#aaa' }}>
                    ジャンル：{question.topic} ／{' '}
                    {wasWrong ? '一度以上ミス' : 'ノーミス'}
                  </p>
                  <CodeEditorView codeBlocks={question.correctCode} />
                  <p style={{ color: 'yellow' }}>
                    解説：{question.explanation}
                  </p>
                </div>
              )
            })}
          </div>

          <div style={centerButtonRowStyle}>
            {wrongQuestions.length > 0 && (
              <button
                className="hoverPulseButton"
                onClick={startWrongQuestionReview}
                style={redButtonStyle}
              >
                間違えた{wrongQuestions.length}問だけ再挑戦
              </button>
            )}

            {wrongQuestions.length === 0 && (
              <div style={{ color: '#00ff00', width: '100%' }}>
                全問正解です！復習対象はありません。
              </div>
            )}

            <button
              className="hoverPulseButton"
              onClick={retryAll}
              style={yellowButtonStyle}
            >
              同じ条件でもう一度
            </button>
            <button
              className="hoverPulseButton"
              onClick={backToStart}
              style={greenButtonStyle}
            >
              言語選択に戻る
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div style={pageCenterStyle}>
        <p>問題を読み込めませんでした。</p>
      </div>
    )
  }

  return (
    <div className="gamePage screenFade">
      <header className="compactHeader">
        <div className="compactTitle">
          💻 HACKER'S MISSION
          <span>{languageLabels[selectedLanguage]}</span>
        </div>

        <div className="headerStats">
          <span>
            {isReviewMode
              ? '間違い復習'
              : difficultyLabels[selectedDifficulty]}
          </span>
          <span>
            問題 {questionIndex + 1}/{gameQuestions.length}
          </span>
          <span>
            敵 {enemyIndex + 1}/{totalEnemies}
          </span>
          <span>{currentQuestion.topic}</span>
          <span>SCORE {score}</span>
          <button className="headerHelpButton hoverPulseButton" onClick={() => setShowHelp(true)} aria-label="遊び方を開く" title="遊び方">?</button>
        </div>
      </header>

      <main className="gameDashboard">
        <aside className="sideColumn">
          <section
            className={`compactPanel playerPanel ${
              playerDamaged ? 'playerDamageAnimation' : ''
            }`}
          >
            <div className="sideCharacterRow">
              <div className="spriteIdle">
                <AssetImage
                  src={currentCharacter.image}
                  alt={currentCharacter.name}
                  fallbackIcon={currentCharacter.fallbackIcon}
                  size={92}
                />
              </div>

              <div className="sideCharacterInfo">
                <h2>{currentCharacter.name}</h2>
                <div className="smallMuted">{currentCharacter.role}</div>
                <div className="hpText">
                  HP {playerHp}/{currentCharacter.maxHp}
                </div>
                <HpBar
                  value={playerHp}
                  max={currentCharacter.maxHp}
                  color="#00ff00"
                />
              </div>
            </div>
            <div className="abilityText">{currentCharacter.ability}</div>
          </section>

          <section className="compactPanel missionCompactPanel">
            <div className="panelHeading">🎯 MISSION</div>
            <div className="missionTopic">
              {currentQuestion.topic}・{questionTypeLabel}
            </div>
            <p className="missionText">{currentQuestion.mission}</p>
            <div className="smallMuted">
              この敵でのミス {mistakeCount}/{MAX_MISTAKES_PER_ENEMY}
            </div>

            <button
              className="smallOutlineButton hoverPulseButton"
              onClick={handleHintToggle}
              disabled={isTransitioning}
            >
              {showHint ? 'ヒントを隠す' : 'ヒントを見る'}
            </button>

            {showHint && (
              <div className="compactHint">💡 {currentQuestion.hint}</div>
            )}
          </section>

          <section
            className={`compactPanel timerCompactPanel ${
              timeLeft <= 10 ? 'dangerBorder' : ''
            }`}
          >
            <div className="timerRow">
              <span>⏱ TIME</span>
              <strong className={timeLeft <= 10 ? 'dangerText' : ''}>
                {timeLeft}s
              </strong>
            </div>
            <HpBar
              value={timeLeft}
              max={currentMaxTime}
              color={timeLeft <= 10 ? 'red' : 'yellow'}
            />
            <div className="smallMuted">
              基本 {getQuestionTime(selectedDifficulty, 0)}秒
              {currentCharacter.timeBonus > 0
                ? ` ＋ 能力 ${currentCharacter.timeBonus}秒`
                : ''}
            </div>
          </section>
        </aside>

        <section className="questionPanelCompact">
          <div className="questionPanelHeader">
            <div>
              QUESTION {questionIndex + 1}
              <span>{currentQuestion.topic}</span>
            </div>
            <div className="questionMiniStatus">
              {currentEnemy.name} Lv.{enemyIndex + 1}
            </div>
          </div>

          <div className="questionContent">{renderQuestionArea()}</div>

          <div className="actionBar">
            <button
              className="executeButton hoverPulseButton"
              onClick={handleExecute}
              disabled={!hasInput() || isTransitioning}
            >
              &gt; 攻撃 EXECUTE
            </button>
            <button
              className="clearButton hoverPulseButton"
              onClick={handleClear}
              disabled={isTransitioning}
            >
              CLEAR
            </button>
            <button
              className="quitButton hoverPulseButton"
              onClick={backToStart}
            >
              終了
            </button>
          </div>
        </section>

        <aside className="sideColumn">
          <section
            className={`compactPanel enemyPanel ${
              enemyDamaged ? 'enemyDamageAnimation' : ''
            }`}
          >
            <div className="enemyNameRow">
              <h2>
                {currentEnemy.name} Lv.{enemyIndex + 1}
              </h2>
              <span>
                {currentQuestionNumberInEnemy}/{currentEnemyQuestionCount}
              </span>
            </div>

            <div className="spriteIdle">
              <AssetImage
                src={currentEnemy.image}
                alt={currentEnemy.name}
                fallbackIcon={currentEnemy.fallbackIcon}
                size={108}
              />
            </div>

            <div className="hpText">
              HP {Math.round(Math.max(enemyHp, 0))}/100
            </div>
            <HpBar value={enemyHp} max={100} color="red" />
          </section>

          <section className="compactPanel scoreCompactPanel">
            <div className="panelHeading">SCORE</div>
            <div className="bigScore">{score}</div>
            <div className="scoreRules">
              正解 +100
              <br />
              時間・ノーミス・ヒントボーナス
              <br />
              不正解 -{WRONG_SCORE_PENALTY}
            </div>
          </section>

          <section className="compactPanel progressCompactPanel">
            <div className="panelHeading">PROGRESS</div>
            <div className="progressDots">
              {gameQuestions.map((question, index) => (
                <span
                  key={question.id}
                  className={`progressDot ${
                    index < questionIndex
                      ? 'progressDone'
                      : index === questionIndex
                        ? 'progressCurrent'
                        : ''
                  } ${wrongQuestionIds.includes(question.id) ? 'progressWrong' : ''}`}
                  title={`問題${index + 1}`}
                />
              ))}
            </div>
            <div className="smallMuted">
              合計ミス {totalMistakeCount}
            </div>
          </section>
        </aside>
      </main>

      <footer className="systemBar">
        <span>&gt; SYSTEM:</span>
        <div title={message}>{message}</div>
      </footer>

      {damagePopup && (
        <div className={enemyDamaged ? 'attackPopup floatingDamage' : 'damagePopup floatingDamage'}>
          {damagePopup}
        </div>
      )}

      {toast && (
        <div className={`feedbackToast ${toast.kind}`}>
          <strong>{toast.title}</strong>
          <span>{toast.detail}</span>
        </div>
      )}

      {renderHelpModal()}
    </div>
  )
}

export default App
