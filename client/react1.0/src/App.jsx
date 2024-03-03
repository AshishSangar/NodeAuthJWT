// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
