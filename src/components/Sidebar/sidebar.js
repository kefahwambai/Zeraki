import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Zeraki Dashboard</h2>
      <nav style={{ marginTop: '5rem' }}>
        <h3>MENU</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>
            <Link to="/"><i className="fa fa-dashboard" style={{ fontSize: "25px", marginRight: '1rem' }}></i>Dashboard</Link>
          </li>
          <li>
            <Link to="/schools"><i className='fas fa-school' style={{ fontSize: "25px", marginRight: '1rem' }}></i>Schools</Link>
          </li>
          <li>
            <Link><i className='fas fa-tasks' style={{ fontSize: "25px", marginRight: '1rem' }}></i>My Tasks</Link>
          </li>
          <li>
            <Link>
              <i className='far fa-comments' style={{ fontSize: "25px", marginRight: '1rem', position: 'relative' }}>
                <span className="badge">+5</span>
              </i>Messages
            </Link>
          </li>
        </ul>
        <h3 className='help'>SUPPORT</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>
            <Link><i className='fas fa-cog' style={{ fontSize: "25px", marginRight: '1rem' }}></i>Settings</Link>
          </li>
          <li>
            <Link><i className='fas fa-shield-alt' style={{ fontSize: "25px", marginRight: '1rem' }}></i>Security</Link>
          </li>
          <li>
            <Link><i className='fa fa-question-circle' style={{ fontSize: "25px", marginRight: '1rem' }}></i>Help</Link>
          </li>
          <li>
            <Link className='signout'><i className='fa  fa-sign-out' style={{ fontSize: "25px", marginRight: '1rem' }}></i>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
