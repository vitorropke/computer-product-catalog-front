import React, { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { getProducts } from './hooks/getProducts';
import { CreateModal } from './components/modals/create-modal';
import { getProductsBySearchTerm } from './hooks/getProductsBySearchTerm';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const { products } = getProducts();
  const { filteredProducts } = getProductsBySearchTerm(searchTerm);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='container'>
      <form className='search-form'>
        <input className='search-field' type='text' value={searchTerm} onChange={handleInputChange} placeholder='Digite um fabricante, modelo ou lote' />
      </form>
      <div className='card-grid'>
        {searchTerm == '' ? (
          products?.map(product => (
            <Card
              key={product.id}
              id={product.id}
              brand={product.brand}
              model={product.model}
              batch={product.batch}
              quantity={product.quantity}
              price={product.price}
              discount={product.discount}
              imageUrl={product.imageUrl}
            />
          ))
        ) : (
          filteredProducts?.map(product => (
            <Card
              key={product.id}
              id={product.id}
              brand={product.brand}
              model={product.model}
              batch={product.batch}
              quantity={product.quantity}
              price={product.price}
              discount={product.discount}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}><h1>+</h1></button>
    </div>
  );
}

export default App;
