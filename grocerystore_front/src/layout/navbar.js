import { Link } from 'react-router-dom';
import './nav.css';
export function NavBar()
{
    return(
        <div class="flex-container">
            <div><Link to="/home">Home</Link> </div>
            <div> <Link to="/items"> Browse Items</Link> </div>
            <div><Link to='/allitems'>All Items </Link></div>
            <div><Link to='/bill'>Bill</Link></div>
            <div> Find Items</div>
        </div>
    )
}