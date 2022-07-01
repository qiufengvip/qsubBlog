<template>
    <!--    站点头部 -->
    <transition name="el-zoom-in-top">
        <div v-show="show" class="qsub-header">
            <div ref="transitionBox" id="qsub-header" class="qsub-header-body">
                <div class="qsub-logo selected">
                    <svg t="1651565904861" class="" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1876" width="128" height="128">
                        <path
                            d="M785.513828 821.286754c-70.055313-56.640466-131.167394-144.582242-131.167394-144.582242l-10.43377 8.943232c19.377001 26.829694 78.998544 102.847162 126.695779 141.601164 49.187773 38.754003 96.885007 73.03639 111.790393 84.960699 14.905386 13.414847 8.943231 20.86754 4.471615 29.810771-7.452693 17.886463 14.905386 26.829694 22.358079 5.962155 1.490539-4.471616 2.981077-10.43377 2.981077-17.886463-2.981077-28.320233-56.640466-52.16885-126.695779-108.809316z"
                            p-id="1877"></path>
                        <path
                            d="M645.403202 666.270742c58.131004-13.414847 92.413392 8.943231 125.205241 14.905386-2.981077-8.943231-16.395924-22.358079-8.943232-25.339156 29.810771-10.43377 62.60262-4.471616 93.90393-7.452693-5.962154-5.962154-23.848617-13.414847-17.886463-19.377001 11.924309-11.924309 32.791849-8.943231 49.187773-13.414847-2.981077-2.981077-10.43377-8.943231-7.452693-10.43377 22.358079-10.43377 47.697234-11.924309 71.545852-17.886463-22.358079-4.471616-44.716157-4.471616-65.583697-13.414847-2.981077-1.490539 2.981077-7.452693 4.471615-10.43377-34.282387-4.471616-67.074236 1.490539-101.356623-14.905386 1.490539-28.320233 56.640466-58.131004 83.470161-86.451237-4.471616 0-14.905386 2.981077-13.414848-1.490539 14.905386-25.339156 35.772926-47.697234 53.659389-71.545851-31.30131 2.981077-61.112082 4.471616-92.413392 7.452693 11.924309-34.282387 25.339156-67.074236 37.263465-101.356623-10.43377 0-31.30131 11.924309-32.791849 1.490538-5.962154-23.848617 10.43377-47.697234 16.395924-71.545851-5.962154 0-16.395924 7.452693-17.886462 1.490538-2.981077-13.414847 4.471616-28.320233 7.452692-41.73508-4.471616 0-10.43377 1.490539-11.924308-2.981077-2.981077-22.358079 1.490539-46.206696 1.490538-70.055313-16.395924 22.358079-29.810771 47.697234-49.187772 67.074236-2.981077 2.981077-7.452693-4.471616-10.433771-7.452693-8.943231 14.905386-11.924309 35.772926-26.829694 46.206696-5.962154 4.471616-10.43377-8.943231-14.905386-14.905386-13.414847 31.30131-20.86754 64.093159-40.244541 92.413392-4.471616 5.962154-11.924309-11.924309-13.414847-14.905386-2.981077-2.981077-4.471616 98.375546-40.244542 132.657933-50.678311-65.583697-13.414847-107.318777-19.377001-162.468705-2.981077 4.471616-8.943231 16.395924-10.43377 10.43377-7.452693-20.86754-4.471616-43.225619-7.452693-64.093158-2.981077 4.471616-8.943231 17.886463-10.43377 13.414847-5.962154-14.905386-2.981077-32.791849-4.471616-49.187773-5.962154 14.905386-10.43377 32.791849-19.377001 46.206696-1.490539 2.981077-5.962154-2.981077-8.943232-5.962155-1.490539 16.395924-16.395924 49.187773-34.282387 49.187773-13.414847 0-32.791849-49.187773-49.187773-73.03639-1.490539 1.490539-4.471616 7.452693-5.962154 5.962155-8.943231-10.43377-13.414847-25.339156-20.86754-37.263465-7.452693 11.924309-16.395924 35.772926-23.848617 34.282387-14.905386-1.490539-38.754003-23.848617-56.640466-35.772925 0 2.981077 1.490539 11.924309-1.490539 11.924308-11.924309-4.471616-20.86754-14.905386-31.30131-22.358078 0 2.981077 2.981077 11.924309 0 10.43377-19.377001-8.943231-35.772926-23.848617-52.16885-35.772926 4.471616 20.86754 11.924309 41.73508 13.414847 62.60262 0 2.981077-5.962154-2.981077-8.943231-4.471616 2.981077 11.924309 8.943231 25.339156 8.943231 37.263465 0 4.471616-7.452693-1.490539-10.43377-2.981078 4.471616 22.358079 14.905386 52.16885 11.924309 67.074236-1.490539 7.452693-26.829694 5.962154-41.73508 8.943232 8.943231 11.924309 20.86754 20.86754 26.829694 34.282387 1.490539 2.981077-4.471616 2.981077-7.452693 4.471616 16.395924 23.848617 55.149927 59.621543 50.678312 73.03639-5.962154 16.395924-43.225619 17.886463-58.131005 13.414847 0 2.981077 4.471616 8.943231 1.490539 10.43377-16.395924 4.471616-32.791849 1.490539-49.187773 1.490538 14.905386 7.452693 32.791849 11.924309 43.225619 22.358079 4.471616 4.471616-10.43377 2.981077-16.395925 4.471616 19.377001 10.43377 40.244541 16.395924 56.640466 31.30131 4.471616 2.981077-8.943231 4.471616-13.414847 5.962154 47.697234 26.829694 99.866084 7.452693 143.091703 78.998544-44.716157 19.377001-138.620087-14.905386-138.620087-11.924308 1.490539 2.981077 14.905386 16.395924 8.943231 17.886463-32.791849 7.452693-67.074236 1.490539-99.866084 2.981077 2.981077 5.962154 13.414847 14.905386 7.452693 19.377001-14.905386 8.943231-35.772926 4.471616-52.16885 7.452693 1.490539 4.471616 5.962154 10.43377 2.981077 11.924309-25.339156 10.43377-53.659389 13.414847-81.979622 20.86754 22.358079 8.943231 44.716157 13.414847 65.583697 25.339156 2.981077 1.490539-1.490539 7.452693-2.981077 11.924308 13.414847 2.981077 29.810771 0 41.73508 8.943232 4.471616 2.981077-5.962154 10.43377-7.452692 16.395924 23.848617 4.471616 52.16885-2.981077 73.03639 11.924309 8.943231 5.962154-8.943231 20.86754-13.414848 31.30131 35.772926 1.490539 71.545852 1.490539 108.809316 2.981077-13.414847 28.320233-26.829694 55.149927-41.73508 83.47016 28.320233-7.452693 56.640466-19.377001 86.451238-23.848617 4.471616 0-2.981077 8.943231-2.981078 11.924308 37.263464-14.905386 84.960699-55.149927 111.790393-44.716157 2.981077 38.754003-16.395924 65.583697-25.339155 99.866084 4.471616 0 11.924309-4.471616 11.924308-1.490538 0 22.358079-8.943231 43.225619-13.414847 65.583697 14.905386-19.377001 25.339156-41.73508 43.225619-59.621543 2.981077-2.981077 4.471616 7.452693 7.452693 10.43377 10.43377-13.414847 14.905386-34.282387 29.810771-40.244541 7.452693-2.981077 7.452693 16.395924 10.43377 23.848617 13.414847-28.320233 20.86754-61.112082 41.73508-83.47016 5.962154-5.962154 13.414847 11.924309 19.377002 17.886463 7.452693-32.791849-1.490539-73.03639 34.282387-122.224163-1.490539-1.490539-2.981077-4.471616-4.471616-5.962155l-128.186317 147.563319 117.752547-153.525473-342.823872-17.886463 336.861718 5.962154-134.148472-190.788937-157.997089-14.905386h149.053858l-125.205241-207.184861 135.639011 198.24163 56.640465-122.224163-44.716157 137.129549 135.63901 189.298398 141.601165-368.163027L640.931587 646.893741l213.147016-56.640466L640.931587 658.818049s1.490539 2.981077 4.471615 7.452693z"
                            p-id="1878"></path>
                    </svg>
                    <div>秋枫博客</div>
                </div>
                <!-- 移动端 -->
                <div class="qsub-menu-mobile selected">
                    <ul class="qsub-menu">
                        <li class="qsub-menu-li">
                            <div class="qsub-menu-item-f" @click="menuMobile =true">
                                <div>
                                    <svg t="1656516719110" class="icons" viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="41451" width="200" height="200">
                                        <path
                                            d="M164.601586 234.551828m-61.942554 61.942554a87.6 87.6 0 1 0 123.885108-123.885108 87.6 87.6 0 1 0-123.885108 123.885108Z"
                                            fill="#F9DB91" p-id="41452"></path>
                                        <path
                                            d="M358.81 173.43m17 0l554.19 0q17 0 17 17l0 88.25q0 17-17 17l-554.19 0q-17 0-17-17l0-88.25q0-17 17-17Z"
                                            fill="#F9DB91" p-id="41453"></path>
                                        <path
                                            d="M164.580021 512.008379m-85.257498 20.122598a87.6 87.6 0 1 0 170.514997-40.245196 87.6 87.6 0 1 0-170.514997 40.245196Z"
                                            fill="#AEF0FF" p-id="41454"></path>
                                        <path
                                            d="M358.81 450.87m17 0l554.19 0q17 0 17 17l0 88.25q0 17-17 17l-554.19 0q-17 0-17-17l0-88.25q0-17 17-17Z"
                                            fill="#AEF0FF" p-id="41455"></path>
                                        <path
                                            d="M164.561021 789.464931m-100.572442 0.012598a87.6 70.6 0 1 0 200-0 87.6 70.6 0 1 0-180.144886 0Z"
                                              fill="#EF6A6A" p-id="41456"></path>
                                        <path
                                            d="M358.81 728.32m17 0l554.19 0q17 0 17 17l0 88.25q0 17-17 17l-554.19 0q-17 0-17-17l0-88.25q0-17 17-17Z"
                                            fill="#EF6A6A" p-id="41457"></path>
                                        <path
                                            d="M164.6 134a100.6 100.6 0 1 0 100.6 100.6A100.6 100.6 0 0 0 164.6 134z m0 175.2a74.6 74.6 0 1 1 74.6-74.6 74.68 74.68 0 0 1-74.6 74.55zM930 160.43H375.81a30.09 30.09 0 0 0-30 30v88.25a30.09 30.09 0 0 0 30 30H930a30.09 30.09 0 0 0 30-30v-88.25a30.09 30.09 0 0 0-30-30z m4 118.25a4.11 4.11 0 0 1-4 4H375.81a4.1 4.1 0 0 1-4-4v-88.25a4.1 4.1 0 0 1 4-4H930a4.11 4.11 0 0 1 4 4zM164.6 411.4A100.6 100.6 0 1 0 265.2 512a100.6 100.6 0 0 0-100.6-100.6z m0 175.2a74.6 74.6 0 1 1 74.6-74.6 74.68 74.68 0 0 1-74.6 74.6zM930 437.87H375.81a30.09 30.09 0 0 0-30 30v88.26a30.09 30.09 0 0 0 30 30H930a30.09 30.09 0 0 0 30-30v-88.26a30.09 30.09 0 0 0-30-30z m4 118.26a4.11 4.11 0 0 1-4 4H375.81a4.1 4.1 0 0 1-4-4v-88.26a4.1 4.1 0 0 1 4-4H930a4.11 4.11 0 0 1 4 4zM164.6 688.85a100.6 100.6 0 1 0 100.6 100.6 100.6 100.6 0 0 0-100.6-100.6z m0 175.2a74.6 74.6 0 1 1 74.6-74.6 74.69 74.69 0 0 1-74.6 74.6zM930 715.32H375.81a30.09 30.09 0 0 0-30 30v88.25a30.09 30.09 0 0 0 30 30H930a30.09 30.09 0 0 0 30-30v-88.25a30.09 30.09 0 0 0-30-30z m4 118.25a4.11 4.11 0 0 1-4 4H375.81a4.1 4.1 0 0 1-4-4v-88.25a4.1 4.1 0 0 1 4-4H930a4.11 4.11 0 0 1 4 4z"
                                            fill="#512C56" p-id="41458"></path>
                                    </svg>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!--       网页版菜单   -->
                <div class="qsub-menu-web selected">
                    <ul class="qsub-menu">
                        <li class="qsub-menu-li" v-for="item in  menuData">
                            <div class="qsub-menu-item-f" @mouseenter="menuHover(item)" @mouseleave="menuHover(item)">
                                <div v-html="item.resourceData">
                                </div>
                                <span class="qsub-menu-title" v-text="item.resourceName"></span>
                                <div v-html="arrowXia" v-if="item.sub.length>0"></div>
                                <transition name="el-zoom-in-top">
                                    <div class="qsub-menu-list" v-show="item.show" v-if="item.sub.length>0">
                                        <div class="qsub-menu-item" v-for="item2  in item.sub">
                                            <div class="qsub-menu-item-a">
                                                <div v-html="item2.resourceData">
                                                </div>
                                                <span class="qsub-menu-title" v-text=" item2.resourceName"></span>
                                            </div>
                                            <div class="qsub-menu-item-b">
                                                <div v-html="arrowYou"></div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>


    <el-drawer v-model="menuMobile" size="500" :direction="direction" :with-header="false">
        <div class="mobile-top selected">
            <el-avatar :size="100" :src="userImg"/>
            <div class="user-name">Hi! &nbsp 欢迎登录</div>
        </div>

        <div class="menu-mobile selected">

            <ul>
                <li class="menu-mobile-li" v-for="item in  menuData">
                    <div class="menu-mobile-item" @click="menuMobileClick(item)">
                        <div class="menu-mobile-item-title">
                            <div v-html="item.resourceData">
                            </div>
                            <span class="menu-mobile-title" v-text="item.resourceName"></span>
                        </div>
                        <div v-html="arrowXia" v-if="item.sub.length>0"></div>
                    </div>
                    <div :style="item.mobileShow?'height:' + (item.sub.length*45)+ 'px':'height:0'"
                         class="menu-mobile-list" v-if="item.sub.length>0">
                        <div class="menu-mobile-item" v-for="item2  in item.sub">
                            <div class="menu-mobile-item-a">
                                <div v-html="item2.resourceData">
                                </div>
                                <span class="menu-mobile-title" v-text="item2.resourceName"></span>
                            </div>
                            <div class="menu-mobile-item-b">
                                <div v-html="arrowYou"></div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </el-drawer>

