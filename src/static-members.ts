export {}

class Me {
  // static装飾子によりstatic memberに変更される
  static isProgrammer: boolean = true
  static firstName: string = 'hokuto'
  static lastName: string = 'kato'

  static work() {
    // return "Hey, guys! This is hokuto! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`
  }
}

const me = new Me()
// インスタンスを介してアクセスしようとするとエラー
// console.log(me.isProgrammer)

// classに直接アクセスできる
console.log(Me.isProgrammer)
console.log(Me.work())
