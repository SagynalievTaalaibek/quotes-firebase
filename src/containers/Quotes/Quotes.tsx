import { Link, useParams } from 'react-router-dom';

const Quotes = () => {
  const params = useParams();
  console.log(params.id);


  return (
    <div>
      <h4>Category   {params.id}</h4>
      <Link to={`/quote/${params.id}/edit`} className="btn btn-primary">
        Edit
      </Link>
    </div>
  );
};

export default Quotes;