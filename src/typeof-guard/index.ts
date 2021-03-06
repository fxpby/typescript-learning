export default function () {
  function padLeft(padding: number | string, input: string): string {
    if (typeof padding === 'number') {
      return new Array(padding + 1).join(' ') + input
    } else {
      return padding + input
    }
  }

  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
      strs.forEach(s => {
        console.log(s)
      })
    } else if (typeof strs === 'string') {
      console.log(strs.concat('hello'))
    } else {
      // ...
    }
  }

  function getUserOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `现在共有 ${numUsersOnline} 人在线`
    }
    return `现在没有人在线`
  }
  console.log(getUserOnlineMessage(0))

  function multiplyAll(values: number[] | undefined, factor: number) {
    if (!values) {
      return values
    } else {
      return values.map(x => {
        return x * factor
      })
    }
  }
  console.log(multiplyAll([2, 3, 4], 3))

  // 等值缩小
  function example1(x: string | number, y: string | boolean) {
    // 检查都为 string 类型
    if (x === y) {
      x.toUpperCase()
    }
  }
}
