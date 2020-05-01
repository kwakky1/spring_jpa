"user strict"
var admin = admin || {}
admin = (()=>{
	let init = () =>{
		alert('1')
	}
	let onCreate ()=>{
		alert('2')
	}
	let setContentView = ()=>{
		alert('3')
	}
	return {init}
})()