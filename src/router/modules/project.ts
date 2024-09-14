export default {
  path: "/project",
  name: "Project",
  redirect: "/project/manage",
  meta: {
    title: "项目管理",
    icon: "ri:projector-line",
    showLink: true,
    rank: 1
  },
  children: [
    {
      path: "/project/manage",
      name: "ProjectManagement",
      component: () => import("@/views/project/ProjectManagement.vue"),
      meta: {
        title: "项目列表",
        keepAlive: true
      }
    },
    {
      path: "/project/detail",
      name: "ProjectQueryDetail",
      component: () => import("@/views/project/query-detail.vue"),
      meta: {
        title: "项目详情",
        showLink: false,
        activePath: "/project/manage",
        keepAlive: false
      }
    }
  ]
} satisfies RouteConfigsTable;
