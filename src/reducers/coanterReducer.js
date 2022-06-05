
const initialState = {
    value: 0,
    todo: [{
        "id": 1,
        "misson": "Test Görev 1"
    }]
};

const coanterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREASE':
            return { ...state, value: state.value - 1 };
        case 'DECREASETODO':
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.id)
            };
        case 'INCREMENTTODO':
            return {
                value: state.value + 1,
                todo: [
                    ...state.todo,
                    { id: state.value + 1, misson: action.misson }
                ]
            };

        case 'EDITTODO':
            return{
                ...state,
                todo: state.todo.map(todo =>
                    todo.id === action.id ? { ...todo, misson: action.misson } : todo
                  )
            }
        default:
            return state;
    }
}


export default coanterReducer;
