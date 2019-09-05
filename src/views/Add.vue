<template>
    <div class="add-root">
        <div class="index-title">
            <div class="title-line">一行代码</div>
            <div class="title-line">一行诗</div>
            <div class="circle"></div>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="文章标题">
                    <el-input v-model="name" style="width:500px;" placeholder="请输入文章标题" maxlength="255" show-word-limit></el-input>
                </el-form-item>

                <el-form-item label="文章简介">
                    <el-input type="textarea" style="width:500px;" placeholder="请输入文章简介" v-model="desc" maxlength="255" show-word-limit>
                    </el-input>
                </el-form-item>

                <el-form-item label="文章外链">
                    <el-input type="textarea" style="width:500px;" placeholder="请输入文章外链" v-model="url" maxlength="255" show-word-limit>
                    </el-input>
                </el-form-item>

                <el-form-item label="文章分类">
                    <el-radio-group v-model="type">
                        <el-radio label="1">普通文章</el-radio>
                        <el-radio label="2">诗</el-radio>
                        <el-radio label="3">项目</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
        </div>

        <div class="markdown-box">
            <markdown-editor ref="markdownEditor" v-model="content" height="400px" />
        </div>

        <div class="form-box">
            <el-button type="primary" @click="save" :loading="addLoading">保存</el-button>
        </div>
        <div v-html="html"></div>
    </div>
</template>
<script>
import MarkdownEditor from "../components/MarkdownEditor";
import { addArticle } from "@api/article";
export default {
    name: "",
    computed: {},
    components: {
        MarkdownEditor
    },
    props: {},
    data() {
        return {
            content: "",
            name: "",
            html: "",
            desc: "",
            type: "1",
            url: "",
            addLoading:false
        };
    },
    mounted() {},
    methods: {
        save() {
            this.addLoading = true;
            addArticle({
                name: this.name,
                desc: this.desc,
                html: this.type==2?this.$refs.markdownEditor.getHtml():this.$refs.markdownEditor.getValue(),
                type: this.type,
                url: this.url
            }).then(res => {
                console.log(res);
                if (res.errno == 0) {
                    this.$message({
                        message: "发布成功",
                        type: "success"
                    });
                    this.name = "";
                    this.html = "";
                    this.desc = "";
                    this.url = "";
                    this.content = "";
                } else {
                    this.$message.error(res.errmsg);
                }
                this.addLoading = false;
            });
        }
    },
    filters: {}
};
</script>;
<style scoped>
.add-root {
    overflow: hidden;
}
.index-title {
    margin-top: 30px;
    margin-left: 30px;
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
.markdown-box {
    padding: 0 30px;
}
.form-box {
    padding: 30px;
}
</style>
