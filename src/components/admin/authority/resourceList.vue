<!-- 资源管理 -->
<template>
    <div class="query-param-main">
        <div class="query-param-term"></div>
        <div class="query-param-function">
            <div class="query-param">
                <el-button type="primary" @click="getTableData" size="small">刷新</el-button>
            </div>
            <div class="query-param">
                <el-button type="success" @click="addResource(false)" size="small">添加资源</el-button>
            </div>
        </div>
    </div>
    <div class="table-node-main">
        <div class="custom-tree-node node-title">
            <div class="node-a">
                <div class="tree-resourceName">资源名称</div>
            </div>
            <div class="node-b">
                <div class="tree-resourceType">资源类型</div>
                <div class="tree-resourceValue">资源值</div>
                <div class="resourceData">资源数据</div>
                <div class="tree-bar">操作</div>
            </div>
        </div>
    </div>
<div  class="resourceList">
    <el-tree
        :data="tableData"
        node-key="id"
        default-expand-all
        ref="resourceTree"
        :expand-on-click-node="false"
        :draggable="true"
        @node-drag-end="nodeDragEnd"
    >
        <template #default="{ node, data }">
            <div class="custom-tree-node">
                <div class="node-a">
                    <div class="tree-resourceName">&nbsp{{ data.resourceName }}</div>
                </div>
                <div class="node-b">
                    <template v-for="item in resourceType" v-slot="scope">
                        <div class="tree-resourceType" v-if="item.value === data.resourceType">{{ item.label }}</div>
                    </template>
                    <div class="tree-resourceValue">&nbsp{{ data.resourceValue }}</div>
<!--                    <div class="tree-resourceValue">&nbsp{{ data.resourceValue }}</div>-->
                    <div class="resourceData">&nbsp{{ data.resourceData }}</div>
                    <div class="tree-bar">
                        <el-button type="success" size="small" @click="addResource(data)">添加</el-button>
                        <el-button type="primary" size="small" @click="exitResource(data)">编辑</el-button>
                        <el-button type="danger" size="small" @click="deleteResource(data)">删除</el-button>
                    </div>
                </div>
            </div>
        </template>
    </el-tree>
