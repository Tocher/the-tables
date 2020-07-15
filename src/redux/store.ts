import {applyMiddleware, compose, createStore, MiddlewareAPI} from 'redux';
import {ReduxAction} from 'redux/redux';
import {State} from 'schema/State';

export function configureStore(state: State) {
    function reducer(state: any, action: ReduxAction<any>): State {
        if (action.payload) {
            state = action.payload;
        }

        return state;
    }

    function setState(payload: State, type: string = 'setState') {
        store.dispatch({type, payload});
    }

    function middleware({dispatch, getState}: MiddlewareAPI) {
        return (next: any) => (action: any) => {
            if (typeof action === 'function') {
                return action({
                    dispatch,
                    getState,
                    setState,
                });
            }

            return next(action);
        };
    }

    let enhancer = applyMiddleware(middleware);

    // if (IS_CLIENT && IS_DEVELOP) {
    //     let composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //     enhancer = composeEnhancers(enhancer);
    // }

    enhancer = compose(enhancer);

    let store = createStore<State, ReduxAction<any>, {}, {}>(reducer, state, enhancer);

    return store;
}
