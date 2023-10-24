const person1 = {
  age: 32,
  name: {
    first: "John",
    last: "Doe",
  },
};

const person2 = { ...person1 };
person2.name = {
  first: "Jane",
  last: "Smith",
};
person2.age = 20;

console.log(person1);
