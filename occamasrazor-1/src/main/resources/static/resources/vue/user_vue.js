"use strict"
const userVue = {
		detail: ()=>{
			return 	`<table id="table2">
				<tr>
					<td>사진 첨부</td>
					<td colspan="7">입력정보</td>
				</tr>
				<tr>
					<td id = image_a rowspan="7">
					</td>
					<td id = userid_a>아이디</td>
					<td colspan="3">
						<input id="userid_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = name_a>이름</td>
					<td colspan="3">
						<input id="name_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = ssn_a>SSN</td>
					<td colspan="3">
						<input id="ssn_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = addr_a>주소</td>
					<td colspan="3">
						<input id="addr_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = email_a>이메일</td>
					<td colspan="3">
						<input id="email_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = phoneNumber_a>폰번호</td>
					<td colspan="3">
						<input id="phoneNumber_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = registerDate_a>등록일</td>
					<td colspan="3">
						<input id="registerDate_text" type="text">
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
}
	
