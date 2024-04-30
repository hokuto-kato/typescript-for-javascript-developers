export {}

// リターン値が戻ってこない場合はnever型を使う
// never → this function never return
const error = (message: string): never => {
  throw new Error(message)
}

try {
  let result = error('エラーが起きました！')
  console.log({ result })
} catch (error) {
  console.log({ error })
}

let foo: void = undefined

// never型には何も代入できない
// let bar: never = undefined

// しかし唯一、never型を返す関数であれば代入できる
let baz: never = error('only me!')
