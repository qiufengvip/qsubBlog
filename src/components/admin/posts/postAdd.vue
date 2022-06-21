<template>
    <!--    本页面可以创建一个  标记 来标记最后一次打开的页面  创造缓存-->
    <div class="postAdd">
        <div class="top">
            <el-form :model="form" label-width="120px" style="width: 50%">
                <el-form-item label="文章标题">
                    <el-input v-model="form.name" show-word-limit/>
                </el-form-item>
                <div class="top">
                    <el-form-item label="文章分类">
                        <el-cascader :options="subtotal" placeholder="输入关键字" v-model="form.classify" :props="props1"
                                     filterable/>
                    </el-form-item>
                    <el-form-item label="发布状态">
                        <el-select v-model="form.region" placeholder="文章状态">
                            <el-option label="草稿" value="shanghai"/>
                            <el-option label="发布" value="beijing"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="审核状态">
                        <el-select v-model="form.releases" disabled placeholder="审核状态">
                            <el-option label="待提交" value="1"/>
                            <el-option label="待审核" value="2"/>
                            <el-option label="审核中" value="3"/>
                            <el-option label="已通过" value="4"/>
                            <el-option label="未通过" value="5"/>
                        </el-select>
                    </el-form-item>
                </div>

                <el-form-item label="简述">
                    <el-input v-model="form.desc" rows="4" type="textarea" show-word-limit/>
                </el-form-item>
            </el-form>

            <el-form :model="form" label-width="120px">

                <el-form-item label="缩略图">
                    <el-upload
                        class="avatar-uploader"
                        action="#"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :file-list="postsImg"
                        :auto-upload="true"
                        :limit="1"
                    >
                        <template v-if="form.postsImg">
                            <img class="el-upload-list__item-thumbnail avatar" :src="form.postsImg" alt=""/>
                            <span class="el-upload-list__item-actions">
                              <span
                                  class="el-upload-list__item-preview"
                                  @click="handlePostsImg(form.postsImg,1)"
                              >
                                <el-icon><zoom-in/></el-icon>
                              </span>
                              <span
                                  v-if="!disabled"
                                  class="el-upload-list__item-preview"
                                  @click="handlePostsImg(form.postsImg,2)"
                              >
                                <el-icon><Download/></el-icon>
                              </span>
                              <span
                                  v-if="!disabled"
                                  class="el-upload-list__item-preview"
                                  @click="handlePostsImg(form.postsImg,3)"
                              >
                                <el-icon><Delete/></el-icon>
                              </span>
                            </span>
                        </template>

                            <template #trigger>
                                <template v-if="!form.postsImg">
                                    <el-icon class="avatar-uploader-icon">
                                        <Plus/>
                                    </el-icon>
                                </template>
                            </template>
                    </el-upload>


                </el-form-item>

                <el-form-item label="文章标签" class="postTag">
                    <el-tag
                        v-for="tag in form.postTag"
                        :key="tag"
                        class="mx-1"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag,'postTag')"
                        :type="getType()"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-input
                        v-if="postTagInputVisible"
                        ref="postTagInputRef"
                        v-model="postTagInputValue"
                        class="tagInput"
                        size="small"
                        @keyup.enter="handleInputConfirm('postTagInputValue','postTag')"
                        @blur="handleInputConfirm('postTagInputValue','postTag','postTagInputVisible')"
                    />
                    <el-button type="success" v-else class="button-new-tag ml-1" size="small"
                               @click="showInput('postTagInputVisible','postTagInputRef')">
                        + 添加标签
                    </el-button>
                </el-form-item>
            </el-form>

        </div>

        <el-form :model="form" label-width="120px">
            <el-form-item label="文章内容">
                <v-md-editor class="editor"
                             @save="articleSave"
                             @copy-code-success="handleCopyCodeSuccess"
                             :disabled-menus="[]"
                             @upload-image="handleUploadImage"
                             v-model="form.content"
                             height="820px"></v-md-editor>
            </el-form-item>

            <el-form-item>
                <el-button type="primary">暂存</el-button>
                <el-button type="success" @click="submits">发布</el-button>
            </el-form-item>
        </el-form>


    </div>
    <!--    图片预览组件-->
    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image"/>
    </el-dialog>

</template>

<script>
import {Plus, ZoomIn, Download, Delete} from '@element-plus/icons'
import {nextTick} from "vue";
import {ElMessage} from "element-plus";
import {uploadFile} from "@/http/api";

