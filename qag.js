function addName(){
  var playerName = document.getElementById('userName').value;
  document.getElementById('displayName').innerHTML = "Hello " + playerName + ". When your ready Click to start the quiz";
}
function startQuiz(){

  document.getElementById('userName').style.display='none';
    document.getElementById('register').style.display='none';
    document.getElementById('startButton').style.display='none';
    document.getElementById('displayName').style.display='none';
    document.getElementById('name').style.display='none';
      document.getElementById('q1').style.display='block';
    document.getElementById('nextQuestion').style.display='block';

}
// quiz questin
var quizQuestions = [
  {
    Question: "What is the capital of Gambia?",
    answers: {
      a: "Bakau",
      b: "Banjul",
      c: "Brikama",
      d: "Brusubi"},
      rightAnswer: 'b'
  },
  {
    Question: "Which colour is not part of the Gambian flag",
    answers: {
      a: "Red",
      b: "Green",
      c: "Black",
      d: "Blue"},
      rightAnswer: 'c'
  },
  {
    Question: "Select the Biggest town in the Gambia",
    answers: {
      a: "Bakau",
      b: "Banjul",
      c: "Brikama",
      d: "Serrekunda"},
      rightAnswer: 'd'
  }
 ];


var questionsSection =document.getElementById('questions');

var answersA = document.getElementById('answersA');
var answersB = document.getElementById('answersB');
var answersC = document.getElementById('answersC');
var answersD = document.getElementById('answersD');
var nextQuestion = document.getElementById('nextQuestion');

var i = 0;
function displayQuiz() {


  questionsSection.innerHTML= quizQuestions[i].Question;
  answersA.innerText = quizQuestions[i].answers.a;
    answersB.innerText = quizQuestions[i].answers.b;
    answersC.innerText = quizQuestions[i].answers.c;
    answersD.innerText = quizQuestions[i].answers.d;

}
//
displayQuiz();

// when user clicks next for the next question to appear
// need to check for correct answers
nextQuestion.addEventListener("click", () =>{
    i++;
  if (i<quizQuestions.length) {

    displayQuiz();
  }
  else {
    document.getElementById('qs').innerHTML = "All done, below is your score";
}


})
