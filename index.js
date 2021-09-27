var readlineSync=require('readline-sync');

var score=0;


function welcomeUser(){
var userName = readlineSync.question("Hi!! What's your name?😊 \n");
console.log("Welcome "+ userName + "!!");
console.log("This is a quiz about me!!😁Let's play!!😎\n");
}

function quiz(ques,ans){
  userAnswer=readlineSync.question(ques)
  if (userAnswer.toLowerCase()==ans.toLowerCase()){
    console.log("You are Right!!🤩");
    score=score+1;
  }
  else{
    console.log("That's an incorrect Answer😐\n")
  }
  console.log("Your current score is "+score);
}
question=[{
  ques:"Where do I live?\n",
  ans:"Ghaziabad"},
{
  ques:"Whats my favourite color?\n",
  ans:"Black",
},
{
  ques:"Do I like Bangalore or Pune?\n",
  ans:"Bangalore",
},
{
  ques:"What would i choose ? Pizza🍕 or Burger🍔?\n",
  ans:"Burger",
},
{
  ques:"What do i like? Beaches or mountains?\n",
  ans:"beaches",
},
{
  ques:"Do i like dogs or cats?\n",
  ans:"dogs",
},
{
  ques:"Do i watch serial killer documentaries?\n",
  ans:"Yes",
},
{
  ques:"Do I prefer Chai or coffe?\n",
  ans:"chai",
}]

welcomeUser();

for(i=0;i<question.length;i++){
  curr=question[i]
  quiz(curr.ques,curr.ans)
}


console.log("Your Final score is "+score)
