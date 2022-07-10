import * as $ from '../actions/action';

const initialState={
    data:[],
}

const reducerFunction=(state=initialState,action)=>{
    switch(action.type){
        case $.Add_Data:
            return {...state,data:action.payload};
            default:
                return state;
    }
}

export {reducerFunction}