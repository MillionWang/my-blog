<template>
    <div class="top-nav">
        <el-menu :default-active="activeIndex" mode="horizontal">
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
            activeIndex: '1'
        }
    },
    methods: {
        getItemIndex (index) {
            return index + 1 + '';
        },
        showLoginPanel () {

        }
    }
}
</script>

<style lang="less" scoped>
.top-nav {
    padding: 0 9%;
    a {
        text-decoration: none;
    }
    .nav-item {
        float: right;
        height: 80px;
        line-height: 80px;
        font-size: 16px;
    }
    .nav-item.nav-item-login {
        border: none;
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