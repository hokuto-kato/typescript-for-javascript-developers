export {}

// ジェネリクス:汎用的なクラス・メソッドに対して、特定の型を紐づけるための仕組み

// # 関数のジェネリクス
// 型が異なるだけで、やっていることは同じような関数を共通化できないか？
// const echo = (arg: number): number => arg
// const echo = (arg: string): string => arg
// const echo = (arg: boolean): boolean => arg

// Tはジェネリック型パラメータで、具体的な型が指定されるまでその位置を保持します。
const echo = <T>(arg: T): T => arg
console.log(echo<number>(100))
console.log(echo<string>('Hello!'))
console.log(echo<boolean>(true))
// 型引数を省略して呼び出すと、TypeScriptは引数から型を推論する
console.log(echo({ name: 'hokuto' }))

// ## その他の関数例
// ### ジェネリクスを使用しない場合
function reverseNumbers(numbers: number[]): number[] {
  return numbers.slice().reverse()
}
function reverseStrings(strings: string[]): string[] {
  return strings.slice().reverse()
}
function reverseObjects(objects: object[]): object[] {
  return objects.slice().reverse()
}

// ### ジェネリクスを使用する場合
function reverse<T>(items: T[]): T[] {
  return items.slice().reverse()
}
// ## ジェネリクスの利点
// コードの再利用性: 同じロジックを異なる型に対して再利用できるため、コード量が減少する。
// 型安全性: ジェネリクスを使用することで、コンパイル時に型の整合性を保証できます。これにより、実行時の型関連のエラーを防ぐことができる。
// 柔軟性: 新しい型に対して同じ関数を簡単に適用できるため、プログラムの柔軟性が向上する。
// このように、ジェネリクスを使用することで、多様なデータ型に対応する同じ機能を持つ関数を一つにまとめることができ、効率的で安全かつ柔軟なコードを書くことが可能になる。

// # クラスのジェネリクス
// class Mirror {
//   constructor(public value: number) {}
//   echo(): number {
//     return this.value
//   }
// }
//
// console.log(new Mirror(123).echo())

// 上記のMirrorクラスをジェネリクスを使って、もっと汎用的にしてみる
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value
  }
}

console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>('Hello,ジェネリクス!').echo())
console.log(new Mirror<boolean>(true).echo())
