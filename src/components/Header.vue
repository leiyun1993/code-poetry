<template>
    <div class="header-root">
        <div class="menu-box">
            <div class="meun-item" @click="onMenuClick('index')">
                <div class="title">首页</div>
                <div class="circle" v-if="routeName=='index'"></div>
            </div>
            <div class="meun-item" @click="onMenuClick('project')">
                <div class="title">项目</div>
                <div class="circle" v-if="routeName=='project'"></div>
            </div>
            <div class="meun-item" @click="onMenuClick('blog')">
                <div class="title">博客</div>
                <div class="circle" v-if="routeName=='blog'"></div>
            </div>
            <div class="meun-item" @click="onMenuClick('about')">
                <div class="title">关于</div>
                <div class="circle" v-if="routeName=='about'"></div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    computed: {},
    props: {},
    data() {
        return {
            routeName: "index"
        };
    },
    mounted() {
        setTimeout(() => {
            this.initMenu();
        }, 100);
        
    },
    methods: {
        initMenu() {
            console.log("route1:", this.$route);
            this.routeName = this.$route.name;
        },
        onMenuClick(routerName) {
            this.$router.push({
                name: routerName
            });
            console.log("route:", this.$route);
            this.routeName = this.$route.name;
        }
    },
    filters: {}
};
</script>
<style scoped>
.header-root {
    height: 260px;
    position: fixed;
    top: 0;
    width: 100%;
}
.menu-box {
    background-color: #19181b;
    position: absolute;
    bottom: 0;
    right: 15vw;
    padding: 0 15px;
}
.menu-box .meun-item {
    color: #fff;
    text-align: center;
    padding: 20px 30px;
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.meun-item:hover {
    background-color: rgba(102, 102, 102, 0.3);
}
.menu-box .meun-item .title {
    width: 15px;
    height: auto;
    font-size: 15px;
    font-weight: 100;
}
.menu-box .meun-item .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 3px solid #ff4646;
    position: absolute;
    top: 15px;
    right: 25px;
}
</style>
