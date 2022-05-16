<template>
    <el-form :model="userForm" label-width="120px">

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>人员编辑</span>
                </div>
            </template>


            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="userImgSuccess"
                :before-upload="beforeImgUpload"
            >

                <img v-if="imageUrl" :src="imageUrl" class="avatar"/>
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus/>
                </el-icon>
            </el-upload>

            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="登录名">
                        <el-input size="small" v-model="userForm.account"/>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="用户昵称">
                        <el-input size="small" v-model="userForm.userName"/>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
            </el-row>
        </el-card>


        <el-row>
            <el-col :span="12">
                <el-form-item label="邮箱">
                    <el-input v-model="userForm.email"/>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="手机号">
                    <el-input v-model="userForm.phone"/>
                </el-form-item>
            </el-col>
        </el-row>


        <el-form-item label="用户状态">
            <el-select v-model="userForm.deleted" placeholder="用户禁用状态">
                <el-option label="禁用" value="1"/>
                <el-option label="启用" value="0"/>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "userEdit",
    data() {
        return {
            userForm: {
                account: '', //登录名
                deleted: '',  //是否删除
                email: '',  //  邮箱
                userName: '',  //用户昵称
                phone: '',   //手机
                github: '',
                gitee: '',
                headImg: '',   //头像
            },
        };
    },
    methods: {
        userImgSuccess(response, uploadFile, uploadFiles) {

        },
        //文件上传前 验证函数
        beforeImgUpload(rawFile) {
            if (rawFile.type !== 'image/jpeg'  ) {
                //判断文件类型
                ElMess

                age.error('文件格式只能为jpg,png')
                return false
            } else if (rawFile.size / 1024 / 1024 > 2) {
                // 判断文件大小
                ElMessage.error('文件最大为 2MB!')
                return false
            }
            return true
        }
    }
}
</script>

<style scoped>

</style>