import hh from 'hyperscript-helpers';
import h from 'hyperscript';
import { MSGS } from './update';

const { pre, div, button, ul, li, input, label,form, fieldset } = hh(h);

const buttonSet = (dispatch,model) => {
    if(!model.showSumbitButton)
        return div([
            button({ 
                onclick: function (e) {
                dispatch(MSGS.GO_PREV,model);
                e.preventDefault()
                }
            }
            ,'Previous Question'),
            button({ 
                onclick: function (e) {
                dispatch(MSGS.GO_NEXT,model);
                }
            },'Next Question')
        ])

    if(model.showSumbitButton)
        return div(
            button({ 
            onclick: function (e) {
                dispatch(MSGS.GET_RESULTS,model);
                }
            },'SUBMIT')
        )
}

const questionPanel = (answer,model) =>{
    // return the current question data based on the current state
    return div([
        div('Quiz on Important Facts'),
        div('.question', model.questions[model.currentQuestion].question),
        form(
            fieldset('#answer-form', model.questions[model.currentQuestion].answers.map( item =>
            ([
              label({ className: 'db mb1' }, item.answer),
              input({
                className: "pa2 input-reset ba w-100 mb2",
                type: "radio",
                name: item.id,
                value: item.id,
                id: item.id,
                onchange: e => {
                    let selected = e.target.value;
                    let id = e.target.getAttribute('id');
                    var obj = {
                        copy: selected,
                        id: id
                    }
                    answer(MSGS.ON_ANSWER,model,obj);
                }
              })
            ]))
        ))
    ])
}

const getResults = model => {
    var total = 0;
    model.questions.forEach(function(item){
        if(item.isCorrect){
            total++;
        }
    });

    return total;
}

const resultsPanel = (dispatch,model) => {
    var totalCorrect = getResults(model);
    var totalQuestions = model.questions.length;
    var percentage = Math.floor(totalCorrect/totalQuestions * 100);
    return div(
        div('HERE ARE YOUR RESULTS!'),
        div('YOU GOT '+ totalCorrect +' OUT OF ' + totalQuestions + ' CORRECT!'),
        div('YOUR SCORE IS ' + percentage +  '%!'),
        div([
            button({ 
              onclick: function (e) {
                dispatch(MSGS.ON_RESET,model);
                e.preventDefault()
              }
            }
            ,'TRY AGAIN'),
    ]))
}

function view(dispatch,answer,model){
    if(model.showSubmitPanel){
        return div({ className: 'mv6 center'},[
            resultsPanel(dispatch,model)
        ]);
    }

    return div({ className: 'mv6 center'},[
        questionPanel(answer,model),
        buttonSet(dispatch,model)
    ]);
} 

export default view;
