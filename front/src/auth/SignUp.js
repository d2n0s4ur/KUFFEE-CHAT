import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp(props) {
	const [inputs, setInputs] = useState({
		ID: '',
		NICK: '',
		PW: '',
	});
	const {ID, NICK, PW} = inputs;

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
                        	<input name="ID" className="ID" type="email" placeholder='ID(EMAIL)' onChange={onChange} value={ID} />
							<input name="NICK" className="nick" type="email" placeholder='nickname' onChange={onChange} value={NICK} />
							<input name="PW" className="PW" type="password" placeholder='PW' onChange={onChange} value={PW} />
                   		</div>
						<div className="submit">
                    		<button className="LogIn_Button" onClick={()=>{
								// console.log({ID}['ID'], {PW}['PW'], {NICK}['NICK']);
								axios.post("http://localhost:8080/auth/new", {
									email: {ID}['ID'],
									password: {PW}['PW'],
									nickname: {NICK}['NICK'],
									job: "",
									department: "",
									year: "",
									desc: ""
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