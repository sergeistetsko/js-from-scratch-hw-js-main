// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber >= secondNumber && secondNumber >= thirdNumber) {
    return firstNumber
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    return secondNumber
  } else {
    return thirdNumber
  }
}
