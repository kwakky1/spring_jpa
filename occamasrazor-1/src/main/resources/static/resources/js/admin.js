"use strict"
var admin = admin || {}
admin =(()=>{
	let user_vue;
	let lost_vue;
	let admin_vue;
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`
		lost_vue = `/resources/vue/lost_vue.js`
		admin_vue = `/resources/vue/lost_vue.js`
		onCrate()
	}
	let onCrate = ()=>{
		$('#lost_list')
		 .click(e=>{
			 $.when(
					$.getScript(lost_vue)
					).done(()=>{
					$('#userData').html(lostVue.table)
					setContentView()
					$.getJSON('/losts', d=>{
						$('#total_count').text('총 분실물 수 :' +d.length)
						$.each(d,(i,j)=>{
							$(` <tr>
			                    	 <td>
			                            <span>${i+1}</span>
			                        </td>
			                        <td>
			                            <span id="user_`+(i+1)+`"></span>
			                        </td>
			                       <td>
			                           <span>${j.lostname}</span>
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
			                    .appendTo("#user_"+(i+1))
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
		 })
	
			$.when(
					$.getScript(user_vue)
			).done(()=>{
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
				
			}) // done
		$('#admin_list')
		.click(e=>{
			$.when(
					$.getScript(admin_vue)
					).done(()=>{
						$('#userData').html(adminVue.table())
						setContentView()
					})
		})
		
	}
		let setContentView = ()=>{
			$('#userData tr').first().css({'background-color':'yellow'})
		}
		return {init}
})()

