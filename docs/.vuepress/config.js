module.exports = {
    title: 'docs/.vuepress/config.js里写的标题显示在顶部导航栏上',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'Keywords', content: '网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东' }]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        logo: '/assets/img/google-logo.png',  
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            { text: 'Languages',
                items: [
                    { text: 'Group1',
                        items: [
                            { text: 'about', link: '/about/' },
                        ]
                     },
                    { text: 'Group2',
                        items: [
                            { text: 'about2', link: '/about/' },
                        ]
                     },
                ]
             },
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/'
                ]
              },
            '/about/',
            '/about/test',
        ],
    },
}