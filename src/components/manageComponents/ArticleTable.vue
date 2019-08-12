<!--
 * @File: 
 * @Author: wangzhongpeng
 * @Date: 2019-08-01 19:35:44
 -->
<template>
    <div class="articles-table">
        <el-table :data="articles" style="width: 100%">
            <el-table-column prop="date" label="日期" width="130">
            </el-table-column>
            <el-table-column prop="category" label="分类" width="180">
            </el-table-column>
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column width="250" align="right">
                <template slot-scope="scope">
                    <el-button size="mini" @click="readArticle(scope)">查看</el-button>
                    <el-button type="primary" size="mini" @click="editArticle(scope)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deleteArticle(scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {parseDate} from '@/assets/js/utils';

export default {
    data() {
        return {
            articles: []
        }
    },
    methods: {
        readArticle () {

        },
        editArticle () {
            this.$router.push('/manage/edit/1');
        },
        deleteArticle (scope) {
            let title = scope.row.title;
            this.$confirm(`您确定要删除<span class="article-title"> ${title} </span>吗？`, '提示', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                return this.$axios.post('/post/deleteArticle', {
                    title,
                })
            }).then((res) => {
                if (res.data.code === 0) {
                    this.getArticles();
                }
            })
        },
        getArticles () {
            this.$axios('/query/articles').then(res => {
                this.articles = res && res.data && res.data.result;
                this.articles.forEach(item => {
                    if (item.date) {
                        item.date = parseDate(item.date);
                    }
                });
            });
        }
    },
    created () {
        this.getArticles();
    }
}
</script>


<style lang="less">
.articles-table {
    width: 100%;
    box-sizing: border-box;
    // padding-right: 30px;
    margin-top: 20px;
}
span.article-title {
    color: #F56C6C;
    font-weight: 600;
}
</style>