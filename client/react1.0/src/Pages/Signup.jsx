import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState("")
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/register', { name, dob, email, password })
            navigate('/')
            alert('Created Successfully')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Signup Form</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name"></input>
                <input type="date" onChange={(e) => setDob(e.target.value)} value={dob} placeholder="Enter Your Birth Date"></input>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email"></input>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Your Password"></input>
                <button className="submit" type="submit">Submit</button>
                <p>Already Have An Account? <Link to={'/'}>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup;
