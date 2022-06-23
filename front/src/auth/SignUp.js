import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp(props) {
	const [inputs, setInputs] = useState({
		ID: '',
		nick: '',
		PW: '',
		PW_again: ''
	});
	const {ID, nick, PW, PW_again} = inputs;

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
                	<form>
                    	<div className="input_box">
                        	<input name="ID" className="ID" type="email" placeholder='ID(EMAIL)' onChange={onChange} value={ID} />
							<input name="nick" className="ID" type="email" placeholder='nickname' onChange={onChange} value={nick} />
							<input name="PW" className="PW" type="password" placeholder='PW' onChange={onChange} value={PW} />
							<input name="PW_again" className="PW" type="password" placeholder='PW Again' onChange={onChange} value={PW_again} />
                   		</div>
						<div className="submit">
						<div className="submit">
                    		<button className="LogIn_Button" onClick={()=>{
								axios.post("http://localhost:8080/auth/new", {
									email: "aa@korea.ac.kr",
									password: "qwer123",
									nickname: "abcd",
									job: "",
									department: "",
									year: "",
									desc: ""
								}).then((response)=>{
									console.log(response);
								}).catch((error)=> {
									console.log(error);
								})
							}}>Register</button>
                    	</div>
                    	</div>
                	</form>
            	</div>
			</div>
		</>
    );
}

export default SignUp;