import React, { useState } from 'react';
import './SignUp.css';

function SignUp(props) {
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
			<div className="Signform">
				<h6>SignUp</h6>
				<div className="form">
                	<form>
                    	<div className="input_box">
                        	<input className="ID" type="email" placeholder='ID(EMAIL)' onChange={onChange} value={ID} />
							<input className="PW" type="password" placeholder='PW' onChange={onChange} value={PW} />
							<input className="PW" type="password" placeholder='PW Again' onChange={onChange} value={PW_again} />
                   		</div>
						<div className="submit">
                    		<button className="LogIn_Button" type="submit">Register</button>
                    	</div>
                	</form>
            	</div>
			</div>
		</>
    );
}

export default SignUp;