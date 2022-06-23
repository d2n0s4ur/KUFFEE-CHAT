import axios from 'axios';
import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import './Edit.css'

function Edit(props) {
	const [inputs, setInputs] = useState({
		nickname: '',
		job: '',
		department: '',
		year: '',
		desc: '',
		tag: ''
	});
	const {nickname, job, department, year, desc, tag} = inputs;

	const onChange = (e) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};

	axios.get("http://localhost:8080/users/"+nickname).then((response)=> {
		console.log(response);
		setInputs(response);
		return (
			<>
				<div className='container'>
					<div className="profile header">
					</div>
					<div className='contents'>
					<Card className="card shadow">
						  <Card.Body>
							  <a href="/"><span className="sendDM">메인화면으로 돌아가기 ▶</span></a>
							  <div className="edit profile">
								<img src="./profile.png" className="edit profile_img" />
								<span name="nickname" className="edit name" >{nickname} 님</span>
							   </div>
							<div className="Edit inputform">
								<span className="Edit inputTag">회사(학교)</span>
								<input name="job" className="Edit input"  placeholder='고려대학교' onChange={onChange} value={job} />
							</div>
							<div className="Edit inputform">
								<span className="Edit inputTag">담당(전공)</span>
								<input name="department" className="Edit input"  placeholder='프론트엔드' onChange={onChange} value={department}></input>
							</div>
							<div className="Edit inputform">
								<span className="Edit inputTag">경력</span>
								<input name="year" className="Edit input"  placeholder='학사 재학(2학년)' onChange={onChange} value={year}></input>
							</div>
							<div className="Edit inputform">
								<span className="Edit inputTag">자기소개</span>
								<input name="desc" className="Edit input"  placeholder='안녕하세요' onChange={onChange} value={desc}></input>
							</div>
							<div className="Edit inputform">
								<span className="Edit inputTag">관심분야</span>
								<input name="tag" className="Edit input"  placeholder='#DevKor #취업 #상담' onChange={onChange} value={tag}></input>
							</div>
							<button className="Editprofile" onClick={()=>{
								axios.put("http://localhost:8080/app/myinfo", {
									nickname: {nickname}['nickname'],
									job: {job}['job'],
									department: {department}['department'],
									year: {year}['year'],
									desc: {desc}['desc'],
									tag: {tag}['tag']
								}).then((response)=>{
									window.location.href="/";
									alert("정상적으로 프로필정보가 등록되었습니다.");
								}).catch((error)=> {
									console.log(error);
									alert("오류가 발생했습니다 : "+error);
									window.location.href="/";
								})
							}}>수정하기</button>
						</Card.Body>
					</Card>
					</div>
				</div>
				
			</>
		);
	}).catch((error)=>{
		window.location.href="/";
		alert("로그인 토큰이 올바르지 않습니다. : " + error);
	})
}

export default Edit;