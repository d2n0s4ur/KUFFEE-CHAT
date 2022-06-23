import React, { useState } from 'react';
import './LogIn.css';

function LogIn(props) {
	const [inputs, setInputs] = useState({
		ID: '',
		PW: '',
		PW_again: ''
	});
	const {ID, PW, PW_again} = inputs;

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
                	<form>
                    	<div className="input_box">
						<input className="ID" type="email" placeholder='ID(EMAIL)' onChange={onChange} value={ID} />
							<input className="PW" type="password" placeholder='PW' onChange={onChange} value={PW} />
                   		</div>
						<a href="/SignUp"><p className='reg'>Register</p></a>
						<div className="submit">
                    		<button className="LogIn_Button" type="submit">login</button>
                    	</div>
                	</form>
            	</div>
			</div>
		</>
    );
}

export default LogIn;