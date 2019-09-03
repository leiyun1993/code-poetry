<template>
    <div class="about">
        <div class="about-top">
            <div>
                <div class="index-title">
                    <div class="title-line">一行代码</div>
                    <div class="title-line">一行诗</div>
                    <div class="circle"></div>
                </div>
            </div>
            <div class="content-box">
                <div class="title">网站内容</div>
                <div class="content">仍然喜欢诗和代码，却不在惦记着远方！</div>
                <div class="content">初步定义为一个个人博客，记录一下自己想记录的东西，也许会去写点东西，也学会去摘抄两句诗，也许会分享自己的一些没啥用的项目QAQ！</div>
                <div class="title">关于我</div>
                <div class="content">幸得识卿桃花面，自此阡陌多暖春！</div>
                <div class="content">写Android谋生，热爱大前端！如果游戏、代码、妹子之间做选择，那在我这里应该是妹子>代码>游戏！</div>
                <div class="content">邮箱：waitshan@163.com</div>
                <div class="content">github：<a href="https://github.com/leiyun1993" target="black">https://github.com/leiyun1993</a></div>
                <div class="content">简书：<a href="https://www.jianshu.com/u/a2d0015a3e1e" target="black">https://www.jianshu.com/u/a2d0015a3e1e</a></div>
                <div class="title">友情链接</div>
                <div class="content">鸿洋大神的 <a href="https://www.wanandroid.com" target="black">wanandroid</a></div>
                <div class="content">本项目由 <a href="https://cli.vuejs.org/zh/" target="black">Vue CLI</a> 搭建</div>
            </div>
        </div>
        <Fotter />
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
.about {
    height: 100%;
    display: flex;
    flex-flow: column;
}
.about-top {
    flex: 1;
}
.index-title {
    margin-top: 80px;
    margin-left: 20vw;
    font-size: 30px;
    position: relative;
}
.index-title .title-line {
    width: 125px;
    text-align: right;
    font-weight: bold;
}
.index-title .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 5px solid #ff4646;
    position: absolute;
    top: 0px;
    left: 110px;
}
.content-box {
    margin-top: 30px;
    margin-left: 20vw;
}
.content-box .title {
    font-size: 16px;
    font-weight: bold;
    color: #19181b;
    margin-top: 30px;
}
.content-box .content {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}
</style>
