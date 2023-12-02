import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  author: string;
  text: string;
  onClick: React.MouseEventHandler;
}

const QuoteCard: React.FC<Props> = ({id, author, text, onClick }) => {
  return (
    <div className="card mt-3">
      <div className='card-body'>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <Link to={'/quote/' + id + '/edit'} className='btn btn-primary me-2'>
          Edit
        </Link>
        <button className="btn btn-danger" onClick={onClick}>Delete</button>
      </div>
    </div>
  );
};

export default QuoteCard;