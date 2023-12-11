var readlinesync = require('readline-sync');

let num=readlinesync.question('Enter number:')
let printevenNumbers = function(n){
    for(let i=1;i<=n;i++){

        if(i%2===0){
            console.log(i);
        }
    }
}
 printevenNumbers(num)
