import { rootReducer } from './rootReducer'
import { createStore } from 'redux'

/**
 * The app's main store
 */
const store = createStore(rootReducer)

export default store
