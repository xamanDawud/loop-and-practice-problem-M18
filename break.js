// var numbers = [23, 254, 23, 56, 22, 67, 211];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] >= 50) {
//     break;
//   }
// }

var numbers = [254, 23, 56, 22, 67, 211];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] > 50) {
    // Change to '>' to exclude 50 itself
    break;
  }
}
