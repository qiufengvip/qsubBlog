import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import * as echarts from "echarts";

// 全局变量
import '../src/assets/less/parameter.less'
// 语言
import locale from 'element-plus/lib/locale/lang/zh-cn'
// MD编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
// MD编辑器基础样式
import '@kangc/v-md-editor/lib/style/base-editor.css';
// MD编辑器 代码框显示行号拓展库
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// MD编辑器 代码框快捷复制拓展库
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
// MD编辑器 代码框快捷复制拓展库 样式
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// MD编辑器 代码高亮渲染器
import Prism from 'prismjs';
// MD编辑器 代码高亮渲染器2
import hljs from 'highlight.js';

// MD编辑器 vuepress 主题 解析器
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// MD编辑器 vuepress 主题 样式
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// MD编辑器 github 主题 解析器
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// MD编辑器 github 主题 样式
// import '@kangc/v-md-editor/lib/theme/style/github.css';

VueMarkdownEditor.use(vuepressTheme, {
    Prism,hljs,
    extend(md) {
        // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
        // md.set(VueMarkdownEditor).use(createHighlightLinesPlugin);
    },
});
VueMarkdownEditor.use(createCopyCodePlugin());
VueMarkdownEditor.use(createLineNumbertPlugin());

const app = createApp(App)
app.use(VueMarkdownEditor);
app.use(ElementPlus,{locale})
app.use(store);
app.use(router);
app.mount('#app');