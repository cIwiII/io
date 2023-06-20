import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { exact: true, path: "/home", redirect: "/home/product" }, //重定向
    { path: "/", component: "@/pages/home" },
    { path: "/login", component: "@/pages/Login" },
    {
      path: "/home",
      component: "@/pages/Home",
      routes: [
        { exact: true, path: "/home", redirect: "/home/product" },
        { path: "/home/product", component: "@/pages/Product" }
      ]
    },
    { component: "@/pages/404" }
  ]
});
