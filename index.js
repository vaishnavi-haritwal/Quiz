console.log(`Welcome to quiz !`);
const readlinesync=require("readline-sync");
const name=readlinesync.question("what is your name:");
console.log(`Hello ${name}! , Let's play the Quiz!`);
console.log(`Rules and Instruction:`);
console.log(`1.There are 5 question on India and all are compulsory.`);
console.log(`2.You will get +1 for each correct answer.`);
console.log(`3.No negative marking.`);
let quizquestion=[
  {
    question:`India's largest city by population ?`,A:'Mumbai',B:'Delhi',C:'Pune',D:'Chennai',
    answer:'a'
  },
  {
    question:`The Rath Yatra at Puri is celebrated in honour of which Hindu deity?`,
    A:'Ram',B:'Jaganath',C:'Shiva',D:'Vishnu',
    answer:'b'
      
  },
  {
    question:`Which of the following folk dance forms is associated with Gujarat??`,
    A:'Nautanki',B:'Kathakali',C:'Garba',D:'Bhangra',
    answer:'c',
  },
  {
    question:`What Indian city is the capital of two states?`,
    A:'Kolkata',B:'Chennai',C:'Mumbai',D:'Chandigarh',
    answer:'d',
  },
  {
    question:`How many countries border India?`,
    A:6,B:11,C:9,D:2,
    answer:'a',
  }
];

let score=0;

for (let i=0;i<quizquestion.length;i++){
  let n=i+1;
  console.log("\n");
  console.log(n+"."+quizquestion[i].question);
  console.log("A: "+quizquestion[i].A);
  console.log('B: '+quizquestion[i].B);
  console.log('C: '+quizquestion[i].C);
  console.log('D: '+quizquestion[i].D);
  console.log(" ");
  let useranswer=readlinesync.question("Answer: ");
  
  if(useranswer.toLowerCase() === quizquestion[i].answer.toLowerCase()){
    console.log(('Correct Answer'));
    score = score + 1;
  }else{
    console.log(('Incorrect Answer'));
    
  }
}
  if(score<0){
    score=0;
  }
  console.log("")  
  console.log(`${name},Your total score is : ${score}`);
  console.log("                          *********END*********                      ")
