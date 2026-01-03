const initialState ={
    valor: 0
};

const contadorReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'INCREMENTAR':
            return{
             ... state,
                valor: state.valor + 1
            };
        case 'DECREMENTAR':
            return{
                ...state,
                valor: state.valor - 1
            };
        default:
            return state;
    }
};

export default contadorReducer;
