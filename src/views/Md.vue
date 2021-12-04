<template>
<!--   编辑 -->
<!--  <v-md-editor v-model="text"-->
<!--               @copy-code-success="handleCopyCodeSuccess"-->
<!--               left-toolbar="undo redo | image"-->
<!--               :disabled-menus="[]"-->
<!--               @upload-image="handleUploadImage"-->

<!--  />-->
<!--  展示 -->
  <v-md-editor :model-value="text" mode="preview"></v-md-editor>
</template>

<script>
export default {
  data() {
    return {
      text: `\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`
`,
    };
  },
  methods: {
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
    handleUploadImage(event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);

      // 此处只做示例
      insertImage({
        url:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
        desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
    },
  },
};
</script>