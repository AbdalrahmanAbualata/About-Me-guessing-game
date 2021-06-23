'use strict';
let userName = prompt("Enter your Name Plz ? ");
console.log(userName);
alert(" hello (( "+ userName +" )) welcome to our Website ")

document.write("<p style='color:#fff5fd'> *** good bye ( " +userName+ " )*** </p>");

alert("ok (( " +  userName  +  " )) let us play a game , I will ask you a gussing questions about my self and you need to  answer  with (YES/NO).")
let trueA=0;

let question1 = prompt(" Is my name Abdalrahman ? ");

 while ( question1.toUpperCase()   != "YES" && question1.toUpperCase()  != "NO") {

    question1 = prompt("Is my name Abdalrahman ? , answer with ( yes/no) plz  ");
  }

console.log(question1);

switch (question1.toUpperCase()) {
        case 'YES':
           alert('CORRECT');
           console.log('CORRECT');
           trueA++;
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
           trueA++;
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
           trueA++;
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
           trueA++;
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
          trueA++;
           break;
       case 'NO':
          alert('WRONG ');
          console.log('WRONG');
           break;
                   }
   // ******************************************************************

let x=0;
let y=0;
let corecter = 'a'
let num1=1;
while(typeof num1 !== "Number" && x !== 4 ){
   
        num1 = Number ( prompt(" How much my home in (km) is far from LTUC college ? , You only have 4 chances ")); 
   console.log(typeof num1);

   corecter = num1.toString();

    console.log(corecter);

if(corecter == 0){
   continue;
}
 if (num1<4 ) {

    alert("too low");
    x++; // +1 for x until x=4 
  }
  else if (num1>4){ 
    alert("too hight");
    x++;//+1 for x until x=4 
}
  else if (num1 == 4){alert("correct");
  trueA++;
    x=4; //let x = 4 to brake the loop
    y=1;
    
}
}

if ( y !==1 ){alert("the corect answer is ( 4 KM )")}

// *****************************************************
let  myfavoritcolor = ['red' , 'blue' , 'yellow'];

for( let x2 = 1 ;x2 <=6;x2++){
   let q7 = prompt("my favorite color is ?? ").toLowerCase();

     console.log(myfavoritcolor);
     console.log(q7);
     let i=1;
   for( i =0; i< myfavoritcolor.length; i++){
    if (q7 == myfavoritcolor[i] ) {
   
       alert("correct");
      x2=6;
       trueA++;
       break;
     }
   }
   if(q7 !== myfavoritcolor[i])
   alert("wrong");
}
   
console
   alert('myfavoritcolor is ('+myfavoritcolor+')');
   alert('total number of correct answers = '+trueA+'/7');
