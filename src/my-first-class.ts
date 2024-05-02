export {}

class Person {
  // classの型定義はトップレベルで行う
  name: string
  age: number
  // constructorで引数を受け取れる。
  // ここで初期化処理を行う。
  // constructorの戻り値の型定義はしない。
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  profile(): string {
    return `name:${this.name}, age:${this.age}`
  }
}
// new演算子でインスタンス（実体）を作れる
const taro = new Person('Taro', 30)
console.log(taro.profile())
