import { useParams } from 'react-router-dom';

const QuoteForm = () => {
  const params = useParams();

  return (
    <div>
      Quotes Form {params.id}
    </div>
  );
};

export default QuoteForm;