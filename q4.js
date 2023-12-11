var readlinesync = require('readline-sync');

let num=readlinesync.question('Enter number:')

function SumOFSquare(n){
    let sum=0
    for(let i=1;i<=n;i++){
        let square=i**2
         sum=sum+square
        console.log(i,'*',i,'=',square);
    }
    console.log('sum of squares=',sum);
}

SumOFSquare(num)