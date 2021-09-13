<template>
    <div id="app">
        <Header />
        <input type="text" v-model="search" placeholder="Search blog">
        <div v-for="blog in filteredBlogs" :key="blog.title">
          
          <h2>{{blog.title | to-uppercase}}</h2>
          <p>{{blog.content | snippet}}</p>
        </div>
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
            blogs: [
              {
                title: "Lorem, ipsum dolor sit amet consectetur.",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Esse nisi laborum odit facilis blanditiis suscipit reprehenderit, at pariatur illo, consequuntur!"
              },
              {
                title: "lorem5 sdfsdfsd kf skafjdskfs",
                content: "I know i'm coming from mars"
              },
              {
                title: "Bruno Mars",
                content: "I'll catch a grenade for you"
              }
            ],
        search: '',
        }
    },
    computed: {
      filteredBlogs () {
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search);
        });
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