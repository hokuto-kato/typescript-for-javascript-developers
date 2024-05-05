export {}

// Nullable Types
// 現時点でデータが不明な場合の型指定方法

// "strictNullChecks": false に設定すると、すべての型で null を許容するようになります
// これにより、型安全性が低下する可能性があります
// let profile: { name: string; age: number } = {
//   name: 'hokuto',
//   age: null
// }
//
// profile = null

// 一般的には、型安全性を保つために "strictNullChecks": true で運用することが推奨されます
// しかし、null を許容する必要がある場合は、union 型（例: number | null）を使用して明示的に null を許容することができます

let profile: { name: string; age: number | null } = {
  name: 'hokuto',
  age: null
}
