import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessionStatus: "nologged",
    currentPage: "login",
    jwt: ""
  },
  mutations: {
    change(state, currentPage){
      state.currentPage=currentPage
    },
    set_sessionStatus(state, sessionStatus){
      state.sessionStatus= sessionStatus 
    },
    set_jwt(state, jwt){
      state.jwt= jwt
    }
  },
  getters:{
    sessionStatus: state => state.sessionStatus,
    currentPage: state => state.currentPage,
    currentjwt: state => state.jwt
  },
  actions: {}
});
