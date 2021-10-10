import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  console.log('sidebar data', SidebarData)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={'nav-menu active'}>
          <ul className='nav-menu-items'>
           {SidebarData.map((item, index) => {
             console.log(`to ${item.path}`)
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;