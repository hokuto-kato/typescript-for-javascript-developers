export {}

// 抽象クラス
// 抽象クラスはインスタンス化できない。
// また、すべての抽象メソッドはサブクラスで実装されなければならない。
abstract class Animal {
  // 抽象クラス
  abstract cry(): string
}

// 子クラスに実装がないとエラーを出して教えてくれる
class Lion extends Animal {
  // cry()のオーバーライド
  cry() {
    return 'Roar!'
  }
}

// 子クラスに実装がないとエラーを出して教えてくれる
class Tiger extends Animal {
  // cry()のオーバーライド
  cry() {
    return 'Growl!'
  }
}
