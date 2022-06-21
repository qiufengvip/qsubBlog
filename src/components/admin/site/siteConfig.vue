<!-- 站点属性 -->
<template>
    <div class="top-center-bottom">
        <div class="query-param-main">
            <div class="query-param-term">
                <div class="query-param">
                    <el-input v-model="queryParam.name" style="width: 200px" size="small" placeholder="名称">
                        <template #prepend>名称</template>
                    </el-input>
                </div>
                <div class="query-param">
                    <el-input v-model="queryParam.code" style="width: 200px" size="small" placeholder="编码">
                        <template #prepend>编码</template>
                    </el-input>
                </div>
            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="primary" @click="getList" size="small">查询</el-button>
                    <el-button type="success" size="small" @click="add">添加</el-button>
                </div>
            </div>
        </div>
        <div class="center">
            <el-table border :data="tableData" style="">

                <el-table-column prop="code" label="配置项code" width="200"/>
                <el-table-column prop="name" label="配置项名称" width="200"/>
                <el-table-column prop="value" label="配置项值"/>
                <el-table-column fixed="right" label="操作" width="300">
                    <template v-slot="scope" #default>
                        <el-button type="primary" @click="exit(scope.row)" size="small">编辑</el-button>
                        <el-button type="danger" size="small" @click="deleted(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="bottom">
            <div class="bottom" ref="bottomMain">
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[20, 60, 100, 300]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pagination.total"
                    :page-size="pagination.pageSize"
                />
            </div>
        </div>
    </div>

    <el-dialog
        v-model="addVisible"
        :title="addTable"
        width="500px"
    >
        <el-form :model="datas" ref="ruleForm" label-width="100px">
            <div>
                <el-form-item label="名称" prop="name">
                    <el-input size="large" v-model="datas.name"/>
                </el-form-item>
                <el-form-item label="编码" prop="code">
                    <el-input size="large" v-model="datas.code"/>
                </el-form-item>
                <el-form-item label="值" prop="value">
                    <el-input type="textarea" size="large" v-model="datas.value"/>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="addVisible = false">取消</el-button>
                  <el-button type="primary" @click="addSubmit">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import {
    API
} from "@/http/api";
import {ElMessage} from "element-plus";
import {post} from "@/http/http";

export default {
    name: "siteConfig",
    data() {
        return {
            tableData: [],    //角色list
            addVisible: false,  //添加角色框
            datas: {Name: ''},  //添加或修改data
            addTable: '添加配置',   //添加或修改标题
            queryParam:{  //搜索条件
                name:'',
                code:''
            },
            pagination:{
                pageSize:20,  //每页多少条
                total:0,   //共多少条
                pageNum:1, //当前页
            }
        }
    },
    methods: {
        getList() {
            this.queryParam.pageSize = this.pagination.pageSize;
            this.queryParam.pageNum = this.pagination.pageNum;
            post(API.getConfigList,this.queryParam).then(res=>{
                if (res.code ===0){
                    this.tableData = res.data.list;

                }else {
                    ElMessage.error(res.msg);
                }
            })
        }, // 删除
        deleted(row) {
            let data = {
                id: row.id
            }
            let _this = this;
            post(API.deletedBlogConfig,data).then(res => {
                if (res.code === 0) {
                    _this.getList();
                    ElMessage.success(res.msg);
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        //添加角色 提交
        addSubmit() {
            if (!this.datas.name) {
                ElMessage.error("请填写名称");
                return
            }
            if (!this.datas.code) {
                ElMessage.error("请填写code");
                return
            }
            post(API.updateBlogConfig,this.datas).then((res) => {
                if (res.code === 0) {
                    ElMessage.success(res.msg);
                    this.getList()
                    this.addVisible = false;
                    this.datas.name = undefined;
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        //添加
        add() {
            this.addTable = "添加配置"
            this.datas = {};
            this.addVisible = true;
        },// 修改
        exit(row) {
            console.log(row)
            this.addTable = "修改配置"
            this.datas = {
                id: row.id,
                name: row.name,
                code: row.code,
                value: row.value
            };
            console.log(this.datas)
            this.addVisible = true;
        },
        // 每页条数被改变
        handleSizeChange: function (pageSize) {
            let _this = this
            _this.pagination.pageSize = pageSize  //每页多少条被改变
            _this.handleCurrentChange(1)
            _this.getUserList();
        },//换页
        handleCurrentChange (currentPage) {
            let _this = this
            _this.pagination.pageNum = currentPage
            _this.getUserList();
        },
    },
    mounted() {
        this.getList()
    }
}
</script>

<style scoped>


.common-layout {
    height: 100%;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}

.el-container {
    display: flex;
    flex-direction: column;
}

.el-header {
    height: 100px;
}

.qsub-main {
    flex: 1;
}

.el-footer {
    height: 100px;
}


.top-center-bottom {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.top-center-bottom .top {
    height: 60px;
}

.top-center-bottom .center {
    flex: 1;
}
.center{
    padding-left: 10px;
}

.bottom {
    padding-top: 10px;
    padding-left: 10px;
}
</style>