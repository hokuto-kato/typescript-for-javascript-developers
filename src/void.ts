export {}

// 関数からのリターン値がない場合の型がvoid
// undefined型でも間違いではないが、その場合はreturnを明示しないといけない
// 関数に手を加えることは本筋ではないのでvoid形が推奨されている
function returnNothing(): void {
  console.log("I don't return anything...")
}

returnNothing()
