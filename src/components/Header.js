import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <p style={{color: 'white'}}>Go back home</p>
            </Link>  
        </nav>
    );
}

export default Header;