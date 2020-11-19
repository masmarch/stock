<template>
  <v-container class="cardSize">
    <v-row class="justify-center">
      <v-card class="">
        <v-img
          class="imgLogin white--text align-end"
          src="@/assets/login_header.jpg"
        >
          <v-card-title primary-title>
            Register
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
              v-bind:rules="usernameRules"
            />
            <!-- password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              v-bind:type="isShowPassword ? 'text' : 'password'"
              v-model="account.password"
              v-bind:rules="passwordRules"
              counter
            />
            <span>{{ account }}</span>

            <v-row class="justify-space-between px-3 pt-5">
              <v-btn text @click="$router.back()">Cancel</v-btn>
              <v-btn type="submit" color="success">confirm</v-btn>
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
      // object call back
      usernameRules: [(v1) => !!v1 || "Username is requied"],
      passwordRules:
        [ (v1) => !!v1 || "Password is requied",
          (v2) => !!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters,at least on letter and one number"
        ]
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.account));
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
