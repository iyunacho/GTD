import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <Link to='/'>TableView</Link>
                </li>

                <li>
                    <Link to='/Timeline'>TimelineView</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
