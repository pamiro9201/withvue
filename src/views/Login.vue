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
                id="exampleInput1"
                type="text"
                v-model="form.username"
                required
                placeholder="Username"
              />
            </b-form-group>
            <b-form-group
              id="exampleInputGroup2"
              label="Your Name:"
              label-for="exampleInput2"
            >
              <b-form-input
                id="exampleInput2"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter you password"
              />
            </b-form-group>
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
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
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
      alert(JSON.stringify(this.form));
      this.$router.push({ name: "home" });
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.username = "";
      this.form.password = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
