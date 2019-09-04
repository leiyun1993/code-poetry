const path = require("path");
const productionGzipExtensions = ["js", "css"];
function resolve(dir) {
    return path.join(__dirname, dir);
}
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
    lintOnSave: false, // 设置为false，将关闭ESLint校验
    filenameHashing: true, //关闭cli默认文件hash,用webpackhash代替
    productionSourceMap: false, //不打包sourcemap
    chainWebpack: config => {
        config.resolve.alias
            .set("@src", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@api", resolve("src/api"))
            .set("@config", resolve("src/config"))
            .set("@common", resolve("src/common"))
            .set("@mixins", resolve("src/mixins"));
        config.output.filename("[name].js?v=[hash]").end();
        config.plugins.delete("prefetch");
    },
    devServer: {
        port: "8080",
        proxy: {
            "/api": {
                target: process.env.VUE_APP_APIURL,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "" // rewrite path
                }
            },
        } // 配置多个代理
    }
};
