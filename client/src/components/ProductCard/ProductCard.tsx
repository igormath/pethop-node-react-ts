import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from '../../assets/produtos/default-image.jpg'
import './ProductCard.css'
import images from "../../assets/produtos/imagesMap";

interface ProductCardComponents {
    key: number,
    productId: number,
    name: string,
    price: number,
}

interface CartItem {
    productId: number,
    name: string,
    price: number,
}

const ProductCard: FunctionComponent<ProductCardComponents> = ({productId, name, price}) => {
    const navigate = useNavigate();
    const getImageSrc = (id: number) => {
        return images[id] || defaultImg
    };

    const handleButtonComprar = () => {
        const cartItem: CartItem = {
            productId: productId,
            name: name,
            price: price,
        }

        localStorage.setItem('cartItem', JSON.stringify(cartItem));

        navigate('/cart');
    }

    return (
    <li className="product">
        {productId < 11 ? <img className="product__image" src={getImageSrc(productId)} alt={`Produto ${productId}`}/> : <img className="product__image" src={defaultImg} alt="`Produto ${productId}`"/>}
        <h3 className="product__name">{name}</h3>
        <p className="product__price">R${ price }</p>
        <button className="product__btn" onClick={handleButtonComprar}>Comprar</button>
    </li>
    )
}

export default ProductCard;
