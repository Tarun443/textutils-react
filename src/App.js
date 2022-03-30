import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Alert from './components/Alert';

function App() {
	const [mode, setMode] = useState('light');
	const [clr, setClr] = useState('#24477a');
	const [alert, setAlert] = useState(null); //object

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const setColorB = () => {
		if (mode === 'dark') {
			document.body.style.backgroundColor = '#24477a';
			setClr('#24477a');
		} else {
			setClr('#24477a');
		}
	};

	const setColorR = () => {
		if (mode === 'dark') {
			document.body.style.backgroundColor = '#9d101e';
			setClr('#9d101e');
		} else {
			setClr('#9d101e');
		}
	};

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = clr;
			showAlert('Dark mode has been enabled', 'success');
  
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode has been enabled', 'success');
		}
	};

	return (
		<>
			<Navbar
				title="TextUtilities"
				mode={mode}
				toggle={toggleMode}
				setR={setColorR}
				setB={setColorB}
			/>
			<Alert alert={alert} />
			<Routes>
				<Route exact path="/about" element={<About />}></Route>
				<Route exact path="/contact" element={<Contact />}></Route>
				<Route exact path="/" element={<Textbox mode={mode} showAlert= {showAlert} />}></Route>
			</Routes>
		</>
	);
}

export default App;
