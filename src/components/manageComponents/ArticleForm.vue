<template>
    <div class="article-form">
        <el-input
            placeholder="标题"
            v-model="article.title"
            clearable>
        </el-input>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="正文"
            v-model="article.content">
        </el-input>
        <el-button type="primary" @click="saveArticle">保存</el-button>
        <el-button type="danger">取消</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            article: {
                title: '',
                content: '',
                date: ''
            }
        }
    },
    methods: {
        saveArticle () {
            this.$axios.post('/post/article', {
                title: this.article.title,
                content: this.article.content,
                date: new Date().getTime()
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang="less" scoped>
.article-form {
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
}
</style>


