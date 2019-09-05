<template>
    <div class="blog">
        <div class="blog-top">
            <div>
                <div class="index-title">
                    <div class="title-line">一行代码</div>
                    <div class="title-line">一行诗</div>
                    <div class="circle"></div>
                </div>
            </div>
            <div class="content-box">
                <div class="list-box">
                    <div class="box-card" v-for="(item,index) in list" :key="index">
                        <el-card>
                            <div v-html="item.html"></div>
                        </el-card>
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
import { getCodeList } from "../api/article";
export default {
    name: "Code",
    computed: {},
    components: {
        Fotter
    },
    props: {},
    data() {
        return {
            list: [],
            total: 0,
            page: 1,
            size: 6
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            getCodeList({
                page: this.page,
                size: this.size
            }).then(res => {
                console.log(res);
                this.list = res.data.list;
                this.total = parseInt(res.data.total);
            });
        },
        currChange(page) {
            this.page = page;
            this.getList();
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
    margin-left: 20vw;
}
.content-box .list-box {
    display: inline-block;
    display: flex;
    flex-flow: row wrap;
    width: 1170px;
    height: auto;
}
.item {
    margin-bottom: 10px;
    background: #fff;
}
.box-card {
    width: 360px;
    height: auto;
    margin-right: 30px;
    margin-bottom: 30px;
}
.page-box {
    margin-top: 20px;
}
</style>
