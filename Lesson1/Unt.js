
const smallestDivisor = (n) => {
  const iter = (num, acc) => {
    if (num === 1) {
      return acc;
    }
    return iter(num - 1, num * acc);
  }
  return iter (n, 2);
  // END
};
console.log(smallestDivisor(5));
