<template>
    <div class="box">
        <div id="myChart" :style="{ width: '800px', height: '400px' }"></div>
    </div>
</template>

<script>

import * as echarts from "echarts";

export default {
    name: "hello",
    data() {
        return {
            msg: "fafa",
        };
    },
    mounted() {
        this.drawLine();
        console.log(echarts);
    },
    methods: {

    },
};
</script>
<style scoped>
.box {
    margin-top: 50px;
}
</style>