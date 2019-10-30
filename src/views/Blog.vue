<template>
    <div class="blog">
        <div class="blog-top">
            <div>
                <div class="index-title">
                    <div class="title-line">我的文章</div>
                    <div class="title-line">一行代码</div>
                    <div class="title-line">一行诗</div>
                    <div class="circle"></div>
                </div>
            </div>
            <div class="content-box">
                <div class="list-box">
                    <div class="item" v-for="(item,index) in list" :key="index">
                        <div class="title-head"></div>
                        <div class="title">{{item.name}}</div>
                        <div class="content">{{item.desc}}</div>
                        <div class="read-all" @click="readAll(item.id)">阅读全文</div>
                    </div>
                </div>
                <div class="page-box">
                    <el-pagination small layout="prev, pager, next" :current-page="page" :page-size="size" :total="total" @current-change="currChange"></el-pagination>
                </div>
            </div>
        </div>
        <Fotter />
    </div>
</template>
<script>
import Fotter from "../components/Footer.vue";
import { getArticleList } from "../api/article";
export default {
    name: "",
    computed: {},
    components: {
        Fotter
    },
    props: {},
    data() {
        return {
            list: [],
            total: 0,
            page:1,
            size:3,
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            getArticleList({
                page: this.page,
                size: this.size
            }).then(res => {
                console.log(res);
                this.list = res.data.list;
                this.total = parseInt(res.data.total);
            });
        },
        currChange(page){
            this.page = page;
            this.getList();
        },
        readAll(id){
            this.$router.push({
                path:`/detail/${id}`,
            })
        }
    },
    filters: {}
};
</script>;
<style scoped>
.blog {
    height: 100%;
    display: flex;
    flex-flow: column;
}
.blog-top {
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
}
.content-box .list-box {
    display: inline-block;
    margin-left: 20vw;
}
.page-box {
    margin-left: 20vw;
    margin-top: 20px;
}
.title-head {
    width: 100px;
    height: 2px;
    background-color: #19181b;
}
.content-box .item {
    margin-top: 30px;
}
.item .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.item .content {
    font-size: 16px;
    margin-top: 10px;
    color: #999;
    max-width: 870px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
.read-all {
    color: #ff8635;
    font-size: 14px;
    margin-top: 15px;
    cursor: pointer;
}
</style>
