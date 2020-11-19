import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Report from "@/views/Report.vue";
import Stock from "@/views/Stock.vue";
import StockCreate from "@/views/StockCreate.vue";
import StockEdit from "@/views/StockEdit.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/report",
    // meta: {isSecured: true}, // block path
    name: "Report",
    component: Report
  },
  {
    path: "/stock",
    // meta: {isSecured: true}, // block path
    name: "Stock",
    component: Stock
  },
  {
    path: "/stockcreate",
    // meta: {isSecured: true}, // block path
    name: "StockCreate",
    component: StockCreate
  },
  {
    path: "/stockedit/:id", //after : is param
    // meta: {isSecured: true}, // block path
    name: "StockEdit",
    component: StockEdit
  },
  {
    path: "/about",
    name: "About", 
    component :About
  },
  {
    // default first page Login
    path: "/",
    redirect: "/Login"
  },
  {
    path: "*", // debug router wrong
    redirect: "/Login" //page not found give redirect page Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
