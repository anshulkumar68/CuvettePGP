// TWO WAYS OT IERATE OVER MAP METHOD
let arr = [1, 2, 3, 6, 5, 6, 7, 1, 1, 3 ];

// for (let i in arr) console.log(arr[i] + " ");

var res = arr.map((item) => item / 2);
var res = arr.map((item) => {
  return item / 2;
});
// console.log(res);

// FILTER method
var res = arr.filter((item) => (item%2!=0));
// console.log(res);

// Reduce Method
var res = arr.reduce((total, item)=> total + item, 0);
// console.log(res);

var numCount = arr.reduce((count, item)=>{
    count[item] = (count[item] || 0) + 1;
    return count;
}, {});
console.log(numCount);

// OBJECT
const person = {
  name: "John Doe",
  age: 30,
  city: "Anytown",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  contact: {
    email: "john.doe@example.com",
    phone: {
      home: "555-555-5555",
      work: "555-555-5556",
    },
  },
};

person.contact.phone.home = "91490-28049";
delete person.address.zip;

// console.log(person.contact.phone.home);
// console.log(person.address.zip);
