<template>
    <el-container>

        <!-- 顶部导航  -->
        <!-- <transition name="el-fade-in el-zoom-in-top" duration="2"> -->
        <!--        <div v-show="show" ref="transitionBox" class="transitionBox">-->
        <!--          <p>qiufeng</p>-->
        <!--          <ul>-->
        <!--            <li>搜索</li>-->
        <!--            <li>首页</li>-->
        <!--            <li>发现</li>-->
        <!--            <li>娱乐</li>-->
        <!--            <li>登录</li>-->
        <!--          </ul>-->
        <!--        </div>-->
        <!-- </transition> -->
        <Header></Header>

        <el-main>

            <!--顶部轮播 -->
            <div class="qsub-main"
                 :style=" w/h > 1.6 ?'background-size:'+ (100+ scrollTop) +'% auto':'background-size:auto '+ (100+ scrollTop) +'%' ">
                <h1>个人博客</h1>
                <h1>—— 质胜文则野，文胜质则史，文质彬彬，然后君子。</h1>
                <p class="down" @click="toMain"><img src="@/assets/icon_down.png"/></p>
                <!-- <div class="chest">
                   <div class="heart left side top"></div>
                   <div class="heart center"></div>
                   <div class="heart right side"></div>
               </div> -->
            </div>

            <!--主体-->
            <Home ref="main" id="main"></Home>
            <!--底部 版权数据 -->
            <bottom></bottom>
        </el-main>

    </el-container>
</template>

<script>


import Header from "@/components/Header";
import Home from "@/views/Home";
import Carousel from "@/components/Carousel";
import Bottom from "@/components/Bottom";

export default {
    name: "Index",
    components: {
        Bottom,
        Carousel,
        Home,
        Header
    },
    data() {
        return {
            show: true,  //导航头
            scrollTop: 0,
            w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        };
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.scrollHandle)
        window.onresize = () => {
            return (() => {
                this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            })();
        };
    },
    methods: {
        scrollHandle() {
            this.scrollTop = (
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop) / 30;
        },
        toMain() {

            document.getElementById("main").scrollIntoView({behavior: "smooth", block: "start"});
            // this.$refs.main.scrollIntoView({ behavior: "smooth", block: "center" });
            // console.log(this.$refs.main);
            // console.log(document.getElementById("main"))
        },
        getWindow() {
            let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


        }


    },

};

</script>


<style lang="less" scoped>
body {
    overflow-x: hidden;
    overflow-y: hidden;
}

.el-header {
    padding: 0 !important;
}

.el-main {
    padding: 0 !important;
}

.qsub-main {
    width: 100vm;
    height: 100vh;
    // background-color: rgb(39, 46, 83);
    background: url("http://file.qsub.cn/blog/2022/6/12a8f7ef1c3544728a4719cdd70fe4dc.jpg") center center no-repeat;
    transition: background-size 0.8s;
    // background-size: 100%  auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
        margin-top: 15px;
    }

    @keyframes icon_down {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(0.8) translateY(40px);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .down {
        position: absolute;
        bottom: 30px;
        color: #eee;
        font-size: 20px;
        text-align: center;
        text-shadow: 0.1rem 0.1rem 0.2rem rgb(0 0 0 / 15%);
        line-height: 1.5;
        display: inline-block;
        // text-rendering: auto;
        // -webkit-font-smoothing: antialiased;
        animation: icon_down 1.5s infinite;
        cursor: pointer;

        img {
            width: 30px;
        }
    }

    // ♥
    .chest {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        // border:1px solid red;
    }

    .heart {
        position: absolute;
        z-index: 2;
        background: linear-gradient(-90deg, #f50a45 0%, #d5093c 40%);
        animation: beat 0.7s ease infinite;
    }

    .heart.center {
        background: linear-gradient(-45deg, #b80734 0%, #d5093c 40%);

    }

    .heart.top {
        z-index: 3;
    }

    .side {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 20%;
    }

    .center {
        width: 35px;
        height: 35px;
        top: 41px;
        left: 33px;

    }

    .left {
        left: 45px;
    }

    .right {
        right: 45px;
    }

    @keyframes beat {
        0% {
            transform: scale(1) rotate(225deg);
            box-shadow: 0 0 40px #d5093c;
        }

        50% {
            transform: scale(1.1) rotate(225deg);
            box-shadow: 0 0 40px #d5093c;
        }

        100% {
            transform: scale(1) rotate(225deg);
            box-shadow: 0 0 40px #d5093c;
        }
    }

}

/* 头部 */
.transitionBox {
    width: 100%;
    height: 70px;
    line-height: 70px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    color: white;
    font-size: 18px;

    ul {
        li {
            float: left;
            margin-left: 10px;
        }
    }
}

.transition-box-top {
    animation: mymove 1s;
}

.transition-box-bottom {
    animation: mymove2 3s;
    color: transparent;
}

@keyframes mymove {
    0% {
        opacity: 0;
        top: -100%;
    }
    50% {
        background-color: rgba(255, 255, 255);
        opacity: 0.6;
        top: 0;
        color: #fff;
    }
    100% {
        background-color: transparent;
    }
}

@keyframes mymove2 {
    0% {
        background-color: rgba(255, 255, 255);
        opacity: 0.6;
        top: 0;
    }
    100% {
        opacity: 0;
        top: -100%;
        color: transparent;
    }
}

</style>