function inicio() {
    var div = document.getElementById("cover");
        div.style.display = "none";
    var div = document.getElementById("question-container");
        div.style.display = "block";
    var div = document.getElementById("stopwatch-container");
        div.style.display = "block";
    var div = document.getElementById("answers");
        div.style.display = "flex";
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
  /*{
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
  },*/
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

//funções do cronômetro
var hh = 0;
var mm = 0;
var ss = 0;

var millisecondsPerSecond = 1000;
var stopwatch;

//Inicia o temporizador
function start() {
    stopwatch = setInterval(() => { timer(); }, millisecondsPerSecond);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(stopwatch);
}

/*function stop() {
    clearInterval(stopwatch);
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById('stopwatch').innerText = '00';
}*/

function timer() {
    ss++; 

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS    
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter    
    document.getElementById('stopwatch').innerText = format;

    //Retorna o valor tratado
    return format;
}





function checkAnswer() {
    var userAnswer = document.querySelector("input[name='answer']:checked"); /*está pegando o primeiro caractere da resposta que o 
    usuário selecionou*/
    if (!userAnswer) { /*se clicar no botão próxima sem selecionar nenhuma questão ele dá um alerta e não pula a questão*/
        alert("Selecione uma resposta!");
        return;
      }
    if (userAnswer !== null) {
      if (userAnswer.value === questions[questionIndex].answer) { /*está verificando se o primeiro caractere da resposta do usuário
       é igual ao caractere da resposta correta, e se for igual soma 1 no score*/
        score++;
      }
      questionIndex++;
      if (questionIndex === questions.length) { 
        showResult(); /*se o questionIndex for = a quantidade de elementos que existem na variável questions, então é dado o resultado
         final*/
      } else {
        showQuestion(); /*se não repete a função que chama outra questão*/
      }
    }
  }

  function showResult() {
    questionElement.textContent = "Você terminou o questionário!";
    choicesElement.innerHTML = "Sua pontuação: " + score + " de " + questions.length;
    nextButton.disabled = true;
  }

  nextButton.addEventListener("click", checkAnswer);

  showQuestion();


