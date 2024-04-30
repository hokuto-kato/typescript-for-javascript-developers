export {}

const Func = (): number => 45

let numberAny: any = Func()
let numberUnknown: unknown = Func()

// もしFuncが文字列を返すようなものだった場合、バグの温床になる
// もちろんanyの場合は特にエラーは出さない
let sumAny = numberAny + 10 // 55

// unknown型の場合は、numberUnknownの形が不明で
// もし数値じゃない可能性を考えたときにエラーで気づかせてくれる
// 条件式で数値型の場合のみに実行を絞ることにより、コンパイルエラーは出なくなる
// これを「タイプガード」という
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10
}
