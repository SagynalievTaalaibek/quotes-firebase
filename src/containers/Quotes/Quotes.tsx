import { Link, useParams } from 'react-router-dom';
import categories from '../../categories';

const Quotes = () => {
  const params = useParams();

  const title = categories.reduce((acc, category) => {
    if (category.id === params.id) {
      acc = category.title;
    } else if (!params.id) {
      acc = 'All';
    }

    return acc;
  }, '');


  return (
    <div>
      <h4>{title}</h4>
      <div>
        <Link to={'/quote/{quote.id}/edit'} className='btn btn-primary'>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Quotes;