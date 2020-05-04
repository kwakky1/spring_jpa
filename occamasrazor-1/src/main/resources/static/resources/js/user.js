"use strict"
var user = user || {}
user = (()=>{
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let admin_vue
	let init = () =>{
		admin_vue = `/resources/vue/admin_vue.js`
		onCreate()
	}
	let onCreate = () =>{
		$.when(
				$.getScript(admin_vue)
		).done(()=>{
			setContentView()
			$('#register_a').click(e=>{
				$('#content').empty()
				$('#content').html(adminVue.join())
				$(`<input type ="button">`)
				.attr({value:'등록'})
				.css({width:'100px', height:'50px', 'font-size':'30px'})
				.appendTo('#button_box')
				.click(e=>{
					alert('등록버튼 클릭')
				})
				$(`<input type ="button">`)
				.attr({value:'취소'})
				.css({width:'100px', height:'50px', 'font-size':'30px'})
				.appendTo('#button_box')
				.click(e=>{
					alert('취소하기')
				})
			})
		}).fail(()=>{
			alert(WHEN_ERROR)
		})
	
		$('#access_a').click(e=>{
    	 e.preventDefault()
      	$('#content').empty()
      	$('#content').html(adminVue.login())
      	$(`<input type="button">`)
      	.attr({value:"사용자 로그인"})
      	.appendTo('#login_box')
      	.click(e=>{
      		e.preventDefault()
      		$.ajax({
      			url:'/user/admin',
      			type:'post',
      			data:JSON.stringify({
      				
      			}),
      			dataType:'json',
      			contentType:'application/json',
      			success: d=>{
      				
      			},
      			error: (r,x,e) =>{
      				alert(r)
      			}
      		})
      	})
      	
		$(`<input type="button">`)
		.arrt({value:"취소"})
		.appendTo('#login_box')
	
      	//location.href = "/admin"
     })
	}
	let setContentView = ()=>{
		$('#kcdc').css({ width: '80%', height: '900px' }).addClass('border_black center')
		$('#tr_1').css({ width: '80%', height: '50px' }).addClass('border_black center')
		$('#menu').css({ width: '80%', height: '50px' }).addClass('border_black center')
		$('#kcdc td').addClass('border_black', 'width_full')
	}
	return {init}
})()