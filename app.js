new Vue({
	el: "#vue-app",
	data:{
		name:'VueJs Refs',
		input: ''
	},
	methods:{
		readRefs(){
			this.input = this.$refs.input.value;
			console.log (this.input)
			this.$refs.input.value = ''
		}
	}
})