
const initModel = {
    questions:[
      {
        id: 0,
        question:'Question 1',
        correctAnswer: 'a',
        isCorrect: false,
        answers:[
            {
                id:'a',
                answer:'Choice 1 a',
              },
              {
                id:'b',
                answer:'Choice 1 b',
              },
              {
                id:'c',
                answer:'Choice 1 c'
              }
        ],
      },
      {
        id: 1,
        question:'Question 2',
        correctAnswer: 'c',
        isCorrect: false,
        answers:[
            {
                id:'a',
                answer:'Choice 2 a',
              },
              {
                id:'b',
                answer:'Choice 2 b',
              },
              {
                id:'c',
                answer:'Choice 2 c'
              }
        ],
      },
      {
        id: 2,
        question:'Question 3',
        correct: 'a',
        correctAnswer: 'b',
        isCorrect: false,
        answers:[
          {
            id:'a',
            answer:'Choice 3 a',
          },
          {
            id:'b',
            answer:'Choice 3 b',
          },
          {
            id:'c',
            answer:'Choice 3 c'
          }
        ],
      }
    ],
    currentQuestion: 0,
    correctAnswers:0,
    maxQuestions: 2,
    minQuestions: 0,
    showSumbitButton: false,
    showSubmitPanel: false,
  }

  export default initModel;