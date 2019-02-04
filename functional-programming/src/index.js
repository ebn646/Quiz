
import { h, diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import view from './view';
import { MSGS } from './update';
import initModel from './model';


function update(msg,model,answer){
  switch(msg){
      case MSGS.GO_NEXT:
        if(model.currentQuestion < model.maxQuestions){
          return { ...model, currentQuestion: model.currentQuestion + 1 }
        }
        if(model.currentQuestion == model.maxQuestions){
          return { ...model, showSumbitButton: true }
        }
        break;
      case MSGS.GO_PREV:
        if(model.currentQuestion > model.minQuestions){
          return { ...model, currentQuestion: model.currentQuestion - 1 }
        }
        break;
      case MSGS.GET_RESULTS:
          return { ...model, showSubmitPanel: true }
      case MSGS.ON_RESET:
        return { ...model, currentQuestion: 0, correctAnswers: 0, showSubmitPanel: false, showSumbitButton: false }
      case MSGS.ON_ANSWER:
        var index = model.questions[model.currentQuestion];
        if(index.correctAnswer == answer.id){
          model.questions[model.currentQuestion].isCorrect = true;
        }else{
          model.questions[model.currentQuestion].isCorrect = false;
        }
        return model;
       default:
        return model;
  }
  return model;
}

// Impure app method

function app(initModel,update,view,node){
    let model = initModel;
    let currentView = view(dispatch, answer, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);

    function answer(msg,model,answer){
      var updated = update(msg,model,answer)
    }

    function dispatch(msg,model){
      model = update(msg,model);
      const updatedView = view(dispatch, answer, model);
      var inputs = document.querySelectorAll('input');

      inputs.forEach( item => {
        item.checked = false;
      });

      const patches = diff(currentView, updatedView);
      rootNode = patch(rootNode, patches);
      currentView = updatedView;
    }
}

const rootNode = document.getElementById('app');

app(initModel,update,view,rootNode);