/*
 * @Author: zhangbinzhbb
 * @Date: 2021-02-24 17:23:33
 * @Last Modified by: zhangbiaobin
 * @Last Modified time: 2021-02-24 17:23:33
 */

import yButton from './button';
import ypagination from './pagination';
import ycommon from './common';
import ybuttonAction from './buttonAction';
import ylinkTag from './linkTag';
import yspin from './spin';
import ycustomTree from './customTree';
// ...如果还有的话继续添加
const components = [
  yButton,
  ypagination,
  ycommon,
  ybuttonAction,
  ylinkTag,
  yspin,
  ycustomTree,
  // ...如果还有的话继续添加
];

// 定义install方法，接收Vue作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component));
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))

  Vue.prototype.$YSpin = yspin; // 全局
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components,
};
