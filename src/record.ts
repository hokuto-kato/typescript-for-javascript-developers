export {}

// Record<K,T>
// Record型のKにはキーとして使われるプロパティ名のユニオン型を指定します
// Record型を使用することで、各都道府県に共通のデータ型（ここではCovid19InfectionInfo）を割り当てることができ、
// コードを簡潔に保つことができます
type Prefectures = 'Tokyo' | 'Hokkaido' | 'Osaka' | 'Shiga'

type Covid19InfectionInfo = {
  kanji_name: string
  confirmed_cases: number
}

// 以下の例では、各都道府県にCOVID-19の感染情報を割り当てています
// これは手間がかかる
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo
//   Hokkaido: Covid19InfectionInfo
//   Osaka: Covid19InfectionInfo
//   Shiga: Covid19InfectionInfo
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Hokkaido: { kanji_name: '北海道', confirmed_cases: 249 },
//   Osaka: { kanji_name: '大阪', confirmed_cases: 2 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: 13 }
// }

// Record型を使い、簡潔に書ける
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Hokkaido: { kanji_name: '北海道', confirmed_cases: 249 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 }
}
