<template>
    <div class="footer">
        <div class="fotter-txt">左手代码，右手诗</div>
        <div class="fotter-txt" style="margin-top:10px;">© 2019 One Code One Poepry</div>
        <div class="github" @click="githubClick"></div>
    </div>
</template>
<script>
export default {
    name: '',
    computed: {},
    props: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {
        githubClick(){
            window.open("https://github.com/leiyun1993");
        }
    },
    filters: {}
};
</script>;
<style scoped>
.footer{
    border-top: 1px solid #e5e5e5;
    padding: 30px;
    position: relative;
}
.footer .fotter-txt{
    text-align: center;
    color: #999;
    font-size: 12px;
}
.footer .github{
    position: absolute;
    top: 35px;
    right: 90px;
    width: 24px;
    height: 24px;
    background-image: url("../assets/github.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px 24px;
    cursor: pointer;
}
</style>
