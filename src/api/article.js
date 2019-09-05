import request from "../utils/request"

export function getArticleList(params) {
    return request({
        url: "/article/getArticleList",
        method: "get",
        params:params
    })
}
export function addArticle(data) {
    return request({
        url: "/article/addArticle",
        method: "post",
        data
    })
}
export function getIndexArticle() {
    return request({
        url: "/article/getIndexArticle",
        method: "get",
    })
}
export function getArticle(params) {
    return request({
        url: "/article/getArticle",
        method: "get",
        params:params
    })
}
export function getCodeList(params) {
    return request({
        url: "/article/getCodeList",
        method: "get",
        params:params
    })
}