import { useState } from 'react';
import './card.css';
import { UpdateModal } from '../modals/update-modal';
import { Product } from '../../interface/Product';
import { DeleteModal } from '../modals/delete-modal';

interface CardProps {
    id: string | undefined;
    brand: string;
    model: string;
    batch: string;
    quantity: number;
    price: number;
    discount: number;
    imageUrl: string;
}

export function Card({ id, brand, model, batch, quantity, price, discount, imageUrl }: CardProps) {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const handleUpdateModal = () => {
        setIsUpdateModalOpen(prev => !prev);
    }
    const handleDeleteModal = () => {
        setIsDeleteModalOpen(prev1 => !prev1);
    }

    var color: string = '';
    if (quantity < 100) {
        color = 'yellow-text';
    }
    if (quantity < 30) {
        color = 'red-text';
    }

    const product: Product = {
        id,
        brand,
        model,
        batch,
        quantity,
        price,
        discount,
        imageUrl
    }

    return (
        <>
            <div className='card' onClick={handleUpdateModal}>
                <div className='card-image'>
                    <img src={imageUrl}></img>
                </div>
                <div className='card-content'>
                    <h1>{brand} {model}</h1>
                    <h4>Lote: {batch}</h4>
                    <h4>Preco: R${price.toFixed(2)}</h4>
                    <h4>Desconto: R${discount.toFixed(2)}</h4>
                    <h2 className={color}>Quantidade: {quantity}</h2>
                </div>
                <div className='delete-button'>
                    <h1 onClick={handleDeleteModal}>X</h1>
                </div>
            </div>
            {isUpdateModalOpen && <UpdateModal outdatedProduct={product} closeModal={handleUpdateModal} />}
            {isDeleteModalOpen && <DeleteModal product={product} closeModal={handleDeleteModal} />}
        </>
    );
}
