<template>

	<p>Footer: {{copyright}} {{title}} </p>
	
</template>

<script>
import {bus} from '@/main.js'
export default{

	props:{
		title:{
			type: String
		}
	},

	data(){
		return{
			copyright: 'Copyright '
		}
	},
	created() {
		bus.$on('titleChanged',(data) => {
			this.title = data;
		})
	}


};
	
</script>

<style>
	
</style>