import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import LogIn from './LogIn';
import List from '../page/List';

function auth({isLoggedIn}) {
    return (
		<Router>
			<Routes>
				{isLoggedIn ? (
					<Route path="/" element={<List />}></Route>
				) : (
					<Route path="/Login" element={<LogIn />}></Route>
				)}
			</Routes>
		</Router>
    );
}

export default auth;