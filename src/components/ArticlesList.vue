<template>
    <div>

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    },
    created () {
        this.$axios('query/articles').then(res => {
            console.log(res)
        })
    }
}
</script>

<style lang="less" scoped>

</style>


