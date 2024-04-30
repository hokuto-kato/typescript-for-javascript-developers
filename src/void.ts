export {}

// 関数からのリターン値がない場合の型がvoid
const returnNothing = (): void => {
  console.log("I don't return anything...")
}

console.log(returnNothing())
