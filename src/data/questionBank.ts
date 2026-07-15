export type LanguageKey = 'python' | 'java' | 'c'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
export type QuestionType = 'order' | 'blank' | 'error'

export type Question = {
  id: string
  language: LanguageKey
  difficulty: Difficulty
  topic: string
  type: QuestionType
  mission: string
  hint: string
  explanation: string
  correctCode: string[]
  fragments?: string[]
  codeTemplate?: string[]
  choices?: string[]
  correctAnswer?: string
  errorCode?: string[]
}

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級'
}

export const questionBank: Question[] = [
  {
    id: "py-b-01",
    language: "python",
    difficulty: "beginner",
    type: "order",
    mission: "「Hello」と表示しろ！",
    hint: "print()を使う。",
    explanation: "print()は値を画面に表示する。",
    correctCode: [
      "print(\"Hello\")"
    ],
    fragments: [
      "print(\"Hello\")",
      "input(\"Hello\")",
      "Hello"
    ],
    topic: "出力"
  },
  {
    id: "py-b-02",
    language: "python",
    difficulty: "beginner",
    type: "blank",
    mission: "変数xに10を代入しろ！",
    hint: "代入には=を使う。",
    explanation: "Pythonでは変数名 = 値で代入する。",
    correctCode: [
      "x = 10"
    ],
    codeTemplate: [
      "x ___ 10"
    ],
    choices: [
      "=",
      "==",
      ":",
      "+"
    ],
    correctAnswer: "=",
    topic: "変数と代入"
  },
  {
    id: "py-b-03",
    language: "python",
    difficulty: "beginner",
    type: "error",
    mission: "文字列の代入ミスを見つけろ！",
    hint: "文字列は引用符で囲む。",
    explanation: "文字列は\"Hello\"のように書く。",
    correctCode: [
      "message = \"Hello\"",
      "print(message)"
    ],
    choices: [
      "message = Hello",
      "print(message)"
    ],
    correctAnswer: "message = Hello",
    errorCode: [
      "message = Hello",
      "print(message)"
    ],
    topic: "文字列"
  },
  {
    id: "py-b-04",
    language: "python",
    difficulty: "beginner",
    type: "order",
    mission: "1と2の合計を表示しろ！",
    hint: "printの中で計算できる。",
    explanation: "1 + 2の結果をprintに渡す。",
    correctCode: [
      "print(1 + 2)"
    ],
    fragments: [
      "print(1 + 2)",
      "print(\"1 + 2\")",
      "1 + 2"
    ],
    topic: "算術演算"
  },
  {
    id: "py-b-05",
    language: "python",
    difficulty: "beginner",
    type: "blank",
    mission: "名前を入力するコードを完成させろ！",
    hint: "input()を使う。",
    explanation: "input()はキーボード入力を文字列として受け取る。",
    correctCode: [
      "name = input(\"名前：\")"
    ],
    codeTemplate: [
      "name = ___(\"名前：\")"
    ],
    choices: [
      "input",
      "print",
      "int",
      "range"
    ],
    correctAnswer: "input",
    topic: "入力"
  },
  {
    id: "py-b-06",
    language: "python",
    difficulty: "beginner",
    type: "error",
    mission: "if文のミスを見つけろ！",
    hint: "条件の最後にはコロン。",
    explanation: "Pythonのif文はif 条件: と書く。",
    correctCode: [
      "age = 18",
      "if age >= 18:",
      "    print(\"成人\")"
    ],
    choices: [
      "age = 18",
      "if age >= 18",
      "print(\"成人\")"
    ],
    correctAnswer: "if age >= 18",
    errorCode: [
      "age = 18",
      "if age >= 18",
      "    print(\"成人\")"
    ],
    topic: "条件分岐"
  },
  {
    id: "py-b-07",
    language: "python",
    difficulty: "beginner",
    type: "order",
    mission: "0から2まで表示しろ！",
    hint: "range(3)を使う。",
    explanation: "range(3)は0,1,2を生成する。",
    correctCode: [
      "for i in range(3):",
      "print(i)"
    ],
    fragments: [
      "for i in range(3):",
      "print(i)",
      "while True:",
      "break"
    ],
    topic: "繰り返し処理"
  },
  {
    id: "py-b-08",
    language: "python",
    difficulty: "beginner",
    type: "blank",
    mission: "リストの先頭を表示しろ！",
    hint: "添字は0から。",
    explanation: "先頭要素はindex 0。",
    correctCode: [
      "numbers = [10, 20, 30]",
      "print(numbers[0])"
    ],
    codeTemplate: [
      "numbers = [10, 20, 30]",
      "print(numbers[___])"
    ],
    choices: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: "0",
    topic: "リスト"
  },
  {
    id: "py-b-09",
    language: "python",
    difficulty: "beginner",
    type: "error",
    mission: "関数定義のミスを見つけろ！",
    hint: "関数定義はdef。",
    explanation: "Pythonではdef 関数名():を使う。",
    correctCode: [
      "def hello():",
      "    print(\"Hello\")",
      "hello()"
    ],
    choices: [
      "function hello():",
      "print(\"Hello\")",
      "hello()"
    ],
    correctAnswer: "function hello():",
    errorCode: [
      "function hello():",
      "    print(\"Hello\")",
      "hello()"
    ],
    topic: "関数"
  },
  {
    id: "py-b-10",
    language: "python",
    difficulty: "beginner",
    type: "blank",
    mission: "リストの長さを表示しろ！",
    hint: "len()を使う。",
    explanation: "len()は要素数を返す。",
    correctCode: [
      "items = [\"a\", \"b\", \"c\"]",
      "print(len(items))"
    ],
    codeTemplate: [
      "items = [\"a\", \"b\", \"c\"]",
      "print(___(items))"
    ],
    choices: [
      "len",
      "size",
      "count",
      "range"
    ],
    correctAnswer: "len",
    topic: "リスト"
  },
  {
    id: "ja-b-01",
    language: "java",
    difficulty: "beginner",
    type: "order",
    mission: "「Hello」と表示しろ！",
    hint: "System.out.printlnを使う。",
    explanation: "printlnは表示後に改行する。",
    correctCode: [
      "System.out.println(\"Hello\");"
    ],
    fragments: [
      "System.out.println(\"Hello\");",
      "print(\"Hello\");",
      "printf(\"Hello\");"
    ],
    topic: "出力"
  },
  {
    id: "ja-b-02",
    language: "java",
    difficulty: "beginner",
    type: "blank",
    mission: "整数変数xを宣言しろ！",
    hint: "整数型はint。",
    explanation: "Javaでは型を指定して変数を宣言する。",
    correctCode: [
      "int x = 10;"
    ],
    codeTemplate: [
      "___ x = 10;"
    ],
    choices: [
      "int",
      "String",
      "boolean",
      "double"
    ],
    correctAnswer: "int",
    topic: "変数と型"
  },
  {
    id: "ja-b-03",
    language: "java",
    difficulty: "beginner",
    type: "error",
    mission: "文末のミスを見つけろ！",
    hint: "文末にはセミコロン。",
    explanation: "Javaの多くの文は;で終わる。",
    correctCode: [
      "int score = 80;",
      "System.out.println(score);"
    ],
    choices: [
      "int score = 80",
      "System.out.println(score);"
    ],
    correctAnswer: "int score = 80",
    errorCode: [
      "int score = 80",
      "System.out.println(score);"
    ],
    topic: "基本文法"
  },
  {
    id: "ja-b-04",
    language: "java",
    difficulty: "beginner",
    type: "blank",
    mission: "文字列型を選べ！",
    hint: "先頭が大文字。",
    explanation: "Javaの文字列型はString。",
    correctCode: [
      "String name = \"Taro\";"
    ],
    codeTemplate: [
      "___ name = \"Taro\";"
    ],
    choices: [
      "String",
      "string",
      "char",
      "text"
    ],
    correctAnswer: "String",
    topic: "文字列"
  },
  {
    id: "ja-b-05",
    language: "java",
    difficulty: "beginner",
    type: "order",
    mission: "0から2まで表示しろ！",
    hint: "for文を使う。",
    explanation: "iを0から始め、3未満の間繰り返す。",
    correctCode: [
      "for (int i = 0; i < 3; i++) {",
      "System.out.println(i);",
      "}"
    ],
    fragments: [
      "for (int i = 0; i < 3; i++) {",
      "System.out.println(i);",
      "}",
      "while (true) {"
    ],
    topic: "繰り返し処理"
  },
  {
    id: "ja-b-06",
    language: "java",
    difficulty: "beginner",
    type: "error",
    mission: "if文のミスを見つけろ！",
    hint: "条件は丸カッコで囲む。",
    explanation: "Javaのif文はif (条件) { }。",
    correctCode: [
      "int age = 18;",
      "if (age >= 18) {",
      "    System.out.println(\"成人\");",
      "}"
    ],
    choices: [
      "int age = 18;",
      "if age >= 18 {",
      "System.out.println(\"成人\");",
      "}"
    ],
    correctAnswer: "if age >= 18 {",
    errorCode: [
      "int age = 18;",
      "if age >= 18 {",
      "    System.out.println(\"成人\");",
      "}"
    ],
    topic: "条件分岐"
  },
  {
    id: "ja-b-07",
    language: "java",
    difficulty: "beginner",
    type: "blank",
    mission: "真偽値型を選べ！",
    hint: "true/falseを保存する型。",
    explanation: "Javaの真偽値型はboolean。",
    correctCode: [
      "boolean isReady = true;"
    ],
    codeTemplate: [
      "___ isReady = true;"
    ],
    choices: [
      "boolean",
      "bool",
      "int",
      "String"
    ],
    correctAnswer: "boolean",
    topic: "真偽値"
  },
  {
    id: "ja-b-08",
    language: "java",
    difficulty: "beginner",
    type: "error",
    mission: "文字列比較のミスを見つけろ！",
    hint: "内容比較はequals。",
    explanation: "文字列の内容比較にはequals()を使う。",
    correctCode: [
      "String name = \"Taro\";",
      "if (name.equals(\"Taro\")) {",
      "    System.out.println(\"一致\");",
      "}"
    ],
    choices: [
      "String name = \"Taro\";",
      "if (name == \"Taro\") {",
      "System.out.println(\"一致\");",
      "}"
    ],
    correctAnswer: "if (name == \"Taro\") {",
    errorCode: [
      "String name = \"Taro\";",
      "if (name == \"Taro\") {",
      "    System.out.println(\"一致\");",
      "}"
    ],
    topic: "文字列比較"
  },
  {
    id: "ja-b-09",
    language: "java",
    difficulty: "beginner",
    type: "blank",
    mission: "配列の先頭を表示しろ！",
    hint: "添字は0から。",
    explanation: "配列の最初の要素はindex 0。",
    correctCode: [
      "int[] nums = {10, 20, 30};",
      "System.out.println(nums[0]);"
    ],
    codeTemplate: [
      "int[] nums = {10, 20, 30};",
      "System.out.println(nums[___]);"
    ],
    choices: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: "0",
    topic: "配列"
  },
  {
    id: "ja-b-10",
    language: "java",
    difficulty: "beginner",
    type: "blank",
    mission: "配列の長さを表示しろ！",
    hint: "配列ではlength。",
    explanation: "配列の要素数はlengthフィールド。",
    correctCode: [
      "int[] nums = {1, 2, 3};",
      "System.out.println(nums.length);"
    ],
    codeTemplate: [
      "int[] nums = {1, 2, 3};",
      "System.out.println(nums.___);"
    ],
    choices: [
      "length",
      "length()",
      "size()",
      "count"
    ],
    correctAnswer: "length",
    topic: "配列"
  },
  {
    id: "c-b-01",
    language: "c",
    difficulty: "beginner",
    type: "order",
    mission: "「Hello」と表示しろ！",
    hint: "printfを使う。",
    explanation: "printfは標準出力へ表示する。",
    correctCode: [
      "printf(\"Hello\\n\");"
    ],
    fragments: [
      "printf(\"Hello\\n\");",
      "print(\"Hello\");",
      "System.out.println(\"Hello\");"
    ],
    topic: "出力"
  },
  {
    id: "c-b-02",
    language: "c",
    difficulty: "beginner",
    type: "blank",
    mission: "整数変数xを宣言しろ！",
    hint: "整数型はint。",
    explanation: "Cでは変数の前に型を書く。",
    correctCode: [
      "int x = 10;"
    ],
    codeTemplate: [
      "___ x = 10;"
    ],
    choices: [
      "int",
      "char",
      "float",
      "void"
    ],
    correctAnswer: "int",
    topic: "変数と型"
  },
  {
    id: "c-b-03",
    language: "c",
    difficulty: "beginner",
    type: "error",
    mission: "文末のミスを見つけろ！",
    hint: "文末にはセミコロン。",
    explanation: "Cの多くの文は;で終わる。",
    correctCode: [
      "int score = 80;",
      "printf(\"%d\\n\", score);"
    ],
    choices: [
      "int score = 80",
      "printf(\"%d\\n\", score);"
    ],
    correctAnswer: "int score = 80",
    errorCode: [
      "int score = 80",
      "printf(\"%d\\n\", score);"
    ],
    topic: "基本文法"
  },
  {
    id: "c-b-04",
    language: "c",
    difficulty: "beginner",
    type: "blank",
    mission: "整数の書式指定子を選べ！",
    hint: "decimal integer。",
    explanation: "%dは整数を表示する。",
    correctCode: [
      "int x = 10;",
      "printf(\"%d\\n\", x);"
    ],
    codeTemplate: [
      "int x = 10;",
      "printf(\"___\\n\", x);"
    ],
    choices: [
      "%d",
      "%f",
      "%c",
      "%s"
    ],
    correctAnswer: "%d",
    topic: "書式指定子"
  },
  {
    id: "c-b-05",
    language: "c",
    difficulty: "beginner",
    type: "order",
    mission: "0から2まで表示しろ！",
    hint: "for文を使う。",
    explanation: "iを0から始め3未満の間繰り返す。",
    correctCode: [
      "for (int i = 0; i < 3; i++) {",
      "printf(\"%d\\n\", i);",
      "}"
    ],
    fragments: [
      "for (int i = 0; i < 3; i++) {",
      "printf(\"%d\\n\", i);",
      "}",
      "while (1) {"
    ],
    topic: "繰り返し処理"
  },
  {
    id: "c-b-06",
    language: "c",
    difficulty: "beginner",
    type: "error",
    mission: "if文のミスを見つけろ！",
    hint: "条件は丸カッコ。",
    explanation: "Cのif文はif (条件) { }。",
    correctCode: [
      "int age = 18;",
      "if (age >= 18) {",
      "    printf(\"成人\\n\");",
      "}"
    ],
    choices: [
      "int age = 18;",
      "if age >= 18 {",
      "printf(\"成人\\n\");",
      "}"
    ],
    correctAnswer: "if age >= 18 {",
    errorCode: [
      "int age = 18;",
      "if age >= 18 {",
      "    printf(\"成人\\n\");",
      "}"
    ],
    topic: "条件分岐"
  },
  {
    id: "c-b-07",
    language: "c",
    difficulty: "beginner",
    type: "blank",
    mission: "1文字を保存する型を選べ！",
    hint: "characterの略。",
    explanation: "Cでは1文字をchar型で扱う。",
    correctCode: [
      "char grade = 'A';"
    ],
    codeTemplate: [
      "___ grade = 'A';"
    ],
    choices: [
      "char",
      "String",
      "int",
      "double"
    ],
    correctAnswer: "char",
    topic: "文字型"
  },
  {
    id: "c-b-08",
    language: "c",
    difficulty: "beginner",
    type: "blank",
    mission: "配列の先頭を表示しろ！",
    hint: "添字は0から。",
    explanation: "配列の先頭はindex 0。",
    correctCode: [
      "int nums[] = {10, 20, 30};",
      "printf(\"%d\\n\", nums[0]);"
    ],
    codeTemplate: [
      "int nums[] = {10, 20, 30};",
      "printf(\"%d\\n\", nums[___]);"
    ],
    choices: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: "0",
    topic: "配列"
  },
  {
    id: "c-b-09",
    language: "c",
    difficulty: "beginner",
    type: "error",
    mission: "main関数のreturnを直せ！",
    hint: "int mainは整数を返す。",
    explanation: "通常はreturn 0;で正常終了を表す。",
    correctCode: [
      "int main(void) {",
      "    printf(\"Hi\\n\");",
      "    return 0;",
      "}"
    ],
    choices: [
      "int main(void) {",
      "printf(\"Hi\\n\");",
      "return;",
      "}"
    ],
    correctAnswer: "return;",
    errorCode: [
      "int main(void) {",
      "    printf(\"Hi\\n\");",
      "    return;",
      "}"
    ],
    topic: "main関数"
  },
  {
    id: "c-b-10",
    language: "c",
    difficulty: "beginner",
    type: "blank",
    mission: "整数入力に使う関数を選べ！",
    hint: "書式指定子とアドレスを渡す。",
    explanation: "scanfは標準入力から値を読む。",
    correctCode: [
      "int x;",
      "scanf(\"%d\", &x);"
    ],
    codeTemplate: [
      "int x;",
      "___(\"%d\", &x);"
    ],
    choices: [
      "scanf",
      "printf",
      "input",
      "gets"
    ],
    correctAnswer: "scanf",
    topic: "入力"
  },
  {
    id: "py-i-01",
    language: "python",
    difficulty: "intermediate",
    type: "blank",
    mission: "偶数判定を完成させろ！",
    hint: "2で割った余りを見る。",
    explanation: "n % 2 == 0なら偶数。",
    correctCode: [
      "if n % 2 == 0:",
      "    print(\"偶数\")"
    ],
    codeTemplate: [
      "if n ___ 2 == 0:",
      "    print(\"偶数\")"
    ],
    choices: [
      "%",
      "/",
      "//",
      "*"
    ],
    correctAnswer: "%",
    topic: "条件分岐と演算"
  },
  {
    id: "py-i-02",
    language: "python",
    difficulty: "intermediate",
    type: "order",
    mission: "リストの合計を求めろ！",
    hint: "totalを0で初期化。",
    explanation: "各要素をtotalへ加算する。",
    correctCode: [
      "numbers = [1, 2, 3]",
      "total = 0",
      "for n in numbers:",
      "total += n",
      "print(total)"
    ],
    fragments: [
      "numbers = [1, 2, 3]",
      "total = 0",
      "for n in numbers:",
      "total += n",
      "print(total)"
    ],
    topic: "リストと繰り返し"
  },
  {
    id: "py-i-03",
    language: "python",
    difficulty: "intermediate",
    type: "error",
    mission: "辞書参照のミスを見つけろ！",
    hint: "文字列キーは引用符で囲む。",
    explanation: "data[\"name\"]のように参照する。",
    correctCode: [
      "data = {\"name\": \"Taro\"}",
      "print(data[\"name\"])"
    ],
    choices: [
      "data = {\"name\": \"Taro\"}",
      "print(data[name])"
    ],
    correctAnswer: "print(data[name])",
    errorCode: [
      "data = {\"name\": \"Taro\"}",
      "print(data[name])"
    ],
    topic: "辞書"
  },
  {
    id: "py-i-04",
    language: "python",
    difficulty: "intermediate",
    type: "blank",
    mission: "関数から値を返せ！",
    hint: "戻り値用のキーワード。",
    explanation: "returnは呼び出し元へ値を返す。",
    correctCode: [
      "def add(a, b):",
      "    return a + b"
    ],
    codeTemplate: [
      "def add(a, b):",
      "    ___ a + b"
    ],
    choices: [
      "return",
      "print",
      "yield",
      "break"
    ],
    correctAnswer: "return",
    topic: "関数と戻り値"
  },
  {
    id: "py-i-05",
    language: "python",
    difficulty: "intermediate",
    type: "error",
    mission: "例外処理のミスを見つけろ！",
    hint: "Pythonはexcept。",
    explanation: "tryとexceptを組み合わせる。",
    correctCode: [
      "try:",
      "    x = int(\"abc\")",
      "except ValueError:",
      "    print(\"変換失敗\")"
    ],
    choices: [
      "try:",
      "x = int(\"abc\")",
      "catch ValueError:",
      "print(\"変換失敗\")"
    ],
    correctAnswer: "catch ValueError:",
    errorCode: [
      "try:",
      "    x = int(\"abc\")",
      "catch ValueError:",
      "    print(\"変換失敗\")"
    ],
    topic: "例外処理"
  },
  {
    id: "py-i-06",
    language: "python",
    difficulty: "intermediate",
    type: "blank",
    mission: "リスト内包表記を完成させろ！",
    hint: "式 for 変数 in 範囲。",
    explanation: "内包表記で簡潔にリストを作れる。",
    correctCode: [
      "squares = [n ** 2 for n in range(1, 6)]"
    ],
    codeTemplate: [
      "squares = [n ** 2 ___ n in range(1, 6)]"
    ],
    choices: [
      "for",
      "while",
      "if",
      "return"
    ],
    correctAnswer: "for",
    topic: "リスト内包表記"
  },
  {
    id: "py-i-07",
    language: "python",
    difficulty: "intermediate",
    type: "order",
    mission: "文字列を大文字に変換しろ！",
    hint: "upper()を使う。",
    explanation: "upper()は大文字化した文字列を返す。",
    correctCode: [
      "text = \"hello\"",
      "result = text.upper()",
      "print(result)"
    ],
    fragments: [
      "text = \"hello\"",
      "result = text.upper()",
      "print(result)",
      "text.lower()"
    ],
    topic: "文字列メソッド"
  },
  {
    id: "py-i-08",
    language: "python",
    difficulty: "intermediate",
    type: "error",
    mission: "コンストラクタ名を直せ！",
    hint: "__init__を使う。",
    explanation: "__init__はインスタンス生成時に呼ばれる。",
    correctCode: [
      "class User:",
      "    def __init__(self, name):",
      "        self.name = name"
    ],
    choices: [
      "class User:",
      "def init(self, name):",
      "self.name = name"
    ],
    correctAnswer: "def init(self, name):",
    errorCode: [
      "class User:",
      "    def init(self, name):",
      "        self.name = name"
    ],
    topic: "クラス"
  },
  {
    id: "py-i-09",
    language: "python",
    difficulty: "intermediate",
    type: "blank",
    mission: "ファイルを読み込みモードで開け！",
    hint: "readの頭文字。",
    explanation: "rは読み込みモード。",
    correctCode: [
      "with open(\"file.txt\", \"r\") as f:",
      "    text = f.read()"
    ],
    codeTemplate: [
      "with open(\"file.txt\", \"___\") as f:",
      "    text = f.read()"
    ],
    choices: [
      "r",
      "w",
      "a",
      "x"
    ],
    correctAnswer: "r",
    topic: "ファイル操作"
  },
  {
    id: "py-i-10",
    language: "python",
    difficulty: "intermediate",
    type: "error",
    mission: "無限ループの原因を選べ！",
    hint: "iの更新が必要。",
    explanation: "i += 1がないと条件が変化しない。",
    correctCode: [
      "i = 0",
      "while i < 3:",
      "    print(i)",
      "    i += 1"
    ],
    choices: [
      "i = 0",
      "while i < 3:",
      "print(i)"
    ],
    correctAnswer: "print(i)",
    errorCode: [
      "i = 0",
      "while i < 3:",
      "    print(i)"
    ],
    topic: "while文"
  },
  {
    id: "ja-i-01",
    language: "java",
    difficulty: "intermediate",
    type: "blank",
    mission: "可変長リストのクラス名を選べ！",
    hint: "ArrayList。",
    explanation: "ArrayListは要素数を動的に変えられる。",
    correctCode: [
      "ArrayList<String> names = new ArrayList<>();"
    ],
    codeTemplate: [
      "___<String> names = new ArrayList<>();"
    ],
    choices: [
      "ArrayList",
      "Array",
      "ListArray",
      "VectorList"
    ],
    correctAnswer: "ArrayList",
    topic: "コレクション"
  },
  {
    id: "ja-i-02",
    language: "java",
    difficulty: "intermediate",
    type: "order",
    mission: "配列の合計を求めろ！",
    hint: "拡張for文を使う。",
    explanation: "配列の各要素をtotalへ加算する。",
    correctCode: [
      "int[] nums = {1, 2, 3};",
      "int total = 0;",
      "for (int n : nums) {",
      "total += n;",
      "}",
      "System.out.println(total);"
    ],
    fragments: [
      "int[] nums = {1, 2, 3};",
      "int total = 0;",
      "for (int n : nums) {",
      "total += n;",
      "}",
      "System.out.println(total);"
    ],
    topic: "配列と繰り返し"
  },
  {
    id: "ja-i-03",
    language: "java",
    difficulty: "intermediate",
    type: "error",
    mission: "戻り値の型ミスを見つけろ！",
    hint: "intなら整数を返す。",
    explanation: "戻り値型とreturn値を一致させる。",
    correctCode: [
      "static int add(int a, int b) {",
      "    return a + b;",
      "}"
    ],
    choices: [
      "static int add(int a, int b) {",
      "return \"a + b\";",
      "}"
    ],
    correctAnswer: "return \"a + b\";",
    errorCode: [
      "static int add(int a, int b) {",
      "    return \"a + b\";",
      "}"
    ],
    topic: "メソッド"
  },
  {
    id: "ja-i-04",
    language: "java",
    difficulty: "intermediate",
    type: "blank",
    mission: "例外を受け取るキーワードを選べ！",
    hint: "tryの後に使う。",
    explanation: "catch節で例外を処理する。",
    correctCode: [
      "try {",
      "    int x = Integer.parseInt(\"abc\");",
      "} catch (NumberFormatException e) {",
      "    System.out.println(\"変換失敗\");",
      "}"
    ],
    codeTemplate: [
      "try {",
      "    int x = Integer.parseInt(\"abc\");",
      "} ___ (NumberFormatException e) {",
      "    System.out.println(\"変換失敗\");",
      "}"
    ],
    choices: [
      "catch",
      "except",
      "finally",
      "throw"
    ],
    correctAnswer: "catch",
    topic: "例外処理"
  },
  {
    id: "ja-i-05",
    language: "java",
    difficulty: "intermediate",
    type: "error",
    mission: "コンストラクタのミスを見つけろ！",
    hint: "戻り値型を書かない。",
    explanation: "コンストラクタ名はクラス名と同じ。",
    correctCode: [
      "class User {",
      "    User(String name) {",
      "        this.name = name;",
      "    }",
      "}"
    ],
    choices: [
      "class User {",
      "void User(String name) {",
      "this.name = name;",
      "}"
    ],
    correctAnswer: "void User(String name) {",
    errorCode: [
      "class User {",
      "    void User(String name) {",
      "        this.name = name;",
      "    }",
      "}"
    ],
    topic: "クラスとコンストラクタ"
  },
  {
    id: "ja-i-06",
    language: "java",
    difficulty: "intermediate",
    type: "blank",
    mission: "クラス継承のキーワードを選べ！",
    hint: "親クラスを拡張する。",
    explanation: "extendsはクラス継承を表す。",
    correctCode: [
      "class Dog extends Animal {",
      "}"
    ],
    codeTemplate: [
      "class Dog ___ Animal {",
      "}"
    ],
    choices: [
      "extends",
      "implements",
      "inherits",
      "super"
    ],
    correctAnswer: "extends",
    topic: "継承"
  },
  {
    id: "ja-i-07",
    language: "java",
    difficulty: "intermediate",
    type: "blank",
    mission: "インターフェース実装のキーワードを選べ！",
    hint: "約束されたメソッドを実装する。",
    explanation: "implementsを使う。",
    correctCode: [
      "class Player implements Runnable {",
      "}"
    ],
    codeTemplate: [
      "class Player ___ Runnable {",
      "}"
    ],
    choices: [
      "implements",
      "extends",
      "interface",
      "import"
    ],
    correctAnswer: "implements",
    topic: "インターフェース"
  },
  {
    id: "ja-i-08",
    language: "java",
    difficulty: "intermediate",
    type: "error",
    mission: "オーバーライドのミスを見つけろ！",
    hint: "引数も一致させる。",
    explanation: "親メソッドと同じシグネチャが必要。",
    correctCode: [
      "class Dog extends Animal {",
      "    @Override",
      "    void speak() {",
      "    }",
      "}"
    ],
    choices: [
      "class Dog extends Animal {",
      "@Override",
      "void speak(String text) {",
      "}"
    ],
    correctAnswer: "void speak(String text) {",
    errorCode: [
      "class Dog extends Animal {",
      "    @Override",
      "    void speak(String text) {",
      "    }",
      "}"
    ],
    topic: "オーバーライド"
  },
  {
    id: "ja-i-09",
    language: "java",
    difficulty: "intermediate",
    type: "blank",
    mission: "HashMapへ値を追加しろ！",
    hint: "putを使う。",
    explanation: "put(key,value)で登録する。",
    correctCode: [
      "Map<String, Integer> scores = new HashMap<>();",
      "scores.put(\"Taro\", 80);"
    ],
    codeTemplate: [
      "Map<String, Integer> scores = new HashMap<>();",
      "scores.___(\"Taro\", 80);"
    ],
    choices: [
      "put",
      "add",
      "set",
      "push"
    ],
    correctAnswer: "put",
    topic: "Map"
  },
  {
    id: "ja-i-10",
    language: "java",
    difficulty: "intermediate",
    type: "error",
    mission: "nullで危険な比較を選べ！",
    hint: "null側からequalsを呼ばない。",
    explanation: "定数側からequalsを呼ぶと安全。",
    correctCode: [
      "String name = null;",
      "if (\"Taro\".equals(name)) {",
      "    System.out.println(\"一致\");",
      "}"
    ],
    choices: [
      "String name = null;",
      "if (name.equals(\"Taro\")) {",
      "System.out.println(\"一致\");",
      "}"
    ],
    correctAnswer: "if (name.equals(\"Taro\")) {",
    errorCode: [
      "String name = null;",
      "if (name.equals(\"Taro\")) {",
      "    System.out.println(\"一致\");",
      "}"
    ],
    topic: "null安全性"
  },
  {
    id: "c-i-01",
    language: "c",
    difficulty: "intermediate",
    type: "blank",
    mission: "変数xのアドレスを取得しろ！",
    hint: "&を使う。",
    explanation: "&は変数のアドレスを取得する。",
    correctCode: [
      "int x = 10;",
      "int *p = &x;"
    ],
    codeTemplate: [
      "int x = 10;",
      "int *p = ___x;"
    ],
    choices: [
      "&",
      "*",
      "%",
      "#"
    ],
    correctAnswer: "&",
    topic: "ポインタ"
  },
  {
    id: "c-i-02",
    language: "c",
    difficulty: "intermediate",
    type: "blank",
    mission: "ポインタが指す値を表示しろ！",
    hint: "*で間接参照。",
    explanation: "*pはpが指す値。",
    correctCode: [
      "int x = 10;",
      "int *p = &x;",
      "printf(\"%d\\n\", *p);"
    ],
    codeTemplate: [
      "int x = 10;",
      "int *p = &x;",
      "printf(\"%d\\n\", ___p);"
    ],
    choices: [
      "*",
      "&",
      "#",
      "%"
    ],
    correctAnswer: "*",
    topic: "ポインタ"
  },
  {
    id: "c-i-03",
    language: "c",
    difficulty: "intermediate",
    type: "order",
    mission: "配列の合計を求めろ！",
    hint: "totalを0で初期化。",
    explanation: "ループで各要素を加算する。",
    correctCode: [
      "int nums[] = {1, 2, 3};",
      "int total = 0;",
      "for (int i = 0; i < 3; i++) {",
      "total += nums[i];",
      "}",
      "printf(\"%d\\n\", total);"
    ],
    fragments: [
      "int nums[] = {1, 2, 3};",
      "int total = 0;",
      "for (int i = 0; i < 3; i++) {",
      "total += nums[i];",
      "}",
      "printf(\"%d\\n\", total);"
    ],
    topic: "配列と繰り返し"
  },
  {
    id: "c-i-04",
    language: "c",
    difficulty: "intermediate",
    type: "error",
    mission: "文字列コピーの危険を見つけろ！",
    hint: "コピー先サイズを確認。",
    explanation: "Helloには終端文字を含め6文字必要。",
    correctCode: [
      "char dest[6];",
      "strcpy(dest, \"Hello\");"
    ],
    choices: [
      "char dest[4];",
      "strcpy(dest, \"Hello\");"
    ],
    correctAnswer: "char dest[4];",
    errorCode: [
      "char dest[4];",
      "strcpy(dest, \"Hello\");"
    ],
    topic: "文字列とメモリ"
  },
  {
    id: "c-i-05",
    language: "c",
    difficulty: "intermediate",
    type: "blank",
    mission: "動的メモリを確保しろ！",
    hint: "mallocを使う。",
    explanation: "mallocは指定バイト数の領域を確保する。",
    correctCode: [
      "int *p = malloc(sizeof(int) * 5);"
    ],
    codeTemplate: [
      "int *p = ___(sizeof(int) * 5);"
    ],
    choices: [
      "malloc",
      "free",
      "sizeof",
      "alloc"
    ],
    correctAnswer: "malloc",
    topic: "動的メモリ"
  },
  {
    id: "c-i-06",
    language: "c",
    difficulty: "intermediate",
    type: "blank",
    mission: "確保したメモリを解放しろ！",
    hint: "freeを使う。",
    explanation: "mallocで確保した領域はfreeで解放する。",
    correctCode: [
      "int *p = malloc(sizeof(int));",
      "free(p);"
    ],
    codeTemplate: [
      "int *p = malloc(sizeof(int));",
      "___(p);"
    ],
    choices: [
      "free",
      "delete",
      "release",
      "remove"
    ],
    correctAnswer: "free",
    topic: "動的メモリ"
  },
  {
    id: "c-i-07",
    language: "c",
    difficulty: "intermediate",
    type: "error",
    mission: "構造体アクセスのミスを見つけろ！",
    hint: "構造体変数はドット。",
    explanation: "ポインタでない構造体変数には.を使う。",
    correctCode: [
      "struct User user;",
      "user.age = 20;"
    ],
    choices: [
      "struct User user;",
      "user->age = 20;"
    ],
    correctAnswer: "user->age = 20;",
    errorCode: [
      "struct User user;",
      "user->age = 20;"
    ],
    topic: "構造体"
  },
  {
    id: "c-i-08",
    language: "c",
    difficulty: "intermediate",
    type: "blank",
    mission: "文字列の長さを調べろ！",
    hint: "strlenを使う。",
    explanation: "strlenは終端文字を除いた長さを返す。",
    correctCode: [
      "char text[] = \"Hello\";",
      "printf(\"%zu\\n\", strlen(text));"
    ],
    codeTemplate: [
      "char text[] = \"Hello\";",
      "printf(\"%zu\\n\", ___(text));"
    ],
    choices: [
      "strlen",
      "sizeof",
      "length",
      "count"
    ],
    correctAnswer: "strlen",
    topic: "文字列関数"
  },
  {
    id: "c-i-09",
    language: "c",
    difficulty: "intermediate",
    type: "error",
    mission: "配列外アクセスを見つけろ！",
    hint: "要素数3の添字は0〜2。",
    explanation: "nums[3]は範囲外。",
    correctCode: [
      "int nums[3] = {1, 2, 3};",
      "printf(\"%d\\n\", nums[2]);"
    ],
    choices: [
      "int nums[3] = {1, 2, 3};",
      "printf(\"%d\\n\", nums[3]);"
    ],
    correctAnswer: "printf(\"%d\\n\", nums[3]);",
    errorCode: [
      "int nums[3] = {1, 2, 3};",
      "printf(\"%d\\n\", nums[3]);"
    ],
    topic: "配列"
  },
  {
    id: "c-i-10",
    language: "c",
    difficulty: "intermediate",
    type: "blank",
    mission: "ヘッダを読み込む命令を選べ！",
    hint: "プリプロセッサ命令。",
    explanation: "#includeでヘッダを取り込む。",
    correctCode: [
      "#include <stdio.h>"
    ],
    codeTemplate: [
      "___ <stdio.h>"
    ],
    choices: [
      "#include",
      "import",
      "using",
      "require"
    ],
    correctAnswer: "#include",
    topic: "プリプロセッサ"
  },
  {
    id: "py-a-01",
    language: "python",
    difficulty: "advanced",
    type: "blank",
    mission: "ジェネレータのキーワードを選べ！",
    hint: "状態を保持して値を返す。",
    explanation: "yieldを使うとジェネレータになる。",
    correctCode: [
      "def count_up(n):",
      "    for i in range(n):",
      "        yield i"
    ],
    codeTemplate: [
      "def count_up(n):",
      "    for i in range(n):",
      "        ___ i"
    ],
    choices: [
      "yield",
      "return",
      "print",
      "break"
    ],
    correctAnswer: "yield",
    topic: "ジェネレータ"
  },
  {
    id: "py-a-02",
    language: "python",
    difficulty: "advanced",
    type: "error",
    mission: "可変デフォルト引数の問題を見つけろ！",
    hint: "[]は呼び出し間で共有される。",
    explanation: "Noneを既定値にして関数内で生成する。",
    correctCode: [
      "def add_item(item, items=None):",
      "    if items is None:",
      "        items = []",
      "    items.append(item)",
      "    return items"
    ],
    choices: [
      "def add_item(item, items=[]):",
      "items.append(item)",
      "return items"
    ],
    correctAnswer: "def add_item(item, items=[]):",
    errorCode: [
      "def add_item(item, items=[]):",
      "    items.append(item)",
      "    return items"
    ],
    topic: "関数の引数"
  },
  {
    id: "py-a-03",
    language: "python",
    difficulty: "advanced",
    type: "blank",
    mission: "デコレータの引数を選べ！",
    hint: "対象関数を受け取る。",
    explanation: "デコレータは関数を受け取り関数を返す。",
    correctCode: [
      "def logger(func):",
      "    def wrapper():",
      "        print(\"start\")",
      "        func()",
      "    return wrapper"
    ],
    codeTemplate: [
      "def logger(___):",
      "    def wrapper():",
      "        print(\"start\")",
      "        func()",
      "    return wrapper"
    ],
    choices: [
      "func",
      "self",
      "args",
      "return"
    ],
    correctAnswer: "func",
    topic: "デコレータ"
  },
  {
    id: "py-a-04",
    language: "python",
    difficulty: "advanced",
    type: "error",
    mission: "浅いコピーの問題を見つけろ！",
    hint: "入れ子は共有される。",
    explanation: "deepcopyで内側まで複製できる。",
    correctCode: [
      "import copy",
      "original = [[1], [2]]",
      "copied = copy.deepcopy(original)",
      "copied[0].append(9)"
    ],
    choices: [
      "original = [[1], [2]]",
      "copied = original.copy()",
      "copied[0].append(9)"
    ],
    correctAnswer: "copied = original.copy()",
    errorCode: [
      "original = [[1], [2]]",
      "copied = original.copy()",
      "copied[0].append(9)"
    ],
    topic: "コピー"
  },
  {
    id: "py-a-05",
    language: "python",
    difficulty: "advanced",
    type: "blank",
    mission: "非同期関数を定義しろ！",
    hint: "asyncと組み合わせる。",
    explanation: "async defでコルーチン関数を定義する。",
    correctCode: [
      "async def fetch_data():",
      "    return \"done\""
    ],
    codeTemplate: [
      "async ___ fetch_data():",
      "    return \"done\""
    ],
    choices: [
      "def",
      "function",
      "await",
      "yield"
    ],
    correctAnswer: "def",
    topic: "非同期処理"
  },
  {
    id: "py-a-06",
    language: "python",
    difficulty: "advanced",
    type: "blank",
    mission: "コルーチンの完了を待て！",
    hint: "async関数内で使う。",
    explanation: "awaitは処理完了を非同期に待つ。",
    correctCode: [
      "async def main():",
      "    result = await fetch_data()"
    ],
    codeTemplate: [
      "async def main():",
      "    result = ___ fetch_data()"
    ],
    choices: [
      "await",
      "yield",
      "return",
      "async"
    ],
    correctAnswer: "await",
    topic: "非同期処理"
  },
  {
    id: "py-a-07",
    language: "python",
    difficulty: "advanced",
    type: "error",
    mission: "親コンストラクタ呼び出しを直せ！",
    hint: "super()を呼ぶ。",
    explanation: "super().__init__()で親を初期化する。",
    correctCode: [
      "class Dog(Animal):",
      "    def __init__(self, name):",
      "        super().__init__(name)"
    ],
    choices: [
      "class Dog(Animal):",
      "def __init__(self, name):",
      "super.__init__(name)"
    ],
    correctAnswer: "super.__init__(name)",
    errorCode: [
      "class Dog(Animal):",
      "    def __init__(self, name):",
      "        super.__init__(name)"
    ],
    topic: "継承"
  },
  {
    id: "py-a-08",
    language: "python",
    difficulty: "advanced",
    type: "blank",
    mission: "可変長位置引数を受け取れ！",
    hint: "引数名の前に*。",
    explanation: "*argsは位置引数をタプルで受け取る。",
    correctCode: [
      "def total(*args):",
      "    return sum(args)"
    ],
    codeTemplate: [
      "def total(___args):",
      "    return sum(args)"
    ],
    choices: [
      "*",
      "**",
      "&",
      "#"
    ],
    correctAnswer: "*",
    topic: "可変長引数"
  },
  {
    id: "py-a-09",
    language: "python",
    difficulty: "advanced",
    type: "blank",
    mission: "可変長キーワード引数を受け取れ！",
    hint: "引数名の前に**。",
    explanation: "**kwargsはキーワード引数を辞書で受け取る。",
    correctCode: [
      "def show(**kwargs):",
      "    print(kwargs)"
    ],
    codeTemplate: [
      "def show(___kwargs):",
      "    print(kwargs)"
    ],
    choices: [
      "**",
      "*",
      "&&",
      "##"
    ],
    correctAnswer: "**",
    topic: "可変長引数"
  },
  {
    id: "py-a-10",
    language: "python",
    difficulty: "advanced",
    type: "error",
    mission: "コンテキストマネージャの終了処理を直せ！",
    hint: "特殊メソッド名を確認。",
    explanation: "__exit__が終了時に呼ばれる。",
    correctCode: [
      "class Resource:",
      "    def __enter__(self):",
      "        return self",
      "    def __exit__(self, exc_type, exc, tb):",
      "        pass"
    ],
    choices: [
      "class Resource:",
      "def __enter__(self):",
      "def exit(self, exc_type, exc, tb):",
      "pass"
    ],
    correctAnswer: "def exit(self, exc_type, exc, tb):",
    errorCode: [
      "class Resource:",
      "    def __enter__(self):",
      "        return self",
      "    def exit(self, exc_type, exc, tb):",
      "        pass"
    ],
    topic: "コンテキストマネージャ"
  },
  {
    id: "ja-a-01",
    language: "java",
    difficulty: "advanced",
    type: "blank",
    mission: "ラムダ式の矢印を選べ！",
    hint: "ハイフンと大なり。",
    explanation: "Javaのラムダ式は->を使う。",
    correctCode: [
      "Runnable task = () -> System.out.println(\"run\");"
    ],
    codeTemplate: [
      "Runnable task = () ___ System.out.println(\"run\");"
    ],
    choices: [
      "->",
      "=>",
      ":",
      "::"
    ],
    correctAnswer: "->",
    topic: "ラムダ式"
  },
  {
    id: "ja-a-02",
    language: "java",
    difficulty: "advanced",
    type: "blank",
    mission: "Streamで偶数だけ残せ！",
    hint: "filterを使う。",
    explanation: "filterは条件がtrueの要素だけ残す。",
    correctCode: [
      "numbers.stream().filter(n -> n % 2 == 0)"
    ],
    codeTemplate: [
      "numbers.stream().___(n -> n % 2 == 0)"
    ],
    choices: [
      "filter",
      "map",
      "reduce",
      "sorted"
    ],
    correctAnswer: "filter",
    topic: "Stream API"
  },
  {
    id: "ja-a-03",
    language: "java",
    difficulty: "advanced",
    type: "error",
    mission: "raw typeの問題を見つけろ！",
    hint: "型引数を省略しない。",
    explanation: "raw typeは型安全性を失う。",
    correctCode: [
      "List<String> names = new ArrayList<>();",
      "names.add(\"Taro\");"
    ],
    choices: [
      "List<String> names = new ArrayList<>();",
      "List raw = names;",
      "raw.add(100);"
    ],
    correctAnswer: "List raw = names;",
    errorCode: [
      "List<String> names = new ArrayList<>();",
      "List raw = names;",
      "raw.add(100);"
    ],
    topic: "ジェネリクス"
  },
  {
    id: "ja-a-04",
    language: "java",
    difficulty: "advanced",
    type: "blank",
    mission: "新しいスレッドを開始しろ！",
    hint: "runを直接呼ばない。",
    explanation: "start()が新しいスレッドを開始する。",
    correctCode: [
      "Thread t = new Thread(task);",
      "t.start();"
    ],
    codeTemplate: [
      "Thread t = new Thread(task);",
      "t.___();"
    ],
    choices: [
      "start",
      "run",
      "execute",
      "begin"
    ],
    correctAnswer: "start",
    topic: "スレッド"
  },
  {
    id: "ja-a-05",
    language: "java",
    difficulty: "advanced",
    type: "error",
    mission: "デッドロックの原因を選べ！",
    hint: "ロック取得順を統一する。",
    explanation: "逆順取得は相互待ちの原因になる。",
    correctCode: [
      "// 全スレッドで lockA → lockB の順に取得"
    ],
    choices: [
      "synchronized (lockA) {",
      "synchronized (lockB) {",
      "// 別スレッドでは lockB → lockA の順"
    ],
    correctAnswer: "// 別スレッドでは lockB → lockA の順",
    errorCode: [
      "synchronized (lockA) {",
      "    synchronized (lockB) {",
      "    }",
      "}",
      "// 別スレッドでは lockB → lockA の順"
    ],
    topic: "並行処理"
  },
  {
    id: "ja-a-06",
    language: "java",
    difficulty: "advanced",
    type: "blank",
    mission: "Optionalの既定値を返せ！",
    hint: "orElseを使う。",
    explanation: "空なら指定した値を返す。",
    correctCode: [
      "String name = optionalName.orElse(\"Guest\");"
    ],
    codeTemplate: [
      "String name = optionalName.___(\"Guest\");"
    ],
    choices: [
      "orElse",
      "get",
      "map",
      "filter"
    ],
    correctAnswer: "orElse",
    topic: "Optional"
  },
  {
    id: "ja-a-07",
    language: "java",
    difficulty: "advanced",
    type: "error",
    mission: "不変性を壊す行を見つけろ！",
    hint: "内部リストを直接返さない。",
    explanation: "List.copyOfで防御的コピーを返す。",
    correctCode: [
      "public List<String> getItems() {",
      "    return List.copyOf(items);",
      "}"
    ],
    choices: [
      "private final List<String> items;",
      "public List<String> getItems() {",
      "return items;",
      "}"
    ],
    correctAnswer: "return items;",
    errorCode: [
      "private final List<String> items;",
      "public List<String> getItems() {",
      "    return items;",
      "}"
    ],
    topic: "不変オブジェクト"
  },
  {
    id: "ja-a-08",
    language: "java",
    difficulty: "advanced",
    type: "blank",
    mission: "メソッド参照の記号を選べ！",
    hint: "コロンを2つ。",
    explanation: "::でメソッド参照を書く。",
    correctCode: [
      "names.forEach(System.out::println);"
    ],
    codeTemplate: [
      "names.forEach(System.out___println);"
    ],
    choices: [
      "::",
      "->",
      ".",
      ":"
    ],
    correctAnswer: "::",
    topic: "メソッド参照"
  },
  {
    id: "ja-a-09",
    language: "java",
    difficulty: "advanced",
    type: "blank",
    mission: "record宣言を完成させろ！",
    hint: "データ保持用構文。",
    explanation: "recordは簡潔な不変データキャリア。",
    correctCode: [
      "public record User(String name, int age) {}"
    ],
    codeTemplate: [
      "public ___ User(String name, int age) {}"
    ],
    choices: [
      "record",
      "class",
      "struct",
      "data"
    ],
    correctAnswer: "record",
    topic: "record"
  },
  {
    id: "ja-a-10",
    language: "java",
    difficulty: "advanced",
    type: "error",
    mission: "try-with-resourcesの問題を見つけろ！",
    hint: "AutoCloseableが必要。",
    explanation: "対象型はAutoCloseableを実装する。",
    correctCode: [
      "class Resource implements AutoCloseable {",
      "    public void close() {}",
      "}"
    ],
    choices: [
      "class Resource {",
      "void close() {}",
      "try (Resource r = new Resource()) {"
    ],
    correctAnswer: "class Resource {",
    errorCode: [
      "class Resource {",
      "    void close() {}",
      "}",
      "try (Resource r = new Resource()) {",
      "}"
    ],
    topic: "リソース管理"
  },
  {
    id: "c-a-01",
    language: "c",
    difficulty: "advanced",
    type: "blank",
    mission: "関数ポインタを宣言しろ！",
    hint: "ポインタ名を丸カッコで囲む。",
    explanation: "関数ポインタはint (*func)(...)の形。",
    correctCode: [
      "int (*func)(int, int);"
    ],
    codeTemplate: [
      "int (___func)(int, int);"
    ],
    choices: [
      "*",
      "&",
      "#",
      "%"
    ],
    correctAnswer: "*",
    topic: "関数ポインタ"
  },
  {
    id: "c-a-02",
    language: "c",
    difficulty: "advanced",
    type: "error",
    mission: "use-after-freeを見つけろ！",
    hint: "free後に参照しない。",
    explanation: "解放済みメモリの参照は未定義動作。",
    correctCode: [
      "int *p = malloc(sizeof(int));",
      "*p = 10;",
      "printf(\"%d\\n\", *p);",
      "free(p);"
    ],
    choices: [
      "*p = 10;",
      "free(p);",
      "printf(\"%d\\n\", *p);"
    ],
    correctAnswer: "printf(\"%d\\n\", *p);",
    errorCode: [
      "int *p = malloc(sizeof(int));",
      "*p = 10;",
      "free(p);",
      "printf(\"%d\\n\", *p);"
    ],
    topic: "メモリ安全性"
  },
  {
    id: "c-a-03",
    language: "c",
    difficulty: "advanced",
    type: "blank",
    mission: "構造体ポインタのメンバへアクセスしろ！",
    hint: "->を使う。",
    explanation: "構造体ポインタでは->を使う。",
    correctCode: [
      "struct User *p = &user;",
      "p->age = 20;"
    ],
    codeTemplate: [
      "struct User *p = &user;",
      "p___age = 20;"
    ],
    choices: [
      "->",
      ".",
      "::",
      "=>"
    ],
    correctAnswer: "->",
    topic: "構造体ポインタ"
  },
  {
    id: "c-a-04",
    language: "c",
    difficulty: "advanced",
    type: "error",
    mission: "unsignedの無限ループを見つけろ！",
    hint: "unsignedは0未満にならない。",
    explanation: "i >= 0が常に真になる。",
    correctCode: [
      "for (int i = 10; i >= 0; i--) {",
      "    printf(\"%d\\n\", i);",
      "}"
    ],
    choices: [
      "unsigned int i;",
      "for (i = 10; i >= 0; i--) {",
      "printf(\"%u\\n\", i);"
    ],
    correctAnswer: "for (i = 10; i >= 0; i--) {",
    errorCode: [
      "unsigned int i;",
      "for (i = 10; i >= 0; i--) {",
      "    printf(\"%u\\n\", i);",
      "}"
    ],
    topic: "符号なし整数"
  },
  {
    id: "c-a-05",
    language: "c",
    difficulty: "advanced",
    type: "blank",
    mission: "マクロ定数を定義しろ！",
    hint: "#defineを使う。",
    explanation: "#defineはプリプロセッサ段階で定義する。",
    correctCode: [
      "#define MAX_SIZE 100"
    ],
    codeTemplate: [
      "___ MAX_SIZE 100"
    ],
    choices: [
      "#define",
      "#include",
      "const",
      "typedef"
    ],
    correctAnswer: "#define",
    topic: "マクロ"
  },
  {
    id: "c-a-06",
    language: "c",
    difficulty: "advanced",
    type: "blank",
    mission: "型に別名を付けろ！",
    hint: "typedefを使う。",
    explanation: "typedefは既存型に別名を付ける。",
    correctCode: [
      "typedef unsigned long ulong;"
    ],
    codeTemplate: [
      "___ unsigned long ulong;"
    ],
    choices: [
      "typedef",
      "define",
      "struct",
      "using"
    ],
    correctAnswer: "typedef",
    topic: "typedef"
  },
  {
    id: "c-a-07",
    language: "c",
    difficulty: "advanced",
    type: "error",
    mission: "整数オーバーフローを見つけろ！",
    hint: "INT_MAXを超えない。",
    explanation: "符号付き整数オーバーフローは未定義動作。",
    correctCode: [
      "long long x = INT_MAX;",
      "x = x + 1;"
    ],
    choices: [
      "int x = INT_MAX;",
      "x = x + 1;"
    ],
    correctAnswer: "x = x + 1;",
    errorCode: [
      "int x = INT_MAX;",
      "x = x + 1;"
    ],
    topic: "整数オーバーフロー"
  },
  {
    id: "c-a-08",
    language: "c",
    difficulty: "advanced",
    type: "blank",
    mission: "0初期化してメモリ確保しろ！",
    hint: "callocを使う。",
    explanation: "callocは確保した領域を0で初期化する。",
    correctCode: [
      "int *p = calloc(5, sizeof(int));"
    ],
    codeTemplate: [
      "int *p = ___(5, sizeof(int));"
    ],
    choices: [
      "calloc",
      "malloc",
      "realloc",
      "free"
    ],
    correctAnswer: "calloc",
    topic: "動的メモリ"
  },
  {
    id: "c-a-09",
    language: "c",
    difficulty: "advanced",
    type: "error",
    mission: "二重解放を見つけろ！",
    hint: "同じポインタを2回freeしない。",
    explanation: "double freeは未定義動作。",
    correctCode: [
      "int *p = malloc(sizeof(int));",
      "free(p);",
      "p = NULL;"
    ],
    choices: [
      "int *p = malloc(sizeof(int));",
      "free(p);",
      "2回目の free(p);"
    ],
    correctAnswer: "2回目の free(p);",
    errorCode: [
      "int *p = malloc(sizeof(int));",
      "free(p);",
      "free(p);"
    ],
    topic: "メモリ安全性"
  },
  {
    id: "c-a-10",
    language: "c",
    difficulty: "advanced",
    type: "blank",
    mission: "メモリサイズを変更する関数を選べ！",
    hint: "reallocateの略。",
    explanation: "reallocは確保済み領域のサイズを変更する。",
    correctCode: [
      "p = realloc(p, sizeof(int) * 10);"
    ],
    codeTemplate: [
      "p = ___(p, sizeof(int) * 10);"
    ],
    choices: [
      "realloc",
      "calloc",
      "malloc",
      "resize"
    ],
    correctAnswer: "realloc",
    topic: "動的メモリ"
  }
]
