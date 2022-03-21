import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import VsAI from './Pages/VsAI';
import VsFriend from './Pages/VsFriend';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/vs-ai' element={<VsAI />} />
			<Route path='/vs-friend' element={<VsFriend />} />
		</Routes>
	);
}

export default App;
