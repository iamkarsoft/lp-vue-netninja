<template>
    <div id="app">
        <Header />
        <ShowBlog />
        <ListBlog />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ListBlog from './components/ListBlog.vue'
import ShowBlog from './components/ShowBlog.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        ShowBlog,
        ListBlog,
    },

};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>