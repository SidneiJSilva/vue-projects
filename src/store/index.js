import Vue from 'vue'
import Vuex from 'vuex'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    user: {
      email: '',
      uid: ''
    },
    loginErrors: {
      code: '',
      message: ''
    }
  },
  mutations: {
    setUser (state, payload) {
      state.logged = payload.status
      state.user.email = payload.email
      state.user.uid = payload.uid
    },
    setLoginError (state, payload) {
      state.loginErrors.code = payload.errorCode
      state.loginErrors.message = payload.errorMessage
    }
  },
  actions: {
    login ({ commit }, payload) {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, payload.email, payload.passwd)
        .then((userCredential) => {
          const user = userCredential.user
          user.status = true
          commit('setUser', user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          commit('setLoginError', { errorCode: errorCode, errorMessage: errorMessage })
        })
    },
    createUser ({ commit }, payload) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, payload.email, payload.passwd)
        .then((userCredential) => {
          const user = userCredential.user
          commit('setUser', user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          commit('setLoginError', { errorCode: errorCode, errorMessage: errorMessage })
        })
    },
    checkUser ({ commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          commit('setUser', { email: user.email, uid: user.uid, status: true })
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
    },
    logout ({ commit }) {
      const auth = getAuth();
      signOut(auth).then(() => {
        commit('setUser', { email: '', uid: '', status: false })
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }
  },
  modules: {
  }
})
