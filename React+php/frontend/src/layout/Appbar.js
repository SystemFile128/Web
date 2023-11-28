import {Link} from 'react-router-dom';
import './bar.css'
export function Appbar()
{
    return(
        <div className="bar">
            <h1>VIT Semester Result</h1>
            <div className="flex-container">
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/result">Result</Link></div>
            
            </div>
        </div>
    )
}