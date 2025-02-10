import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import pages from "../pages/pages";
import BookTable from "../pages/BookTable";
import pageDetail from "../pages/pageDetail";

export const routes=[
    {
        path:"/",
        component:Home,
        isProtected: true,
    },
    {
        path:"/about",
        component:About,
        isProtected: true,
    },
    {
        path:"/menu",
        component:Menu,
        isProtected: true,
    },
    {
        path:"/pages",
        component:pages,
        isProtected: true,
    },
    {
        path:'/contact',
        component:Contact,
        isProtected: true,
    },
    {
        path:'/bookTable',
        component:BookTable,
        isProtected: true,
    },
    {
        path: "/page/:index", 
        component: pageDetail, 
        isProtected: true,
    },
   
]