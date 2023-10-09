import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { getProducts } from './hooks/getProducts';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { products } = getProducts();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='container'>
      <div className='card-grid'>
        {products?.map(product =>
          <Card
            key={product.id}
            brand={product.brand}
            model={product.model}
            batch={product.batch}
            quantity={product.quantity}
            price={product.price}
            discount={product.discount}
            imageUrl={product.imageUrl}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}><h1>+</h1></button>
    </div>
  );
}

export default App;
