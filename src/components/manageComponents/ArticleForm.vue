<!--
 * @File: 
 * @Author: wangzhongpeng
 * @Date: 2019-08-01 19:48:20
 -->
<template>
    <div class="article-form">
        <div class="title-container">
            <div class="title-wrapper">
                <label for="title">
                    标题:
                </label>
                <el-input
                    id="title"
                    class="title"
                    placeholder="标题"
                    v-model="article.title"
                    clearable>
                </el-input>
            </div>
            <div class="category-wrapper">
                <label for="category">分类:</label>
                <el-input
                    class="category"
                    placeholder="分类"
                    v-model="article.category"
                    clearable>
                </el-input>
            </div>
        </div>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="正文"
            v-model="article.content">
        </el-input>
        <div class="button-wrapper">
            <el-button type="primary" @click="saveArticle">保存</el-button>
            <el-button type="danger" @click="cancelEdit">取消</el-button>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data () {
        return {
            article: {
                title: '',
                content: '',
                category: '',
                date: ''
            }
        }
    },
    methods: {
        saveArticle () {
            let {title, content, category, date} = this.article;
            this.validateData()
            .then(() => {
                return this.$axios.post('/post/article', {
                    title,
                    content,
                    category,
                    date: new Date()
                })
            })
            .then(res => {
                let code = res && res.data && res.data.code;
                if (code === 0) {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.goBackToManagePage();
                    }, 500)
                }
                else {
                    reject('保存失败');
                }
            }).catch(err => {
                this.$message.error(err);
            });
        },
        goBackToManagePage () {
            this.$router.push('/manage');
        },
        validateData () {
            return new Promise((resolve, reject) => {
                let article = this.article;
                if (article.title, article.category, article.content) {
                    return resolve();
                }
                reject('请完善文章信息');
            });
        },
        cancelEdit () {
            this.$confirm('您所做的更改不会被保存，确定继续退出？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.goBackToManagePage();
            })
        }
    }
}
</script>

<style lang="less" scoped>
.article-form {
    width: 100%;
    box-sizing: border-box;
    .title-container {
        margin: 20px 0;
        display: flex;
        justify-content: space-around;
    }
    .title-wrapper,
    .category-wrapper {
        width: 400px;
        display: flex;
        align-items: center;
        label {
            width: 60px;
            margin-right: 20px;
            &::before {
                content: '*';
                color: red;
            }
        }
    }
    .button-wrapper {
        margin-top: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: flex-end;
    }
}
</style>


