<template>
    <div class="common-layout">
        <el-container>
            <el-header>

            </el-header>
            <el-main>
                <el-table  :data="tableData" style="width: 100%;height: 100%">
                    <el-table-column fixed prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="120" />
                    <el-table-column prop="address" label="Address" width="600" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button type="text" size="small" @click="handleClick"
                            >Detail</el-button
                            >
                            <el-button type="text" size="small">Edit</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer>
                <div class="example-pagination-block">
                    <el-pagination layout="prev, pager, next" :total="1000" />
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "userList",
    data(){
        return {
            tableData : [
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
                },
            ]
        };
    }
    ,methods:{
        handleClick(click){
            console.log(click)
        }
    }
}
</script>

<style scoped>
.common-layout{
    height: 100%;
}
.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}
</style>