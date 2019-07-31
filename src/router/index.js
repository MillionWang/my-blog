import Router from 'vue-router';
import Vue from 'vue';
import HomePage from '@/components/pages/HomePage';
import BlogsPage from '@/components/pages/BlogsPage';
import ManagePage from '@/components/pages/ManagePage';
import Nav from '@/components/Nav';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            components: {
                default: HomePage,
                Nav
            }
        },
        {
            path: '/blogs',
            components: {
                default: BlogsPage,
                Nav
            }
        },
        {
            path: '/manage',
            components: {
                default: ManagePage,
                Nav
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    scrollBehavior () {
        return {
            x: 0,
            y: 0
        };
    }
});