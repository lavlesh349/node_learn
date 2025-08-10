// const { Console } = require("console");
const fs = require("fs");

// fs.writeFileSync('./text.txt', "hey how are you");

// fs.writeFile('./text.txt', "hey", (err) => { });

// const result = fs.readFileSync('./contact.txt', "utf-8");
// console.log(result);

// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         Console.log(err);
//     }
//     else {
//         console.log(result);
//     }
// });

// fs.appendFileSync('./text.txt', new Date().getDate().toLocaleString());


// fs.appendFile('./text.txt', 'jdskfh');

// to delete file

fs.writeFileSync('./contact.txt', "hey how are you");

// fs.unlink('./contact.txt', () => { });