var readlinesync = require('readline-sync');

let numb=readlinesync.question('Rows you want:')

let PrintPattern=function(rows){
   for(let i=1;i<=rows;i++){
    console.log('*'.repeat(i));
   }
}
PrintPattern(numb)