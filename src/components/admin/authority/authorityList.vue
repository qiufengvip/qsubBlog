<!-- 权限管理 -->
<template>
    <el-row :gutter="20">
        <el-col :span="3">
            <div class="left-head">
                <div class="head-title">
                    <span>角色列表</span>
                    <el-icon style="cursor:pointer;" @click="addRuleVisible=true">
                        <svg t="1652527684183" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2647" width="128" height="128">
                            <path
                                d="M511.256 0C228.9 0 0 228.9 0 511.256 0 623.8 36.805 727.509 98.429 811.957l38.415-39.993c-51.592-73.945-82.067-163.708-82.067-260.709 0-252.105 204.374-456.479 456.479-456.479 252.089 0 456.466 204.374 456.466 456.479 0 252.101-204.376 456.466-456.466 456.466-96.102 0-185.157-29.847-258.709-80.565l-34.387 42.609c83.032 58.26 183.962 92.734 293.096 92.734 282.351 0 511.245-228.894 511.245-511.244C1022.5 228.9 793.606 0 511.256 0z"
                                p-id="2648"></path>
                            <path
                                d="M492.979 255.62 492.979 492.986 255.613 492.986 255.613 547.762 492.979 547.762 492.979 785.128 547.756 785.128 547.756 547.762 785.121 547.762 785.121 492.986 547.756 492.986 547.756 255.62Z"
                                p-id="2649"></path>
                        </svg>
                    </el-icon>
                </div>
                <el-divider>
                    <el-icon>
                        <svg t="1652527904795" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3902" width="128" height="128">
                            <path
                                d="M334.848 343.04q22.528-28.672 49.152-50.176 22.528-18.432 50.176-33.792t57.344-13.312q43.008 3.072 71.68 20.48t45.568 43.008 23.04 58.368 4.096 66.56-13.312 64.512-27.136 57.856-34.304 49.664-36.864 40.96q-27.648 28.672-58.368 54.784t-58.368 46.08-49.664 31.744-32.256 11.776q-12.288 0-32.256-12.288t-44.544-32.256-52.224-46.08-55.296-52.736q-17.408-17.408-38.912-39.424t-40.448-48.128-32.256-57.344-14.336-67.072q-2.048-34.816 7.168-66.048t27.136-55.808 44.032-41.472 58.88-24.064 65.024 6.656 58.88 33.28q30.72 22.528 58.368 54.272zM611.328 245.76q13.312 0 25.6 1.024 11.264 1.024 23.552 3.072t21.504 6.144 19.456 10.752 19.456 12.8l20.48 16.384q6.144-6.144 13.312-11.264 13.312-10.24 35.84-23.552 12.288-7.168 28.672-10.752t33.28-2.56 33.28 6.656 27.648 17.92q31.744 33.792 37.888 66.048t-1.536 60.416-23.04 49.664-27.648 33.792q-23.552 23.552-44.544 40.96t-51.712 39.936q-16.384 11.264-34.304 19.456t-27.136 8.192q-9.216 1.024-19.968-7.68t-26.112-19.968q-7.168-5.12-13.312-12.288l-12.288-11.264-12.288-12.288q11.264-20.48 18.432-46.08 6.144-21.504 9.216-50.688t-3.072-62.976q-7.168-31.744-18.944-55.296t-23.04-37.888q-13.312-17.408-28.672-28.672z"
                                p-id="3903"></path>
                        </svg>
                    </el-icon>
                </el-divider>
            </div>
            <el-tree
                :highlight-current='true'
                node-key="id"
                :current-node-key="roleChecked"
                :data="roleTreeData"
                :props="TreeProps"
                ref="ruleTree"
                @node-click="handleNodeClick"/>
        </el-col>
        <el-divider direction="vertical"/>
        <el-col :span="20">
            <div class="grid-content bg-purple">
                <el-tabs v-model="activeName" class="qsub-resource-tabs" @tab-click="handleClick">
                    <el-tab-pane :label="itemMain.resourceName" :name="itemMain.id" v-for="itemMain in resourceList">
                        <template v-for="item in itemMain.children">
                            <el-card class="box-card">
                                <template #header>
                                    <div class="card-header">
                                        <!--                                        <span v-text="item.resourceName"></span>-->
                                        <el-checkbox v-model="item.checked"
                                                     @change="checkboxOnClick(item.checked,item.id,item.children)"
                                                     :label="item.resourceName" size="large"/>
                                    </div>
                                </template>
                                <div class="qsub-box-main">
                                    <div v-for="o in item.children" class="box-item">
                                        <el-checkbox v-model="o.checked" @change="checkboxOnClick(o.checked,o.id,[])" :label="o.resourceName" size="large"/>
                                    </div>
                                </div>
                            </el-card>
                        </template>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </el-row>

    <el-dialog
        v-model="addRuleVisible"
        title="添加角色"
        width="500px"
    >
        <el-form :model="roleData" ref="ruleForm" :rules="rules" label-width="100px">
            <div>
                <el-form-item label="角色名称" prop="name">
                    <el-input size="large" v-model="roleData.roleName"/>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                  <el-button type="danger" @click="addRuleVisible = false">取消</el-button>
                  <el-button type="primary" @click="addRuleSubmit">添加</el-button>
            </span>
        </template>

    </el-dialog>
