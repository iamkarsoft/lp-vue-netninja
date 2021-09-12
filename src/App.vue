<template>
    <div id="app">
        <Header />
        <div v-if="!submitted">
            <form action="">
                <div>
                    <label for="">Title</label>
                    <input type="text" name="" v-model="blog.title" id="">
                </div>
                <div>
                    <label for="">Content</label>
                    <input type="text" name="" id="" v-model="blog.content">
                </div>
                <div>
                    <label for="">categories</label>
                    <div>
                        <label for=""><input type="checkbox" value="Personal" v-model="blog.categories">Personal</label>
                        <label for=""><input type="checkbox" value="Tech" v-model="blog.categories">Tech</label>
                        <label for=""><input type="checkbox" value="Gaming" v-model="blog.categories">Gaming</label>
                    </div>
                </div>
                <div>
                    <label for="">Authors</label>
                    <select name="" id="" v-model="blog.author">
                        <option v-for="author in authors" :key="author">{{author}}</option>
                    </select>
                </div>
                <button @click.prevent="post">Add Blog</button>
            </form>
        </div>
            <div v-if="submitted">
                Thanks for submitting the form
            </div>
            <div id="content">
                <h3>Title: {{blog.title}}</h3>
                <h3>Content</h3>
                <p>{{blog.content}}</p>
                <h3>Category</h3>
                <ul>
                    <li v-for="category in blog.categories" :key="category">{{category}}</li>
                </ul>
                <h3>Author</h3>
                <p>{{blog.author}}</p>
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
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Ramos', 'Junior', 'Ellita'],
            submitted: false,
        }
    },
    methods: {
        post() {
            this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            }).then(function(data) {
                console.log(data);
                this.submitted = true;
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

#content {
    margin-top: 40px;
}

ul {
    list-style: inline;
}
</style>