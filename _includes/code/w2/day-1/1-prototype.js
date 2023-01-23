Array.prototype.reverseForEach = function (callback) {
  console.log(this)
  for (let i = this.length - 1; i >= 0; i--) {
    callback(this[i], i, this)
  }
}

const array = [1, 2, 3, 5, 4, 8, 2, 4, 6]

array.reverseForEach((el, index, arr) => {
  console.log(el, index)
})

Array.prototype.forEach = 'Hello'
