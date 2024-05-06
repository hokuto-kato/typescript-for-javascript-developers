export {}

// conditional types
// type DebugType = () => void
// type SomeTypes = string | number | DebugType
// type MyFunctionType = MyExclude<SomeTypes>

type DebugType = () => void
type SomeTypes = string | number | DebugType

// excludeはどのようにして実装されているか確認
// excludeの定義元から式をコピーして、MyExclude1として定義する
// T が U に割り当て可能な場合は never を返し、そうでない場合は T を返す
type MyExclude1<T, U> = T extends U ? never : T

// この例では、'a' | 'b' が除外され、'c' のみが残る
// type Result1 = MyExclude1<'a' | 'b' | 'c', 'a' | 'b'>

// SomeTypesからstring|numberを除外した型をMyFunctionType1型として定義する
type MyFunctionType1 = MyExclude1<SomeTypes, string | number>

// Uにはstring|numberのユニオン型が渡ってくるので以下のように書ける
// T が string | number に割り当て可能な場合は never を返し、
// そうでない場合は T を返します。これは特定の型（ここでは string と number）を除外する特化型である
type MyExclude2<T> = T extends string | number ? never : T

// 例：この例では、string と number が除外され、boolean のみが残る
// type MyExclude2<T> = T extends string | number ? never : T
// type Result2 = MyExclude2<string | number | boolean>  // boolean

// Uが無くなったため、MyFunctionTypeの型引数からも第2引数がいらなくなる
type MyFunctionType2 = MyExclude2<SomeTypes>

// TにはSomeTypes（string | number | DebugType）が渡ってくる
// Distributive Conditional Types を利用して、T の各サブタイプに対して条件を適用する
// T の各サブタイプが string | number に割り当て可能な場合は never を返し、そうでない場合はそのサブタイプを返す
type MyExclude3<T> =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType)

// 具体的な型を直接使用しているため、型引数<T>がいらなくなる
type MyExclude4 =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType)

// MyFunctionTypeの型引数もいらなくなるので削除する
type MyFunctionType4 = MyExclude4 // DebugType

// MyExclude4を簡略化すると以下のようになる
// never型はユニオン型において無視されるため、最終的にDebugTypeのみが残る
type MyExclude5 = never | never | DebugType
// 結果、関数を返すこのような型となる
type MyExclude6 = DebugType
