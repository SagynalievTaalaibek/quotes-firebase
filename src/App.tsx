import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <header className='bg-primary-subtle'>
        <div className='container'>
          <Navbar />
        </div>
      </header>
      <div className='row'>
        <div className="col-4"></div>
        <div className="col-8"></div>
      </div>
    </>
  );
};

export default App;