<template>
  <v-navigation-drawer app permanent>
    <router-link to="/" exact>
      <v-img src="@/assets/vue_display.jpg"></v-img>
    </router-link>

    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          v-for="([icon, text, route], index) in menus"
          :key="index"
          link
          @click="onClickmenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-text-box-check-outline", "About", "/about"],
      ],
    };
  },
  methods: {
    onClickmenu(route) {
      // this.$router.push(route).catch(err => {});
      console.log(route)
    },
  },
};
</script>

<style>
.pic {
  width: 100%;
}
</style>
