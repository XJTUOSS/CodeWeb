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
        title: "项目列表"
      }
    },
    {
      path: "/project/detail",
      name: "TestDetail",
      component: () => import("@/views/project/TestDetail.vue"),
      meta: {
        title: "项目详情",
        showLink: false
      }
    }
  ]
};
