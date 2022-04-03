import Vue from 'vue'
import Vuex from 'vuex'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, onValue, update } from "firebase/database";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    logged: false,
    user: {
      email: '',
      uid: ''
    },
    loginErrors: {
      code: '',
      message: ''
    },
    boxes: {}
  },
  mutations: {
    updateBoxes (state, payload) {
      state.boxes = payload
    },
    setUser (state, payload) {
      state.logged = payload.status
      state.user.email = payload.email
      state.user.uid = payload.uid
    },
    setLoginError (state, payload) {
      state.loginErrors.code = payload.errorCode
      state.loginErrors.message = payload.errorMessage
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      const auth = getAuth()
      commit('setLoading', true)
      signInWithEmailAndPassword(auth, payload.email, payload.passwd)
        .then((userCredential) => {
          const user = userCredential.user
          user.status = true
          commit('setUser', user)
          commit('setLoading', false)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          commit('setLoginError', { errorCode: errorCode, errorMessage: errorMessage })
          commit('setLoading', false)
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
          commit('setUser', { email: user.email, uid: user.uid, status: true })
        }
      })
    },
    logout ({ commit }) {
      const auth = getAuth();
      signOut(auth).then(() => {
        commit('setUser', { email: '', uid: '', status: false })
      }).catch((error) => {
        console.log(error)
      });
    },
    checkData ({ commit }) {
      const db = getDatabase();
      const starCountRef = ref(db, 'hash/')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        commit('updateBoxes', data)
      });
    },
    updateBox ({ commit }, payload) {
      console.log(commit)
      const db = getDatabase()

      const round = {}
      round['hash/' + payload.key] = payload.value
      update(ref(db), round)

      const last = {};
      last['hash/last_move'] = payload.value.uuid
      update(ref(db), last)
    },
    newGame () {
      const db = getDatabase()

      const boxes = {
        box1: {
          email: '',
          uuid: ''
        },
        box2: {
          email: '',
          uuid: ''
        },
        box3: {
          email: '',
          uuid: ''
        },
        box4: {
          email: '',
          uuid: ''
        },
        box5: {
          email: '',
          uuid: ''
        },
        box6: {
          email: '',
          uuid: ''
        },
        box7: {
          email: '',
          uuid: ''
        },
        box8: {
          email: '',
          uuid: ''
        },
        box9: {
          email: '',
          uuid: ''
        }
      }
      const payload = {}
      payload['hash/'] = boxes
      update(ref(db), payload)

      const last = {};
      last['hash/last_move'] = ''
      update(ref(db), last)
    }
  },
  modules: {
  }
})
