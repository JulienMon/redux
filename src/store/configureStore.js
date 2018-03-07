import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers'

export default initialState => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
}
