export {}

// enum型で定義するとインデックスが割り振られる
enum months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(months.January) // 0
console.log(months.February) // 1

// もし素のJSでやろうとしたら…
const monthsJS = {
  January: 0,
  February: 1
  // ...
}

console.log(monthsJS.January) // 0
console.log(monthsJS.February) // 1

// 先頭を1と設定するだけで1始まりの連番に設定できる
enum Months2 {
  January = 1, // 1
  February, // 2
  March, // 3
  April, // 4
  May, // 5
  June, // 6
  July, // 7
  August, // 8
  September, // 9
  October, // 10
  November, // 11
  December // 12
}

enum colors {
  red = '#ff0000',
  white = '#ffffff',
  green = '#008000',
  blue = '#0000ff',
  black = '#000000'
}

let green = colors.green
console.log(green)

// YellowはColorsに存在しないのでエラー
// JSではエラー表示してくれない
// colors.yellow

// 使う直前で足せる
enum colors {
  yellow = '#ffff00'
}

let yellow = colors.yellow
console.log(yellow)
