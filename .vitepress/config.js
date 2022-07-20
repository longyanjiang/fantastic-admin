export default {
    title: 'Fantastic-admin 官方文档',
    description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。',
    lang: 'zh-CN',
    base: '/fantastic-admin/',
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }],
        ['meta', { name: 'keywords', content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
        ['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
        ['description', { content: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。' }],
        ['script', {}, `var _hmt = _hmt || [];
		_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
			shouldTrackUrlChange: function(newPath, oldPath) {
				return newPath && oldPath;
			}
		}]);
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?c31a3e8267162de8420bc73e06d62463";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();`]
    ],
    themeConfig: {
        logo: '/logo.png',
        footer: {
            copyright: 'Copyright © 2020-present Fantastic-admin'
        },
        nav: [
            {
                text: '指南',
                items: [
                    {
                        text: '文档说明',
                        link: '/guide/intro',
                    },
                    {
                        text: '开发文档',
                        link: '/guide/ready',
                    },
                    {
                        text: '组件',
                        link: '/components/index',
                    },
                    {
                        text: '其它',
                        items: [
                            {
                                text: '开发文档 (Vue2)',
                                link: '/guide-vue2/start',
                            }
                        ]
                    }
                ]
            },
            {
                text: '演示地址',
                items: [
                    {
                        text: '基础版',
                        link: 'https://hooray.gitee.io/fantastic-admin-example/'
                    },
                    {
                        text: '专业版',
                        link: 'https://hooray.gitee.io/fantastic-admin-pro-example/'
                    },
                    {
                        text: '备用地址',
                        items: [
                            {
                                text: '基础版',
                                link: 'https://hooray.github.io/fantastic-admin-example/'
                            },
                            {
                                text: '专业版',
                                link: 'https://hooray.github.io/fantastic-admin-pro-example/'
                            }
                        ]
                    }
                ]
            },
            {
                text: '下载基础版',
                items: [
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/hooray/fantastic-admin'
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/hooray/fantastic-admin'
                    }
                ]
            },
            {
                text: '购买专业版',
                link: '/buy.md'
            },
            {
                text: '定制开发',
                link: '/customize.md'
            },
            {
                text: '技术支持',
                link: '/support.md'
            },
            {
                text: '生态',
                items: [
                    {
                        text: '官方',
                        items: [
                            {
                                text: 'Fantastaic-startkit',
                                link: 'https://hooray.gitee.io/fantastic-startkit/'
                            },
                            {
                                text: 'Fantastaic-admin',
                                link: 'https://hooray.gitee.io/fantastic-admin/'
                            },
                            {
                                text: 'One-step-admin',
                                link: 'https://hooray.gitee.io/one-step-admin/'
                            }
                        ]
                    },
                    {
                        text: '战略合作',
                        items: [
                            {
                                text: 'VForm 低代码表单',
                                link: 'https://www.vform666.com'
                            }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指引',
                    items: [
                        { text: '文档说明', link: '/guide/intro' },
                        { text: '为什么选择我们 ?', link: '/guide/why' }
                    ],
                    collapsible: true
                },
                {
                    text: '入门',
                    items: [
                        { text: '准备工作', link: '/guide/ready' },
                        { text: '开始', link: '/guide/start' },
                        { text: '代码规范', link: '/guide/coding-standard' },
                        { text: '术语', link: '/guide/term' },
                        { text: '配置', link: '/guide/configure' },
                        { text: '布局', link: '/guide/layout' },
                        { text: '主题', link: '/guide/theme' },
                        { text: '路由（导航）', link: '/guide/router' },
                        { text: '与服务端交互', link: '/guide/axios' },
                        { text: '全局状态管理', link: '/guide/store' },
                        { text: '全局资源', link: '/guide/global-resources' },
                        { text: '图标', link: '/guide/svg-icon' },
                        { text: '构建与预览', link: '/guide/build' }
                    ],
                    collapsible: true
                },
                {
                    text: '高级',
                    items: [
                        { text: '权限', link: '/guide/permission' },
                        { text: '标签栏', link: '/guide/tabbar' },
                        { text: '页面缓存', link: '/guide/keep-alive' },
                        { text: '国际化', link: '/guide/i18n' },
                        { text: '代码文件自动生成', link: '/guide/plop' },
                        { text: '标准模块', link: '/guide/plop-module' },
                        { text: '全局属性', link: '/guide/global-properties' },
                        { text: '私有 Storage 数据', link: '/guide/storage' },
                        { text: '错误日志', link: '/guide/error-log' },
                        { text: '自定义字体', link: '/guide/font' },
                        { text: 'JSX', link: '/guide/jsx' },
                        { text: '基于文件系统的路由', link: '/guide/file-system-route' },
                        { text: '高级 position:fixed', link: '/guide/position-fixed' }
                    ],
                    collapsible: true
                },
                {
                    text: '其它',
                    items: [
                        { text: '使用 Composition API 开发', link: '/guide/vue3-composition-api' },
                        { text: '框架更新', link: '/guide/upgrade' },
                        { text: '从 Vue2 版本迁移', link: '/guide/vue2-to-vue3' },
                        { text: '从 vue-element-admin 迁移', link: '/guide/vea-to-fa' },
                        { text: '常见问题', link: '/guide/q-a' }
                    ],
                    collapsible: true
                }
            ],
            '/components/': [
                {
                    text: '组件',
                    items: [
                        { text: '介绍', link: '/components/' },
                    ]
                },
                {
                    text: '扩展组件',
                    items: [
                        { text: 'Auth 鉴权', link: '/components/auth' },
                        { text: 'AuthAll 鉴权', link: '/components/auth-all' },
                        { text: 'PageHeader 页头', link: '/components/page-header' },
                        { text: 'PageMain 内容块', link: '/components/page-main' },
                        { text: 'FixedActionBar 固定底部操作栏', link: '/components/fixed-action-bar' },
                        { text: 'SearchBar 搜索面板', link: '/components/search-bar' },
                        { text: 'BatchActionBar 批量操作栏', link: '/components/batch-action-bar' },
                        { text: 'ImageUpload 单图上传', link: '/components/image-upload' },
                        { text: 'ImagesUpload 多图上传', link: '/components/images-upload' },
                        { text: 'FileUpload 文件上传', link: '/components/file-upload' },
                        { text: 'ImagePreview 图片预览', link: '/components/image-preview' },
                        { text: 'SvgIcon SVG图标', link: '/components/svg-icon' },
                        { text: 'Trend 趋势标记', link: '/components/trend' },
                        { text: 'CascaderArea 省市级联动', link: '/components/cascader-area' },
                        { text: 'LayoutContainer 布局容器', link: '/components/layout-container' },
                        { text: 'Chip 纸片', link: '/components/chip' },
                        { text: 'ColorfulCard 多彩渐变卡片', link: '/components/colorful-card' },
                        { text: 'IconPicker 图标选择器', link: '/components/icon-picker' },
                        { text: 'Sparkline 迷你图', link: '/components/sparkline' },
                        { text: 'I18nSelector 国际化选择器', link: '/components/i18n-selector' }
                    ]
                }
            ],
            '/guide-vue2/': [
                {
                    text: '指南',
                    items: [
                        { text: '开始', link: '/guide-vue2/start' },
                        { text: '代码规范', link: '/guide-vue2/coding-standard' },
                        { text: '配置', link: '/guide-vue2/configure' },
                        { text: '布局', link: '/guide-vue2/layout' },
                        { text: '主题', link: '/guide-vue2/theme' },
                        { text: '全局资源', link: '/guide-vue2/global-resources' },
                        { text: '和服务端交互', link: '/guide-vue2/axios' },
                        { text: '组件', link: '/guide-vue2/component' },
                        { text: 'Vuex', link: '/guide-vue2/vuex' },
                        { text: '路由', link: '/guide-vue2/router' },
                        { text: '权限验证', link: '/guide-vue2/permission' },
                        { text: '标签栏', link: '/guide-vue2/tabbar' },
                        { text: '二级页面缓存', link: '/guide-vue2/keep-alive' },
                        { text: '多级页面缓存', link: '/guide-vue2/keep-alive-neste' },
                        { text: '自定义字体', link: '/guide-vue2/font' },
                        { text: '国际化', link: '/guide-vue2/i18n' },
                        { text: '私有 Storage 数据', link: '/guide-vue2/storage' },
                        { text: '第三方库', link: '/guide-vue2/library' },
                        { text: 'CDN 支持', link: '/guide-vue2/cdn' },
                        { text: 'gzip 支持', link: '/guide-vue2/gzip' },
                        { text: 'Mock 与联调', link: '/guide-vue2/mock' },
                        { text: '构建', link: '/guide-vue2/build' },
                        { text: 'Git 钩子', link: '/guide-vue2/git' },
                        { text: '错误日志', link: '/guide-vue2/bug' },
                        { text: '快速生成文件', link: '/guide-vue2/plop' },
                        { text: '标准模块', link: '/guide-vue2/module' },
                        { text: '高级 position:fixed', link: '/guide-vue2/position-fixed' },
                        { text: '版本升级', link: '/guide-vue2/upgrade' },
                        { text: '视频教程', link: 'https://space.bilibili.com/3079082/channel/detail?cid=156985' }
                    ]
                }
            ],
            '/': [
                {
                    text: '',
                    items: [
                        { text: '购买专业版', link: '/buy' },
                        { text: '定制开发', link: '/customize' },
                        { text: '技术支持', link: '/support' }
                    ]
                }
            ]
        }
    }
}