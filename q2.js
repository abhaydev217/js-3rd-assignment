var readlinesync = require('readline-sync');

let printnumbers = function (lastnumber) {
    for(let i=1;i<=lastnumber;i++)
    console.log(i);
}
 let n=readlinesync.question('Enter number:')

 printnumbers(n)