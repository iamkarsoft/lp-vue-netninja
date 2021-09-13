<template>
    <div>
        <h1>Show Blogs</h1>
        <hr>
        <input type="text" v-model="search" placeholder="Search blog">
        <div v-for="blog in filteredBlogs" :key="blog.title">
            <h2>{{blog.title | to-uppercase}}</h2>
            <p>{{blog.content | snippet}}</p>
        </div>
    </div>
</template>
<script>
import searchMixin from '../mixins/searchMixin.js'
export default {
    name: 'ShowBlog',
    data() {
        return {
            blogs: [{
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
    mixins: [searchMixin],


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