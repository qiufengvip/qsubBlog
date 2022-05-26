<template>
    <el-container class="common-layout-main">
        <el-container>
            <el-aside class="aside">
                <div class="top-title">
                    <el-icon class="icon-logo">
                        <svg t="1651565904861" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1876" width="128" height="128">
                            <path
                                d="M785.513828 821.286754c-70.055313-56.640466-131.167394-144.582242-131.167394-144.582242l-10.43377 8.943232c19.377001 26.829694 78.998544 102.847162 126.695779 141.601164 49.187773 38.754003 96.885007 73.03639 111.790393 84.960699 14.905386 13.414847 8.943231 20.86754 4.471615 29.810771-7.452693 17.886463 14.905386 26.829694 22.358079 5.962155 1.490539-4.471616 2.981077-10.43377 2.981077-17.886463-2.981077-28.320233-56.640466-52.16885-126.695779-108.809316z"
                                p-id="1877"></path>
                            <path
                                d="M645.403202 666.270742c58.131004-13.414847 92.413392 8.943231 125.205241 14.905386-2.981077-8.943231-16.395924-22.358079-8.943232-25.339156 29.810771-10.43377 62.60262-4.471616 93.90393-7.452693-5.962154-5.962154-23.848617-13.414847-17.886463-19.377001 11.924309-11.924309 32.791849-8.943231 49.187773-13.414847-2.981077-2.981077-10.43377-8.943231-7.452693-10.43377 22.358079-10.43377 47.697234-11.924309 71.545852-17.886463-22.358079-4.471616-44.716157-4.471616-65.583697-13.414847-2.981077-1.490539 2.981077-7.452693 4.471615-10.43377-34.282387-4.471616-67.074236 1.490539-101.356623-14.905386 1.490539-28.320233 56.640466-58.131004 83.470161-86.451237-4.471616 0-14.905386 2.981077-13.414848-1.490539 14.905386-25.339156 35.772926-47.697234 53.659389-71.545851-31.30131 2.981077-61.112082 4.471616-92.413392 7.452693 11.924309-34.282387 25.339156-67.074236 37.263465-101.356623-10.43377 0-31.30131 11.924309-32.791849 1.490538-5.962154-23.848617 10.43377-47.697234 16.395924-71.545851-5.962154 0-16.395924 7.452693-17.886462 1.490538-2.981077-13.414847 4.471616-28.320233 7.452692-41.73508-4.471616 0-10.43377 1.490539-11.924308-2.981077-2.981077-22.358079 1.490539-46.206696 1.490538-70.055313-16.395924 22.358079-29.810771 47.697234-49.187772 67.074236-2.981077 2.981077-7.452693-4.471616-10.433771-7.452693-8.943231 14.905386-11.924309 35.772926-26.829694 46.206696-5.962154 4.471616-10.43377-8.943231-14.905386-14.905386-13.414847 31.30131-20.86754 64.093159-40.244541 92.413392-4.471616 5.962154-11.924309-11.924309-13.414847-14.905386-2.981077-2.981077-4.471616 98.375546-40.244542 132.657933-50.678311-65.583697-13.414847-107.318777-19.377001-162.468705-2.981077 4.471616-8.943231 16.395924-10.43377 10.43377-7.452693-20.86754-4.471616-43.225619-7.452693-64.093158-2.981077 4.471616-8.943231 17.886463-10.43377 13.414847-5.962154-14.905386-2.981077-32.791849-4.471616-49.187773-5.962154 14.905386-10.43377 32.791849-19.377001 46.206696-1.490539 2.981077-5.962154-2.981077-8.943232-5.962155-1.490539 16.395924-16.395924 49.187773-34.282387 49.187773-13.414847 0-32.791849-49.187773-49.187773-73.03639-1.490539 1.490539-4.471616 7.452693-5.962154 5.962155-8.943231-10.43377-13.414847-25.339156-20.86754-37.263465-7.452693 11.924309-16.395924 35.772926-23.848617 34.282387-14.905386-1.490539-38.754003-23.848617-56.640466-35.772925 0 2.981077 1.490539 11.924309-1.490539 11.924308-11.924309-4.471616-20.86754-14.905386-31.30131-22.358078 0 2.981077 2.981077 11.924309 0 10.43377-19.377001-8.943231-35.772926-23.848617-52.16885-35.772926 4.471616 20.86754 11.924309 41.73508 13.414847 62.60262 0 2.981077-5.962154-2.981077-8.943231-4.471616 2.981077 11.924309 8.943231 25.339156 8.943231 37.263465 0 4.471616-7.452693-1.490539-10.43377-2.981078 4.471616 22.358079 14.905386 52.16885 11.924309 67.074236-1.490539 7.452693-26.829694 5.962154-41.73508 8.943232 8.943231 11.924309 20.86754 20.86754 26.829694 34.282387 1.490539 2.981077-4.471616 2.981077-7.452693 4.471616 16.395924 23.848617 55.149927 59.621543 50.678312 73.03639-5.962154 16.395924-43.225619 17.886463-58.131005 13.414847 0 2.981077 4.471616 8.943231 1.490539 10.43377-16.395924 4.471616-32.791849 1.490539-49.187773 1.490538 14.905386 7.452693 32.791849 11.924309 43.225619 22.358079 4.471616 4.471616-10.43377 2.981077-16.395925 4.471616 19.377001 10.43377 40.244541 16.395924 56.640466 31.30131 4.471616 2.981077-8.943231 4.471616-13.414847 5.962154 47.697234 26.829694 99.866084 7.452693 143.091703 78.998544-44.716157 19.377001-138.620087-14.905386-138.620087-11.924308 1.490539 2.981077 14.905386 16.395924 8.943231 17.886463-32.791849 7.452693-67.074236 1.490539-99.866084 2.981077 2.981077 5.962154 13.414847 14.905386 7.452693 19.377001-14.905386 8.943231-35.772926 4.471616-52.16885 7.452693 1.490539 4.471616 5.962154 10.43377 2.981077 11.924309-25.339156 10.43377-53.659389 13.414847-81.979622 20.86754 22.358079 8.943231 44.716157 13.414847 65.583697 25.339156 2.981077 1.490539-1.490539 7.452693-2.981077 11.924308 13.414847 2.981077 29.810771 0 41.73508 8.943232 4.471616 2.981077-5.962154 10.43377-7.452692 16.395924 23.848617 4.471616 52.16885-2.981077 73.03639 11.924309 8.943231 5.962154-8.943231 20.86754-13.414848 31.30131 35.772926 1.490539 71.545852 1.490539 108.809316 2.981077-13.414847 28.320233-26.829694 55.149927-41.73508 83.47016 28.320233-7.452693 56.640466-19.377001 86.451238-23.848617 4.471616 0-2.981077 8.943231-2.981078 11.924308 37.263464-14.905386 84.960699-55.149927 111.790393-44.716157 2.981077 38.754003-16.395924 65.583697-25.339155 99.866084 4.471616 0 11.924309-4.471616 11.924308-1.490538 0 22.358079-8.943231 43.225619-13.414847 65.583697 14.905386-19.377001 25.339156-41.73508 43.225619-59.621543 2.981077-2.981077 4.471616 7.452693 7.452693 10.43377 10.43377-13.414847 14.905386-34.282387 29.810771-40.244541 7.452693-2.981077 7.452693 16.395924 10.43377 23.848617 13.414847-28.320233 20.86754-61.112082 41.73508-83.47016 5.962154-5.962154 13.414847 11.924309 19.377002 17.886463 7.452693-32.791849-1.490539-73.03639 34.282387-122.224163-1.490539-1.490539-2.981077-4.471616-4.471616-5.962155l-128.186317 147.563319 117.752547-153.525473-342.823872-17.886463 336.861718 5.962154-134.148472-190.788937-157.997089-14.905386h149.053858l-125.205241-207.184861 135.639011 198.24163 56.640465-122.224163-44.716157 137.129549 135.63901 189.298398 141.601165-368.163027L640.931587 646.893741l213.147016-56.640466L640.931587 658.818049s1.490539 2.981077 4.471615 7.452693z"
                                p-id="1878"></path>
                        </svg>
                    </el-icon>
                    <div v-if="!isCollapse">
                        秋枫博客
                    </div>
                </div>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical"
                    :collapse="isCollapse"
                    @select="menuSelect"
                >
                    <template v-for="item in menuData">
                        <template v-if="item.subMenu">
                            <template v-if="item.subMenu.length>0">

                                <el-sub-menu :index="item.id" class="menu-item">
                                    <template #title>
                                        <el-icon class="el-icon" v-html="item.icon"></el-icon>
                                        <span v-text="item.title"></span>
                                    </template>
                                    <el-menu-item-group>
                                        <template v-for="itemas  in  item.subMenu">
                                            <el-menu-item :index="itemas.id">
                                                <el-icon class="el-icon" v-html="itemas.icon"></el-icon>
                                                <span v-text="itemas.title"></span>
                                            </el-menu-item>
                                        </template>
                                    </el-menu-item-group>
                                </el-sub-menu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="item.id">
                                    <el-icon class="el-icon" v-html="item.icon"></el-icon>
                                    <span v-text="item.title"></span>
                                </el-menu-item>
                            </template>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item.id">
                                <el-icon class="el-icon" v-html="item.icon"></el-icon>
                                <span v-text="item.title"></span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-aside>

            <el-main>
                <el-header class="header">
                    <div class="head-t" @click="Collapses">
                        <el-icon class="el-icon-menu">
                            <svg t="1651560733692" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="5607" width="128" height="128">
                                <path
                                    d="M880 800c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h736zM576 587c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h432z m320.657-205.062c5.899-4.6 14.403-0.498 14.403 6.9v246.178c0 7.4-8.603 11.495-14.403 6.896L740.372 518.826c-4.496-3.5-4.496-10.297 0-13.796zM576 373c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h432z m304-213c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h736z"
                                    p-id="5608"></path>
                            </svg>
                        </el-icon>
                    </div>
                    <div class="head-f">
                        <el-icon class="el-icon-menu">
                            <svg t="1651568974862" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="6970" width="128" height="128">
                                <path
                                    d="M512 160v64H288c-16.416 0-32.224 15.904-32 32v512c0 16.416 15.936 32.224 32 32h224v64H288c-52.096 0-96-38.944-96-96V256c0-51.136 45.76-96 96-96h224z m164.16 198.048L832 512.064l-155.84 154.016-44.48-44 79.808-78.88h-263.552v-62.272h263.552l-79.808-78.88 44.48-44z"
                                    p-id="6971"></path>
                            </svg>
                        </el-icon>
                    </div>
                </el-header>
                <div class="tab-main">
                    <el-tabs
                        v-model="editableTabsValue"
                        type="card"
                        class="tabs"
                        ref="tabsEntity"
                        closable
                        @tab-remove="removeTab"
                    >
                        <el-tab-pane
                            v-for="item in editableTabs"
                            :key="item.name"
                            :label="item.title"
                            :name="item.name"
                            style="height: 100%;"
                        >
                            <component :is="item.content">
                            </component>
                        </el-tab-pane>
                    </el-tabs>
                </div>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>

