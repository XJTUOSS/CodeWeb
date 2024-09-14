export default {
  path: "/project",
  redirect: "/project/manage",
  meta: {
    title: "项目管理",
    icon: "ri:projector-line"
  },
  children: [
    {
      path: "/project/manage",
      name: "ProjectManagement",
      component: () => import("@/views/project/ProjectManagement.vue"),
      meta: {
        title: "项目列表",
        showLink: true
      }
    },
    {
      path: "/project/query-detail",
      name: "ProjectQueryDetail",
      component: () => import("@/views/project/ProjectDetail.vue"),
      meta: {
        title: "项目详情",
        showLink: false,
        activePath: "/project/manage",
        keepAlive: false
      }
    }
  ]
} satisfies RouteConfigsTable;
