<template>

    <div class="top-center-bottom" ref="main">
        <div class="query-param-main" ref="queryParamMain">
            <div class="query-param-term">
                <div class="query-param">
                    <el-input v-model="queryParam.code" style="width: 200px" size="small" placeholder="代码">
                        <template #prepend>变量代码</template>
                    </el-input>
                </div>
                <div class="query-param">
                    <el-input v-model="queryParam.name" style="width: 200px" size="small" placeholder="名称">
                        <template #prepend>变量名称</template>
                    </el-input>
                </div>
            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="success" size="small" @click="getList">查询</el-button>
                </div>
                <div class="query-param">
                    <el-button type="primary" @click="addConstant" size="small">添加变量</el-button>
                </div>
            </div>
        </div>
        <div class="center" ref="centerMain">
            <el-table border :data="tableData" ref="userTable" style="height: 100%">
                <el-table-column fixed type="index" width="50" label="序号"/>
                <el-table-column fixed prop="code" label="代码" width="150"/>
                <el-table-column fixed prop="name" label="名称" width="150"/>
                <el-table-column prop="explanation" label="介绍"/>
                <el-table-column fixed="right" label="操作" width="300">
                    <template v-slot="scope" #default>
                        <el-button type="success" size="small" @click="getConstantData(scope.row.id)">查看常量值</el-button>
                        <el-button type="primary" @click="exitConstantData(scope.row)" size="small">编辑</el-button>
                        <el-button type="danger" size="small" @click="deleted(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>


    <el-dialog
        v-model="addConstantVisible"
        :title="addConstantTable"
        width="500px"
    >
        <el-form :model="constantData" ref="ruleForm" label-width="100px">
            <div>
                <el-form-item label="code" prop="name">
                    <el-input size="large" v-model="constantData.code"/>
                </el-form-item>
                <el-form-item label="变量名称" prop="name">
                    <el-input size="large" v-model="constantData.name"/>
                </el-form-item>
                <el-form-item label="变量介绍" prop="name">
                    <el-input size="large" v-model="constantData.explanation"/>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="addConstantVisible = false">取消</el-button>
                  <el-button type="primary" @click="addConstantSubmit">确定</el-button>
            </span>
        </template>
    </el-dialog>

    <el-dialog
        v-model="addConstantDataVisible"
        :title="addConstantDataTable"
        width="500px"
    >
        <div class="query-param-main" ref="queryParamMain">
            <div class="query-param-term">

            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="primary" @click="addConstantData" size="small">添加值</el-button>
                </div>
            </div>
        </div>
        <el-table border :data="constantDataList" ref="userTable" style="height: 100%">
            <el-table-column fixed type="index" width="50" label="序号"/>
            <el-table-column fixed prop="code" label="名称" width="150"/>
            <el-table-column fixed prop="name" label="名称" width="150"/>
            <el-table-column prop="explanation" label="介绍"/>
            <el-table-column fixed="right" label="操作" width="210">
                <template v-slot="scope" #default>
                    <el-button type="primary" @click="" size="small">编辑</el-button>
                    <el-button type="danger" size="small" @click="">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <template #footer>
            <span class="dialog-footer">
                  <el-button type="primary" @click="addConstantDataVisible = false">确定</el-button>
            </span>
        </template>
    </el-dialog>

    <el-dialog
        v-model="addData"
        :title="addDataTable"
        width="500px"
    >
        <el-form :model="addDataForm" ref="ruleForm" label-width="100px">
            <div>
                <el-form-item label="值(整数)" prop="name">
                    <el-input size="large" v-model="addDataForm.value"/>
                </el-form-item>
                <el-form-item label="解释" prop="name">
                    <el-input size="large" v-model="addDataForm.label"/>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="addData = false">取消</el-button>
                  <el-button type="primary" @click="addDataSubmit">确定</el-button>
            </span>
        </template>
    </el-dialog>






</template>

<script>

import {API} from "@/http/api";
import {post} from "@/http/http";
import {ElMessage} from "element-plus";

export default {
    name: "constantList",
    data() {
        return {
            queryParam: {
                name: ''
            },
            tableData: [],
            addConstantVisible: false,
            addConstantTable: '添加常量',
            constantData: {name: ''},
            addConstantDataVisible:false,
            addConstantDataTable: "查看变量情况",
            constantDataList:[],

            addData:false,  //添加变量值框
            addDataTable:'添加变量值',
            addDataForm:{
                value:'',
                label:'',
                constantId:""
            }
            ,currentConstantValue:undefined,


        };
    },
    methods: {
        getList() {
            post(API.selectConstantList, this.queryParam).then(res => {
                if (res.code === 0) {
                    this.tableData = res.data;
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        //添加常量
        addConstant() {
            this.addConstantVisible = true;
            this.addConstantTable = '添加常量';
            this.constantData = {}
        },//添加变量提交
        addConstantSubmit() {
            post(API.addConstant, this.constantData).then(res => {
                if (res.code === 0) {
                    ElMessage.success(res.msg);
                    //刷新列表
                    this.addConstantVisible = false;
                    this.getList();
                } else {
                    ElMessage.error(res.msg)
                }
            })
        },//删除整个变量
        deleted(id) {
            post(API.deleteConstant, {id: id}).then(res => {
                if (res.code === 0) {
                    ElMessage.success(res.msg);
                    this.getList();
                } else {
                    ElMessage.error(res.msg)
                }
            })
        },
        //修改常量值
        exitConstantData(row) {
            this.addConstantVisible = true;
            this.addConstantTable = '修改常量';
            this.constantData = JSON.parse(JSON.stringify(row));
        },
        //查看常量值
        getConstantData(id) {
            if (id ===undefined && this.addConstantDataVisible !==undefined){
                id = this.addConstantDataVisible;
            }
            post(API.selectConstantData, {id: id}).then(res => {
                if (res.code === 0) {
                    this.currentConstantValue = id;
                    this.constantDataList = res.data;
                    this.addConstantDataVisible = true;
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        //添加变量值
        addConstantData(){
            this.addData = true;
            this.addDataForm = {};
            this.addDataForm.constantId = this.currentConstantValue;
        },
        addDataSubmit(){
            post(API.addConstantData,this.addDataForm).then(res=>{
                if (res.code === 0) {
                    this.getConstantData();
                    ElMessage.success(res.msg)
                }else{
                    ElMessage.error(res.msg)
                }
            })

        }

    },
    mounted() {
        this.getList();


    }
}
</script>

<style scoped>

</style>