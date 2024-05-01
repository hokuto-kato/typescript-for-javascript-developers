export {}

const reducer: (accumulator: number, currentValue: number) => number = (
  accumulator: number,
  currentValue: number
) => {
  console.log({ accumulator, currentValue })
  return accumulator + currentValue
}

const sum = (...values: number[]): number => {
  // 引数 "values" は rest parameter（残余引数/可変長引数）で、1つ以上の数値を受け取れます。
  // reduceメソッドは、 "values" の全ての要素に対して "reducer" 関数を実行します。
  // "reducer" 関数は2つの引数、 "accumulator" と "currentValue" を取ります。
  // "accumulator" は累積された戻り値で、最初は "values" の最初の要素になります。
  // "currentValue" は現在処理している配列の要素です。
  // "reducer" 関数の戻り値が次の要素の "accumulator" になり、こうして値が累積されていきます。
  // 全ての要素を処理し終えたときの "accumulator" の値が reduce メソッドの戻り値となります。
  // つまり、このコードでは引数の総和が計算され、その結果がリターンされます。
  // 1+2=3 3が次のaccumulatorとして渡される
  // 3+3=6
  // 6+4=10
  // 10+5=15 最後まで評価したたら処理が完了する
  return values.reduce(reducer)
}

console.log(sum(1, 2, 3, 4, 5))
