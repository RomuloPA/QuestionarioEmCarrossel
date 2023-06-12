function questionnairePage() {
  var div = document.getElementById("cover");
      div.style.display = "none";
  var div = document.getElementById("question-container");
      div.style.display = "block";
  var div = document.getElementById("stopwatch-container");
      div.style.display = "block";
  var div = document.getElementById("answers");
      div.style.display = "flex";
  }

function finalResult() {
  var div = document.getElementById("img");
      div.style.display = "none";
  var div = document.getElementById("nextQuestion");
      div.style.display = "none";
}

var questions = [
{
  question: "Pergunta 1: Quem construiu uma grande arca para salvar os animais do dilúvio?",
  choices: ["A - Moisés", "B - Noé", "C - Davi", "D - Abraão"],
  answer: "B"
},
{
  question: "Pergunta 2: Quem enfrentou um gigante chamado Golias com apenas uma pedra e uma funda?",
  choices: ["A - Sansão", "B - Jacó", "C - Davi", "D - Salomão"],
  answer: "C"
},
{
  question: "Pergunta 3: Quem foi tragado por uma baleia, mas sobreviveu e pregou a palavra de Deus em Nínive?",
  choices: ["A - Jonas", "B - Pedro", "C - Elias", "D - Isaías"],
  answer: "A"
},
{
  question: "Pergunta 4: Quem foi escolhido por Deus para libertar o povo de Israel da escravidão no Egito?",
  choices: ["A - Abraão", "B - José", "C - Moisés", "D - Ezequiel"],
  answer: "C"
},
{
  question: "Pergunta 5: Quem nasceu na manjedoura e é conhecido como o Filho de Deus?",
  choices: ["A - Jesus", "B - João Batista", "C - Paulo", "D - Lucas"],
  answer: "A"
},
{
  question: "Pergunta 6: Quem negou Jesus três vezes antes do galo cantar?",
  choices: ["A - Judas Iscariotes", "B - Pedro", "C - Tiago", "D - Tomé"],
  answer: "B"
},
{
  question: "Pergunta 7: Quem foi perseguido por um rei e teve de atravessar o Mar Vermelho para escapar?",
  choices: ["A - Josué", "B - Jó", "C - Samuel", "D - Moisés"],
  answer: "D"
},
{
  question: "Pergunta 8: Quem recebeu os Dez Mandamentos de Deus no topo do Monte Sinai?",
  choices: ["A - Elias", "B - Moisés", "C - Daniel", "D - Ezequiel"],
  answer: "B"
},
{
  question: "Pergunta 9: Quem foi o primeiro homem criado por Deus?",
  choices: ["A - Adão", "B - Caim", "C - Abel", "D - Noé"],
  answer: "A"
},
{
  question: "Pergunta 10: Quem foi lançado na cova dos leões por obedecer a Deus em vez de adorar outros?",
  choices: ["A - Jeremias", "B - Salomão", "C - Ezequias", "D - Daniel"],
  answer: "D"
},
];

var questionIndex = 0;
var score = 0;

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var nextButton = document.getElementById("nextQuestion");

function showQuestion() {
  var currentQuestion = questions[questionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = '<input type="radio" name="answer" value="' + currentQuestion.choices[i][0] + '"> ' + currentQuestion.choices[i];
      choicesElement.appendChild(li);

  }
  
}

var hh = 0;
var mm = 0;
var ss = 0;

var millisecondsPerSecond = 1000;
var stopwatch;

function start() {
  stopwatch = setInterval(() => { timer(); }, millisecondsPerSecond);
}

function pause() {
  clearInterval(stopwatch);
}

function timer() {
  ss++; 

  if (ss == 60) { 
      ss = 0; 
      mm++;

      if (mm == 60) { 
          mm = 0;
          hh++;
      }
  }

  var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
     
  document.getElementById('stopwatch').innerText = format;

  return format;
}

function checkAnswer() {
  var userAnswer = document.querySelector("input[name='answer']:checked"); 
  if (!userAnswer) { 
      alert("Selecione uma resposta!");
      return;
    }
  if (userAnswer !== null) {
    if (userAnswer.value === questions[questionIndex].answer) { 
      score++;
    }
    questionIndex++;
    if (questionIndex === questions.length) { 
      finalResult();
      pause();
      showResult();
    } else {
      showQuestion(); 
    }
  }
}

function showResult() {
  questionElement.textContent = "Você terminou o questionário!";
  choicesElement.innerHTML = "Você acertou: " + score + " de " + questions.length + " questões!";
  nextButton.disabled = true;
}

nextButton.addEventListener("click", checkAnswer);

showQuestion();


