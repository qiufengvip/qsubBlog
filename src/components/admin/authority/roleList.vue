<!-- 角色管理 -->
<template>
    <div class="top-center-bottom">
        <div class="query-param-main">
            <div class="query-param-term">

            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="primary" @click="getRoleList" size="small">查询</el-button>
                    <el-button type="success" size="small" @click="addRole">添加</el-button>
                </div>
            </div>
        </div>
        <div class="center">
            <el-table border :data="tableData" style="">
                <el-table-column prop="id" label="id" width="300"/>
                <el-table-column prop="roleName" label="角色名称" width="200"/>
                <el-table-column prop="roleType" label="角色类型">
                    <template v-slot="scope">
                        <template v-for="item in roleType">
                            <div class="tree-resourceType" v-if="item.value === scope.row.roleType">
                                {{item.label }}
                            </div>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="300">
                    <template v-slot="scope" #default>
                        <el-button type="primary" @click="exitRole(scope.row)" size="small">编辑</el-button>
                        <el-button type="success" size="small">添加人员</el-button>
                        <el-button type="danger" size="small" @click="deleted(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="bottom"></div>
    </div>

    <el-dialog
        v-model="addRoleVisible"
        :title="addRoleTable"
        width="500px"
    >
        <el-form :model="roleData" ref="ruleForm" label-width="100px">
            <div>
                <el-form-item label="角色名称" prop="name">
                    <el-input size="large" v-model="roleData.roleName"/>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="addRoleVisible = false">取消</el-button>
                  <el-button type="primary" @click="addRuleSubmit">确定</el-button>
            </span>
        </template>

    </el-dialog>

</template>

<script>
import {request_rule_addRole, request_rule_deleted, request_rule_getRoleList} from "@/http/api";
import {ElMessage} from "element-plus";

export default {
    name: "roleList",
    data() {
        return {
            tableData: [],
            roleType: [{
                label: '普通角色',
                value: 1,
            }, {
                label: '用户',
                value: 2,
            }],
            addRoleVisible: false,
            roleData: {roleName: ''},
            addRoleTable: '添加角色',
        }
    },
    methods: {
        getRoleList() {
            let _this = this;
            request_rule_getRoleList().then((res) => {
                if (res.code === 0) {
                    _this.tableData = res.data
                } else {
                    ElMessage.error(res.msg);
                }
            })
        }, // 删除
        deleted(row) {
            let data = {
                id:row.id
            }
            let _this = this;
            request_rule_deleted(data).then(res=>{
                if (res.code ===0){
                    _this.getRoleList();
                    ElMessage.success(res.msg);
                }else {
                    ElMessage.error(res.msg);
                }

            })



        },
        //添加角色 提交
        addRuleSubmit() {
            if (!this.roleData.roleName) {
                ElMessage.error("请填写角色名");
                return
            }
            let this_ = this;
            request_rule_addRole(this.roleData).then((res) => {
                if (res.code === 0) {
                    ElMessage.success(res.msg);
                    this_.getRoleList()
                    this_.addRoleVisible = false;
                    this_.roleData.roleName = undefined;
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        //添加角色
        addRole() {
            this.addRoleTable = "添加角色"
            this.roleData = {};
            this.addRoleVisible = true;
        },// 修改角色
        exitRole(row) {
            console.log(row)
            this.addRoleTable = "修改角色"
            this.roleData = {
                id: row.id,
                roleName: row.roleName
            };
            console.log(this.roleData)
            this.addRoleVisible = true;
        }

    },
    mounted() {
        this.getRoleList()
    }
}
</script>

<style scoped>

</style>