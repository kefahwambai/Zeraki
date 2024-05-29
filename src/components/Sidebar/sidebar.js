import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Zeraki Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/schools">Schools</Link></li>
        </ul>
      </nav>
    </div>
  );
}
