import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Quotes Central
          </a>
          <button className='navbar-toggler' type='button' onClick={toggleMenu}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Quotes
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/new-quote'
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Submit new quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;