function getSecondLargest(nums) {
  let index = 0
  let biggest = -1;
  while (index < nums.length) {
      const thisNumber = nums[index];
      if (thisNumber > biggest) {
          biggest = thisNumber;
      }
      index++;
  }

  index = 0
  let secondBiggest = -1;
  while (index < nums.length) {
    const thisNumber = nums[index];
    if (thisNumber < biggest) {
      if (thisNumber > secondBiggest) {
        secondBiggest = thisNumber;
      }
    }
    index++;
  }
  return secondBiggest;
}