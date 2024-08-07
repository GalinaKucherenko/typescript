import './style.css'

function add(num1: number, num2: number) {
  return num1 + num2
}

console.log(add(1, 2));

function foo(num = 10, str = 'Some string', bool = true, empty = null) {
  if (bool) {
    str + '' + num
  } else {
    empty;
  }
}

type User = {
  name: string;
  age: number;
};
let user: User = {
  name: 'Tom',
  age: 30,
};
let userJack = {
  name: 'Jack',
  age: 25,
}
export { };

//tuple - кортеж, тип даних, що доволяє визначити масив з фіксованою к-стю елементів, типи яких відомі
let tupleType: [string, boolean];
tupleType = ['hello', true]; // ok
tupleType = [true, 'hello']; // Error, неправильні типи
tupleType = ['hello', true, true]; // Error, більше значень, ніж у tuple

export { };

