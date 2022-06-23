import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import './Profile.css'

function Profile({match}) {
	const {nickname} = useParams();
	axios.get("http://localhost:8080/app/users/"+nickname).then((response)=> {
		console.log(response);
		return (
			<>
				<div className='container'>
					<div className="profile header">
					</div>
					<div className='contents'>
					<Card className="card shadow">
						  <Card.Body>
							  <div className="profile">
								<img src="./profile.png" className="profile_img" />
								<div className="info">
									<span className="name">{response.nickname} 님</span>
								   </div>
								<a href="/"><span className="sendDM">메인화면으로 돌아가기 ▶</span></a>
							   </div>
						   <div className="profile_tag">
								   <span className="profile_job">{response.job}</span>
								<span>{response.department} | {response.year}</span><br/>
								<h5 style={{marginTop: "20px"}}>멘토 소개</h5>
								<p>{response.desc}</p><hr></hr>
								<span>{response.tag}</span>
								<p className="mentostat">이 멘토님은 <span className="activetime">지금 활동중</span> 입니다.</p>
								<button className="DM_button" type="submit">KUFFEE CHAT 신청</button>
							</div>
						</Card.Body>
					</Card>
					</div>
				</div>
				
			</>
		);
	}).catch((error)=>{
		window.location.href="/";
		alert("적절하지 않은 닉네임입니다!");
	})
}

export default Profile;