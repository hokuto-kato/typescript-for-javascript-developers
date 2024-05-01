export {}

type Pitcher1 = {
  throwingSpeed: number
}

type Butter1 = {
  battingAverage: number
}

const Nomo: Pitcher1 = {
  throwingSpeed: 153
}

const Ichiro: Butter1 = {
  battingAverage: 0.311
}

// このままだと大谷翔平のように投げて打てる選手のデータを定義できない
// 新たに型を定義する？

// type TwoWayPlayer = {
//   throwingSpeed: number
//   battingAverage: number
// }

// その必要はなく、intersection型を使えば
// 型を合成して新たな型を作ることできる
type TwoWayPlayer = Pitcher1 & Butter1

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
