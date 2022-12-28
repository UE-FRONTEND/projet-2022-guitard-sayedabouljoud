import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            attempts: []
        }
    },
    getters: {
        getAttemptById(state, id){
            return state.attempts.find(attempt => attempt.id == id)
        },
        getAll(state){
         return state.attempts
        }
    },
    mutations: {
        addAttempt(state, attempt){
            if(attempt.id === undefined){
                attempt.id = state.attempts.length
            }
            state.attempts.push(attempt)
        }
    }
})
