'use strict';
let userName = prompt("Enter your Name Plz ? ");
console.log(userName);
alert(" hello (( "+ userName +" )) welcome to our Website ")

document.write("<p style='color:#fff5fd'> *** good bye ( " +userName+ " )*** </p>");

alert("ok (( " +  userName  +  " )) let us play a game , I will ask you a gussing questions about my self and you need to  answer  with (YES/NO).")

let question1 = prompt(" Is my name Abdalrahman ? ");

 while ( question1.toUpperCase()   != "YES" && question1.toUpperCase()  != "NO") {

    question1 = prompt("Is my name Abdalrahman ? , answer with ( yes/no) plz  ");
  }

console.log(question1);

switch (question1.toUpperCase()) {
        case 'YES':
           alert('CORRECT');
           console.log('CORRECT');
            break;
        case 'NO':
           alert('WRONG  , MY NAME IS Abdalrahman');
           console.log('WRONG');
            break;
                    }
//    ***************************************************
let question2 = prompt(" Is my age (22) ? ");

 while ( question2.toUpperCase()    != "YES" && question2.toUpperCase()  != "NO") {

    question2 = prompt("Is my age (22) ? , answer with ( yes/no) plz  ");
  }

console.log(question2); 

switch (question2.toUpperCase()) {
        case 'YES':
           alert('WRONG  , Im 26 years old ');
           console.log('WRONG');
            break;
        case 'NO':
           alert('CORRECT');
           console.log('CORRECT');
            break;
                    }                 
// ********************************************************
let question3 = prompt(" I am an electrical engineer ? ");

 while ( question3.toUpperCase()    != "YES" && question3.toUpperCase()  != "NO") {

    question3 = prompt(" I am an electrical engineer ? , answer with ( yes/no) plz  ");
  }

console.log(question3);

switch (question3.toUpperCase()) {
        case 'YES':
           alert('WRONG    , I am a CIVIL engineer  ');
           console.log('WRONG');
            break;
        case 'NO':
           alert('CORRECT');
           console.log('CORRECT');
            break;
                    }     
// ********************************************************                    
 let question4 = prompt(" I am from jordan ?? ");

 while ( question4.toUpperCase()   != "YES" && question4.toUpperCase()  != "NO") {

    question4 = prompt("I am from jordan ?? , answer with ( yes/no) plz  ");
  }

console.log(question4);

switch (question4.toUpperCase()) {
        case 'YES':
           alert('CORRECT');
           console.log('CORRECT');
            break;
        case 'NO':
           alert('WRONG  , yes i am from jordan ');
           console.log('WRONG');
            break;
                    }
// ********************************************************                    
let question5 = prompt("I am learning programming now ?? ");

while ( question5.toUpperCase()  != "YES" && question5.toUpperCase()  != "NO") {

   question5 = prompt("I am learning programming now ?? , answer with ( yes/no) plz  ");
 }

console.log(question5);

switch (question5.toUpperCase()) {
       case 'YES':
          alert('CORRECT');
          console.log('CORRECT');
           break;
       case 'NO':
          alert('WRONG ');
          console.log('WRONG');
           break;
                   }
                   
alert(" have a good day  (( "+ userName +" )) ")