</template>

<script>
import {Search} from '@element-plus/icons'
import {toTree} from "@/utils/dataDispose";
import {API} from "@/http/api";
import {post} from "@/http/http";

export default {
    name: "Header",
    components: {
        Search,
    },
    data() {
        return {
            userImg: 'http://file.qsub.cn/userimg.png',
            show: false,
            activeIndex: '',
            oldScrollTop: 0, // 滚动前，滚动条距顶部的距离
            search: false,
            arrowXia: '<svg t="1648789213060" class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1875"><path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z" p-id="1876"></path></svg>',
            arrowYou: '<svg t="1648789338480" class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2017"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="2018"></path></svg>',
            menuData: [],
            menuMobile: false
        };
    },
    setup() {
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
            key = []
            key.push()
            console.log()
        };
        return {
            handleSelect,
        };
    },
    methods: {
        menuMobileClick: function (item) {
            if (item.mobileShow) {
                item.mobileShow = false;
            } else {
                item.mobileShow = true;
            }

        },
        menuHover: function (item) {
            if (item.show) {
                item.show = false;
            } else {
                item.show = true;
            }
        },
        scrolling() {
            // 滚动条距文档顶部的距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop
            let attribute;
            try {
                attribute = this.$refs.transitionBox.getAttribute('id');
            } catch (e) {

            }
            if (scrollTop > 30) {
                if (attribute === "qsub-header") {
                    this.$refs.transitionBox.setAttribute('id', 'qsub-header-bg')
                }
            } else {
                if (attribute === "qsub-header-bg") {
                    this.$refs.transitionBox.setAttribute('id', 'qsub-header')
                }
            }
            // 滚动条滚动的距离
            let scrollStep = scrollTop - this.oldScrollTop;
            // 更新——滚动前，滚动条距文档顶部的距离
            this.oldScrollTop = scrollTop;
            if (scrollStep < 0) {
                if (!this.show) {
                    this.show = true;
                }
            } else {
                if (this.show) {
                    this.show = false;
                }
            }
        },
    },
    mounted() {
        // 监听页面滚动事件
        this.show = true;
        window.addEventListener("scroll", this.scrolling)
        post(API.getIndexInfo).then(res => {
            if (res.code === 0) {
                this.menuData = toTree(res.data.menu, "0b23919cb72a40afb15d9f2d533ed48b", null, "sub")
            }
        })


    }
}
</script>

