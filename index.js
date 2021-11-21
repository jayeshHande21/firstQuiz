var readlineSync=require("readline-sync")
var score=0
var userName=readlineSync.question("What's your name?  ")
console.log("welcome! "+userName+" to 'DO YOU KNOW JAYESH?'");

function play(question,answer){
  userAnswer=readlineSync.question(question)
  if(userAnswer==answer)
  {
    console.log("right!")
    score=score+1
    console.log("score="+score)
  }
  else
  {
    console.log("wrong!")
    console.log("score="+score);
  }
  console.log("----------------")
 
  }
var question=[{
question:"where do I live? ",
answer:"dhamangaon rly"},
{question:"my favourite colour is? ",
answer:"black"},
{
  question:"what is birth year? ",
  answer:"2001"
},
{
  question:"Am I introvert or extrovert? ",
  answer:"extrovert"
},
{
  question:"what is my favourite sweet food? ",
  answer:"kaju-katli"
},
{ 
  question:"What is my dream company? ",
  answer:"google"
}]
for(var i=0;i<question.length;i++)
{
    currentQuestion=question[i];
    play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your final score is=",score)