</template>

<script>
import {
    request_resource_getSubset, request_resource_queryRuleResource,
    request_resource_roleAddResource,
    request_rule_addRole,
    request_rule_getRoleList
} from "@/http/api";
import {ElMessage} from "element-plus";
import {lookingBranch} from "@/utils/dataDispose";

export default {
    name: "authorityList",
    data() {
        return {
            roleTreeData: [],
            TreeProps: {
                // children: 'children',  //子集 这里不用
                label: 'ruleName',
            },
            roleChecked: "36ded9bd88d24cd39dbed61f09d4356f",
            addRuleVisible: false,  // 添加角色弹窗
            roleData: {
                roleName: '',
            },
            rules: {
                name: [
                    {min: 1, max: 8, message: '长度3-8之间', trigger: 'blur'},
                ],
            },
            resourceList: {},
            activeName: '',  //tab选择项
        };
    },
    watch: {
        ruleChecked(id) {
            // Tree 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。可以用 $refs 获取 Tree 实例
            if (id.toString()) {
                this.$refs["ruleTree"].setCurrentKey(id);
            } else {
                this.$refs["ruleTree"].setCurrentKey(null);
            }
        }
    },
    methods: {
        //树形图被点击
        handleNodeClick(data) {
            console.log(data);
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
                    this_.getroleList()
                    this_.addRuleVisible = false;
                    this_.roleData.roleName = undefined;
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },
        getroleList() {
            let _this = this;
            request_rule_getRoleList({type: 1}).then((res) => {
                if (res.code === 0) {
                    _this.roleTreeData = res.data
                    _this.roleChecked = res.data[0].id
                } else {
                    ElMessage.error(res.msg);
                }
            })
        },// 获取资源  角色id
        getResourceList(roleId) {
            let _this = this;
            _this.roleChecked = roleId;

        }, //获取角色拥有的资源    参数  是否保留 选中tab标签
        getRoleResource(retainIsOpt) {
            // 获取所有资源
            let _this = this;
            let resourceId = null;

            request_resource_getSubset().then((res) => {
                if (res.code === 0) {
                    request_resource_queryRuleResource({roleId: _this.roleChecked}).then((resMeRole)=>{
                        if (resMeRole.code ===0){
                            let meResourceList = resMeRole.data;
                            let data = res.data;
                            // 复制是否点击
                            data.forEach(item=>{
                                item.checked = meResourceList.indexOf(item.id)>-1;
                            });
                            let a = [], b = [];
                            // 解析 tab标签页面
                            data.forEach(item => {
                                if (item.pid === resourceId) {
                                    a.push(item)
                                } else {
                                    b.push(item)
                                }
                            })
                            // 解析卡片标题
                            a.forEach(item => {
                                item["children"] = [];
                                b.forEach(item2 => {
                                    if (item.id === item2.pid) {
                                        item2["children"] = lookingBranch(b, item2.id);
                                        item["children"].push(item2);
                                    }
                                })
                            })
                            if (!retainIsOpt){
                                _this.activeName = a[0].id;
                            }
                            _this.resourceList = a;
                            console.log(a);
                        }


                    })

                }
            })
        },
        // 资源tab被单击
        handleClick(tab, event) {
            console.log(tab, event)
        }, //资源选择框被单击
        checkboxOnClick(value,id, children) {
            console.log(value)
            let _this = this;
            let resourceIds = [];
            let data = {
                role: _this.roleChecked,
                isAdd:value
            }
            if (id) {
                resourceIds.push(id);
            }
            if (children) {
                children.forEach(item => {
                    resourceIds.push(item.id);
                })
            }
            data['resourceIds'] =JSON.stringify(resourceIds);
            request_resource_roleAddResource(data).then(res => {
                if (res.code === 0){
                    if (children){
                        _this.getRoleResource(true);
                    }
                    ElMessage.success(res.msg)
                }else{
                    ElMessage.error(res.msg);
                }
            })
        }
    },
    mounted() {
        this.getroleList();
        this.getRoleResource();
    }

}
</script>
<style lang="less">
.qsub-resource-tabs {
    .el-tabs__item.is-active {
        background-color: #00000000;
    }
}


</style>


<style scoped lang="less">
.left-head {
    color: @font-color;
}

.head-title {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
}

.el-row, .el-col {
    height: 100%;
}

.head-title .el-icon {
    margin-left: 10px;
}

.box-card {
    margin-bottom: 20px;
}

.qsub-box-main {
    display: flex;
}

.box-item {
    padding: 10px;
}
</style>