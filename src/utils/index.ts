// 防抖函数
export function debounce (fn:Function, time:number) {
  // 记录上一次的延时器
  let timer:any = null
  const delay = time || 200
  return function () {
    const args = arguments
    const that = this
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}
