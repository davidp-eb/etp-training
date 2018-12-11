import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const todos = (state = [], {type, payload}) => {
    let nextState = state;
    //Si hacemos un state.push estariamos mutando el objeto por referencia
    // Y redux no se daría cuenta ya que el objeto es el mismo y no va a
    // mandar el evento de change por lo que la UI no se va a actualizar.
    if (type === 'ADD_TODO') {
        nextState = [...nextState, payload];
    }

    return nextState;
}

const myReducers = combineReducers({
    todos,
});
//Primer parametro es el reducer la funcion o la combinación de reducers.
//El segundo parámetro es la inicialización del store.
const store = createStore(
    myReducers,
    {todos: ['Foo']},
    composeWithDevTools(
        applyMiddleware(...[thunk], createLogger({collapsed: true}))
    ),
);

console.log(store.getState());
// ['Foo']

//Thunk nos provee del dispatch y del getState para que los pueda tener
// en donde necesite en la app.
const addTodos = () => (dispatch, getState) => {

    setTimeout(() => {
        dispatch({
            type: 'ADD_TODO',
            payload: 'After 3000',
        });
        console.log(getState());
    }, 3000);

    dispatch({
        type: 'ADD_TODO',
        payload: 'BAN',
    });

    dispatch({
        type: 'ADD_TODO',
        payload: 'Baz',
    });
};

store.dispatch(addTodos());

console.log(store.getState());
// ['Foo', 'Bar']
