
import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import './Edit.css'

function Edit(props) {
	const [inputs, setInputs] = useState({
		college: '',
		dname: '',
		year: '',
		desc: '',
		tag: ''
	});
	const {college, dname, year, desc, tag} = inputs;

	const onChange = (e) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};
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
                        	<span className="edit name" >d2n0s4ur 님</span>
               			</div>
						<div className="Edit inputform">
							<span className="Edit inputTag">회사(학교)</span>
							<input name="college" className="Edit input"  placeholder='고려대학교' onChange={onChange} value={college} />
						</div>
						<div className="Edit inputform">
							<span className="Edit inputTag">담당(전공)</span>
							<input name="dname" className="Edit input"  placeholder='프론트엔드' onChange={onChange} value={dname}></input>
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
						<button className="Editprofile" type="submit">수정하기</button>
					</Card.Body>
    			</Card>
				</div>
			</div>
			
		</>
    );
}

export default Edit;