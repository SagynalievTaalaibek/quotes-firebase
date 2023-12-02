import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <>
      <header className='bg-primary-subtle'>
        <div className='container'>
          <Navbar />
        </div>
      </header>
      <div className="container">
        <div className='row'>
          <div className="col-4">
            <Menu/>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </>
  );
};

export default App;