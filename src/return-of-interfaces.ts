export {}

interface WiseMan {
  thunder(): void // signature
}
interface Warrior {
  attack(): void // signature
}

// WiseManとWarrior2つのinterfaceをimplementsを使い、実装している
// インターフェースで定義された全てのメソッドを
// クラス内で実装しないとエラーになるため、実装漏れがなくなる
class Jiro implements WiseMan, Warrior {
  thunder(): void {
    console.log('thunder!!')
  }
  attack(): void {
    console.log('attack!!')
  }
}

// 魔法も使えるし攻撃もできるスペシャルなクラスが完成した！
const jiro = new Jiro()
jiro.thunder()
jiro.attack()
