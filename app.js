new Vue({
	el: "#vue-app",
	data:{
		age:25
	},
	methods: {
	  addYear () {
	    this.age++;
	  },
	  minusYear(){
	  	this.age--;
	  }
	}
})