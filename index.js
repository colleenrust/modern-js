console.log('hola')
import moment from 'moment';
console.log(moment().format());
import { sqrt } from 'mathjs'
console.log(sqrt(-4).toString()) // 2i 
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
console.log('BOING')
console.log('BOING')
console.log('BOING')
