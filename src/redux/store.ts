import { createStore } from 'redux';
import contadorReducer from './reducers/contadorReducer';

const store = createStore(contadorReducer);

export default store;
