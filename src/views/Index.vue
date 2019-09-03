<template>
    <div class="root">
        <div class="index-left">
            <div class="content-box">
                <div class="index-title">
                    <div class="title-line">一行代码</div>
                    <div class="title-line">一行诗</div>
                    <div class="circle"></div>
                </div>
                <div class="index-content">
                    <div>我一直在找你</div>
                    <div>当我找到你</div>
                    <div>也就找到了整个世界</div>
                    <div>while (i.findYou()) {</div>
                    <div class="pl1">if (i.get() == you) {</div>
                    <div class="pl2">System.out.print("Hello,Word!");</div>
                    <div class="pl1">}</div>
                    <div>}</div>
                </div>
            </div>
            <Fotter />
        </div>
        <div class="index-right">
            <div class="index-img"></div>
        </div>
    </div>
</template>
<script>
import Fotter from "../components/Footer.vue";
export default {
    name: "",
    computed: {},
    components: {
        Fotter
    },
    props: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    filters: {}
};
</script>;
<style scoped>
.root {
    display: flex;
    height: 100%;
}
.index-left {
    flex: 4;
    height: 100%;
    display: flex;
    flex-flow: column;
}
.index-left .content-box {
    flex: 1;
}

.index-right {
    flex: 3;
    height: 100%;
    overflow: hidden;
}
.index-title {
    margin-top: 20vh;
    margin-left: 20vw;
    font-size: 30px;
    position: relative;
}
.index-title .title-line {
    width: 125px;
    text-align: right;
    font-weight: bold;
}
.index-content{
    color: #999;
    font-size: 14px;
    margin-left: 20vw;
    margin-top: 40px;
}
.index-content .pl1{
    padding-left: 15px;
}
.index-content .pl2{
    padding-left: 30px;
}
.index-title .circle{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 5px solid #ff4646;
    position: absolute;
    top: 0px;
    left: 110px;
}
.index-img{
    width: 400px;
    height: 100%;
    background-image: url("../assets/index.jpg");
    margin-top: 50px;
    overflow: hidden;
    margin-left: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 400px 100%;
}
</style>
