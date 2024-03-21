import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
    return (
        <nav id="navbar">
            <div id="add-button-wrapper">
                <button id="add-button">
                    +
                </button>
                <span>Add</span>
            </div>
            <ul>
                <li>
                    <Link to='/'>TableView</Link>
                </li>
                <li>
                    <Link to='/Timeline'>
                        TimelineView
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
