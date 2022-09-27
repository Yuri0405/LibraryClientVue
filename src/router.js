import {createRouter,createWebHistory} from 'vue-router'
import MainPage from './components/MainPage.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/books",
            component:MainPage
        },
        {
           path:"/about",
           component:About
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/signin",
            component:SignIn
        },
        {
            path:"/",
            component:Home
        }
    ]
})