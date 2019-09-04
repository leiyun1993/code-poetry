<template>
    <div class="project">
        <div class="project-top">
            <div>
                <div class="index-title">
                    <div class="title-line">一行代码</div>
                    <div class="title-line">一行诗</div>
                    <div class="circle"></div>
                </div>
            </div>
            <div class="content-box">
                <div class="list-box">
                    <div class="item" v-for="(item,index) in list" :key="item">
                        <div class="item-title" v-if="index%2==0">Title Label Title Label Title Label </div>
                        <img src="../assets/index.jpg" alt="index">
                        <div class="item-title" v-if="index%2!=0">Title Label Title Label Title Label </div>
                    </div>
                </div>
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
        return {
            list: []
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            for (let i = 0; i < 8; i++) {
                this.list.push(i);
            }
            
            getArticleList().then(res=>{
                console.log("project:",res);
            })
        }
    },
    filters: {}
};
</script>;
<style scoped>
.project {
    height: 100%;
    display: flex;
    flex-flow: column;
}
.project-top {
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
    text-align: center;
    margin-top: 30px;
}
.content-box .list-box {
    display: inline-block;
    max-width: 1280px;
}
.list-box .item {
    width: 250px;
    display: inline-block;
    margin-right: 15px;
    margin-top: 60px;
}
.item .item-title {
    border-left: 4px solid #19181b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    padding-left: 5px;
}
.item img {
    width: 100%;
    height: 120px;
    margin-top: 5px;
    object-fit: cover;
}
</style>
