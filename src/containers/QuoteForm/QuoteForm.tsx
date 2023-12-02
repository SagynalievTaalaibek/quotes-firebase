import { useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import categories from '../../categories';
import axiosApiPost from '../../axiosApiPost';
import { Quote } from '../../types';

const QuoteForm = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quote>({
    category: '',
    author: '',
    text: '',
  });

  const fetchQuote = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const response = await axiosApiPost.get<Quote>(
        'quotes/' + id + '.json',
      );

      if (response.data) {
        setQuote(response.data);
      }
    } catch (e) {
      alert('Error' + e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.id) {
      void fetchQuote(params.id);
    }
  }, [fetchQuote, params.id]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (params.id) {
        await axiosApiPost.put('quotes/' + params.id + '.json', quote);
      } else {
        await axiosApiPost.post('quotes.json', quote);
        setQuote({
          category: '',
          author: '',
          text: '',
        });
      }
    } catch (e) {
      alert('Post Form error ' + e);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuote((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  let title = 'Submit new quote';

  if (params.id) {
    title = 'Edit a quote';
  }

  return (
    <div>
      <h4>{title}</h4>
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
          <label htmlFor='text' className='form-label'>
            Text
          </label>
          <textarea
            name='text'
            id='text'
            className='form-control'
            required
            value={quote.text}
            onChange={onChange}
          />
        </div>
        <button className='btn btn-primary'>Save</button>
      </form>
      {loading && <Preloader />}
    </div>
  );
};

export default QuoteForm;