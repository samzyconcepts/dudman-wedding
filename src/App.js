import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Location from './Pages/Location'
import Vendors from './Pages/Vendors'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element=<Home /> />
					<Route path='/location' element=<Location /> />
					<Route path='/vendors' element=<Vendors /> />
				</Routes>
			</Router>
		</div>
	)
}

export default App
