import {reducer} from './flux/reducer';

function createStore(reducer, initialState) {
    let state = initialState;
    return {
        dispatch: (action) => { state = reducer(action, state) },
        getState: () => state
    }
}

export const store = createStore(reducer, []);