import React from "react";


import "./quiz.css"
import {useState} from 'react';
import {questions} from "./questions.jsx";

/* buttons can only be clicked once,
score is only recorded once.
restart quiz works

now
when click check scores make correct awnsers go green, incorrect go red

put loads of questions in questions.js and randomise which one is picked in each of the 5 indexs below - given bugs

*/


 function App(props) {

  

  const [startQuiz, setStartQuiz] = useState(true);

  function startClick() {
  setStartQuiz(current => !current);
  

   }

   

  const [score, setScore] = useState(0);

   const optionClicked = (optionId, isCorrect, answer) => {
     const newDisabledArray = [...disabled, optionId];
     setDisabled(newDisabledArray)
     const newClickedArray = [...button, answer];
     setButton(newClickedArray);
       if (isCorrect) {
        setScore(score + 1);
     }
     }



const [button, setButton] = useState([]);

const [disabled, setDisabled] = useState([]);

const [showResults, setShowResults] = useState(true);

function resultsClick() {
  setShowResults(current => !current);
 }


 function restartQuiz() {
  setStartQuiz(current => !current);
  setShowResults(current => true);
  setScore(0);
  setDisabled(current => []);
  setButton(current => []);
 }


 /*mathrandom to randomly select a question from the Questions file. I have encountered a bug if the indexs are replaced with
 first, second, third, fourth.  


 function randomize(n){
  return Math.floor(Math.random() * n);
}



 const n = questions.length;
 const first = randomize(6);
 const second = randomize(6);
 const third = randomize(6);
 const fourth = randomize(6);*/



 




  return(
    <div>
    {startQuiz ? 
      <div className="start-screen">
      <div className="start-text">
        <h1>Quizzical</h1>
          <p>Test your knowledge!</p>
          <button onClick={startClick}>Start Quiz</button>
       </div>
       
     </div> 
     
     : 


     <div className="quiz">
     
      
       <div className="firstQuestion">
          <h2>{questions[0].questionText}</h2>
          </div>
            <div className="firstAnswers">
            {questions[0].answerOptions.map((answerOption) => {
              const {id, isCorrect, answer, answerOptions} = answerOption
            return (
              <button
                
                className={button.includes(answer) ? "buttonClicked" : "button"}
              
                key={answer}
                
                disabled={disabled.includes(id)}

                onClick={() => { 
                  optionClicked(id, isCorrect, answer);

                
                }}
               
                >
                {answerOption.answerText}
              </button>
                  );
                }
              )}
                  </div>


        <div className="secondQuestion">
          <h2>{questions[1].questionText}</h2>
          </div>
            <div className="secondAnswers">
              {questions[1].answerOptions.map((answerOption) => {
                const {id, isCorrect, answer, answerOptions} = answerOption
              return (
                <button 

                className={button.includes(answer) ? "buttonClicked" : "button"}

                key={answer}
                
                disabled={disabled.includes(id)}

                onClick={() => { 
                  optionClicked(id, isCorrect, answer);
                
                }}>
                {answerOption.answerText}
              </button>
                  );
                }
              )}
                  </div>

        <div className="thirdQuestion">
          <h2>{questions[2].questionText}</h2>
          </div>
            <div className="thirdAnswers">
              {questions[2].answerOptions.map((answerOption) => {
                const {id, isCorrect, answer, answerOptions} = answerOption
                return (
                  <button 
                  
                    className={button.includes(answer) ? "buttonClicked" : "button"}
                   

                    key={answer}
                    
                    disabled={disabled.includes(id)}
     
                    onClick={() => { 
                      optionClicked(id, isCorrect, answer);
                    
                    }}>
                    {answerOption.answerText}
                  </button>
                  );
                }
              )}
                  </div>

       <div className="fourthQuestion">
          <h2>{questions[3].questionText}</h2>
          </div>
            <div className="fourthAnswers">
              {questions[3].answerOptions.map((answerOption) => {
             const {id, isCorrect, answer, answerOptions} = answerOption
             return (
               <button 
                
                 className={button.includes(answer) ? "buttonClicked" : "button"}
               
               
               
                 key={answer}
                 
                 disabled={disabled.includes(id)}
 
                 onClick={() => { 
                  optionClicked(id, isCorrect, answer);
                 
                 }}>
                 {answerOption.answerText}
               </button>
                  );
                }
              )}
                  </div>

      
<br></br>
      <div className="resultsSection">
         <button

           className="button"
         
           onClick={()=> resultsClick()}>
           Submit!
         </button>
         <h3 className="resultsText">{showResults ? <p>Score:</p> : <p>Score: {score}/4</p>}</h3>
         <button className="button" onClick={restartQuiz}>Restart Quiz</button>
     </div>


</div>

      
}
</div>

  )
  

}

 
 
export default App;