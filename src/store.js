import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessionStatus: "nologged",
    currentPage: "login"
  },
  mutations: {
    change(state, currentPage){
      state.currentPage=currentPage
    },
    set_sessionStatus(state, sessionStatus){
      state.sessionStatus= sessionStatus 
    }
  },
  getters:{
    sessionStatus: state => state.sessionStatus,
    currentPage: state => state.currentPage
  },
  actions: {}
});
