import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApiPost from '../../axiosApiPost';
import Preloader from '../../components/Preloader/Preloader';
import QuoteCard from '../../components/QuoteCard/QuoteCard';
import categories from '../../categories';
import { QuoteList } from '../../types';

const Quotes = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<QuoteList>();

  const title = categories.reduce((acc, category) => {
    if (category.id === params.id) {
      acc = category.title;
    } else if (!params.id) {
      acc = 'All';
    }

    return acc;
  }, '');

  const fetchQuoteData = useCallback(async (paramsId: string) => {
    setLoading(true);

    let link: string;

    if (paramsId === "All") {
      link = 'quotes.json';
    } else {
      link = `/quotes.json?orderBy="category"&equalTo="${paramsId}"`;
    }

    try {
      const response = await axiosApiPost.get<QuoteList>(link);

      if (response.data) {
        setQuotes(response.data);
      }
    } catch (e) {
      alert('Error' + e);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteQuote = async (id: string) => {
    setLoading(true);
    try {
      await axiosApiPost.delete('quotes/' + id + '.json');
      for (const key in quotes) {
        if (key === id) {
          delete quotes[key];
        }
      }
    } catch (e) {
      alert('Delete id error' + e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      void fetchQuoteData(params.id);
    } else {
      void fetchQuoteData('All');
    }
  }, [fetchQuoteData, params.id]);



  return (
    <div>
      <h4>{title}</h4>
      <div>
        {quotes && Object.keys(quotes).map((idQuote) => (
          <QuoteCard
            key={idQuote}
            id={idQuote}
            author={quotes[idQuote].author}
            text={quotes[idQuote].text}
            onClick={() => deleteQuote(idQuote)}
          />
        ))}
      </div>
      {loading && <Preloader />}
    </div>
  );
};

export default Quotes;