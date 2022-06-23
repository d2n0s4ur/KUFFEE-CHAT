import React from 'react';
import Card from 'react-bootstrap/Card';
import './Profile.css'

function Profile(props) {
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
                        		<span className="name">d2n0s4ur 님</span>
                   			</div>
							<a href="/"><span className="sendDM">메인화면으로 돌아가기 ▶</span></a>
               			</div>
					   <div className="profile_tag">
					   		<span className="profile_job">Google Korea</span>
							<span>백엔드 | 1-4년차</span><br/>
							<h5 style={{marginTop: "20px"}}>멘토 소개</h5>
							<p>안녕하세요, 저는 Google Korea 에서 백엔드 특히, 계정 인증과 관련된 부분에서 백엔드를 담당하고 있습니다.<br/><br/> 다양한 프로젝트를 진행하면서 느낀점을 바탕으로 조금 더 넓은 관점으로 다양한 고민에 답해드릴게요!</p>
							<hr></hr>
							<span>#웹 개발 #DevOps #포렌식 #취업 #상담</span>
							<p className="mentostat">이 멘토님은 <span className="activetime">지금 활동중</span> 입니다.</p>
							<button className="DM_button" type="submit">KUFFEE CHAT 신청</button>
						</div>
					</Card.Body>
    			</Card>
				</div>
			</div>
			
		</>
    );
}

export default Profile;