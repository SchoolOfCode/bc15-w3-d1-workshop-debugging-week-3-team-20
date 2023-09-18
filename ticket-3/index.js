function countNumberOfNinesInNumber(number) {
  let count = 0;
  // const numberString = number.toString();
  // const numberArray = numberString.split('');

  for (let i = 0; i < numberArray.length; i++) {
    const digit = numberArray[i];
    if ("9" == digit) {
      count++;
    }
  }
  return count;
}

countNumberOfNinesInNumber(99.999)
