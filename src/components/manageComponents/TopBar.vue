<template>
    <div class="top-bar">
        <div class="header">
            <span class="header-item header-item-title">{{ mainTitle }} / </span>
            <span class="header-item header-item-subtitle">{{ subTitle }}</span>
        </div>
        <div class="top-button">
            <router-link to="/manage/add">
                <el-button type="primary">
                    新增文档
                    <i class="el-icon-circle-plus el-icon--right"></i>
                </el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            mainTitle: '管理面板',
            subTitle: ''
        }
    },
    watch: {
        $route () {
            this.getSubTitle();
        }
    },
    methods: {
        getSubTitle () {
            switch (this.$route.path) {
                case '/manage':
                    this.subTitle = '文章管理';
                    break;
                case '/manage/add':
                    this.subTitle = '新增文档';
                    break;
                case '/manage/tags':
                    this.subTitle = '标签管理';
                    break;
            }
        }
    },
    created () {
        this.getSubTitle();
    }
}
</script>

<style lang="less" scoped>
.top-bar {
    display: flex;
    height: 40px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    .header {
        font-size: 15px;
    }
    .top-button {
        margin-right: 30px;
    }
    .header-item-subtitle {
        color: #409EFF;
    }
}
</style>


