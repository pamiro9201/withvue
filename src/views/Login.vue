<template>
  <div class="login pt-5">
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      class="mx-auto w-25 p-15 mb-2 bg-light"
    >
      <b-container class="bv-example-row pt-5 pb-5 border border-info">
        <b-row class="text-center">
          <b-col cols="12">
            <b-img
              v-bind="logoProps"
              src="../assets/logo-skyangel.png"
              alt="logo"
            />
            <Login loggedStatus="Loging" />
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col cols="12">
            <b-form-group
              id="Username"
              label="Username:"
              label-for="loginPage"
              description="Is nesesary yourś username"
            >
              <b-form-input
                id="usernameId"
                type="text"
                v-model="form.user"
                required
                placeholder="Username"
              />
            </b-form-group>
            <b-form-group
              id="password"
              label="Your password:"
              label-for="password"
            >
              <b-form-input
                id="passwordId"
                type="password"
                v-model="form.psw"
                required
                placeholder="Enter you password"
              />
            </b-form-group>
            <p>
              {{ message }}
            </p>
            <span class="badge">
              <b-button type="submit" variant="primary" span>login</b-button>
            </span>
            <b-button type="reset" variant="danger">Cancel</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import Login from "@/components/Login.vue";

export default {
  name: "login",
  data() {
    return {
      message: " ",
      form: {
        user: "",
        psw: ""
      },
      logoProps: { width: 75, height: 90 }
    };
  },
  components: {
    Login
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form));
      axios
        .post(
          "http://localhost/login/index.php/Auth_controller/login",
          JSON.stringify(this.form)
        )
        .then(response => {
          alert(response.data.jwt);
          this.$store.commit('set_jwt', response.data.jwt)
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.message= error.response.data.message;
          this.$store.commit('set_sessionStatus', error.response.data.message);
          alert(this.$store.getters.sessionStatus);
      });      
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.user = "";
      this.form.psw = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
