import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp(props) {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		nickname: "",
		job: "",
		department: "",
		year: "",
		desc: "",
		tag: ""
	});
	const {email, password,nickname,job,department,year,desc, tag} = inputs;

	const onChange = (e) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};
    return (
		<>
			<div className="Signform">
				<h6>SignUp</h6>
				<div className="form">
                    	<div className="input_box">
                        	<input name="email" className="ID" type="email" placeholder='ID(EMAIL)' onChange={onChange} value={email} />
							<input name="nickname" className="nick" type="text" placeholder='nickname' onChange={onChange} value={nickname} />
							<input name="password" className="PW" type="password" placeholder='PW' onChange={onChange} value={password} />
							<input name="job"  type="text" placeholder='직업(학교)' onChange={onChange} value={job} />
							<input name="department"  type="text" placeholder='부서(학과)' onChange={onChange} value={department} />
							<input name="year"  type="text" placeholder='경력(학년)' onChange={onChange} value={year} />
							<input name="desc"  type="text" placeholder='자기소개' onChange={onChange} value={desc} />
							<input name="tag"  type="text" placeholder='관심 기술 (#DevKor #Web)' onChange={onChange} value={tag} />
                   		</div>
						<div className="submit">
                    		<button className="LogIn_Button" onClick={()=>{
								// console.log({ID}['ID'], {PW}['PW'], {NICK}['NICK']);
								axios.post("http://localhost:8080/auth/new", {
									email: {email}['email'],
									password: {password}['password'],
									nickname: {nickname}['nickname'],
									job: {job}['job'],
									department: {department}['department'],
									year: {year}['year'],
									desc: {desc}['desc'],
									tag: {tag}['tag']
								}).then((response)=>{
									alert("가입이 완료되었습니다.");
									window.location.href="/LogIn";
								}).catch((error)=> {
									console.log(error);
									alert("오류가 발생했습니다." + error);
									window.location.href="/SignUp";
								})
							}}>Register</button>
                    	</div>
            	</div>
			</div>
		</>
    );
}

export default SignUp;