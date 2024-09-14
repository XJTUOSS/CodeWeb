export default [
  {
    path: "/error",
    name: "Error",
    redirect: "/error/404",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "错误页",
      icon: "ri:error-warning-line",
      showLink: false
    },
    children: [
      {
        path: "/error/404",
        name: "Error404",
        component: () => import("@/views/error/404.vue"),
        meta: {
          title: "404",
          showLink: false
        }
      },
      {
        path: "/error/500",
        name: "Error500",
        component: () => import("@/views/error/500.vue"),
        meta: {
          title: "500",
          showLink: false
        }
      },
      {
        path: "/error/403",
        name: "Error403",
        component: () => import("@/views/error/403.vue"),
        meta: {
          title: "403",
          showLink: false
        }
      }
    ]
  }
];
