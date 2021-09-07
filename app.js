Vue.component('greeting',{
	template: `
	<div><p v-text="name"></p><button @click="changeName">Change Name</button></div>`,
	data(){
		return{
			name:'Component Ramos'
		}
	},
	methods:{
		changeName(){
			this.name = "Ramos Component"
		}
	}
})

new Vue({
	el: "#vue-app",
	data:{
		name:'Components'
	},
	
})