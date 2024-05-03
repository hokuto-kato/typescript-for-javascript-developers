export {}

class VisaCard {
  // readonlyの場合は、publicは省略できるが、わかりやすさを重視して明記しておく
  // readonlyを使用することで、プロパティを変更できないようにすることができる
  constructor(public readonly owner: string) {}
}

const myVisaCard = new VisaCard('hokuto')
console.log(myVisaCard.owner)
// readonly装飾子に設定しているため、エラー
// myVisaCard.owner = 'john'
console.log(myVisaCard.owner)
