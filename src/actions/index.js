import * as actionTypes from "../constants/actionTypes";

export const incrementAction = (payload) => ({
    type: actionTypes.INCREMENT,
    payload
});


export const decreaseAction = (payload) => ({
    type: actionTypes.DECREASE,
    payload
});
export const incrementTodoAction = (misson) => ({
    type: actionTypes.INCREMENTTODO,
    misson
});


export const decreaseTodoAction = (id) => ({
    type: actionTypes.DECREASETODO,
    id
});

export const editTodoAction = (id,misson)=>({
    type: actionTypes.EDITTODO,
    id,
    misson
});