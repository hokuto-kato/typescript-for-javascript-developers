export {}

// Readonly型 - プロパティの変更を防ぐために使用する型
type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'hokuto',
  age: 45
}
// 年齢を1増やす
me.age++

// Profile型のプロパティを変更不可にするために、Readonly型を使用してPersonalDataTypeを定義
type PersonalDataType = Readonly<Profile>
// 友達のデータを変更不可にするために、PersonalDataType型でアノテーション
const friend: PersonalDataType = {
  name: 'John',
  age: 54
}

// readonly属性がついているため、エラーになる
// friend.age++

// Readonly 型の動作を理解するために、独自の ReadOnlyTypes 型を実装してみる
type ReadOnlyTypes<T> = {
  readonly [P in keyof T]: T[P]
}
