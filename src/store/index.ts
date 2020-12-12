import { rootReducer } from './rootReducer'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default store
