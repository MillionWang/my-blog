<template>
    <div class="manage-nav">
        <el-menu :default-active="defaultIndex" class="">
            <el-submenu v-for="(item, index) in manageNavItems" :key="index" :index="index + 1 +''">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{ item.title }}</span>
                </template>
                <el-menu-item v-for="(subItem, subIndex) in item.items" :key="index + '-' + subIndex"
                    :index="getSubIndex(index, subIndex)" @click="handleClick(subItem)">
                    {{ subItem.name }}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { manageNavItems } from '../../assets/defaultData';

export default {
    data () {
        return {
            manageNavItems,
            defaultIndex: '1-1'
        }
    },
    methods: {
        handleClick (subItem) {
            this.$router.push({path: `/manage${subItem.path}`});
        },
        getSubIndex (index, subIndex) {
            index = index + 1;
            subIndex = subIndex + 1;
            return `${index}-${subIndex}`;
        }
    }
}
</script>

<style lang="less">
    .manage-nav {
        width: 300px;
        height: calc(100vh - 81px);
        float: left;
        border-right: 1px solid #eee;
        .el-menu {
            border: none;
        }

        .el-submenu {
            span {
                font-size: 16px;

            }

            i.el-submenu__icon-arrow {
                font-size: 16px;
            }

            div, li {
                text-align: left;
            }
            .el-menu-item-group__title {
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                color: #222;
            }
        }

    }
</style>