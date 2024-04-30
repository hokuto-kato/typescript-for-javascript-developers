export {}

// profile:(string|number)[]と型推論されるが
// 形の順序性に対する制約はもたせられない
// その場合、tuple型を使う
let profile: [string, number] = ['hokuto', 45]

// 順番を変えるとエラー
// profile = [45, 'hokuto']
