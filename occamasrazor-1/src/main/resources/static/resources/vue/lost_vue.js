"use strict"
const lostVue = {
		table: ()=>{
			return `<table id="userData">
                        <tr>
                            <td>
                                <a id="number">No.</a>
                            </td>
                            <td>
                                <a id="lostid">분실물ID</a>
                            </td>
                             <td>
                                <a id="lostname">물품명</a>
                            </td>
                           <td>
                                <a id="lostdate">습득일자</a>
                            </td>
                            <td>
                                <a id="lostdivision">분류</a>
                            </td>
                            <td>
                                <a id="lostlocal">습득위치</a>
                            </td>
                        </tr>
                    </table>
			
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
	
