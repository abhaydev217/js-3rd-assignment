var readlinesync = require('readline-sync');

let input=readlinesync.question('Enter your name:')

function greetmessage(name){
    let message = ('Hello,'+name+'!')
    return message;
}

console.log(greetmessage(input));