<template>
    <el-container class="common-layout-main">
        <el-container>
            <el-aside  class="aside">
                <div class="top-title">秋枫博客</div>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical"
                        :collapse="isCollapse"
                    >
                        <el-sub-menu index="1" class="menu-item">
                            <template #title>
                                <el-icon class="el-icon">
                                    <svg t="1651399138985" class="icon" viewBox="0 0 1029 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6979" width="128" height="128"><path d="M1001.423238 494.592q21.504 20.48 22.528 45.056t-16.384 40.96q-19.456 17.408-45.056 16.384t-40.96-14.336q-5.12-4.096-31.232-28.672t-62.464-58.88-77.824-73.728-78.336-74.24-63.488-60.416-33.792-31.744q-32.768-29.696-64.512-28.672t-62.464 28.672q-10.24 9.216-38.4 35.328t-65.024 60.928-77.824 72.704-75.776 70.656-59.904 55.808-30.208 27.136q-15.36 12.288-40.96 13.312t-44.032-15.36q-20.48-18.432-19.456-44.544t17.408-41.472q6.144-6.144 37.888-35.84t75.776-70.656 94.72-88.064 94.208-88.064 74.752-70.144 36.352-34.304q38.912-37.888 83.968-38.4t76.8 30.208q6.144 5.12 25.6 24.064t47.616 46.08 62.976 60.928 70.656 68.096 70.144 68.096 62.976 60.928 48.128 46.592zM447.439238 346.112q25.6-23.552 61.44-25.088t64.512 25.088q3.072 3.072 18.432 17.408l38.912 35.84q22.528 21.504 50.688 48.128t57.856 53.248q68.608 63.488 153.6 142.336l0 194.56q0 22.528-16.896 39.936t-45.568 18.432l-193.536 0 0-158.72q0-33.792-31.744-33.792l-195.584 0q-17.408 0-24.064 10.24t-6.656 23.552q0 6.144-0.512 31.232t-0.512 53.76l0 73.728-187.392 0q-29.696 0-47.104-13.312t-17.408-37.888l0-203.776q83.968-76.8 152.576-139.264 28.672-26.624 57.344-52.736t52.224-47.616 39.424-36.352 19.968-18.944z" p-id="6980"></path></svg>
                                </el-icon>
                                <span>首页</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                                <el-menu-item index="1-3">item three</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title><span>item four</span></template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                    </el-menu>
            </el-aside>

            <el-main>
                <el-header class="header">
                    <div class="head-t">
                        <el-button  type="primary" @click="Collapses">登录</el-button>
                    </div>
                    <div class="head-f">

                    </div>
                </el-header>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "AdminIndex",
    data() {
        return {
            isCollapse: true
        };
    }, methods: {
        Collapses() {
            this.isCollapse = !this.isCollapse;
            console.log(this.isCollapse)
        }
    }
}
</script>
<style lang="less">
.el-sub-menu__title{
    color:@font-color !important;
}
.el-sub-menu__title:hover,
.el-menu-item:hover{
    background-color: @background-color4 !important;
}
.el-menu{
    background-color: @background-color !important;
}
.el-menu-item.is-active{
    background-color: @background-color4;
}
.el-menu-item{
    color:@font-color !important;
}
.el-aside{
    --el-aside-width:auto;
}
</style>


<style scoped lang="less">
.el-main {
    padding: 0 !important;
    padding-top: 0px !important;
    background-color: @background-color3;
}
.el-menu-vertical{
    background-color: @background-color;
    height: auto;
    border-right: solid 1px @background-color4;
    color:@font-color;
    flex-grow: 1;
}

.aside{
    height: 100%;
    background-color: @background-color;
    display: flex;
    flex-direction: column;
}

.common-layout-main {
    width: 100vm;
    height: 100vh;
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.header{
    background-color: @background-color2;
    display:flex;
    justify-content: space-around;
}
.top-menu{
    height:auto;
}
.top-title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: @background-color3;
    color:  #FFFFFF;
}
</style>