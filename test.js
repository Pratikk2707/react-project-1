const array =
  [
    { "name": "Joe", "age": 17 },
    { "name": "Bob", "age": 17 },
    { "name": "Carl", "age": 35 }
  ]

const key = 'age';

const arrayUniqueByKey = [...new Map(array.map(item =>
  [item[key], item])).values()];

console.log(arrayUniqueByKey);

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits);