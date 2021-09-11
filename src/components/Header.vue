<template>
    <h1 v-on:click="changeTitle">Header: {{title}} </h1>
</template>
<script>
import { bus } from '../main.js'
export default {

    props: {
        title: {
            type: String
        }
    },

    data() {
        return {}
    },
    methods: {
        changeTitle() {
            this.title = 'Vue Wizardry';
            bus.$emit('titleChanged', "Vue Wizardry")
        }
    }

};
</script>
<style>
</style>