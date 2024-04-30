export {}

// 型推論が効いているが、明示的に型を指定する
// annotationという
let numbers: number[] = [1, 2, 3]

// 非推奨ではあるが、こういう指定の仕方もある
// Array → interface
// <> → generics
let numbers2: Array<number> = [1, 2, 3]
let strings: Array<string> = ['Tokyo', 'Osaka', 'Kyoto']

// 演習問題
let strings2: string[] = ['TypeScript', 'JavaScript', 'Ruby']

// 2次元配列
let biDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// 様々な方が混在する配列
// union typesという
let array: (number | boolean | string)[] = [1, false, 'Japan']
