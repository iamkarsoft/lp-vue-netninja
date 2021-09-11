<template>
    <h1 v-on:click="changeTitle">Header: {{title}} </h1>
</template>
<script>

export default {

    props: {
        title: {
            type: String
        }
    },

    data() {
        return {
        }
    },
    methods: {
        changeTitle() {
            this.$emit('changeTitle', "Vue Wizardry")
        }
    }

};
</script>
<style>
</style>