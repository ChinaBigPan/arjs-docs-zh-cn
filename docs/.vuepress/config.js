module.exports= {
    title: 'AR.js',
    description: "AR.js 是 Web 端增强现实的轻量级框架，具有图像追踪、基于位置的AR和标记跟踪等功能。",
    base: "/arjs-docs-zh-cn/",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        logo: "/images/logo.png",
        nav: [
            {
                text: "大笑文档",
                link: "http://www.febeacon.com"
            },
            {
                text: "文档首页",
                link: "/"
            }
        ],
        sidebar: [
            {
                title: '首页',
                path: '/routes/',
                sidebarDepth: 2
            },
            {
                title: '图像追踪(Image Tracking)',
                path: '/routes/image_tracking',
                sidebarDepth: 2
            },
            {
                title: '基于位置的AR(Location Based)',
                path: '/routes/location_based',
                sidebarDepth: 2
            },
            {
                title: '标记跟踪(Marker Based)',
                path: '/routes/marker_based',
                sidebarDepth: 2
            },
            {
                title: '用户界面和自定义事件',
                path: '/routes/ui_and_event',
                sidebarDepth: 2
            }
        ]
    },
    head: [
        ["link", {
            rel: "icon", href: "/images/arjs_favicon.ico"
        }]
    ]
}