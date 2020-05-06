"use strict"
var lostVue = {
		table: ()=>{
			return `
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
		},
		detail: ()=>{
			return 	`<table id="table2">
				<tr>
					<td>사진 첨부</td>
					<td colspan="3">입력정보</td>
				</tr>
				<tr>
					<td id = image_a rowspan="5">
					</td>
					<td id = userid_a>분실물 ID</td>
					<td colspan="3">
						<input id="lostid_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = name_a>물품명</td>
					<td colspan="3">
						<input id="lostname_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = ssn_a>날짜</td>
					<td colspan="3">
						<input id="lostdate_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = addr_a>분류</td>
					<td colspan="3">
						<input id="lostdivision_text" type="text">
					</td>
				</tr>
				<tr>
					<td id = email_a>위치</td>
					<td colspan="3">
						<input id="lostlocation_text" type="text">
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
		}
}
	
