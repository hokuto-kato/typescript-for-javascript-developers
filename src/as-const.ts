export {}

// const assertion: コンパイラに値の変更を許可しないことを伝える
// 型推論により`name`は`string`型とされる
let name = 'hokuto'
// 内容は書き換え可能
name = 'john'

// as constを用いることで、nicknameは"dub"型（リテラル型）であると型推論される
// 実質的にこの変数は定数として扱われる
let nickname = 'dub' as const
// nickname = 'john' // エラー

// objectの場合
// as const を書くことで、profileの各プロパティがreadonlyとして扱われ、値の変更が不可能になる
let profile = {
  name: 'hokuto',
  height: 164
} as const

// profile.name = 'john' // エラー
// profile.height = 180 // エラー
