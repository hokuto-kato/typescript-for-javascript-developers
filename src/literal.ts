export {}

let dayOfTheWeek1: string = '日'
dayOfTheWeek1 = '月'

// 月〜日の文字列を想定していたけど、想定外の文字列が設定された場合に困る
dayOfTheWeek1 = '31'

// literal型のアノテーションにより、「日」だけが許容されるようになる
// 特定の値しか許可しない変数を設定することが可能になる
let dayOfTheWeek2: '月' | '火' | '水' | '木' | '金' | '土' | '日' = '日'
dayOfTheWeek2 = '月'
// エラー
// dayOfTheWeek2 = '31'

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1
month = 12
// エラー
// month = 13

let TRUE: true = true
// エラー
// TRUE = false
