export {}

// 型の互換性
let fooCompatible: any
let barCompatible: string = 'TypeScript'

console.log(typeof fooCompatible) // undefined

fooCompatible = barCompatible

// any型の変数にはどのような型の値も代入できるが、変数自体の型はanyのままである
console.log(typeof fooCompatible) // string

let fooIncompatible: string
let barIncompatible: number = 1

// string型とnumber型には互換性がないため、エラーになる
// fooIncompatible = barIncompatible

// 互換性：◯
let fooString: string
let barString: string = 'string'

fooString = barString

// 互換性：◯
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral

// 互換性：◯
let fooNumber: number
let fooNumberLiteral: 1979 = 1979
fooNumber = fooNumberLiteral

// 構造的部分型により、interfaceとPersonクラスが一致していなくても
// interfaceのプロパティを満たしているためエラーは発生しない
interface Animal {
  age: number
  name: string
}

class Person {
  constructor(
    public age: number,
    public name: string,
    public hobby: string
  ) {}
}

let me: Animal
me = new Person(45, 'hokuto', 'game')
console.log(me)
