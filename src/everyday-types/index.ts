export default function() {
  // 字符串、数字、布尔
  const str: string = 'hello olu, hello world'
  const num: number = 123
  const bool: boolean = true 

  // 数组
  const arr: number[] = [1, 2, 3]
  const arr2: Array<number> = [1, 2, 3]
  console.log(str, num, bool, arr, arr2)

  let power: any
  power = 'olu'
  power = 123

  let num1: number = 233
  power = num1
  num1 = power

  // 函数
  function foo(num: number): boolean {
    return true
  }

  foo(233)

  function foo2(num: number): void {
    console.log(num)
  }

  const strArr: string[] = ["Olu", "Cool"]

  strArr.forEach(x => {
    x.toUpperCase()
  })

  // 对象
  function foo3(params: {x: number, y: string}) {
    console.log(params.x, params.y)
  }

  foo3({x: 233, y: 'olu'})

  function foo4(params: {x: number, y?: string}) {
    console.log(params.x, params.y?.toLocaleLowerCase)
  }
  foo4({x: 123})

  // 联合类型
  function foo5(id: number | string | number[]) {
    if (typeof id === 'string') {
      console.log(id.toLocaleLowerCase())
    } else if (Array.isArray(id)) {
      console.log(id.join(', '))
    } else {
      console.log(`id's type is number`)
    }
  }
  foo5(123)
  foo5('233')
  foo5([1, 2, 3])

  function foo6(x: number[] | string) {
    console.log(x.slice(0, 3))
  }
  foo6([23333])
  foo6('2333')

  // 类型别名
  type Point = {
    x: number
    y: string
  }

  function foo7(x: Point) {
    console.log(x)
  }
  foo7({x: 123, y: '233'})

  type Id = number | string
  function foo8(id: Id) {
    console.log(id)
  }
  foo8(233)
  foo8('233')

  // 接口
  interface Point1 {
    x: number,
    y: string
  }
  function foo9(pt: Point1) {
    console.log(pt)
  }
  foo9({x: 233, y: '233'})

  // 拓展接口
  interface Animal {
    name: string
  }

  interface Bear extends Animal {
    age: number
  }

  const bear: Bear = {
    name: 'weini',
    age: 23
  }
  console.log(bear.name, bear.age)

  type Animal1 = {
    name: string
  }
  type Bear1 = Animal1 & {
    age: number
  }
  const bear1: Bear1 = {
    name: 'weini',
    age: 23
  }
  console.log(bear1.name, bear1.age)

  // 向现有的接口添加新字段（可同名方式拓展）
  interface MyWindow {
    count: number;
  }
  interface MyWindow {
    title: string;
  }
  const window: MyWindow = {
    count: 1,
    title: '233'
  }

  // 类型别名 type 不能通过同名方式去拓展
}