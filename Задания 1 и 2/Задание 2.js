const json = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

const data = JSON.parse(json);
const list = data.list;
let obj = new Object();
let arr = [];

for (let i = 0; i < list.length; i++) {
    let counter = list[i];
    let result = {
        name: counter.name,
        age: Number(counter.age),
        prof: counter.prof,
    };
    arr.push(result);
}
obj.list = arr;
console.log(obj);