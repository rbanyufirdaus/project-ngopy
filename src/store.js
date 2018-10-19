import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebaseConfig.js')

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if(user){
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')

    fb.kajianCollection.orderBy('tanggal','desc').onSnapshot(querySnapshot=>{
      let kajianArray = []

      querySnapshot.forEach(doc=>{
        let kajian = doc.data()
        kajian.id = doc.id
        kajianArray.push(kajian)
      })

      store.commit('setKajian', kajianArray)
    })
  }
})

const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    kajian: []
  },
  mutations: {
    setCurrentUser(state, val){
      state.currentUser = val
    },
    setUserProfile(state, val){
      state.userProfile = val
    },
    setKajian(state, val){
      state.kajian = val
    }
  },
  actions: {
    fetchUserProfile({commit,state}){
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setUserProfile', res.data())
      }).catch(err => {
        console.log(err)
      })
    },
    clearData({commit}){
      commit('setCurrentUser', null)
      commit('setUserProfile', {})
      commit('setKajian', null)
    }
  }
})
export default store