</div>
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
                    <el-option v-for="item in resourceType" :label="item.label" :value='item.value'/>
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
import {
    request_resource_deletedById,
    request_resource_getResourceList,
    request_resource_mobileData,
    request_resource_saveOrUpdate
} from "@/http/api";
import {ElMessage} from "element-plus";
import {toTree} from "@/utils/dataDispose";
export default {
    name: "resourceList",
    data() {
        return {
            tableData: [],
            resourceAddVisible: false,
            resourceAddTitle: '添加资源',
            resourceType: [{
                value: 1,
                label: '前端菜单'
            }, {
                value: 2,
                label: '后端菜单'
            }, {
                value: 3,
                label: 'api'
            }, {
                value: 4,
                label: '资源'
            }],
            resourceAddData: {
                id: '',
                pid: '',
                resourceType: '',
                resourceName: '',
                resourceValue: '',
                resourceData: '',
            },
        };
    },
    methods: {
        load(row, treeNode, resolve) {
            request_resource_getResourceList({pid: row.id}).then((res) => {
                if (res.code === 0) {
                    if (res.data.length === 0) {
                        ElMessage.error("没有数据了")
                        resolve([])
                    } else {
                        resolve(res.data)
                    }
                }
            })

        }, // 确认添加资源
        resourceAddSubmit() {
            let _this = this;
            request_resource_saveOrUpdate(this.resourceAddData).then((res) => {
                if (res.code === 0) {
                    if (_this.resourceAddData.id) {
                        ElMessage.success("更新成功")
                    } else {
                        ElMessage.success("添加成功")
                    }
                    this.getTableData()
                    _this.resourceAddVisible = false;
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },//添加资源
        addResource(row) {
            let _this = this;
            _this.resourceAddData = [];
            if (row) {
                _this.resourceAddTitle = "添加子资源"
                _this.resourceAddData.pid = row.id;
            }
            _this.resourceAddVisible = true;
        }, //修改资源
        exitResource(row) {
            console.log(JSON.parse(JSON.stringify(row)))
            this.resourceAddData = JSON.parse(JSON.stringify(row));
            this.resourceAddTitle = "修改资源"
            this.resourceAddVisible = true;
        },
        //删除资源
        deleteResource(row) {
            let data = {
                resourceId: row.id
            }
            let _this = this;
            request_resource_deletedById(data).then((res) => {
                if (res.code === 0) {
                    ElMessage.success(res.msg);
                    _this.getTableData();
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        getTableData() {
            let data = {}
            let _this = this;
            request_resource_getResourceList(data).then((res) => {
                if (res.code === 0) {
                    this.tableData = toTree(res.data, null, null,"children")
                    console.log(this.tableData);
                }
            })
        },
        seekData(data, pid) {

        },// 位于目标位置的方向(node:未移动  before:之上 after:之下  inner 插入 )
        nodeDragEnd(Node,endNode,location,event){
            console.log(Node.data);
            console.log(endNode.data);
            console.log(location);
            console.log(event);
            let _this = this;
            let current = Node.data;
            let reference = endNode.data;
            console.log(current)
            console.log(reference)
            // return;
            if (location==="inner"){
                // 跑到下面
                // current.pid == reference.id
                console.log("跑到下面",{
                    cid:current.id,
                    cname:current.resourceName,
                    cpid:reference.id,
                })
                // return;
                request_resource_mobileData({
                    cid:current.id,
                    cpid:reference.id
                }).then(res=>{
                    if (res.code ===0) {
                        _this.getTableData();
                    }else{
                        ElMessage.error(res.msg);
                    }
                })
            //之上
            }else if(location==="before" || location==="after"){
                if (current.pid === reference.pid){
                    // 位置调整 互换rn
                    // current.rn = reference.rn     reference.rn = current.rn;
                    console.log("位置调整 互换rn",{
                        cname:current.resourceName,
                        cid:current.id,
                        rid:reference.id,
                        rname:reference.resourceName,
                        crn:reference.rn,
                        rrn:current.rn
                    })
                    // return;
                    request_resource_mobileData({
                        cid:current.id,
                        rid:reference.id,
                        crn:reference.rn,
                        rrn:current.rn
                    }).then(res=>{
                        if (res.code ===0) {
                            _this.getTableData();
                        }else{
                            ElMessage.error(res.msg);
                        }
                    })
                }else{
                    // 移动层级
                    // current.pid == reference.pid
                    let data = {};
                    data = {
                        cid:current.id,
                        cpid:reference.pid===null?'null':reference.pid,
                    }
                    //上移
                    if(location==="before"){
                        if (current.rn>reference.rn){
                            data = {
                                cid:current.id,
                                cpid:reference.pid===null?'null':reference.pid,
                                rid:reference.id,
                                crn:reference.rn,
                                rrn:current.rn
                            }
                        }
                    }else{
                        //下移动
                        if (current.rn<reference.rn){
                            data = {
                                cid:current.id,
                                cpid:reference.pid===null?'null':reference.pid,
                                rid:reference.id,
                                crn:reference.rn,
                                rrn:current.rn
                            }
                        }
                    }
                    console.log("移动层级",data)
                    request_resource_mobileData(data).then(res=>{
                        if (res.code ===0) {
                            _this.getTableData();
                        }else{
                            ElMessage.error(res.msg);
                        }
                    })
                }
            }
        }
    }, created() {
        this.getTableData();
    }
}
</script>
<style lang="less">
.resourceList{
    .el-tree-node__content {
        height: 50px !important;
        border: 1px solid @background-color4;
        margin-top: -1px;
    }
}


</style>
<style scoped lang="less">
.custom-tree-node {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: 50px;
    font-size: 15px;
}

.node-a,
.tree-resourceName {
    //width: 30px;
}

.node-b {
    display: flex;
    align-items: center;
    //width: 1420px
}
.table-node-main{
    width:100%;
    display: flex;
    font-size: 25px !important;
    font-weight: bold;
    color: @font-color;
}

.tree-resourceType {
    width: 210px;
    border-left: 1px solid @background-color4;
    padding-left: 10px;
}

.tree-resourceValue {
    width: 210px;
    border-left: 1px solid @background-color4;
    padding-left: 10px;
}

.resourceData {
    width: 600px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    border-left: 1px solid @background-color4;
    padding-left: 10px;
}

.tree-bar {
    width: 210px;
    border-left: 1px solid @background-color4;
    padding-left: 10px;
}
.node-title{
    border: 1px solid @background-color4;
    font-size: 17px !important;
    .tree-resourceName{
        padding-left: 10px;
    }
}

</style>
