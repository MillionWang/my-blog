<template>
    <div class="top-nav">
        <el-menu :default-active="defaultIndex" mode="horizontal">
            <el-menu-item class="nav-item" :class="{'nav-item-login': item.name === '登陆'}"
                v-for="(item, index) in navItems" :key="index" :index="getItemIndex(index)">
                <router-link v-if="item.path" :to="item.path">{{ item.name }}</router-link>
                <span v-else @click="showLoginPanel">{{ item.name }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { navItems } from '../assets/defaultData';

export default {
    data () {
        return {
            navItems: navItems.reverse(),
            defaultIndex: ''
        }
    },
    methods: {
        getItemIndex (index) {
            return index + 1 + '';
        },
        showLoginPanel () {

        }
    },
    created () {
        let path = this.$route.path;
        let index = this.navItems.findIndex((item) => {
            return path.includes(item.path);
        });
        this.defaultIndex = index + 1 + '';
    }
}
</script>

<style lang="less">
.top-nav {
    padding: 0 9%;
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        text-decoration: none;
    }
    .nav-item.el-menu-item {
        float: right;
        padding: 0;
        height: 80px;
        line-height: 80px;
        font-size: 16px;
    }
    .nav-item.nav-item-login {
        border: none;
        padding: 0 20px;
        span {
            border: 1px solid #dcdfe6;
            padding:  5px 10px;
        }
    }
    .is-active.nav-item-login {
        span {
            color: #409eff;
            border-color: #409eff;
        }
    }
}

</style>