const path = require('path');
module.exports = {
    // publicPath: './',
    // assetsDir: 'static',
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                // 存放less变量文件的路径
                path.resolve(__dirname, "src/assets/less/parameter.less")
            ]
        }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#ec6800'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },

    devServer: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8080",
                // target: "http://qsub.sh1.k9s.run:2271", //这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
}


// module.exports = {
//     // 基本路径
//     publicPath: './',
//     // build后默认路径
//     baseUrl: './',
//     // 构建时的输出目录
//     outputDir: 'dist',
//     // 放置静态资源的目录
//     assetsDir: 'static',
//     // html 的输出路径
//     indexPath: 'index.html',
//     //文件名哈希
//     filenameHashing: true,
//     // 是否在保存的时候使用 `eslint-loader` 进行检查。
//     lintOnSave: true,
//     // 是否使用带有浏览器内编译器的完整构建版本
//     runtimeCompiler: false,
//     // babel-loader 默认会跳过 node_modules 依赖。
//     transpileDependencies: [ /* string or regex */ ],
//     // 是否为生产环境构建生成 source map？
//     productionSourceMap: false,
//     // 设置生成的 HTML 中 <link rel='stylesheet'> 和 <script> 标签的 crossorigin 属性。
//     crossorigin: '',
//     // 在生成的 HTML 中的 <link rel='stylesheet'> 和 <script> 标签上启用 Subresource Integrity (SRI)。
//     integrity: false,
//     // 调整内部的 webpack 配置
//     configureWebpack: () => {}, //(Object | Function)
//     chainWebpack: () => {},
//     // 配置 webpack-dev-server 行为。
//      proxy: {
//       // 接口地址代理
//       '/service-core': {
//         target: 'https://www.zhangxuchao.com', // 接口的域名
//         secure: false, // 如果是https接口，需要配置这个参数
//         changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
//         pathRewrite: { "^/service-core": "service-core" }
//       },
//       //微信二维码登录
//       "/wechat": {
//         target: "https://www.eastgrain.cn/service-core",
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: { "^/wechat": "" }
//       }
//     }
//     // 三方插件的选项
//     pluginOptions: {
//         // ...
//     }
// }