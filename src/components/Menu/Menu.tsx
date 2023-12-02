import { NavLink } from 'react-router-dom';

const categories = [
  { title: 'Star Wars', id: 'star-wars' },
  { title: 'Famous people', id: 'famous-people' },
  { title: 'Saying', id: 'saying' },
  { title: 'Humour', id: 'humour' },
  { title: 'Motivational', id: 'motivational' },
];

const Menu = () => {
  return (
    <nav className='nav d-flex flex-column mt-2'>
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
          to={category.id}
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