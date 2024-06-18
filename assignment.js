const numbers = [10, 13, 44, 57, 99, 1];

const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers);

const numberObjects = numbers.map((num, idx) => {
  return { index: idx, num: num };
});

console.log(numberObjects);

const product = numbers.reduce((preValue, curValue) => preValue * curValue, 1);
console.log(product);
console.log(product);

const findMax = (...numbers) => {
  if (numbers.length === 0) {
    return undefined;
  }

  let maxNumber = numbers[0];
  for (let number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
};

largestNumber = findMax(10, 13, 44, 57, 99, 1);
console.log(largestNumber);

const findMinMax = (...numbers) => {
  if (numbers.length === 0) {
    return undefined; // Handle empty input
  }

  let minNumber = numbers[0];
  let maxNumber = numbers[0];

  // Iterate through remaining arguments
  for (let number of numbers) {
    if (number < minNumber) {
      minNumber = number;
    }
    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  return [minNumber, maxNumber]; // Return both min and max in an array
};

// Example usage with destructuring
//const numbers = [10, 13, 44, 57, 99, 1];
const [min, max] = findMinMax(...numbers);

console.log("Minimum:", min); // Output: Minimum: 1
console.log("Maximum:", max); // Output: Maximum: 99

const uniqueList = new Set();

// Add elements
uniqueList.add(10);
uniqueList.add("apple");
uniqueList.add(10); // Duplicate will be ignored

// Check if a value exists
console.log(uniqueList.has(10)); // Output: true
console.log(uniqueList.has("apple")); // Output: true
console.log(uniqueList.has(20)); // Output: false

// Convert Set to an Array (optional)
const uniqueArray = [...uniqueList];
console.log(uniqueArray); // Output: [10, "apple"]
