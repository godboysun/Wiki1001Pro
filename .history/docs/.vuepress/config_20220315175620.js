//  注意事项:
//      和图标/图片等静态资源相关的 其 '/' 默认指向的是 docs/.vuepress/public/
//      和侧边栏/导航栏相关的地址配置 其 '/' 默认指向的是 docs/
//      侧边栏/导航栏指向.md文件的需要先建立相关.md文件，不然会报404或者页面空白


module.exports = {
    title: 'Blog of Sun', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: '孙文辉的博客', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/bg.ico
        ['link', { rel: 'icon', href: '/img/bg.ico' }], 
    ],
    base: '/wiki1001/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav:[
             // 单项 text：显示文字，link：指向链接
             // 这里的'/' 指的是 docs文件夹路径
             // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '求索', link: '/FAQ/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
            { text: '仓库', link: '/Store/' },
            { text: '随笔', link: '/Thought/' },
            // 多项，下拉形式
            {
                text: 'Concat',
                items: [
                    // link：指向链接也可以是外网链接
                    { text: 'Segmentfault', link: 'https://segmentfault.com/u/mulander' },
                ]
            }
        ],

        // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar:{
            // 打开FAQ主页链接时生成下面这个菜单
            '/FAQ/':[
                //多级菜单形式
                {
                    // 菜单名
                    title: '消化堆',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件             
                        ['/FAQ/DigestionHeap/Digested','消化过'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/FAQ/DigestionHeap/Digesting','消化中'],
                        ['/FAQ/DigestionHeap/DigestWill','待消化']
                    ]
                },
                {
                    title: '输出层',
                    children: [
                        ['/FAQ/Console/A001','#A001_VuePress'],
                        ['/FAQ/Console/A002','#A002_插件清单']
                    ]
                },
                ['/FAQ/','百科首页'],
                ['/FAQ/Pool/SkillStack','技术栈'],
                ['/FAQ/Pool/Review','归去来']
            ],
            // 打开Thought主页链接时生成下面这个菜单
            '/Thought/':[
                ['/Thought/','随笔首页'],
                {
                    title: '年终回顾',
                    children: [
                        ['/Thought/YearReview/2018','2018年'],
                        ['/Thought/YearReview/2019','2019年']
                    ]
                },
            ],
            // 打开Store主页链接时生成下面这个菜单
            '/Store/':[
                ['/Store/','仓库首页'],
                // {
                //     title: '年终回顾',
                //     children: [
                //         ['/Thought/YearReview/2018','2018年'],
                //         ['/Thought/YearReview/2019','2019年']
                //     ]
                // },
            ]
        },  
        
        //与github关联的页脚链接（点击编辑原文与最后更新）和右上角链接

        // 右上角链接、假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/godboysun/wiki1001.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库
        // 即【3.本地pc端存储A、B，将A、B推送至github1（私有）、将C推送至github2（公开）】
        docsRepo: 'https://github.com/godboysun/Wiki1001Pro',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: 'Git EditLink [Private]',
        // 文档更新时间：每个文件git最后提交的时间,
        lastUpdated: 'Last Updated' ,
    }
 }