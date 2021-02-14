const quizData = [


{
   question : "What is the full form of HTML?",

   a: "Hyper link markup language",
   b:"Hyper text markup language",
   c:"Hyper text makeup language ",
   d:"none of the above",
   correct:"b",
},
{
   question : "How do you inset background image in css?",

   a: "background=abc.jpg;",
   b:"background-image=abc.jpg;",
   c:"image=abc.jpg;",
   d:"none of the above",

   correct:"b",
},
{
    question : "Member of the dog family; females are called vixens; mostly nocturnal.",

   a: "Coyote",
   b:" Tasmanian Devil",
   c:"Dingo ",
   d:"Red fox",

   correct:"c",
},
{
    question : "Second largest living land animal; name means hairless except for some bristles on the muzzle.",

   a: "Hippopotamus",
   b:"walrus",
   c:"seal",
   d:"Rhinoceros",

   correct:"a",
}

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
  deselectAnswers ();
  const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
              answer = answerEL.id;
            }

      });

      return answer;

  }

function deselectAnswers () {
  answerEls.forEach(answerEL=> {
            answerEL.checked = false;

      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();

   if(answer){
         if(answer === quizData[currentQuiz].correct){

          score++;
         }

         currentQuiz++;

         if(currentQuiz < quizData.length){
          loadQuiz();
         }
         else{
          quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});