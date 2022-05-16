<template>
    <div class="main">
        <div class="main-item" v-for="item in items"  :style="{height: item.height+ 'px'}">
            {{item.index}}
        </div>
    </div>
</template>

<script>
export default {
    name: "userTest"
    ,data(){
        return {
            items :[{
                index:1,
                height: 50
            },{
                index:2,
                height: 100
            },{
                index:3,
                height: 150
            },{
                index:4,
                height: 250
            },{
                index:5,
                height: 350
            },{
                index:6,
                height: 450
            },{
                index:7,
                height: 100
            },{
                index:8,
                height: 150
            },{
                index:9,
                height: 250
            },{
                index:10,
                height: 350
            },{
                height: 450
            },{
                height: 100
            },{
                height: 150
            },{
                height: 250
            },{
                height: 350
            },{
                height: 450
            },{
                height: 100
            },{
                height: 150
            },{
                height: 250
            },{
                height: 350
            },{
                height: 450
            },{
                height: 100
            },{
                height: 150
            },{
                height: 250
            },{
                height: 350
            },{
                height: 450
            },{
                height: 100
            },{
                height: 150
            },{
                height: 250
            },{
                height: 350
            },{
                height: 450
            },{
                height: 100
            },{
                height: 150
            },{
                height: 250
            },{
                height: 350
            },{
                height: 450
            }]
        };
    },
}
</script>

<style scoped>
.main{
    width: 100%;
    height: auto;
    flex-direction:row;
}
.main-item{
    width: 50px;
    background: #7f7f7f;
    border-radius: 5px;
    margin: 5px;
}
</style>