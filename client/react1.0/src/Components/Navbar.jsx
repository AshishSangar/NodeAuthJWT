import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <div className='Navbar'>
            <nav className="navbar">
                <h1>ELANSOL</h1>
                {(isUserSignedIn) ? (
                    <>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/home'}>Home</Link>
                        <button className="signout" onClick={handleLogout}>Signout</button>
                    </>
                ) : (
                    <>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Login</Link>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/signup'}>Signup</Link>
                    </>
                )}
            </nav>
        </div>
    )
}

export default Navbar
