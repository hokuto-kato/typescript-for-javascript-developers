export {}

// アノテーション無しでは型推論が働くことにより、valueにはnumberのみ許容されるようになる
// let value = 1
// エラー
// value = 'foo'

// union型を用いると複数の型をもたせられる
let value: number | string = 1
value = 'foo'
value = 2
