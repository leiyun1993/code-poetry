<template>
    <div class="detail-root">
        <div class="detail">
            <div class="title">{{article.name}}</div>
            <div v-html="article.html"></div>
        </div>
        <Fotter />
    </div>
</template>
<script>
import { getArticle } from "../api/article";
import Fotter from "../components/Footer.vue";
// import "tui-editor/dist/tui-editor-contents.css";
// import "highlight.js/styles/github.css";
// import Viewer from "tui-editor/dist/tui-editor-Viewer";

export default {
    name: "",
    computed: {},
    components: {
        Fotter
    },
    props: {},
    data() {
        return {
            article: {}
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            getArticle({
                id: this.$route.params.id
            }).then(res => {
                this.article = res.data;
                // this.initViewer();
            });
        },
        initViewer() {
            // var editor = new Viewer({
            //     el: document.querySelector("#viewerSection"),
            //     initialValue: this.article.html
            // });
        }
    },
    filters: {}
};
</script>;
<style scoped>
.detail-root {
    text-align: center;
}
.detail-root .detail {
    padding: 30px;
    width: 960px;
    display: inline-block;
    text-align: left;
}
.detail .title {
    font-size: 30px;
    font-weight: bold;
}
</style>
