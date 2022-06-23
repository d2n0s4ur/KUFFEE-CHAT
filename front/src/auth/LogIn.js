import React, { useState } from 'react';
import './LogIn.css';
import axios from 'axios';

function LogIn(props) {
	const [inputs, setInputs] = useState({
		ID: '',
		PW: '',
	});
	const {ID, PW} = inputs;

	const onChange = (e) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};
    return (
		<>
			<div className="LoginForm">
				<h6>Login</h6>
				<div className="form">
                	{/* <form method="post"> */}
                    	<div className="input_box">
						<input name="ID" className="ID" type="email" placeholder='ID(EMAIL)' onChange={onChange} value={ID} />
							<input name="PW" className="PW" type="password" placeholder='PW' onChange={onChange} value={PW} />
                   		</div>
						<a href="/SignUp"><p className='reg'>Register</p></a>
						<div className="submit">
                    		<button className="LogIn_Button" onClick={()=>{
								axios.post("http://localhost:8080/auth/login", {
									email: "cs@korea.ac.kr",
									password: "qwer123"
								}).then((response)=>{
									console.log(response);
								}).catch((error)=> {
									console.log(error);
								})
							}}>login</button>
                    	</div>
                	{/* </form> */}
            	</div>
			</div>
		</>
    );
}

export default LogIn;