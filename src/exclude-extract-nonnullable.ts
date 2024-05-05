export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType

// Exclude - ある型をを除外した型を作る
// SomeTypeからstringとnumberを除外してDebugTypeのみの型を作成
type FunctionType = Exclude<SomeTypes, string | number>

// SomeTypeからDebugTypeを除外した型を作成
type NonFunctionType = Exclude<SomeTypes, DebugType>
// Functionは全ての関数型を表すため、DebugTypeも含めた関数型を除外
type TypeExcludingFunction = Exclude<SomeTypes, Function>

// Extract - 指定した型を抽出した新しい型を作る
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>

// NonNullable - nullとundefinedを除いた型を作る
type NonNullableTypes = string | number | null | undefined
type NonNullableType = NonNullable<NonNullableTypes>
