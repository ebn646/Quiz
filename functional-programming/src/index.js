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
                answer:'Choice a',
              },
              {
                id:'b',
                answer:'Choice b',
              },
              {
                id:'c',
                answer:'Choice c'
              }
        ],
        correctAnswer: 'a'
      },
      {
        id: 1,
        question:'Question 1',
        answers:[
            {
                a:'Choice a',
              },
              {
                b:'Choice b',
              },
              {
                c:'Choice c'
              }
        ],
        correctAnswer: 'a'
      },
      {
        id: 2,
        question:'Question 1',
        answers:[
          {
            a:'Choice a',
          },
          {
            b:'Choice b',
          },
          {
            c:'Choice c'
          }
        ],
        correctAnswer: 'a'
      }
    ],
    currentQuestion: 0,
    correctAnswers:0
  }

  const MSGS = {
      GO_NEXT: 'GO-NEXT'
  }

 function view(model){
     return div([
         div('Quiz on Important Facts'),
         div(
         ul('#answer-menu', model.questions[model.currentQuestion].answers.map( item =>
            li(item.id, item.answer))
          )),
         div([
            button({ },'Previous Question'),
            button({ },'Next Question')
         ])
     ])
 }

 function update(msg,model){
    switch(msg){
        case MSGS.GO_NEXT:
            return { ...model, currentQuestion: currentQuestion++ }
        return model;
    }
 }
// Impure app method

function app(model,update,view,node){
    let model = initModel;
    let currentView = view(model);
    node.appendChild(currentView);
}

app(initModel,update,view,rootNode);

 const rootNode = document.getElementById('app');
 rootNode.appendChild(view(initModel))