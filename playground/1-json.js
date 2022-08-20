const fs=require('fs');

// const book={
//     title: 'Ego is the Enemy',
//     author:'Ryan Holiday',
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// fs.writeFileSync('1-json.json',bookJson);

// const parseData=JSON.parse(bookJson);
// console.log(parseData);


// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();

// const data=JSON.parse(dataJSON);
// console.log(data.title);
// console.log(data.author);



//challenge
const dataBuffer=fs.readFileSync('challenge-json.json');
const dataJSON=dataBuffer.toString();
const data=JSON.parse(dataJSON);
data.name="Faheem";
data.planet="Earth";
data.age=20;
console.log(data.name);
console.log(data.planet);
console.log(data.age);
const stringify=JSON.stringify(data);
fs.writeFileSync('challenge-json.json',stringify);

