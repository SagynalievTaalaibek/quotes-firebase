import { NavLink } from 'react-router-dom';
import categories from '../../categories';


const Menu = () => {
  return (
    <nav className='nav d-flex flex-column'>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          `nav-link  ${
            isPending ? 'pending' : isActive ? 'active text-black' : ''
          }`
        }
      >
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={'quotes/' + category.id}
          key={category.id}
          className={({ isActive, isPending }) =>
            `nav-link  ${
              isPending ? 'pending' : isActive ? 'active text-black' : ''
            }`
          }
        >
          {category.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;