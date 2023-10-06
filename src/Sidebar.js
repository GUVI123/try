
import React from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  const sidebarItems = [
    { icon: '📊', text: 'Dashboard' },
    { icon: '📅', text: 'Appointments' },
    { icon: '💊', text: 'Medicine Order' },
    { icon: '💬', text: 'Messages' },
    { icon: '💰', text: 'Payments' },
    { icon: '⚙️', text: 'Settings' },
  ];
  return (
    <div className="sidebar">
        <h3 className="dd">Medico sale</h3>    
        <ul className="list-unstyled">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
    
  );
};
export default Sidebar;



