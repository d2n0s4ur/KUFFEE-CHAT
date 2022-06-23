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
									email: {ID}['ID'],
									password: {PW}['PW']
								}).then((response)=>{
									alert("환영합니다!");
									window.location.href="/";
								}).catch((error)=> {
									console.log(error);
									alert("오류가 발생했습니다 : "+error);
									window.location.href="/LogIn";
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