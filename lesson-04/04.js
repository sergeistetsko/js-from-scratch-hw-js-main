/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(anyString) {
    const newArray = anyString.split('')
    let doubleString = ''
    for (let i = 0; i < newArray.length; i++) {
        doubleString += (newArray[i] + newArray[i])
    }
    return doubleString
}
