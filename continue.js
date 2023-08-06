var numbers = [23, 56, 23, 75, 23, 22, 15, 17, 20];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    continue;
  }
  console.log(numbers[i]);
}
