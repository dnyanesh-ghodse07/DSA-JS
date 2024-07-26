// sum of all natural numbers from 1 to n;

function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
  // return n * (n + 1) /2
}

console.log(sum(10));

// find the sum of a digits number

function sumOfDigits(num){
  let sum = 0;
  while(num > 0){
    sum += num%10;
    num = Math.round(num/10);
  }
  return sum;
  // return String(num).split('').reduce((acc, curr) => acc + Number(curr), 0)
}

console.log(sumOfDigits(324))


//3) count the number of digits of a number
// 2342 = 4

function numOfDigits(num){
  // return String(Math.abs(n)).split('').length;

  num = Math.abs(num);

  let res = 0;
  do {
    res++;
    num = Math.floor(num/10);
  } while (num > 0);
  return res;
}

console.log(numOfDigits(-2342))
