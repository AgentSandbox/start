const nums = [5, 3, 5, 7]

const findAverage=(nums)=>nums.reduce((total, amount)=>total + amount) / nums.length

console.log(findAverage(nums))