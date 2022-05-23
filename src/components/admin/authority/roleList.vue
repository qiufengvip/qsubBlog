<!-- 角色管理 -->
<template>
    <div class="top-center-bottom">
        <div class="query-param-main">
            <div class="query-param-term">

            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="success" size="small">查询</el-button>
                </div>
            </div>
        </div>
        <div class="center">
            <el-table border :data="tableData" style="">
                <el-table-column fixed prop="id" label="id" width="300"/>
                <el-table-column prop="ruleName" label="角色名称" width="200"/>
                <el-table-column prop="ruleType" label="角色类型" >
                    <template v-for="item in roleType">
                        <div class="tree-resourceType" v-if="item.value === data.resourceType">{{ item.label }}</div>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="300">
                    <template #default>
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="primary" size="small">添加人员</el-button>
                        <el-button type="danger" size="small" @click="deleted">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="bottom"></div>
    </div>

</template>

<script>
import {request_rule_getRoleList} from "@/http/api";
import {ElMessage} from "element-plus";

export default {
    name: "roleList",
    data(){
        return {
            tableData:[],
            roleType:[]
        }
    },
    methods:{
        getRoleList(){
            let _this = this;
            request_rule_getRoleList().then((res) => {
                if (res.code === 0) {
                    _this.tableData = res.data
                } else {
                    ElMessage.error(res.msg);
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