import hh from 'hyperscript-helpers';
import { h, diff, patch } from 'virtual-dom';
import { MSGS } from './update';

const { pre, div, button, ul, li, input, label,form, fieldset } = hh(h);

const buttonSet = (dispatch,model) => {

        return div({ className: "center mw5 mw6-ns hidden mv4" },
            [
                // button({ 
                //     className: "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                //     onclick: function (e) {
                //     dispatch(MSGS.GO_PREV,model);
                //     e.preventDefault()
                //     }
                // }
                // ,'Previous'),
                button({ 
                    className: "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                    onclick: function (e) {
                    dispatch(MSGS.GO_NEXT,model);
                    }
                },'Next'),
                div(
                    button({ 
                        className:"submitbtn d-none",
                        onclick: function (e) {
                            dispatch(MSGS.GET_RESULTS,model);
                            }
                        },'SUBMIT')
                )
            ]) 
}

const questionPanel = (dispatch,answer,model) =>{
    // return the current question data based on the current state
    return div({ className: "center mw5 mw6-ns hidden mv4" },
    [
        div({className:'tc-l pv2'},'Quiz on Important Facts'),
        div({className:'tc-l pv2 question'}, model.questions[model.currentQuestion].question),
        form(
            fieldset('#answer-form', model.questions[model.currentQuestion].answers.map( item =>
            ([
            div({ className: 'flex items-center mb2'},
                [
                    input({
                        className: "mr2",
                        type: "radio",
                        name: model.questions[model.currentQuestion].id,
                        value: item.id,
                        id: item.answer,
                        onchange: e => {
                            console.log('change',e.target.checked)
                            let selected = e.target.value;
                            let id = e.target.getAttribute('id');
                            var obj = {
                                copy: selected,
                                id: id
                            }
                            answer(MSGS.ON_ANSWER,model,obj);
                            setTimeout(() => {
                                dispatch(MSGS.GO_NEXT,model);
                            },1000)
                        }
                    }),
                    label({ className: 'mr2' }, item.answer),
                ])
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
    return div({ className: "center mw5 mw6-ns hidden mv4 tc-l" },
        [
            div({className: 'mb3'},'HERE ARE YOUR RESULTS!'),
            
                div('YOU GOT '+ totalCorrect +' OUT OF ' + totalQuestions + ' CORRECT!'),
                div('YOUR SCORE IS ' + percentage +  '%!'),
                div([
                    button({ 
                    className:'mv4',
                    onclick: function (e) {
                        dispatch(MSGS.ON_RESET,model);
                        e.preventDefault()
                    }
                    }
                    ,'TRY AGAIN'),
            ])
      ]
   )
}

function view(dispatch,answer,model){
    if(model.showSubmitPanel){
        return div({ className: 'mv6 center'},[
            resultsPanel(dispatch,model)
        ]);
    }

    if(model.showSumbitButton){
        var submit = document.querySelector('.submitbtn').classList.remove('d-none');
    }

    return div({ className: 'mv6 center'},[
        questionPanel(dispatch,answer,model),
        buttonSet(dispatch,model)
    ]);
} 

export default view;
