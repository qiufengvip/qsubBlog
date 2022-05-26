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
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById("myChart"));
            // 绘制图表
            myChart.setOption({

                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    show: false
                },
                yAxis: {
                    type: 'value',
                    splitLine: { //网格线
                        show: false
                    },
                    show: false
                },
                series: [
                    {
                        data: [0, 50, 150, 300,
                            {  //突出显示
                                value: 600,
                                symbolSize: 10,
                                symbol: "circle",
                                itemStyle: {
                                    normal: {
                                        color: "#ff0000",
                                    },
                                },
                            }, 1200, 2400],
                        type: 'line',
                        label: {  //点解释文字
                            show: true,
                            smooth:true,
                            formatter: function (data) {
                                console.log(data);
                                switch (data.data) {
                                    case 0:
                                        return 'v0';
                                    case 50:
                                        return 'v1';
                                    case 150:
                                        return 'v2';
                                    case 300:
                                        return 'v3';
                                    case 600:
                                        return 'v4';
                                    case 1200:
                                        return 'v5';
                                    case 2400:
                                        return 'v6';
                                }
                            }
                        },
                        symbolSize:1
                    }
                ]
            });
        },
    },
};
</script>
<style scoped>
.box {
    margin-top: 50px;
}
</style>