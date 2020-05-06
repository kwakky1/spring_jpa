"use strict"
var admin = admin || {}
admin =(()=>{
	let user_vue;
	let lost_vue;
	let admin_vue;
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`;
		lost_vue = `/resources/vue/lost_vue.js`;
		admin_vue = `/resources/vue/admin_vue.js`;
		onCrate()
	}
	let onCrate = ()=>{

			$.when(
					$.getScript(lost_vue),$.getScript(admin_vue),$.getScript(user_vue)
			).done(()=>{
				$('#user_list').click(e=>{
					$("#user_list").addClass('active')
		            $("#admin_list").removeClass('active')
		            $("#lost_list").removeClass('active')	
				
				setContentView()
				$.getJSON('/users', d =>{
					$('#total_count').text('총 회원수 :' +d.length)
					$.each(d,(i,j)=>{
						$(` <tr>
		                    	 <td>
		                            <span>${i+1}</span>
		                        </td>
		                        <td>
		                            <span>${j.userid}</span>
		                        </td>
		                         <td>
		                            <span id="user_`+(i+1)+`"></span>
		                        </td>
		                       <td>
		                           <span>${j.ssn}</span>
		                        </td>
		                        <td>
		                           <span>${j.email}</span>
		                        </td>
		                        <td>
		                            <span>${j.phoneNumber}</span>
		                        </td>
		                        <td>
		                           <span>${j.registerDate}</span>
		                        </td>
		                    </tr>`).appendTo('#userData')
		                    $(`<a>${j.name}</a>`)
		                    .css({cursor:'pointer', color:'blue'})
		                    .appendTo("#user_"+(i+1))
		                    .click(e=>{
		                    	$('#userData').empty()
		                    	$(userVue.detail())
		                    	.appendTo('#userData')
		                    	e.preventDefault();
		                    	$.getJSON(`/users/${j.userid}`,d=>{
		                    		$('#userid_text').val(d.userid)
		                    		$('#name_text').val(d.name)
		                    		$('#ssn_text').val(d.ssn)
		                    		$('#addr_text').val(d.addr)
		                    		$('#email_text').val(d.email)
		                    		$('#phoneNumber_text').val(d.phoneNumber)
		                    		$('#registerDate_text').val(d.registerDate)
		                    	})
			              })
					}) // each
				}) // getJSON
			})
		$('#lost_list')
		 .click(e=>{
			$("#user_list").removeClass('active')
            $("#admin_list").removeClass('active')
            $("#lost_list").addClass('active')
			$('#userData').html(`
			<tr>
                            <td>
                                <span>No.</span>
                            </td>
                            <td>
                                <span>분실물ID</span>
                            </td>
                             <td>
                                <span>물품명</span>
                            </td>
                           <td>
                                <span>습득일자</span>
                            </td>
                            <td>
                                <span>분류</span>
                            </td>
                            <td>
                                <span>습득위치</span>
                            </td>
                        </tr>
			`		
			)
			setContentView()
			$.getJSON('/losts', d=>{
				$('#total_count').text('총 분실물 수 :' +d.length)
				$.each(d,(i,j)=>{
					$(` <tr>
	                    	 <td>
	                            <span>${i+1}</span>
	                        </td>
	                        <td>
	                            <span> ${j.lostid}</span>
	                        </td>
	                       <td>
	                           <span id ="lost_`+(i+1)+`"> </span>
	                        </td>
	                        <td>
	                           <span>${j.lostdate}</span>
	                        </td>
	                        <td>
	                            <span>${j.lostdivision}</span>
	                        </td>
	                        <td>
	                           <span>${j.lostlocation}</span>
	                        </td>
	                    </tr>`).appendTo('#userData')
	                    
	                    $(`<a>${j.lostname}</a>`)
	                    .css({cursor:'pointer', color:'blue'})
	                    .appendTo("#lost_"+(i+1))
	                    .click(e=>{
	                    	$('#userData').empty()
	                    	$(lostVue.detail())
	                    	.appendTo('#userData')
	                    	e.preventDefault();
	                    	$.getJSON(`/losts/${j.lostname}`,d=>{
	                    		$('#lostid_text').val(d.lostid)
	                    		$('#lostname_text').val(d.lostname)
	                    		$('#lostdate_text').val(d.lostdate)
	                    		$('#lostdivision_text').val(d.lostdivision)
	                    		$('#lostlocation_text').val(d.lostlocation)
	                    	})
		              })
				})
			})
		 })
		 $('#admin_list')
		 .click(e=>{
			 $("#user_list").removeClass('active')
             $("#admin_list").addClass('active')
             $("#lost_list").removeClass('active')
			 $('#userData')
			 .html(`
					 <tr>
						 <td>
							 <span>No.</span>
				        </td>
				        <td>
				            <span>사번</span>
				        </td>
				         <td>
				            <span>이름</span>
				        </td>
				       <td>
				            <span>직급</span>
				        </td>
				        <td>
				            <span>연락처</span>
				        </td>
				        <td>
				            <span>이메일</span>
				        </td>
				        <td>
				            <span>입사일</span>
				        </td>
				    </tr>
			 `)
			 setContentView()
			 $.getJSON('/admins',d=>{
				 $('#total_count').text('총 직원수 :' +d.length)
				 $.each(d,(i,j)=>{
					 $(` <tr>
	                    	 <td>
	                            <span>${i+1}</span>
	                        </td>
	                        <td>
	                            <span>${j.employNumber}</span>
	                        </td>
	                         <td>
	                            <span id="admin_`+(i+1)+`"></span>
	                        </td>
	                       <td>
	                           <span>${j.position}</span>
	                        </td>
	                        <td>
	                           <span>${j.phoneNumber}</span>
	                        </td>
	                        <td>
	                            <span>${j.email}</span>
	                        </td>
	                        <td>
	                           <span>${j.registerDate}</span>
	                        </td>
	                    </tr>`).appendTo('#userData')
	                   $(`<a>${j.name}</a>`)
	                   .css({cursor:'pointer', color:'blue'})
	                   .appendTo("#admin_"+(i+1))
	                   .click(e=>{
	                	   $('#userData').empty()
	                    	$(adminVue.detail())
	                    	.appendTo('#userData')
	                    	e.preventDefault()
	                    	$.getJSON(`/admins/${j.employNumber}`,d=>{
	                    		$('#employNumber_text').val(d.employNumber)
	                    		$('#name_text').val(d.name)
	                    		$('#position_text').val(d.position)
	                    		$('#phoneNumber_text').val(d.phoneNumber)
	                    		$('#email_text').val(d.email)
	                    		$('#registerDate_text').val(d.registerDate)
	                    	})
	                   })
					 
				 })
			 })
		 })
	}) // done
	}
		let setContentView = ()=>{
			$('#userData tr').first().css({'background-color':'yellow'})
		}
		return {init}
})()

