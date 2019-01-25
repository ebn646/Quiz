
const initModel = {
    questions:[
      {
        id: 0,
        question:'How many stars has the American flag got?',
        correctAnswer: 'a',
        isCorrect: false,
        answers:[
            {
                id:'a',
                answer:'Fifty',
              },
              {
                id:'b',
                answer:'Forty-eight',
              },
              {
                id:'c',
                answer:'Fifty-two'
              }
        ],
      },
      {
        id: 1,
        question:'In which European city can you find the home of Anne Frank?',
        correctAnswer: 'c',
        isCorrect: false,
        answers:[
            {
                id:'a',
                answer:'Hamburg',
              },
              {
                id:'b',
                answer:'Paris',
              },
              {
                id:'c',
                answer:'Amsterdam'
              }
        ],
      },
      {
        id: 2,
        question:'According to the Bible, who was the first murderer?',
        correct: 'a',
        correctAnswer: 'b',
        isCorrect: false,
        answers:[
          {
            id:'a',
            answer:'Abel',
          },
          {
            id:'b',
            answer:'Cain',
          },
          {
            id:'c',
            answer:'Jesus'
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