import hh from 'hyperscript-helpers';
import h from 'hyperscript';

const { pre, div, button, ul, li } = hh(h);

const MSGS={
    GO_NEXT : 'GO_NEXT'
}

const initModel = {
    questions:[
      {
        id: 0,
        question:'Question 1',
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
        correctAnswer: 'a'
      },
      {
        id: 1,
        question:'Question 2',
        answers:[
            {
                a:'Choice 2 a',
              },
              {
                b:'Choice 2 b',
              },
              {
                c:'Choice 2 c'
              }
        ],
        correctAnswer: 'a'
      },
      {
        id: 2,
        question:'Question 3',
        answers:[
          {
            a:'Choice 3 a',
          },
          {
            b:'Choice 3 b',
          },
          {
            c:'Choice 3 c'
          }
        ],
        correctAnswer: 'a'
      }
    ],
    currentQuestion: 0,
    correctAnswers:0
  }

 function view(model){
     return div([
         div('Quiz on Important Facts'),
         div('.question', model.questions[model.currentQuestion].question),
         div(
         ul('#answer-menu', model.questions[model.currentQuestion].answers.map( item =>
            li({id:item.id}, item.answer))
          )),
         div([
            button({ 
              onclick: function (e) {
                console.log('go to Previous Question!')
                update()
                e.preventDefault()
              }
            }
            ,'Previous Question'),
            button({ 
              onclick: function (e) {
                update(MSGS.GO_NEXT,model)
                e.preventDefault()
              }
            },'Next Question')
         ])
     ])
 }

 function update(msg,model){
    switch(msg){
        case MSGS.GO_NEXT:
            console.log('update go next was called!')
            return { ...model, currentQuestion: model.currentQuestion++ }
        return model;
    }
 }

// Impure app method

function app(model,update,view,node){
    model = initModel;
    let currentView = view(model);
    node.appendChild(currentView);
}

const rootNode = document.getElementById('app');

app(initModel,update,view,rootNode);