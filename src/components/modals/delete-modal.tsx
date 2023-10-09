import { useEffect } from 'react';
import { Product } from '../../interface/Product';
import './modal.css';
import { removeProduct } from '../../hooks/removeProduct';
import { Card } from '../card/card';

interface ModalProps {
    product: Product;
    closeModal(): void;
}

export function DeleteModal({ product, closeModal }: ModalProps) {
    const { mutate, isSuccess } = removeProduct();
    const remove = () => {
        mutate(product);
    }

    useEffect(() => {
        console.log('isSuccess', isSuccess);
        if (!isSuccess) {
            return;
        }
        closeModal();
    }, [isSuccess]);

    return (
        <div className='modal-overlay'>
            <div className='modal-body'>
                <h1>Tem certeza que deseja remover o produto?</h1>
                <div className='card-deletion'>
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
                </div>
                <div className='buttons-container'>
                    <button onClick={closeModal} className='btn-secondary'>Não</button>
                    <button onClick={remove} className='btn-delete'>Sim</button>
                </div>
            </div>
        </div>
    );
}