import {ElMessage} from 'element-plus'
import HotPost from "@/components/HotPost";
import Bottom from "@/components/Bottom";
import home from "@/components/admin/home";
import userList from "@/components/admin/user/userList";
import userEdit from "@/components/admin/user/userEdit";
import userTest from "@/components/admin/user/userTest";
import authorityList from "@/components/admin/authority/authorityList";
import resourceList from "@/components/admin/authority/resourceList";
import roleList from "@/components/admin/authority/roleList";
import hello from "@/components/admin/user/hello";
export default {
    name: "AdminIndex",
    components: {HotPost, Bottom,home,userList,userEdit,userTest,authorityList,resourceList,roleList,hello},
    data() {
        return {
            editableTabs: [{
                content: "hello",
                name: "ceshi",
                title: "测试"
            }],
            editableTabsValue: 'ceshi',
            isCollapse: false,
            whichToShow: "",
            menuData: [{
                id: "a",
                title: "首页",
                icon: "<svg t=\"1604641432983\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3454\" width=\"200\" height=\"200\">\n" +
                    "    <path d=\"M512 51c62.26 0 122.62 12.18 179.43 36.21 54.89 23.22 104.2 56.46 146.55 98.82 42.35 42.35 75.6 91.66 98.82 146.55C960.82 389.38 973 449.74 973 512s-12.18 122.62-36.21 179.43c-23.22 54.89-56.46 104.2-98.82 146.55-42.35 42.35-91.66 75.6-146.55 98.82C634.62 960.82 574.26 973 512 973s-122.62-12.18-179.43-36.21c-54.89-23.22-104.2-56.46-146.55-98.82-42.35-42.35-75.6-91.66-98.82-146.55C63.18 634.62 51 574.26 51 512s12.18-122.62 36.21-179.43c23.22-54.89 56.46-104.2 98.82-146.55 42.35-42.35 91.66-75.6 146.55-98.82C389.38 63.18 449.74 51 512 51m0-51C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z\" p-id=\"3455\"></path>\n" +
                    "    <path d=\"M512 512m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z\" p-id=\"3456\"></path>\n" +
                    "</svg>",
                url: "home",
                subMenu: [],
            },
                {
                    id: "b",
                    title: "系统设置",
                    icon: "<svg t=\"1651558184227\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2094\" width=\"128\" height=\"128\"><path d=\"M450.7648 768l177.3568 102.4H307.2a51.2 51.2 0 0 1 0-102.4h143.5648zM716.8 358.4l221.696 128v256L716.8 870.4l-221.696-128v-256L716.8 358.4z m102.4-204.8a51.2 51.2 0 0 1 51.2 51.2v191.0784L716.8 307.2 450.7648 460.8l-0.0512 256H204.8a51.2 51.2 0 0 1-51.2-51.2V204.8a51.2 51.2 0 0 1 51.2-51.2h614.4z m-102.4 358.4a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z m0 51.2a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z\" p-id=\"2095\"></path></svg>",
                    subMenu: [
                        {
                            id: 'ba',
                            title: "人员管理",
                            url: "userList",
                            icon: '<svg t="1651558381828" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3841" width="128" height="128"><path d="M754.663647 1019.071348a11.016988 11.016988 0 0 0-2.029445-2.609287 154.237826 154.237826 0 0 1-33.340884-28.992072L714.364666 985.730464h-10.727067l-14.496036 7.537939a22.323896 22.323896 0 0 1-28.992073-9.277463l-7.827859-14.785957a22.323896 22.323896 0 0 1 9.277463-28.992072l14.496036-7.537939v-4.05889a153.947905 153.947905 0 0 1-4.05889-41.748585 11.016988 11.016988 0 0 0-7.537939-12.466591l-15.655719-4.928652a22.323896 22.323896 0 0 1-14.785957-28.992073l4.928652-15.94564a22.323896 22.323896 0 0 1 28.992073-14.785957l15.655719 4.928653a11.016988 11.016988 0 0 0 13.046433-6.088336 154.237826 154.237826 0 0 1 26.672706-32.1812V756.11325l-7.537938-14.496036a22.323896 22.323896 0 0 1 9.277463-28.992072l14.785957-7.82786a22.323896 22.323896 0 0 1 28.992072 9.277463l2.319366 7.82786a64.362401 64.362401 0 0 0 2.609286 7.537939c2.319366 5.508494 8.987542 6.088335 15.075878 4.638731a154.237826 154.237826 0 0 1 43.198188-4.05889h2.319366a11.016988 11.016988 0 0 0 8.987542-7.537939l4.928653-15.655719a20.584371 20.584371 0 0 1 0-2.609286 439.519819 439.519819 0 0 0-231.93658-169.603624 282.382786 282.382786 0 1 0-262.958097 1.739524A448.507361 448.507361 0 0 0 47.546999 960.507361v33.630804a26.962627 26.962627 0 0 0 23.483579 24.063421h682.473386z" p-id="3842"></path><path d="M831.977386 879.758224m-32.802472 17.353357a37.109853 37.109853 0 1 0 65.604943-34.706715 37.109853 37.109853 0 1 0-65.604943 34.706715Z" p-id="3843"></path><path d="M725.961495 961.377123l10.727067-5.798414H743.356738a114.228766 114.228766 0 0 0 24.933183 20.584371l1.449603 2.029445a8.11778 8.11778 0 0 1 0 6.378256l-3.479048 11.596829a16.525481 16.525481 0 0 0 11.016987 20.584372l11.88675 3.768969a16.525481 16.525481 0 0 0 20.584371-11.016987l3.479049-11.596829h2.609287a115.96829 115.96829 0 0 0 32.1812-2.899207 8.11778 8.11778 0 0 1 8.697622 4.05889l5.798414 10.727066a16.525481 16.525481 0 0 0 22.323896 6.958098l11.016988-5.798415a16.525481 16.525481 0 0 0 6.958097-22.323895l-5.798414-10.727067a8.11778 8.11778 0 0 1 0-9.567384 114.228766 114.228766 0 0 0 20.584371-24.933182h7.82786l11.596829 3.479048a16.525481 16.525481 0 0 0 20.584371-11.016987l3.768969-11.88675a16.525481 16.525481 0 0 0-11.016987-20.584372l-11.596829-3.479048a8.11778 8.11778 0 0 1-5.798415-6.378256 114.228766 114.228766 0 0 0-2.899207-31.89128 8.11778 8.11778 0 0 1 0-1.449604v-3.189127l10.727067-5.798415a16.525481 16.525481 0 0 0 6.958097-22.323896l-5.798414-11.016987a16.525481 16.525481 0 0 0-22.323896-6.958098l-10.727067 5.798415a8.11778 8.11778 0 0 1-9.567384 0 115.96829 115.96829 0 0 0-24.933182-20.584372V790.033975l3.479049-11.596829a16.525481 16.525481 0 0 0-11.016988-20.584371l-11.88675-3.76897a16.525481 16.525481 0 0 0-20.584371 11.016988l-3.479049 11.596829a8.11778 8.11778 0 0 1-6.668176 5.798414h-1.739525a114.228766 114.228766 0 0 0-31.891279 2.899207 8.11778 8.11778 0 0 1-11.016988-3.479048 19.134768 19.134768 0 0 1 0-5.798415l-2.319366-5.798414a16.525481 16.525481 0 0 0-22.323896-6.958098l-11.016987 5.798415a16.525481 16.525481 0 0 0-6.958098 22.323896l5.798415 10.727067v5.798414a114.228766 114.228766 0 0 0-20.00453 23.773499 8.11778 8.11778 0 0 1-9.857305 4.638732l-11.596829-3.479049a16.525481 16.525481 0 0 0-20.584371 11.016988l-3.76897 11.88675a16.525481 16.525481 0 0 0 11.016988 20.584371l11.596829 3.479049a8.11778 8.11778 0 0 1 5.508494 9.277463 114.228766 114.228766 0 0 0 2.899207 31.021518v3.768969l-10.727067 5.798414a16.525481 16.525481 0 0 0-6.958097 22.323896l5.798414 11.016988a16.525481 16.525481 0 0 0 29.861835-1.739525z m80.887882-129.014722a53.635334 53.635334 0 1 1-22.323896 72.480181 53.635334 53.635334 0 0 1 22.613817-72.480181z" p-id="3844"></path></svg>'
                        }
                    ],
                }
            ],
            // editableTabs: [{
            //     content: "home",
            //     name: "a",
            //     title: "首页"
            // }],

            apps: []
        };
    }, methods: {
        //折叠菜单
        Collapses() {
            this.isCollapse = !this.isCollapse;
        }
        //
        , addTab() {
            // editableTabs.value.push({
            //     title: 'New Tab',
            //     name: newTabName,
            //     content: 'New Tab content',
            // })
        }
        //移除tab标签
        , removeTab(targetName) {
            if (this.editableTabs.length > 1) {
                const tabs = this.editableTabs
                let activeName = this.editableTabsValue
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            const nextTab = tabs[index + 1] || tabs[index - 1]
                            if (nextTab) {
                                activeName = nextTab.name
                            }
                        }
                    })
                }
                this.editableTabsValue = activeName
                this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
            } else {
                ElMessage.error("包关兰")
            }

        }
        // 菜单点击事件
        , menuSelect(index) {
            let _this = this;
            _this.menuData.forEach(item=>{
                if (item.id === index){
                    _this.addTabs({
                        name:item.id,
                        title: item.title,
                        content: item.url,
                    })
                }else{
                    if (item.subMenu){
                        item.subMenu.forEach(item1=>{
                            if (item1.id === index) {
                                _this.addTabs({
                                    name:item1.id,
                                    title: item1.title,
                                    content: item1.url,
                                })
                            }
                        })
                    }
                }
            })
        }
        // 没有就添加 存在就跳转
        ,addTabs(tab){
            let _this = this;
            let isAdd = false;
            console.log(tab)
            _this.editableTabs.forEach(item=>{
                if (item.name === tab.name) {
                    isAdd = true;
                }
            })
            if (!isAdd){
                _this.editableTabs.push(tab)
            }
            this.editableTabsValue = tab.name

        }
    }, created() {
        console.log(this.menuData)
    }
}
</script>
<style lang="less">
.el-sub-menu__title {
    color: @font-color !important;
}

