export {}

// ?をつけてoptionalにできる
const bmi = (height: number, weight: number, printable?: boolean): number => {
  const bmi = weight / (height * height)
  if (printable) {
    console.log({ bmi })
  }
  return bmi
}

// bmi(身長、体重、console.logで出力するかどうか？) というような関数にしたい
// bmi(1.64,59.3,true)
// bmi(1.64,59.3,false)
// bmi(1.64,59.3)

console.log(bmi(1.64, 59.3, true))
