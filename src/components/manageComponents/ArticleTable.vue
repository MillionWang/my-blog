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
                <el-button size="mini">查看</el-button>
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {parseDate} from '@/assets/js/utils';
import { parse } from 'path';

export default {
    data() {
        return {
            articles: []
        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        }
    },
    created () {
        this.$axios('/query/articles').then(res => {
            this.articles = res && res.data && res.data.result;
            this.articles.forEach(item => {
                if (item.date) {
                    item.date = parseDate(item.date);
                }
            });
            console.log(this.articles)
        });
    }
}
</script>


<style lang="less" scoped>
.articles-table {
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    margin-top: 20px;
}
</style>