function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedDescending = sortDescending(numbers);
  
  console.log(sortedDescending);