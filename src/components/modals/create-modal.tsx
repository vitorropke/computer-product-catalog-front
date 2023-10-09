import { useEffect, useState } from 'react';
import { setProduct } from '../../hooks/setProduct';
import { Product } from '../../interface/Product';
import './modal.css';

interface InputProps {
    label: string;
    value: string | number;
    updatedValue(value: any): void;
}

interface ModalProps {
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

export function CreateModal({ closeModal }: ModalProps) {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [batch, setBatch] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const { mutate, isSuccess } = setProduct();
    const submit = () => {
        const product: Product = {
            brand,
            model,
            batch,
            quantity,
            price,
            discount,
            imageUrl
        }
        if (product.imageUrl == '') {
            product.imageUrl = 'https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
        }
        mutate(product);
    }

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        closeModal();
    }, [isSuccess]);

    return (
        <div className='modal-overlay'>
            <div className='modal-body'>
                <h1>Cadastro de produto</h1>
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
                    <button onClick={submit} className='btn-secondary'>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}
