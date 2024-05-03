export {}

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard {
  // メソッド名と被らないようにするアンダースコア
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  // getter member変数:ownerを参照するためのメソッド
  get owner() {
    return this._owner
  }
  // setter secretNumberを変更するためのメソッド
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }
  // secretNumberの値を確認するためのデバッグ用メソッド
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

const card = new MyNumberCard('hokuto', 1234567890)
console.log(card.owner)
console.log(card.debugPrint())
card.secretNumber = 1111111111
console.log(card.debugPrint())
