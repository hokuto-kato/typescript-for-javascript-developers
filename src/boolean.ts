// "export {}"は、ファイルがスクリプトではなくモジュールであることを示すTypeScriptの記述。
// この行がないと、TypeScriptはファイルをスクリプトとして扱い、
// グローバルスコープで重複宣言を検出しているというエラーを投げてしまう。
// 実際には何もエクスポートしない。
export {}

// boolean型の変数isFinishedを宣言し、初期値をtrueに設定
let isFinished: boolean = true

// isFinishedの値をfalseに更新しても型は合っているので問題ない
isFinished = false

// 数値をboolean型の変数に代入するとエラーになる
// isFinished = 1

console.log({ isFinished })
