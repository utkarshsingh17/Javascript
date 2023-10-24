const numbers = [1, 2, 3, 4];

numbers.forEach(callback);

function callback(number, index) {
  console.log("Element at index ${index}: ${number}");
}
