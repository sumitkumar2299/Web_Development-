import { createStore } from "redux";

function todoReducer(state,action){
    if(action.type == 'add_todo'){
        const todoText = action.payload.todoText
        return[
            ...state,
            {text:todoText,isFinished:false,id:(state.length == 0)? 1: state[state.length-1].id+1}
        ]
        
    } else if(action.type == 'delete_todo'){
        const todo = action.payload.todo;
        return state.filter(t=>t.id != todo.id);
    } else if(action.type == 'edit_todo'){
        const todo = action.payload.todo;
        const todoText= action.payload.todoText;
        return state.map(t=>{
            if(t.id == todo.id){
                t.text = todoText
            }
            return t;
        })
    }
    return state;
}

// const response = createStore(todoReducer,[])
// console.log(response);


const {dispatch, subscribe, getState, replacereducer} = createStore(todoReducer,[]);
subscribe(()=>console.log(getState())); // jab bhi humara state update hoga na subscribe 
// method execute ho jayegi. 

dispatch({type:'add_todo', payload:{todoText:'todo1'}});


dispatch({type:'add_todo', payload:{todoText:'todo2'}});

