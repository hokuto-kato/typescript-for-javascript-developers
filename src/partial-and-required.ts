export {}

// # TypeScriptのユーティリティ型について
// ## Partial型
// Profile typeの全てのプロパティがオプショナルな型となるtypeを定義したくなったらどうするか
type Profile = {
  name: string
  age?: number
  zipCode: number
}

// Profileを複製して全てオプショナルにしたい
// これでも対応できるが、Profileに変更があったときに追従するのが大変になってしまう
// type Profile2 = {
//   name?: string
//   age?: number
//   zipCode?: number
// }
// こういうときにpartialを使う

// Partial型を使用すると、指定した型のすべてのプロパティがオプショナル（必須でない）になる。
// これにより、元の型に新しいプロパティが追加された場合でも、自動的にこのPartial型の定義に反映されるため、保守が容易になる
type PartialType = Partial<Profile>

// ## Required型
// 逆に、全てのプロパティを必須なものとして定義したい場合はどうするか
// Required型として定義すればよい
// Required型を使うと、元々オプショナルだったageプロパティも必須に変更される

type RequiredType = Required<Profile>
