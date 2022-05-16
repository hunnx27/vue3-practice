import { createStore } from 'vuex'
import person from './modules/person'

export const store = createStore({
    modules: {person}
})