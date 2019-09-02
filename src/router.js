const Index = () => import("./views/Index.vue");
const Project = () => import("./views/Project.vue");
const Blog = () => import("./views/Blog.vue");
const About = () => import("./views/About.vue");

const routerList = [{
        path: "/",
        component: Index,
        name: "index"
    },
    {
        path: "/project",
        component: Project,
        name: "project"
    },
    {
        path: "/blog",
        component: Blog,
        name: "blog"
    },
    {
        path: "/about",
        component: About,
        name: "about"
    },
]

export default routerList;