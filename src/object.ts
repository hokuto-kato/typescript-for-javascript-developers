export {}

// 最もシンプルなアノテーション
let profile1: object = { name: 'hokuto' }
// 違う型で上書きもできてしまうので制約としてはゆるい
profile1 = { birthYear: 1979 }

// プロパティまで指定できる
let profile2: { name: string } = { name: 'houto' }
// ちゃんとエラーで返してくれる
// profile2 = { birthYear: 1979 }

// アノテーションに沿った形式でなら上書き可
profile2 = { name: 'john' }
