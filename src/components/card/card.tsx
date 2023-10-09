import './card.css';

interface CardProps {
    brand: string;
    model: string;
    batch: string;
    quantity: number;
    price: number;
    discount: number;
    imageUrl: string;
}

export function Card({ brand, model, batch, quantity, price, discount, imageUrl }: CardProps) {
    return (
        <div className='card'>
            <img src={imageUrl}></img>
            <h1>{brand} {model}</h1>
            <h3>Lote: {batch}</h3>
            <h3>Preco: R${price}</h3>
            <h3>Desconto: R${discount}</h3>
            <h2>Quantidade: {quantity}</h2>
        </div>
    );
}