<style lang="less">
/** 图标 **/
.icon {
    fill: @font-color;
    width: 16px;
    height: 16px;
    padding-right: 5px;
}

.icon-arrow {
    fill: @font-color;
    width: 10px;
    height: 10px;
    padding: 6px;
}
</style>

<style lang="less" scoped>

.menu-mobile-list {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    //display: none;
    height: 0;
    transition: height 0.3s;
    margin-left: 20px;
}

.menu-mobile-list-up {
}


.menu-mobile-item-title {
    display: flex;
    align-items: center;
}

.menu-mobile-item-a {
    display: flex;
    align-items: center;
}

.menu-mobile-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    height: 25px;
    padding: 10px 10px;
}

.menu-mobile-li {


    color: @font-color;

    margin: 10px 0;

    font-size: 15px;
    font-weight: bold;
}

.menu-mobile-item:hover {
    background: @background-up;
}

.menu-mobile-title {
    margin-left: 10px;
}

.menu-mobile {
    width: 180px;
}

.mobile-top {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-name {
    margin: 20px 0;
    color: @font-color;
    font-size: 16px;
    font-weight: bold;
}

#qsub-header-bg {
    background-color: @background-menu;
}

.qsub-menu-list {
    background-color: @background-menu;
    width: 150px;
    padding: 8px 6px;
    border-radius: 5px;
    position: absolute;
    top: 60px;
    left: -10px;
    opacity: 0.9;
}

