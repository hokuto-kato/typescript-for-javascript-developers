export {}

// Japaneseというnamespaceに属するPersonということになり、同名でもエラーが出なくなる
namespace Japanese {
  // namespaceはネストできる
  // 外部からアクセスするためには、export修飾子が必要
  export namespace Tokyo {
    // 外部からアクセスするためには、export修飾子が必要
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    // 外部からアクセスするためには、export修飾子が必要
    export class Person {
      constructor(public name: string) {}
    }
  }
}

// Japanese.Tokyo.PersonとJapanese.Osaka.Personは異なるクラスであり、同名でも別々のものとして定義されている
// English.PersonはJapaneseのnamespaceとは異なる独立したクラスである
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('hokuto')
console.log(me.name)

const meOsaka = new Japanese.Osaka.Person('hokutoyan')
console.log(meOsaka.name)

const john = new English.Person('John', 'Anthony', 'Frusciante')
console.log(john)
