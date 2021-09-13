import ShowBlog from './components/ShowBlog.vue'
import ListBlog from './components/ListBlog.vue'
export default [
	{
		path:'/',
		component: ShowBlog
	},

	{
		path:'/show',
		component: ShowBlog
	},
	{
		path:'/list',
		component: ListBlog
	},

]