var readLineSync = require("readline-sync")


function printLine(){
  console.log("------------------------------")
}
console.log("Welcome to 'Do you know me ?''")
printLine()


var score = 0

var userName = readLineSync.question("Enter your name to begin: ")
console.log("Welcome "+userName+" ")
console.log("Choose correct option")
printLine()


questionBank = [
    {
      "question":"1. What's my favourite TV show ?\na.Friends \nb.Punisher \nc.Game of thrones\n",
      "answer": "c"
    },
    {
      "question":"2. Who is my favourite marvel superhero ?\na.Thor \nb.DeadPool \nc.IronMan\n",
      "answer": "b"
    },
    {
      "question":"3. Which musical instrument I used to play ?\na. Guitar \nb.Harmonica \nc.Piano\n",
      "answer":"b"
    },
    {
      "question":"4. Which of the following best suits me ?\na.psychopath \nb.sociopath \nc.introvert\n",
      "answer":"c"
    },
    {
      "question":"5. which socialmedia I use the most ?\na.Instagram \nb.Snapchat \nc.Facebook\n",
      "answer":"a"
    }
]


function quiz(question, answer){
  var userAnswer = readLineSync.question(questionBank[i]['question']+"\n> ")
  if(userAnswer === questionBank[i]['answer']){
      score++
      console.log("Right!!")
    }
    else{
      console.log("Wrong!! Its "+questionBank[i]['answer'])
      score--
    }
  console.log("Current score: "+score+"\n")
  printLine()
  }

for (var i = 0; i < questionBank.length; i++)
{
  quiz(questionBank[i]['question'], questionBank[i]['answer'])
}
console.log("You final score is: "+ score)
console.log("You really know me well!!")


