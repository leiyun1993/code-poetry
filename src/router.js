const Index = () => import("./views/Index.vue");
const Project = () => import("./views/Project.vue");
const Code = () => import("./views/Code.vue");
const Blog = () => import("./views/Blog.vue");
const About = () => import("./views/About.vue");
const Add = () => import("./views/Add.vue");
const Detail = () => import("./views/Detail.vue");

const routerList = [{
        path: "/",
        component: Index,
        name: "index"
    },
    {
        path: "/code",
        component: Code,
        name: "code"
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
    {
        path: "/add",
        component: Add,
        name: "add"
    },
    {
        path: "/detail/:id",
        component: Detail,
        name: "detail"
    },
]

export default routerList;