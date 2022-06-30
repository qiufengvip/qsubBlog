<template>
    <div class="top-center-bottom" ref="main">
        <div class="query-param-main" ref="queryParamMain">
            <div class="query-param-term">
                <div class="query-param">
                    <el-input v-model="queryParam.title" style="width: 300px" size="small" placeholder="文章名称">
                        <template #prepend>文章名称</template>
                    </el-input>
                </div>
                <div class="query-param">
                    <el-select v-model="queryParam.state" style="width: 150px" size="small" placeholder="审核状态">
                        <el-option
                            v-for="item in postStateList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="query-param">
                    <el-select v-model="queryParam.releases" style="width: 150px" size="small" placeholder="发布状态">
                        <el-option
                            v-for="item in postReleaseList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="query-param">
                    <el-cascader :options="subtotal" :key="subtotalKey" size="small" placeholder="审核状态" v-model="queryParam.resourceId"
                                 :props="props1"
                                 filterable/>
                </div>

                <div class="query-param">
                    <el-date-picker
                        v-model="startTime"
                        type="daterange"
                        placeholder="更新时间"
                        size="small"
                        unlink-panels
                        range-separator="到"
                        start-placeholder="更新时间"
                        end-placeholder="选择时间"
                        format="YYYY-MM-DD"
                        value-format="YYYY-MM-DD"
                    />
                </div>
            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="success" size="small" @click="getList()">查询</el-button>
                </div>
<!--                <div class="query-param">-->
<!--                    <el-button type="primary" size="small">修改密码</el-button>-->
<!--                </div>-->
<!--                <div class="query-param">-->
<!--                    <el-button type="warning" size="small">封禁账户</el-button>-->
<!--                </div>-->
<!--                <div class="query-param">-->
<!--                    <el-button type="danger" size="small">删除用户</el-button>-->
<!--                </div>-->
            </div>
        </div>
        <div class="center" ref="centerMain">
            <el-table border :data="tableData" ref="userTable" style="height: 100%">
                <el-table-column fixed type="index" width="50" label="序号"/>
                <el-table-column fixed label="缩略图" width="175">
                    <template v-slot="scope">
                        <el-image style="width: 150px; height: 100px" viewer="scope.row.title" :src="scope.row.postsImg" fit="cover"
                        >
                            <template #error>
                                <div class="img-error"> 暂无缩略图</div>
                            </template>

                        </el-image>
                    </template>
                </el-table-column>
                <el-table-column fixed prop="title" label="文章标题" width="300"/>
                <el-table-column prop="state" label="发布" width="80">
                    <template v-slot="scope">
                        <template v-for="item in postStateList">
                            <div class="tree-resourceType" v-if="item.value === scope.row.state">
                                {{ item.label }}
                            </div>
                        </template>
                    </template>
                </el-table-column>


                <el-table-column prop="state" label="审核"  width="80">
                    <template v-slot="scope">
                        <template v-for="item in postReleaseList">
                            <div class="tree-resourceType" v-if="item.value === scope.row.releases">
                                {{ item.label }}
                            </div>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column fixed label="更新时间" width="180">
                    <template v-slot="scope">
                        <div>{{  getTime(scope.row.updateTime)    }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="subtitle" label="概括"/>

                <el-table-column fixed="right" label="操作" width="160">
                    <template  v-slot="scope"  #default>
                        <el-button type="primary" size="small" @click="edits(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="deleted">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
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


</template>

<script>
import {API} from "@/http/api";
import {ElMessage} from "element-plus";
import {post} from "@/http/http";
import {toTree} from "@/utils/dataDispose";

export default {
    emits:["addTabs"],
    name: "postList",
    data() {
        return {
            postReleaseList:[], // 发布草稿 状态
            postStateList:[],  //审核状态 列表
            queryParam: {},
            stateList: [],
            tableData: [],
            pagination: {
                pageSize: 20,  //每页多少条
                total: 0,   //共多少条
                pageNum: 1, //当前页
            },
            subtotal:[],//帖子分类列表
            subtotalKey: -5,//key
            props1: { //帖子分类渲染配置
                checkStrictly: true,
                emitPath:false,
            },
            startTime:[],
        };
    }
    , methods: {

        handleClick(click) {
            console.log(click)
        },
        getList() {
            let _this = this;
            _this.queryParam.pageSize = _this.pagination.pageSize;
            _this.queryParam.pageNum = _this.pagination.pageNum;
            if (_this.startTime.length === 2){
                _this.queryParam.startTime = JSON.stringify(_this.startTime);
            }else {
                _this.queryParam.startTime = ""
            }
            post(API.getPostList,this.queryParam).then(res=>{
                if (res.code) {
                    ElMessage.error(res.msg);
                } else {
                    _this.tableData = res.list;
                    _this.pagination.pageNum = res.pageNum;
                    _this.pagination.total = res.total;
                }
            })
        },
        // 每页条数被改变
        handleSizeChange: function (pageSize) {
            let _this = this
            _this.pagination.pageSize = pageSize  //每页多少条被改变
            _this.handleCurrentChange(1)
            _this.getList();
        },//换页
        handleCurrentChange(currentPage) {
            let _this = this
            _this.pagination.pageNum = currentPage
            _this.getList();
        },getTime(time){
            return new Date(time).Format("yyyy-MM-dd hh:mm:ss");
        },
        edits(item){
            this.$emit('addTabs',{
                name:item.id,
                title: item.title,
                content: 'postEdit',
            })
        },
        //删除
        deleted(){

        }


    }, mounted() {
        post(API.selectConstantData, {code: "postRelease"}).then(res => {
            if (res.code === 0) {
                this.postReleaseList = res.data;
            }
        })
        post(API.selectConstantData, {code: "postState"}).then(res => {
            if (res.code === 0) {
                this.postStateList = res.data;
            }
        })
        post(API.selectConstantData, {code: "userState"}).then(res => {
            if (res.code === 0) {
                this.stateList = res.data;
            }
        })
        post(API.queryRuleResource, {resourceType: 1}).then(res => {
            if (res.code === 0) {
                let data = res.data;
                data.forEach(item => {
                    item.label = item.resourceName;
                    item.value = item.id;
                })
                this.subtotal = toTree(data, "0b23919cb72a40afb15d9f2d533ed48b", null, "children")
            } else {
                ElMessage.error(res.msg)
            }
        })
        this.getList();
    }
}
</script>

<style scoped lang="less">


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
.img-error{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: @background-up;
}
</style>