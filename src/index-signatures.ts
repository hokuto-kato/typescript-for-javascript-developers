export {}

// index signature
// TypeScriptでは、オブジェクトのプロパティを動的に追加する場合、
// そのプロパティの型を事前に宣言しておく必要があります。

// 例えば、以下のように型宣言をしていないとエラーになります。
// let profile: object = {}
// profile.name = 'hokuto' // エラー: 'name' プロパティは 'object' 型に存在しません

// 型アノテーションを追加してプロパティを宣言することで解決できます。
// let profile: { name?: string } = {}
// profile.name = 'hokuto'

// しかし、新しいキーを追加するたびに型アノテーションを追加するのは非効率的です。
// キーが増えるたびに型アノテーションを追加するのは、メンテナンス性を考慮すると現実的ではありません。

// index sigunatureの書き方
// { [ index: typeForIndex ]:typeForValue }
// これにより、任意のキー名とその型を柔軟に設定できます。

interface Profile {
  [index: string]: string | number | boolean // Profile オブジェクトが任意の文字列キーを持ち、その値が string、number、または boolean 型である
  underTwenty: boolean // このプロパティは、プロファイルの持ち主が20歳未満かどうかを示します。
}

let profile: Profile = { underTwenty: false }
profile.name = 'hokuto'
profile.age = 45
profile.nationality = 'japan'
