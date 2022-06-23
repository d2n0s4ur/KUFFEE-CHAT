import React from 'react';
import Card from 'react-bootstrap/Card';
import './List.css'

function List(props) {
    return (
		<>
			<div className='container'>
				<div className="header">
					<span>d2n0s4ur 님을 위한<br/>멘토 입니다</span>
					<p>저는 이런 사람입니다 ▶</p>
				</div>
				<div className='contents'>
				<Card className="card shadow">
      				<Card.Body>
					  	<div className="profile">
                    		<img src="./profile.png" className="profile_img" />
                    		<div className="info">
                        		<span className="name">d2n0s4ur 님</span>
                        		<span className="job">Google Korea</span>
								<span></span>
                   			</div>
               			</div>
					   <div className="tag">
							<span>백엔드 | 1-4년차</span><br/>
							<span>#웹 개발 #DevOps #포렌식 #취업 #상담</span>
						</div>
					</Card.Body>
    			</Card>
				</div>
			</div>
			
		</>
    );
}

export default List;