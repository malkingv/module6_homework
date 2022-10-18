//Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
// Используйте setInterval.

const a = 3;
const b = 9;
let counter = a; //создаю счетчик который буду проверять и выводить

function timer(num){
    if (counter <= num){
        console.log(counter);
        counter++;
    } else {
        clearInterval(stopwatch)
    }
}
const stopwatch = setInterval(timer, 1000, b);