export default {
    name: "postAdd",
    components: {
        Plus, ZoomIn, Download, Delete
    },
    data() {
        return {
            dialogVisible: false,
            dialogImageUrl: '',
            props1: {
                checkStrictly: true,
            },
            subtotal: [
                {
                    value: '1',
                    label: '前端',
                    children: [
                        {
                            value: '2',
                            label: 'vue',
                        },
                    ],
                },
                {
                    value: '3',
                    label: 'java',
                    children: [
                        {
                            value: '4',
                            label: 'spring',
                        },
                    ],
                },
            ], //分类菜单
            form: {
                releases:'1', //审核状态
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                postTag: ["java", "spring"],
                searchKey: ["分布式锁子"], //搜索关键词
                classify: '',  //分类
                content: '',
                postsImg: '' //缩略图
            },
            postsImg: [],
            postTagInputVisible: false,
            postTagInputValue: '', //
            searchKeyInputVisible: false,
            searchKeyInputValue: '', //
        };
    },
    mounted() {

    },
    methods: {
        handleCopyCodeSuccess(code) {
            console.log(code);
        },
        handleUploadImage(event, insertImage, files) {
            // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
            console.log(files);
            let name1 = files[0].name;
            // 此处只做示例
            insertImage({
                url:
                    'http://file.luanshiliunian.cn/f8abff5039d246999b7b9658e2a92994-1654915027822.jpg',
                desc: name1,
            });
        },
        articleSave() {
            console.log("文章保存")
        },
        submits() {
            console.log(this.form);
        },
        getType() {
            let number = parseInt(5 * Math.random());
            console.log("aa")
            switch (number) {
                case 1:
                    return '';
                case 2:
                    return 'success';
                case 3:
                    return 'warning';
                default:
                    return 'danger';
            }
        },
        handleClose(tag, type) {
            this.form[type].splice(this.form[type].indexOf(tag), 1)
        },
        showInput(a, b) {
            this[a] = true
            nextTick(() => {
                this.$refs[b].focus()
            })
        },
        //标签添加成功或失败
        handleInputConfirm(type, b, c) {
            console.log("取消", c)
            this[c] = false;
            if (this[type]) {
                this.form[b].push(this[type])
            }
            this[type] = ''
        },
        //缩略图上传
        handleAvatarSuccess(response, uploadFile) {
            document.getElementsByClassName("el-upload")[0].style.display ="none";
            console.log("成功",uploadFile);
        },
        //缩略图格式验证器
        beforeAvatarUpload(rawFile) {
            console.log(rawFile.type.slice(0, 6))
            if (rawFile.type.slice(0, 6) !== 'image/') {
                ElMessage.error('应上传图片')
            } else if (rawFile.size / 1024 / 1024 > 40) {
                ElMessage.error('不能大于 40MB!')
            }
            uploadFile(rawFile).then(res=>{
                if (res.code === 0) {
                    this.form.postsImg = res.data;
                    this.handleAvatarSuccess()
                }else{
                    ElMessage.error(res.msg);
                }
            })

            return false
        },

        handlePostsImg(fileUrl,index) {
            switch (index) {
                case 1:
                    this.dialogVisible = true;
                    this.dialogImageUrl = fileUrl;
                    break;
                case 2:
                    open(fileUrl);
                    break;
                case 3:
                    this.form.postsImg = '';
                    document.getElementsByClassName("el-upload")[0].style.display ="block";
                    break;
            }
            console.log("点击",index)

        }


    }
}
</script>
<style lang="less">
.el-dialog__body{
    img{
        width: 100%;
    }
}
.postAdd {
    .el-tag {
        margin: 0 10px 0 0;
    }
}

.tagInput {
    width: 150px;
}

.v-md-editor {
    background-color: @background-color3 !important;
}

.v-md-textarea-editor textarea {
    color: @font-color;
}

.v-md-editor--editable .v-md-editor__editor-wrapper {
    border-right: 1px solid @background-color4;
}

.v-md-editor__toolbar {
    border-bottom: 1px solid @background-color4;
}

.vuepress-markdown-body {
    color: @font-color;
    background-color: @background-color3;
}

.v-md-editor__toolbar-item {
    color: @font-color;
}

.v-md-editor__toolbar-item:hover {
    background-color: @background-color4;
}

.v-md-editor__toolbar-item--active, .v-md-editor__toolbar-item--active:hover {
    background: @background-color4;
}

//.scrollbar__wrap{
//    background-color: @background-color2;
//}
//
.avatar-uploader{
    border: 1px dashed @font-color;
}

.avatar-uploader .el-upload {

    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar-uploader {
    border-radius: 6px;
    width: 150px;
    height: 150px;
}

</style>

<style scoped lang="less">
.top {
    display: flex;
}

.avatar-uploader .avatar {
    display: block;
}

.el-upload-list__item-actions {
    border-radius: 6px;
    display: none;
    background-color: #00000085;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    align-items: center;
    justify-content: space-evenly;
}
.avatar{
    border-radius: 6px;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.avatar-uploader:hover {
    .el-upload-list__item-actions {

        display: flex;

    }
}


</style>