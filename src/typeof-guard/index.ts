function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input
  } else {
    return padding + input
  }
}

function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    // 会报错，因为 typeof null === 'object'
    // strs.forEach(s => {
    //   console.log(s)
    // })
  } else if (typeof strs === 'string') {
  } else {
  }
}
