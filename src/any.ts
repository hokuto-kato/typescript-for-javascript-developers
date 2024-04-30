import axios from 'axios'
export {}

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

axios.get(url).then((response) => {
  // interfaceでより詳細な型指定が可能になる
  interface Article {
    id: number
    title: string
    description: string
  }
  // apiから返ってくる形がわからないので、型推論ではanyが選択される
  // anyはどんな型も許容される、言わば型推論のギブアップ宣言である
  // anyを避けるためにinterfaceを定義する
  let data: Article[] = response.data

  // titleが無いとエラー
  // data = [
  //   {
  //     id: 1,
  //     description: 'desctiprion'
  //   }
  // ]

  console.log(data)
})
