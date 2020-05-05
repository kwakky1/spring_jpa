"use strict"
const adminVue = {
		join:()=>{
			return `<table id="talbe">
					<tr>
					<td id="center" colspan ="4">
						<table id="table2">
		<tr>
			<td>사진 첨부</td>
			<td colspan="4">입력정보</td>
		</tr>
		<tr>
			<td id = image_a rowspan="4">
			<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=
					http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F24524B445932AFEA0CC895">
			</td>
			<td id = name_a>이름</td>
			<td colspan="3">
				<input id="name" type="text">
			</td>
		</tr>
		<tr>
			<td id = position_a>직급</td>
			<td colspan="3">
				<input id="position" type="text">
			</td>
		</tr>
		<tr>
			<td id = phone_a>전화번호</td>
			<td colspan="3">
				<input id="phoneNumber" type="text">
			</td>
		</tr>
		<tr>
			<td id = email_a>이메일</td>
			<td colspan="3">
				<input id="email" type="text">
			</td>
		</tr>
		<tr>
			<td>
				<input id="put_button" type ="button" value="첨부">
			</td>
			<td colspan = "4" id="button_box">
				
				
			</td>
		</table>
					</td>
				</tr>
		
				<tr>	
					<td id="endsecond_a" colspan ="4"></td>
				</tr>
		</table>
		`
		},
		
		login2:()=>{
			return `
			<article>
			<form id="login_box">
				<label>ID </label> <br>
		   		<input id="userid" type="text"> <br>
		   		<label>PASSWORD</label><br>
	   			<input id="password" type="text"><br>
			</form>
		</article>
		`
		},
		detail: ()=>{
			return 
			`
			<table id="table2">
				<tr>
					<td>사진 첨부</td>
					<td colspan="4">입력정보</td>
				</tr>
				<tr>
					<td id = image_a rowspan="4">
					</td>
					<td id = name_a>이름</td>
					<td colspan="3">
						<input id="name_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = userid_a>아이디</td>
					<td colspan="3">
						<input id="userid_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = phoneNumber_a>전화번호</td>
					<td colspan="3">
						<input id="phoneNumber_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = email_a>이메일</td>
					<td colspan="3">
						<input id="email_text" type="text">
					</td>
				</tr>
				<tr>
					<td>
						<input id="put_button" type ="button" value="첨부">
					</td>
					<td colspan = "4">
						<input id="admin_register_button" type ="button" value="등록">
						<input id="admin_cancel_button" type ="button" value="취소">
					</td>
			</table>
			`
		},
		test: ()=>{
			return  "<table id='table2'><tr><td>사진 첨부</td><td colspan='4'>입력정보</td></tr><tr><td id = image_a rowspan='4'><img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F24524B445932AFEA0CC895'></td><td id = name_a>이름</td><td colspan='3'><input id='name' type='text'></td></tr><tr><td id = userid_a>아이디</td><td colspan='3'><input id='userid' type='text'></td></tr><tr><td id = phoneNumber_a>전화번호</td><td colspan='3'><input id='phoneNumber' type='text'></td></tr><tr><td id = email_a>이메일</td><td colspan='3'><input id='email' type='text'></td></tr><tr><td><input id='put_button' type ='button' value='첨부'></td><td colspan = '4'><input id='admin_register_button' type ='button' value='등록'><input id='admin_cancel_button' type ='button' value='취소'></td></table>";
				}
}
	
