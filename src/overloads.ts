export {}

// 数値であれば2倍に、文字列であれば連結して返す関数

// overload 同じ名前の関数やメソッドが異なる引数の型や個数を持つことを許容する機能
// signature 関数の型を定義
function double(value: number): number
function double(value: string): string

// 実装
// 実体のほうでは型の制約を行わない
function double(value: any): any {
  // 型安全の確保
  return typeof value === 'number' ? value * 2 : value + value
}

console.log(double(100))
console.log(double('Go'))

// signatureで型制約が担保されているため、booleanではエラーが出て関数が実行されない
// console.log(double(true))

// # union型とoverloadの使い分け
// ## overload
// ・引数の型が複数ある
// ・さらに、その型によって関数内の処理が異なる

// ## union型
// ・引数の型は複数ある
// ・しかし、型に関わらず関数内の処理は共通
