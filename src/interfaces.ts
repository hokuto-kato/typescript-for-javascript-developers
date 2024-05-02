export {}

type ObjectType = {
  name: string
  age: number
}

// interfaceは「=」がいらない
interface ObjectInterface {
  name: string
  age: number
}

let object: ObjectInterface = {
  name: 'hokuto',
  age: 45
}

// # interfacesとtype aliasesの使い分け
// 一般的には、オブジェクトの形状を定義するときはinterfaceを使用し、
// プリミティブ型やユニオン型、タプル型などを別名で定義したい場合は
// type aliasesを使用することが推奨されています。

// type aliases
// type SerialNumber = string | number;
// type User = { name: string; age: number; };

// interfaces
// interface Person {
//   name: string;
//   age: number;
//   greet?(message?: string): void; // オプションのメソッド
// }
//
// interface Employee extends Person {
//   company: string;
// }