.el-sub-menu__title:hover,
.el-menu-item:hover {
    background-color: @background-color4 !important;
}

.el-menu {
    background-color: @background-color !important;
}

.el-menu-item.is-active {
    background-color: @background-color4;
}

.el-menu-item {
    color: @font-color !important;
}

.el-aside {
    --el-aside-width: auto;
}

.el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: 1px solid @background-color4;
}

.el-tabs--card > .el-tabs__header {
    border-bottom: 1px solid @background-color4;
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: @background-color4;
}

.el-tabs--card > .el-tabs__header .el-tabs__item {
    border-left: 1px solid @background-color4;
}

.el-tabs__item {
    color: @font-color;
    background-color: #00000000;
}

.el-tabs__item.is-active {
    color: @font-color;
    background-color: @background-color4;
}

.el-tabs__item:hover {
    color: @font-color;
}

.el-tabs__content {
    flex-grow: 1;
}

</style>
<style lang="less">
.el-card {
    //分割线
    --el-card-border-color: @background-color4;
    //背景
    --el-card-bg-color: @background-color3;
}
.el-card {
    color: @font-color;
}



.el-table {
    --el-table-border-color: @background-color4;
    --el-table-border: 1px solid var(--el-table-border-color);
    --el-table-text-color: @font-color;
    --el-table-header-text-color: @font-color;
    --el-table-row-hover-bg-color: @background-color4;
    --el-table-current-row-bg-color: @background-color4;
    --el-table-header-bg-color: @background-color2;
    --el-table-fixed-box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    --el-table-bg-color: @background-color3;
    --el-table-tr-bg-color: @background-color3;
    --el-table-expanded-cell-bg-color: @background-color3;
}
:root {
    --el-bg-color:@background-color4;
    --el-color-white:@font-color;
    --el-color-info:@font-color;
    --el-border-base: var(--el-border-width-base) var(--el-border-style-base) @background-color4;
    --el-border-color-light:@background-color4;
    --el-text-color-regular:@font-color;
}
.el-popper.is-light .el-popper__arrow::before {
    background: @background-color4;
}

.el-input-group__prepend {
    border: 1px solid @background-color4;
}
.el-input{
    --el-input-text-color:@font-color;
    --el-input-bg-color:@background-color3;
}
.el-scrollbar{
    background:@background-color;
}

</style>


<style scoped lang="less">
.el-icon-menu svg {
    width: 35px;
    height: 35px;
    fill: @font-color;
}

.icon-logo {
    width: 30px;
    height: 30px;
    padding: 10px;
}

.icon-logo svg {
    width: 30px;
    height: 30px;
    fill: @logo-color;
}

.el-main {
    padding: 0 !important;
    padding-top: 0px !important;
    background-color: @background-color3;
}

.el-menu-vertical {
    background-color: @background-color;
    height: auto;
    border-right: solid 1px @background-color4;
    color: @font-color;
    flex-grow: 1;
}

.aside {
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

.header {
    width: 100%;
    background-color: @background-color2;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-menu {
    height: auto;
}

.top-title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: @background-color3;
    color: @font-color;
    display: flex;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    align-items: center;
}

.head-f {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.el-icon {
    height: auto;
    width: auto;
}

.tab-main {
    padding: 10px;
    flex-grow: 1;
}

.el-main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

</style>