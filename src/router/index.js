import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            components: {

            }
        },
        {
            path: '/blog',
            components: {

            }
        },
        {
            path: '/login',
            components: {

            }
        },
        {
            path: '/manage',
            components: {

            },
            beforeEnter (to, from, next) {
                if (true) {
                    next('/login')
                }
                else {
                    next()
                }
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
    },
    
});