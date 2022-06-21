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
                <el-table-column prop="roleCode" label="角色code" width="200"/>
                <el-table-column prop="roleName" label="角色名称" width="200"/>
                <el-table-column prop="roleType" label="角色类型">
                    <template v-slot="scope">
                        <template v-for="item in roleType">
                            <div class="tree-resourceType" v-if="item.value === scope.row.roleType">
                                {{ item.label }}
                            </div>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="300">
                    <template v-slot="scope" #default>
                        <el-button type="primary" @click="exitRole(scope.row)" size="small">编辑</el-button>
                        <el-button type="success" size="small" @click="addUser(scope.row)">添加人员</el-button>
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
                <el-form-item label="角色code" prop="name">
                    <el-input size="large" v-model="roleData.roleCode"/>
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


    <el-dialog
        v-model="addUserToRoleVisible"
        :title="addUserToRole"
        width="700px"
    >
        <div class="dialog-main">
            <el-transfer
                v-model="transferValue"
                :titles="['未添加', '已添加']"
                :props="{
                  key: 'virtualUserId',
                  label: 'userName',
                }"
                :data="transferData"
            />
        </div>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="addUserToRoleVisible = false">取消</el-button>
                  <el-button type="primary" @click="addUserToRoleCom">确定</el-button>
            </span>
        </template>

    </el-dialog>

</template>

<script>
import {
    request_rule_addRole,
    request_rule_deleted,
    request_rule_getRoleList,
    request_user_getUserList, request_virtualUserRole_getUserRole, request_virtualUserRole_virtualUserRole
} from "@/http/api";
import {ElMessage} from "element-plus";

export default {
    name: "roleList",
    data() {
        return {
            tableData: [],    //角色list
            roleType: [{   //角色 Type
                label: '普通角色',
                value: 1,
            }, {
                label: '用户',
                value: 2,
            }],
            addRoleVisible: false,  //添加角色框
            roleData: {roleName: '',roleCode:''},  //添加或修改角色data
            addRoleTable: '添加角色',   //添加或修改角色标题
            addUserToRole: "添加用户",   //添加用户框标题
            addUserToRoleVisible: false,  // 添加用户框
            transferData:[],//添加用户穿梭框data
            transferValue:[], //已经添加用户
            roleId:'',//当前选中的roleId
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
                id: row.id
            }
            let _this = this;
            request_rule_deleted(data).then(res => {
                if (res.code === 0) {
                    _this.getRoleList();
                    ElMessage.success(res.msg);
                } else {
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
                roleName: row.roleName,
                roleCode: row.roleCode
            };
            console.log(this.roleData)
            this.addRoleVisible = true;
        },
        //
        addUserToRoleCom(){
            let roleIds = [];
            roleIds.push(this.roleId);
            let data = {
                roleIds:JSON.stringify( roleIds),
                userIds:JSON.stringify(this.transferValue)
            }
            request_virtualUserRole_virtualUserRole(data).then(res=>{
                if (res.code ===0){
                    ElMessage.success(res.msg)
                    this.addUserToRoleVisible = false;
                }else{
                    ElMessage.error(res.msg);
                }

            })
            console.log(this.transferValue);
        },
        //获取用户
        getTransferData(){
            let _this = this;
            request_user_getUserList({pageSizeZero:true,pageSize:0}).then(res=>{
                if (res.code) {
                    ElMessage.error(res.msg);
                }else{
                    _this.transferData = res.list;
                    // _this.transferValue = res.list[0].id;
                }
            })
        },
        addUser(row){
            this.roleId = row.id;
            request_virtualUserRole_getUserRole({roleId:row.id}).then(res=>{
                if (res.code === 0) {
                    this.addUserToRoleVisible = true;
                    this.transferData = res.data.list;
                    this.transferValue= res.data.includeList;
                }else {
                    ElMessage.error(res.code)
                }
            })
        }

    },
    mounted() {
        this.getRoleList()
    }
}
</script>

<style scoped>

</style>