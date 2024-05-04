export {}

// 型アサーションはTypeScriptにおいてコンパイラに型情報を「強制」する方法であり、
// コンパイル時に型チェックを助けるために使用される

let name = 'hokuto'

// let length = name.length
// lengthの型推論はanyなので、stringも代入できてしまう
// any型は型安全性を損なうため、避けるべき
// length = 'foo'
// 制約を加える方法はないだろうか？

// # number型でアノテーションする
// let length: number = name.length

// # アサーション
// 推奨される書き方
// 型アサーションを使用して`name.length`の型を`number`に強制する
let length = name.length as number

// JSXと似ているため、非推奨
// let length = (name as string).length
// let length = (<string>name).length

console.log(length)
