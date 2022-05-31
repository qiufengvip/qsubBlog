<template>
    <div class="goods-list">
        <div v-for="i in 18">
            <a target="_blank"
               ref="goods"
               href="//fxhh.jd.com?linkIds=267796024,150754714,151089456,225023938,231740702,237784210,263743867,176282953,152494138,1075751#267796024"
               class="goods goods--bottom" clstag="h|keycount|core|goods_b01">
                <div class="goods__name">小甜{{i}}</div>
                <div class="goods__image">
                    <div class="lazyimg lazyimg_loaded"><img
                        src="//img10.360buyimg.com/ceco/s150x150_jfs/t1/199601/39/2712/38193/6115112cE8dc8a0df/2d3d0e12b35009e5.jpg!q70.jpg.webp"
                        class="lazyimg_img" alt="荣耀 双模5G 拍照手机"></div>
                </div>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: "userTest"
    , data() {
        return {
            item: 0,
        };

    },
    methods: {
        aaa() {
            let goods = document.getElementsByClassName("goods");
            let a = 1;
            let index = 0
            let jishu = this.item;
            this.item = jishu-1;
            for (index; index < goods.length; index++) {
                let left = (100 * (parseInt(index)) + 1) +parseInt(jishu);
                if(left < -100){
                    left = parseInt(left)+(goods.length *100)
                }
                if (index===0 && left ===-1  && left >-1800 ){
                    console.log(this.item);
                    this.item = -3
                }
                goods[index].setAttribute('style', 'left:' + (left+0) + "px")
            }




        }
    },


    mounted() {
        let _this = this;
        setInterval(function (){
            _this.aaa()
        }, 10)
    }
}
</script>

<style>
img {
    width: 73% !important;
    height: 100% !important;
}

.goods-list {
    white-space: nowrap;
    width: 900px;
    height: 100px;
    display: flex;
}

.goods {
    height: 100px;
    position: absolute;
    width: 100px;
    padding: 10px;
}
</style>