<template>
    <div class="top-bar">
        <div class="header">
            <span class="header-item header-item-title">{{ mainTitle }}/</span>
            <span class="header-item header-item-subtitle">{{ name }}</span>
        </div>
        <div class="top-button">
            <router-link to="/manage/add">
                <el-button type="primary" @click="changeSubTitle">
                    新增文档
                    <i class="el-icon-circle-plus el-icon--right"></i>
                </el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        subTitle: {
            type: String
        }
    },
    data () {
        return {
            mainTitle: '',
            name: ''
        }
    },
    watch: {
        title () {
            this.mainTitle = this.title;
        },
        subTitle () {
            this.name = this.subTitle;
        }
    },
    methods: {
        changeSubTitle () {
            this.name = '新增文档';
        }
    },
    created () {
        this.mainTitle = this.title;
        this.name = this.subTitle;
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


