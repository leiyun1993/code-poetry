<template>
    <div class="detail-root">
        <div class="detail">
            <div class="title">{{article.name}}</div>
            <div v-html="article.html" class="content"></div>
        </div>
        <Fotter />
    </div>
</template>
<script>
import { getArticle } from "../api/article";
import Fotter from "../components/Footer.vue";
export default {
    name: '',
    computed: {},
    components: {
        Fotter
    },
    props: {},
    data() {
        return {
            article:{}
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            getArticle({
                id:this.$route.params.id
            }).then(res=>{
                this.article = res.data;
            })
        }
    },
    filters: {}
};
</script>;
<style scoped>
.detail-root{
    text-align: center;
}
.detail-root .detail{
    padding: 30px;
    width: 960px;
    display: inline-block;
}
.detail .content{
    text-align: left;
}
.detail .title{
    font-size: 30px;
    font-weight: bold;
}
.content img{
    max-width: 960px;
}
</style>
