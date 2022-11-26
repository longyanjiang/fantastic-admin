# 标签栏 <sup class="pro-badge" />

首先需要在应用配置里开启标签栏功能。

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    enable: true,
  },
}
```

## 功能介绍

### 刷新

对当前标签页进行刷新，非激活的标签页无法刷新，并且刷新操作会强制清除页面缓存数据。

<ZoomImg src="/tabbar1.gif" />

### 关闭

关闭标签页分关闭当前、关闭其它、关闭左侧、关闭右侧，当不满足关闭条件时，选项置灰，无法点击。

<ZoomImg src="/tabbar2.gif" />

### 固定

将指定标签页设为固定状态，固定的标签页右键无法直接关闭，同时也不会被关闭其它、关闭左侧、关闭右侧标签页操作所关闭。并且固定的标签页会被记录到浏览器缓存，下次访问将保留固定标签页状态。

<ZoomImg src="/tabbar3.gif" />

### 最大化

通过隐藏导航栏和顶栏，将操作内容区最大化。双击标签页可快速进入最大化。

<ZoomImg src="/tabbar4.gif" />

### 拖拽排序

<ZoomImg src="/tabbar5.gif" />

### 快捷操作下拉菜单

<ZoomImg src="/tabbar6.gif" />

## 标签页合并

当标签栏开启时，框架提供标签页是否合并的配置项，方便开发者应对需要合并标签页场景的需求。

以下面这段路由配置为例：

```ts
const routes: Route.recordRaw = {
  path: '/manager',
  meta: {
    title: '管理员管理',
  },
  children: [
    {
      path: '',
      name: 'ManagerList'
      meta: {
        title: '管理员列表',
      },
    },
    {
      path: 'detail',
      name: 'ManagerCreate',
      meta: {
        title: '新增管理员',
        sidebar: false,
        activeMenu: '/manager',
      },
    },
    {
      path: 'detail/:id',
      name: 'ManagerEdit',
      meta: {
        title: '编辑管理员',
        sidebar: false,
        activeMenu: '/manager',
      },
    },
  ],
}
```

### 不合并

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    mergeTabsBy: '',
  },
}
```

从列表页进入详情页时，框架会新增一个**编辑管理员**的标签页，并且在不关闭详情页时，可打开多个不同的**编辑管理员**标签页，效果如下：

<ZoomImg src="/tabbar-no-merge.gif" />

### 根据路由名称进行合并

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    mergeTabsBy: 'routeName',
  },
}
```

从列表页进入详情页时，框架会新增一个**编辑管理员**的标签页，并且在不关闭详情页时，打开多个不同的详情页，只会保持一个**编辑管理员**标签页，效果如下：

<ZoomImg src="/tabbar-merge-routename.gif" />

### 根据 `meta.activeMenu` 进行合并

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    mergeTabsBy: 'activeMenu',
  },
}
```

从始至终只会保持一个标签页，其中的关键条件就是 `activeMenu` 这个参数，也就是框架会将设置过 `activeMenu` 的路由与 `activeMenu` 指向的目标路由合并为一个标签页，当在这些路由里相互跳转时，始终只保持一个标签页，效果如下：

<ZoomImg src="/tabbar-merge-activemenu.gif" />