"use strict";

console.log("Hello DeltaV");
function startGame() {
  var continueGame = confirm("Would you like to play a guessing game about me?");
  if(!continueGame) {
    alert("That's too bad, maybe next time!");
    return;
  }

  var answerKey = initGameValues();

};

function initGameValues() {
  const answerKey = [
    {
      question: "How old am I?",
      answer: _calculateAge(new Date("1996-06-05"))
    },
    {
      question: "What was my previous occupation before learning to write code?",
      answer: "Electrician"
    },
    {
      question: "How many full years of coding experience do I have? (Hint: I started on my birthday)",
      answer: _calculateAge(new Date("2017-06-05"))
    },
    {
      question: "Do I consider myself a morning person or a night owl?",
      answer: "Night Owl"
    },
    // {
    //   question: "How many motorcycles have I owned?",
    //   answer: "2"
    // }
  ];

  return answerKey;
}

//Age calculator - Not perfect but good enough
//https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

window.onload = startGame;