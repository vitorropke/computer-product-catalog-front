import { useEffect, useState } from 'react';
import { updateProduct } from '../../hooks/updateProduct';
import { Product } from '../../interface/Product';
import './modal.css';

interface InputProps {
    label: string;
    value: string | number;
    updatedValue(value: any): void;
}

interface ModalProps {
    outdatedProduct: Product;
    closeModal(): void;
}

const Input = ({ label, value, updatedValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updatedValue(event.target.value)} />
        </>
    );
}

export function UpdateModal({ outdatedProduct, closeModal }: ModalProps) {
    const id = outdatedProduct.id;
    const [brand, setBrand] = useState(outdatedProduct.brand);
    const [model, setModel] = useState(outdatedProduct.model);
    const [batch, setBatch] = useState(outdatedProduct.batch);
    const [quantity, setQuantity] = useState(outdatedProduct.quantity);
    const [price, setPrice] = useState(outdatedProduct.price);
    const [discount, setDiscount] = useState(outdatedProduct.discount);
    const [imageUrl, setImageUrl] = useState(outdatedProduct.imageUrl);

    const { mutate, isSuccess } = updateProduct();
    const update = () => {
        const updatedProduct: Product = {
            id,
            brand,
            model,
            batch,
            quantity,
            price,
            discount,
            imageUrl
        }
        mutate(updatedProduct);
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
                <h1>Atualização de produto</h1>
                <form className='input-container'>
                    <div>
                        <Input label='Fabricante' value={brand} updatedValue={setBrand} />
                        <Input label='Modelo' value={model} updatedValue={setModel} />
                    </div>
                    <div>
                        <Input label='Lote' value={batch} updatedValue={setBatch} />
                        <Input label='Quantidade' value={quantity} updatedValue={setQuantity} />
                    </div>
                    <div>
                        <Input label='Preço' value={price} updatedValue={setPrice} />
                        <Input label='Desconto' value={discount} updatedValue={setDiscount} />
                    </div>
                    <Input label='Imagem' value={imageUrl} updatedValue={setImageUrl} />
                </form>
                <div className='buttons-container'>
                    <button onClick={closeModal} className='btn-secondary'>Cancelar</button>
                    <button onClick={update} className='btn-secondary'>Editar</button>
                </div>
            </div>
        </div>
    );
}
