<template>
  <div id="app">
    <Header :title="title" v-on:changeTitle="updateTitle($event)" />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  data(){
    return{
      title: 'Vue Ninjas'
    }
  },
  methods: {
    updateTitle (updatedTitle) {
      this.title = updatedTitle
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
