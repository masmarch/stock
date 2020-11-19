<template>
  <v-container class="cardSize">
    <v-row class="justify-center">
      <v-card class="">
        <v-img
          class="imgLogin white--text align-end"
          src="@/assets/login_header.jpg"
        >
          <v-card-title primary-title>
            Login
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- username -->
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
            />

            <!-- password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="account.password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              v-bind:type="isShowPassword ? 'text' : 'password'"
              counter
            />

            <v-row class="justify-space-between px-3 pt-5">
              <v-btn text @click="$router.push('/register')">Register</v-btn>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      this.$router.push("stock")
      this.$store.dispatch({
        type: "doLogin",
        username: this.account.username,
        password: this.account.password,
      })
    },
  },
};
</script>

<style>
.cardSize {
  width: 500px;
}
.imgLogin {
  height: 250px;
}
</style>
