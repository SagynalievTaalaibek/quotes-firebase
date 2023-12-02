import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Quotes from './containers/Quotes/Quotes';
import QuoteForm from './containers/QuoteForm/QuoteForm';
import NotFound from './containers/NotFound';
import categories from './categories';

const App = () => {
  return (
    <>
      <header className='bg-primary-subtle'>
        <div className='container'>
          <Navbar />
        </div>
      </header>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col-4'>
            <Menu />
          </div>
          <div className='col-8'>
            <Routes>
              <Route path={'/'} element={(<Quotes />)} />
              {categories.map((category) => (
                <Route path={'quotes/:id'} element={(<Quotes />)} key={category.id} />
              ))}
              <Route path={'/add-quote'} element={<QuoteForm />} />
              <Route path={'/quote/:id/edit'} element={<QuoteForm />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;