export {}

class Person {
  constructor(
    // constructorメソッドにアクセス修飾子をつけることによって、初期化も行うことができる
    public name: string,
    protected age: number
  ) {}
}

const me = new Person('hokuto', 45)
console.log(me)
