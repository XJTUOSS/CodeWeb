import {
  useRoute,
  useRouter,
  type LocationQueryRaw,
  type RouteParamsRaw
} from "vue-router";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { isString, isEmpty } from "@pureadmin/utils";

//这个函数用于详情页的数据请求
export function useDetail() {
  const route = useRoute();
  const router = useRouter();
  const getParameter = isEmpty(route.params) ? route.query : route.params;

  //这里是根据路由参数进行请求数据
  function fetchDetail(
    //参数类型可以是query属性传来的参数或者params属性传来的参数
    parameter: LocationQueryRaw | RouteParamsRaw,
    //model是用于判断是query还是params
    model: "query" | "params"
  ) {
    // ⚠️ 注意：Vue Router 解析路由参数时会将参数值自动转换为字符串类型
    // 如果参数值是数字类型，需要手动转换为字符串类型，为了避免后续使用时出现类型错误
    Object.keys(parameter).forEach(param => {
      if (!isString(parameter[param])) {
        parameter[param] = parameter[param].toString();
      }
    });

    if (model === "query") {
      // 保存信息到标签页
      useMultiTagsStoreHook().handleTags("push", {
        path: `/project/query-detail/`,
        name: "ProjectQueryDetail",
        query: parameter
      });
      // 路由跳转
      router.push({ name: "ProjectQueryDetail", query: parameter }).then(() => {
        console.log("跳转成功");
      });
    } else if (model === "params") {
      useMultiTagsStoreHook().handleTags("push", {
        path: `/project/params-detail/:id`,
        name: "ProjectParamsDetail",
        params: parameter
      });
      router
        .push({ name: "ProjectParamsDetail", params: parameter })
        .then(() => {
          console.log("跳转成功");
        });
    }
  }

  // 用于页面刷新，重新获取浏览器地址栏参数并保存到标签页
  function initToDetail(model) {
    if (getParameter) {
      fetchDetail(getParameter, model);
    }
  }

  return { fetchDetail, initToDetail, getParameter, router };
}
