import { useState } from 'react';
import { useBackend } from './hooks/useBackend';
import Landlords from './components/landlords/Landloirds';
import { Spinner } from 'react-bootstrap';
import useLandlords from './hooks/useLandlord';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const { data, loading, error } = useBackend();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredLandlords = useLandlords({ initialLandlords: data?.landlords || [], searchQuery });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}. Please try again later.</div>;
  }

  return (
    <div className="App">
    <Form className='Search'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Landlord by name</Form.Label>
          <Form.Control className='Form' type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Enter name" />
        </Form.Group>
      </Form>
      { filteredLandlords ? <Landlords landlords={filteredLandlords} /> : <div>No data</div> }
    </div>
  );
}

export default App;