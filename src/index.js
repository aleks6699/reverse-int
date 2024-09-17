module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  
  const reversedStr = str.split('').reverse().join('');
  
  const reversedNumber = parseInt(reversedStr, 10);
  
  return reversedNumber;
};
