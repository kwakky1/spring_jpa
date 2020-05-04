"use strict"
var admin = admin || {}
admin =(()=>{
	let init = () => {
		onCrate()
	}
	let onCrate = ()=>{
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
                    	e.preventDefault()
                    	alert(`${j.userid}`)
                    })
			}) // each
		}) // getJSON
	}
	let setContentView = ()=>{
		$('#userData tr').first().css({'background-color':'yellow'})
	}
	return {init}
})()

// iife형식