.qsub-menu {
}

.qsub-menu-web > .qsub-menu {
    /*height: 10px;*/
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}

.qsub-menu-li {
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 5px;
    padding: 0 10px;
}

.qsub-menu-li:hover {
    //background: @background-up;

    //.qsub-menu-list {
    //    display: block;
    //    height:500px;
    //}
}

.qsub-menu-item-f:hover {
    opacity: 0.8;
}

.qsub-menu-item-f {
    color: @font-color;
    display: flex;
    align-items: center;
    position: relative;
}

.qsub-menu-item {
    color: @font-color;
    display: flex;
    align-items: center;
    padding: 8px 14px;
    position: relative;
    justify-content: space-between;
}

.qsub-menu-item-a {
    display: flex;
    align-items: center;
}

.qsub-menu-item-b {

}


.qsub-menu-item:hover {
    background: @background-up;
    border-radius: 5px;

}


.menu-item {
    display: flex;
    align-items: center;
    font-weight: bold;
}


.qsub-header {

    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 800;

}

.qsub-header-body {
    transition: background-color 1s;
    background-color: @background-menu-immerse;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.qsub-logo {
    width: 120px;
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    color: @font-color;
    display: flex;
    align-items: center;
    padding-right: 20px;
}

.qsub-menu-title {
    color: @font-color;
    font-weight: bold;
    font-size: 14px;
}

.qsub-menu-mobile > .qsub-menu {
    width: 100%;
}


.qsub-menu-web {
    display: flex;
    align-items: center;
    height: 100%;
}

.qsub-menu-mobile {
    display: none;
}


@media screen and (max-width: 1000px) {
    .qsub-menu-web {
        display: none;
    }

    .qsub-menu-mobile {
        display: block;
    }

    .qsub-menu-mobile > .qsub-menu {
        width: 100%;
    }


}

.qsub-logo svg {
    width: 30px !important;
    height: 30px;
    padding-right: 10px;
    fill: @logo-color;
}

.icons {
    width: 35px;
    height: 35px;
}


</style>