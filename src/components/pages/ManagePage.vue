<template>
    <div class="manage-page">
        <manage-nav></manage-nav>
        <div class="left-content">
            <top-bar></top-bar>
            <router-view name="ArticleTable"></router-view>
            <router-view name="ArticleForm"></router-view>
        </div>
    </div>
</template>

<script>
import ManageNav from '../manageComponents/ManageNav';
import TopBar from '../manageComponents/TopBar';

export default {
    components: {
        ManageNav,
        TopBar
    },
    data () {
        return {

        }
    },
    methods: {
        navItemClick (title, subTitle) {
            this.title = title;
            this.subTitle = subTitle;
        },
        
    }
}
</script>

<style lang="less" scoped>
.manage-page {
    padding: 0 9%;
    overflow: hidden;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
    .left-content {
        padding: 10px 30px 30px;
        margin-left: 300px;
        background-color: #f9f9f9;
    }
}
</style>