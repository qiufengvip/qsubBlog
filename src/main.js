import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'


import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';


// 行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 快捷复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import Prism from 'prismjs';

import hljs from 'highlight.js';

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
app.use(ElementPlus)
app.use(store);
app.use(router);
app.mount('#app');