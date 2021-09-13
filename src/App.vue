<template>
    <div id="app">
        <Header />
        <h2>{{title | to-uppercase}}</h2>
        <p>{{content | snippet}}</p>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            title: "Lorem, ipsum dolor sit amet consectetur.",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Esse nisi laborum odit facilis blanditiis suscipit reprehenderit, at pariatur illo, consequuntur!"
        }
    }

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