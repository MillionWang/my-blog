/*
 * @File: 
 * @Author: wangzhongpeng
 * @Date: 2019-08-01 20:56:46
 */
import Router from 'vue-router';
import Vue from 'vue';
import HomePage from '@/components/pages/HomePage';
import BlogsPage from '@/components/pages/BlogsPage';
import ManagePage from '@/components/pages/ManagePage';
import Nav from '@/components/Nav';
import ArticleTable from '@/components/manageComponents/ArticleTable';
import ArticleForm from '@/components/manageComponents/ArticleForm';

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
            },
            children: [
                {
                    path: '/',
                    components: {
                        ArticleTable
                    }
                },
                {
                    path: 'add',
                    components: {
                        ArticleForm
                    }
                },
                {
                    path: 'edit/:id',
                    components: {
                        ArticleForm
                    }
                },
                {
                    path: 'tags',
                    components: {
                        
                    }
                }
            ]
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