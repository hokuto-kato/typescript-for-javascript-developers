export {}

// 既存のstring型に対して別名をつけることができる。これがtype aliases。
// 先頭を大文字にする慣習がある
type Text = string

const fooString: string = 'Hello'
const fooText: Text = 'Hello'

const example1 = {
  name: 'hokuto',
  age: 45
}

type Profile = {
  name: string
  age: number
}

const example2: Profile = {
  name: 'hokuto',
  age: 45
}

// すでにあるオブジェクトからの型推論をtype aliasesとして定義することもできる
// example1の形が変われば型推論も自動的に変わる
type Profile2 = typeof example1
