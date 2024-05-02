export {}

class Person {
  // classの型定義はトップレベルで行う
  // アクセス修飾子
  // public どこからでもアクセス可能
  public name: string
  // private 同じクラス内でのみアクセス可能
  private age: number
  // protected 同じクラスか、サブクラスでアクセス可能
  protected nationality: string

  // constructorで引数を受け取れる。
  // ここで初期化処理を行う。
  // constructorの戻り値の型定義はしない。
  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }
  profile(): string {
    return `name:${this.name}, age:${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスへ渡す引数
    super(name, age, nationality)
  }
  profile(): string {
    // ageはprivateなので、Person Class内でしかアクセスできない
    return `name:${this.name}, nationality:${this.nationality}` // age:${this.age},
  }
}

// new演算子でインスタンス（実体）を作れる
const taro = new Person('Taro', 30, 'Japan')
// instance.member で呼び出せる
console.log(taro.name)
// private設定により、instance外からの呼び出しはできなくなった
// エラー
// console.log(taro.age)

// メソッドを介してであればageにアクセスできる
console.log(taro.profile())

// nationalityはprotectedなので、Personクラスかサブクラスでのみアクセス可能
// console.log(taro.nationality)
const hanako = new Android('Hanako', 30, 'Japan')
console.log(hanako.profile())
