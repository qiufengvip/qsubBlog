<template>
  <div class="top-center-bottom">
    <div class="query-param-main">
      <div class="query-param-term">
        <div class="query-param">
          <el-input v-model="queryParam.name" style="width: 200px" size="small" placeholder="名称">
            <template #prepend>名称</template>
          </el-input>
        </div>
      </div>
      <div class="query-param-function">
        <div class="query-param">
          <el-button type="primary" @click="getList" size="small">查询</el-button>
        </div>
      </div>
    </div>
    <div class="center">
      <el-table border :data="tableData" style="">
        <el-table-column fixed type="index" width="50" label="序号"/>
        <el-table-column prop="name" label="标签名称"/>
        <el-table-column fixed="right" label="操作" width="300">
          <template v-slot="scope" #default>
            <el-button type="danger" size="small" @click="deleted(scope.row)">删除</el-button>
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

<script  setup>

import {ElMessage, ElMessageBox} from "element-plus";
import {onMounted, reactive, ref} from "vue";

import {API} from "@/http/api";
import {post} from "@/http/http";


const pagination = reactive(
    {
      pageSize: 20,  //每页多少条
      total: 0,   //共多少条
      pageNum: 1, //当前页
    }
);

const queryParam = reactive({
  pageSize: 20,  //每页多少条
  pageNum: 1, //当前页
});
const tableData = ref([]);


async function getList() {
  queryParam.pageSize = pagination.pageSize;
  queryParam.pageNum = pagination.pageNum;
  post(API.getLabelList, queryParam).then(res => {
    if (res) {
      tableData.value = res.list;
      pagination.pageNum = res.pageNum;
      pagination.total = res.total;
    }
  })
}

function deleted(row) {
  ElMessageBox.confirm(
      '确定要删除嘛?',
      'Warning',
      {
        confirmButtonText: '对',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(async () => {
        post(API.deletedLabel, {id: row.id}).then(res => {
          if (res.code === 0) {
            ElMessage.success("删除成功");
            this.getList()
          } else {
            ElMessage.error(res.msg);
          }
        })
      })
      .catch(() => {

      })
}

// 每页条数被改变
function handleSizeChange(pageSize) {
  let _this = this
  _this.pagination.pageSize = pageSize  //每页多少条被改变
  _this.handleCurrentChange(1)
  _this.getUserList();
}

//换页
function handleCurrentChange(currentPage) {
  let _this = this
  _this.pagination.pageNum = currentPage
  _this.getUserList();
}

onMounted(() => {
  console.log("执行")
  getList();
});

// name: "labelList",

</script>

<!--<script lang="ts" setup>-->

<!--import {ElMessage, ElMessageBox} from "element-plus";-->
<!--import {onMounted, reactive} from "vue";-->

<!--import {API} from "../../../http/api";-->
<!--import {post} from "../../../http/http";-->

<!--interface pagination {-->
<!--  pageSize: number,-->
<!--  total: number,-->
<!--  pageNum: number,-->
<!--}-->

<!--interface queryParam {-->
<!--  pageSize: number,-->
<!--  pageNum: number,-->
<!--}-->

<!--interface tableData {-->
<!--  [index: string]: any-->
<!--}-->


<!--const pagination = reactive<pagination>(-->
<!--    {-->
<!--      pageSize: 20,  //每页多少条-->
<!--      total: 0,   //共多少条-->
<!--      pageNum: 1, //当前页-->
<!--    }-->
<!--);-->

<!--let queryParam = reactive<queryParam>({-->
<!--  pageSize: 20,  //每页多少条-->
<!--  pageNum: 1, //当前页-->
<!--});-->
<!--let tableData = reactive<tableData>([]);-->


<!--async function getList() {-->
<!--  queryParam.pageSize = pagination.pageSize;-->
<!--  queryParam.pageNum = pagination.pageNum;-->
<!--  post(API.getLabelList, queryParam).then(res => {-->
<!--    if (res) {-->
<!--      tableData = res.list;-->
<!--      pagination.pageNum = res.pageNum;-->
<!--      pagination.total = res.total;-->
<!--    }-->
<!--  })-->
<!--}-->

<!--function deleted(row) {-->
<!--  ElMessageBox.confirm(-->
<!--      '确定要删除嘛?',-->
<!--      'Warning',-->
<!--      {-->
<!--        confirmButtonText: '对',-->
<!--        cancelButtonText: '取消',-->
<!--        type: 'warning',-->
<!--      }-->
<!--  )-->
<!--      .then(async () => {-->
<!--        post(API.deletedLabel, {id: row.id}).then(res => {-->
<!--          if (res.code === 0) {-->
<!--            ElMessage.success("删除成功");-->
<!--            this.getList()-->
<!--          } else {-->
<!--            ElMessage.error(res.msg);-->
<!--          }-->
<!--        })-->
<!--      })-->
<!--      .catch(() => {-->

<!--      })-->
<!--}-->

<!--// 每页条数被改变-->
<!--function handleSizeChange(pageSize) {-->
<!--  let _this = this-->
<!--  _this.pagination.pageSize = pageSize  //每页多少条被改变-->
<!--  _this.handleCurrentChange(1)-->
<!--  _this.getUserList();-->
<!--}-->

<!--//换页-->
<!--function handleCurrentChange(currentPage) {-->
<!--  let _this = this-->
<!--  _this.pagination.pageNum = currentPage-->
<!--  _this.getUserList();-->
<!--}-->

<!--onMounted(() => {-->
<!--  getList();-->
<!--});-->

<!--// name: "labelList",-->

<!--</script>-->

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

.center {
  padding-left: 10px;
}

.bottom {
  padding-top: 10px;
  padding-left: 10px;
}
</style>