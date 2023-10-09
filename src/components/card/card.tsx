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
    var color: string = '';
    if (quantity < 100) {
        color = 'yellow-text';
    }
    if (quantity < 30) {
        color = 'red-text';
    }

    return (
        <div className='card'>
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
        </div>
    );
}
