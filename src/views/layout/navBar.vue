<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-nav>
      <b-nav-item active @click='set_currentPage("home")'>Home</b-nav-item>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown v-for="(item, inde) in nav_" :key="inde" v-bind:text="item.element" left>              
        <div v-for="(ite, index) in nav_item" :key="index">
          <div v-if = "item.element === ite.element" >
            <b-dropdown-item  @click="set_currentPage(ite.navlink)"> <!--v-bind:href="it" -->
              {{ ite.item }}
            </b-dropdown-item>
          </div>
        </div>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: 'navBar',
      userLevel: 1,
      nav_: [],
      nav_item: [],
      nav_items: {
        Blog: {"Tema 1": 'tem_1', 'Tema 2': 'tem_2', 'Tema 3': 'tem_3', 'Tema 4': 'tem_4'},
        Contact: {'Ask a cuestion ?': 'askUs', 'Send a suggestion': 'suggestion', 'Who are us ?': 'us'},
        Profile: {'Profile': 'profile', 'Settings': 'settings', 'Logout': 'login'},
      },
    }
  },
  created: function(){
    console.log("staring ...");
    this.get_contacts();    
  },
  methods: {
    get_contacts: function(){
      axios
        .post(
          "http://localhost/login/index.php/get_navbar",{
          user: this.userLevel
          } 
        )
        .then(response => {
          this.nav_ = response.data.nav;
          this.nav_item= response.data.nav_items;
        })
        .catch(error => {
          console.log(error);
        });
    },
    set_currentPage(ask) {
      if (ask === "login") {
        this.$store.commit('set_sessionStatus', 'nologged')
        this.$store.commit('change', ask)
        this.$router.push({name: ask})
        this.$router.push({name: ask})
      }
      if (this.$store.getters.sessionStatus === "logged") {
        //this.$store.commit('change', ask)
        //this.$router.push({name: ask})
      }
      //return location.href = ask
    }
  },
  computed: {}
};
</script>
