import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AppWrapper from './state';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'stream-chat-react/dist/css/index.css';

function App() {
	return (
		<AppWrapper>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</AppWrapper>
	);
}

export default App;
