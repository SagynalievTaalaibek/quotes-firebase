import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import categories from '../../categories';
import { Quote } from '../../types';

const QuoteForm = () => {
  const params = useParams();
  const [quote, setQuote] = useState<Quote>({
    category: '',
    author: '',
    quoteText: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuote((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(quote);
  };


  let title = 'Submit new quote';

  if (params.id) {
    title = 'Edit quote';
  }

  return (
    <div>
      <h4>{title} {params.id}</h4>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <select
            className='form-select'
            name='category'
            value={quote.category}
            id='category'
            required={true}
            onChange={onChange}
          >
            <option value=''>Choose category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>{category.title}</option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='author' className='form-label'>
            Author
          </label>
          <input
            type='text'
            name='author'
            id='author'
            className='form-control'
            required
            value={quote.author}
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='quoteText' className='form-label'>
            Quote text
          </label>
          <textarea
            name='quoteText'
            id='quoteText'
            className='form-control'
            required
            value={quote.quoteText}
            onChange={onChange}
          />
        </div>
        <button className='btn btn-primary'>Save</button>
      </form>
    </div>
  );
};

export default QuoteForm;