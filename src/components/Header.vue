<template>
    <div class="header-root" v-if="showMenu">
        <transition name="el-zoom-in-bottom">
            <div class="menu-box" v-show="showMenu1">
                <div class="meun-item" @click="onMenuClick('index')">
                    <div class="title">我的首页</div>
                    <div class="circle" v-if="routeName=='index'"></div>
                </div>
                <div class="meun-item" @click="onMenuClick('code')">
                    <div class="title">代码文章</div>
                    <div class="circle" v-if="routeName=='code'"></div>
                </div>
                <div class="meun-item" @click="onMenuClick('project')">
                    <div class="title">项目文章</div>
                    <div class="circle" v-if="routeName=='project'"></div>
                </div>
                <div class="meun-item" @click="onMenuClick('blog')">
                    <div class="title">随笔文章</div>
                    <div class="circle" v-if="routeName=='blog'"></div>
                </div>
                <div class="meun-item" @click="onMenuClick('about')">
                    <div class="title">关于自己</div>
                    <div class="circle" v-if="routeName=='about'"></div>
                </div>

            </div>
        </transition>
        <i v-if="showMenuBtn" class="menu-icon el-icon-s-fold" @click="showMenu1=!showMenu1"></i>
    </div>
</template>
<script>
const indexRoute = ["detail", "add"];
export default {
    name: "Header",
    computed: {},
    props: {},
    data() {
        return {
            routeName: "index",
            showMenu: true,
            showMenu1:true,
            showMenuBtn:false
        };
    },
    mounted() {},
    watch: {
        $route(to, from) {
            console.log("routeChange:", to, from);
            this.routeName = to.name;
            // this.showMenu = indexRoute.includes(to.name);
            this.showMenuBtn = indexRoute.includes(to.name);
            this.showMenu1 = !indexRoute.includes(to.name);
        }
    },
    methods: {
        onMenuClick(routerName) {
            this.$router.push({
                name: routerName
            });
        }
    },
    filters: {}
};
</script>
<style scoped>
.header-root {
    height: 160px;
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
.menu-icon {
    color: #19181b;
    position: absolute;
    bottom: 0;
    right: 12vw;
    font-size: 30px;
}
</style>
