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

var questions = [
  {
    Question1: "What is the capital Gambia?",
    answers: {
      a: "Bakau",
      b: "Banjul",
      c: "Brikama",
      d: "Brusubi"},
      rightAnswer: 'b'
  }
 ];

 var quizLayout = document.getElementById('quizLayout');
 var  resultSection = document.getElementById('resultSection');
  var nextQuestion = document.getElementById('nextQuestion');

function displayQestion(question, quizLayout, resultSection, nextQuestion ){

  function showQuestions(question, quizLayout){

    var output = []; // store the output choices
    var answers;  // store the answer choices

    for (var i = 0; i < questions.length; i++) {

      answers = [];
      // to get acces to the objects in the array
      for(x in question[i].answers){

      }
    }
  }

}
