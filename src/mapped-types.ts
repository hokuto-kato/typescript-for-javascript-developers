export {}

// Mapped Types

type Profile = {
  name: string
  age: number
}

type PartialProfile = Partial<Profile>
// Partialの定義元に飛ぶとこのようになっている
// ある型から順番に取り出して、オプショナルに変換している
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// 使用例
// ageプロパティはオプショナルなため、省略可能
const profile: PartialProfile = { name: 'hokuto' }

// 自分で定義することもできる
// Partial型に加えて、nullも許容できる型を定義する
// この型はAPIからの応答など、プロパティが未定義またはnullである可能性がある場合に有用

type Optional<T> = {
  [P in keyof T]?: T[P] | null
}
type OptionalProfile = Optional<Profile>
