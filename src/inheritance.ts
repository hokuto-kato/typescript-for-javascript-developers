export {}

// 継承：既存のクラスを拡張して新たなクラスに作り上げる
class Animal {
  constructor(public name: string) {}
  run(): string {
    return `${this.name} can run`
  }
}

// 継承したクラス：子クラス、サブクラスと言う
class Lion extends Animal {
  // speedプロパティの宣言を明示して流れをわかりやすく
  public speed: number
  constructor(
    public name: string,
    speed: number
  ) {
    super(name)
    this.speed = speed
  }
  // speedプロパティを使って、継承元のメソッドをオーバーライド
  run(): string {
    return `${super.run()} ${this.speed}km/h`
  }
}

console.log(new Animal('Tom').run())
console.log(new Lion('Leo', 80).run())
