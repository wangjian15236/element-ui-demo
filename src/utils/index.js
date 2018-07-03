/**
 *  使用通配符获取模块数组
 *  @param {Array} r require.context()
 *  @param {'router'|'store'} type
 *  @return Array
 */
export const importAll = (r, type) => {
  if (type !== 'router' && type !== 'store') {
    return console.warn("expected 'router' or 'store' only");
  }

  const list = [];

  r.keys().forEach(url => {
    const page = r(url).default;

    if (type === 'router') {
      if (!page.router.path) throw new Error(`${url} need to set path options`);
      if (!page.router.name) throw new Error(`${url} need to set name options`);

      list.push({
        path: page.router.path,
        name: page.router.name,
        component: page
      });
    }

    if (type === 'store') {
      list[page.namespace] = page;
    }
  });
  return list;
};

const getModulesArray = modules => {
  let arr = [];
  modules.keys().forEach(url => arr.push(modules(url).default));
  return arr;
};

export const importRouter = modules => {
  let arr = [];
  console.log(getModulesArray(modules))
  getModulesArray(modules).map(module => {
    const path = module.__file.replace('src', '@');
    console.log(path);
    arr.push({
      ...module.routers,
      component: () => require.ensure([], () => require('@/views/Dashboard/Analysis/index.vue').default)
    });
  });

  return arr;
};


export const test = {
  routes: [{
    name: 'analysis',
    path: '/dashboard/analysis',
    alias: '/',
    component: () => import('@/views/Dashboard/Analysis/index.vue')
  }]
}