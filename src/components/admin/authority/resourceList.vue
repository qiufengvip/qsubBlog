<!-- 资源管理 -->
<template>
    <div class="query-param-main">
        <div class="query-param-term"></div>
        <div class="query-param-function">
            <div class="query-param">
                <el-button type="primary" size="small">刷新</el-button>
            </div>
            <div class="query-param">
                <el-button type="success" @click="addResource(false)" size="small">添加资源</el-button>
            </div>
        </div>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'id' }"
    >
        <el-table-column label="类型" width="180">
            <template v-slot="scope">
                    <span v-if="scope.row.resourceType === 1 ">前端菜单</span>
                    <span v-if="scope.row.resourceType === 2 ">api</span>
                    <span v-if="scope.row.resourceType === 3 ">页面元素</span>
            </template>
        </el-table-column>
        <el-table-column prop="resourceName" label="名称" width="180"/>
        <el-table-column show-overflow-tooltip prop="resourceValue" label="资源值" width="180"/>
        <el-table-column show-overflow-tooltip prop="resourceData" label="数据"/>
        <el-table-column   fixed="right" label="操作" width="160">
<!--            eslint-disable-next-line-->
            <template v-slot="scope">
                <el-button type="primary" size="small" @click="exitResource(scope.row)" >编辑</el-button>
                <el-button type="danger"  size="small" @click="deleteResource(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog
        v-model="resourceAddVisible"
        :title="resourceAddTitle"
        width="500px"
    >
        <el-form size="small" :model="resourceAddData" ref="ruleForm" label-width="100px">
            <el-form-item label="资源id" prop="name">
                <el-input v-model="resourceAddData.id" :disabled='true'/>
            </el-form-item>
            <el-form-item label="父id" prop="name">
                <el-input v-model="resourceAddData.pid" :disabled='true'/>
            </el-form-item>
            <el-form-item label="资源名称" prop="name">
                <el-input v-model="resourceAddData.resourceName"/>
            </el-form-item>
            <el-form-item label="资源类型">
                <el-select v-model="resourceAddData.resourceType" placeholder="选择资源类型">
                    <el-option v-for=" item in resourceType" :label="item.label" :value='item.value'/>
                </el-select>
            </el-form-item>
            <el-form-item label="资源内容" prop="name">
                <el-input type="textarea" v-model="resourceAddData.resourceValue"/>
            </el-form-item>
            <el-form-item label="资源值" prop="name">
                <el-input type="textarea" v-model="resourceAddData.resourceData"/>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="resourceAddVisible = false">取消</el-button>
                  <el-button type="primary" @click="resourceAddSubmit">确定</el-button>
            </span>
        </template>

    </el-dialog>
</template>

<script>
import {request_resource_getResourceList, request_resource_saveOrUpdate} from "@/http/api";
import {ElMessage} from "element-plus";

export default {
    name: "resourceList",
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: 'wangxiaohu',
                },
                {
                    id: 2,
                    date: '2016-05-04',
                    name: 'wangxiaohu',
                },
                {
                    id: 3,
                    date: '2016-05-01',
                    name: 'wangxiaohu',
                    hasChildren: true,
                },
                {
                    id: 4,
                    date: '2016-05-03',
                    name: 'wangxiaohu',
                },
            ],
            resourceAddVisible: false,
            resourceAddTitle: '添加资源',
            resourceType:[{
                value:1,
                label:'前端菜单'
            },{
                value:2,
                label:'后端菜单'
            },{
                value:3,
                label:'api'
            },{
                value:4,
                label:'资源'
            }],
            resourceAddData: {
                id: '',
                pid: '',
                resourceType: '',
                resourceName: '',
                resourceValue: '',
                resourceData:'',
            },
        };
    },
    methods: {
        load(row, treeNode, resolve) {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: 'wangxiaohu',
                    },
                    {
                        id: 32,
                        date: '2016-05-01',
                        name: 'wangxiaohu',
                    },
                ])
            }, 1000)
        }, // 确认添加资源
        resourceAddSubmit() {
            let _this =this;
            request_resource_saveOrUpdate(this.resourceAddData).then((res)=>{
                if (res.code ===0) {
                    if (_this.resourceAddData.id) {
                        ElMessage.success("更新成功")
                    }else{
                        ElMessage.success("添加成功")
                    }
                    this.getTableData()
                    _this.resourceAddVisible = false;
                }else{
                    ElMessage.error(res.msg);
                }
            })
        },//添加资源
        addResource(row){
            let _this = this;
            _this.resourceAddData = [];
           if(row){
               _this.resourceAddTitle = "添加子资源"
               _this.resourceAddData.pid = row.id;
           }
           _this.resourceAddVisible = true;
        }, //修改资源
        exitResource(row){
            console.log(JSON.parse(JSON.stringify(row)))
            this.resourceAddData = JSON.parse(JSON.stringify(row));
            this.resourceAddTitle = "修改资源"
            this.resourceAddVisible = true;
        },
        //删除资源
        deleteResource(row){


        },
        getTableData(){
            let data = {
                pid: 'rootNode'
            }
            request_resource_getResourceList(data).then((res) => {
                if (res.code === 0) {
                    this.tableData = res.data;
                }

            })
        }
    }, created() {
        this.getTableData();
    }
}
</script>

<style scoped>


</style>