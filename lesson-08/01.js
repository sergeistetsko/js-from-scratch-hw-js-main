/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(text) {
  let words = text.split(' ')
  let result = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (word.length > 0) {
      // Более безопасный доступ к первому символу
      let firstChar = word.charAt(0).toUpperCase()
      let restOfWord = word.slice(1).toLowerCase()
      let capitalizedWord = firstChar + restOfWord
      result.push(capitalizedWord)
    } else {
      // Сохраняем пустые строки (множественные пробелы)
      result.push('')
    }
  }

  return result.join(' ')
}
