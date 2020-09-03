let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

function buildQuiz(){
    // variable to store the HTML output
  let output = [];

  // for each question...
  questionsDisplayed.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      let answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter}. ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){
    // gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.answers');
      
    // keep track of user's answers
    let numCorrect = 0;
      
    // for each question...
    questionsDisplayed.forEach( (currentQuestion, questionNumber) => {
      
      // find selected answer
      let answerContainer = answerContainers[questionNumber];
      let selector = `input[name=question${questionNumber}]:checked`;
      let userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
      
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
      
    // show number of correct answers out of total
    resultsContainer.innerHTML = `Your score: ${numCorrect}/${questionsDisplayed.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
