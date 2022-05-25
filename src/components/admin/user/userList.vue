<template>


    <div class="top-center-bottom">
        <div class="query-param-main">
            <div class="query-param-term">
                <div class="query-param">
                    <el-input v-model="queryParam.userName" style="width: 200px" size="small" placeholder="昵称">
                        <template #prepend>昵称</template>
                    </el-input>
                </div>
                <div class="query-param">
                    <el-input v-model="queryParam.phone" style="width: 230px" size="small" placeholder="手机号">
                        <template #prepend>手机号</template>
                    </el-input>
                </div>
                <div class="query-param">
                    <el-input v-model="queryParam.email" style="width: 250px" size="small" placeholder="邮箱">
                        <template #prepend>邮箱</template>
                    </el-input>
                </div>
                <div class="query-param">
                    <el-select v-model="queryParam.state" style="width: 150px" size="small" placeholder="账户状态">
                        <el-option
                            v-for="item in stateList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
            </div>
            <div class="query-param-function">
                <div class="query-param">
                    <el-button type="success" size="small">查询</el-button>

                </div>
                <div class="query-param">
                    <el-button type="primary" size="small">修改密码</el-button>
                </div>
                <div class="query-param">
                    <el-button type="warning" size="small">封禁账户</el-button>
                </div>
                <div class="query-param">
                    <el-button type="danger" size="small">删除用户</el-button>
                </div>
            </div>
        </div>
        <div class="center">
            <el-table border :data="tableData" style="">
                <el-table-column fixed prop="date" label="姓名" width="150"/>
                <el-table-column prop="name" label="Name" width="120"/>
                <el-table-column prop="state" label="State" width="120"/>
                <el-table-column prop="city" label="City" width="120"/>
                <el-table-column prop="address" label="Address"/>
                <el-table-column prop="zip" label="Zip"/>
                <el-table-column fixed="right" label="操作" width="160">
                    <template #default>
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger" size="small" @click="handleClick">删除</el-button>

                    </template>
                </el-table-column>
            </el-table>

        </div>
        <div class="bottom">
            <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
    </div>


</template>

<script>
export default {
    name: "userList",
    data() {
        return {
            queryParam: {},
            stateList: [{
                value: "0",
                label: "正常"
            }, {
                value: "1",
                label: "已封禁"
            }, {
                value: "3",
                label: "已删除"
            },
            ],
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                },
            ]
        };
    }
    , methods: {
        handleClick(click) {
            console.log(click)
        }
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

.top-center-bottom .bottom {
    height: 60px;
}

.top-center-bottom .center {
    flex: 1;
    background: green;
}

</style>