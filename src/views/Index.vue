<template>
    <el-container>
        <!-- 顶部导航  -->
        <Header></Header>
        <el-main>
            <!--顶部 -->
            <div class="qsub-main selected"
                 :style=" w/h > 1.6 ?'background-size:'+ (100+ scrollTop) +'% auto':'background-size:auto '+ (100+ scrollTop) +'%' ">
                <div class="hitokoto" v-text="data.hitokoto"></div>
                <p class="down" @click="toMain"><img src="@/assets/icon_down.png"/></p>
            </div>
            <!--主体-->
            <div class="body">
                <div class="main">
                    <div class="left">
                        <div class="left-main">
                            <div class="qsub-nav-main selected">
                                <div class="qsub-nav-item" v-for="item in nav">{{ item }}</div>
                            </div>
                            <post-list></post-list>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right-main">
                            <hot-post></hot-post>
                            <hot-comments></hot-comments>
                        </div>
                    </div>
                </div>
            </div>
            <!--底部 版权数据 -->
            <bottom></bottom>
        </el-main>

    </el-container>
</template>

<script >


import Header from "@/components/blog/Header";
import Bottom from "@/components/blog/Bottom";
import HotComments from "@/components/blog/HotComments";
import HotPost from "@/components/blog/HotPost";
import postList from "@/components/blog/postList";

export default {
    name: "Index",
    components: {
        Bottom,
        HotComments,
        HotPost,
        postList,
        Header
    },
    data() {
        return {
            nav:["最新","前端","后端","随笔"],
            show: true,  //导航头
            scrollTop: 0,
            data:{
                hitokoto:"小时候，我妈说我的手指长，将来能当钢琴家，然后我成了码农"
            },
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
    width: 100vm;
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


.body{
    width: 100%;
    display: flex;
    justify-content: center;
    background: @background;
}
.main{
    width: 1300px;
    display: flex;
}
.left{
    width: 900px;
}
.right{
    width: 400px;
    padding:10px 20px;
}



@media screen and (max-width: 1400px){
    .right{
        width: auto;
    }
    .left{
        width:auto;
        padding:10px 20px;
    }
    .main{
        flex-direction:column;
    }
}
.hitokoto{
    font-weight: bold;
    font-size: 1.501rem;
    text-align: center;
    line-height: 180%;
    margin: 30px;
    color: @font-color2;
}

</style>


<style lang="less" scoped>
.qsub-nav-main{
    display: flex;
    justify-content: center;
    background: @background-main;
    margin: 10px 0;
    border-radius: 0.3rem;
}
.qsub-nav-item{
    padding: 0 10px;
    height: 2.101rem;
    text-align: center;
    line-height: 2.101rem;
    border-radius: 0.3rem;
    margin: 0.6rem;
    font-size: 1rem;
    font-weight: bold;
    color: @font-color;
}
.qsub-nav-item:hover{
    background: @background-up;
}

</style>