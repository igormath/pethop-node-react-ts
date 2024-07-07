import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import defaultImg from '../../assets/produtos/default-image.jpg'
import images from "../../assets/produtos/imagesMap";
import { useEffect, useState } from "react";
import './Cart.css'

interface CartItem {
    productId: number,
    name: string,
    price: number,
}

const Cart = () => {

    useEffect(() => {
            const productLocalStorage = localStorage.getItem('cartItem');
            if (productLocalStorage){
                setProduct(JSON.parse(productLocalStorage));
                localStorage.removeItem('cartItem');
            } else {
                console.error('Nenhum produto encontrado no localStorage.')
            }
    }, [])

    const [product, setProduct] = useState<CartItem | null>(null);
    const [productQuant, setProductQuant] = useState<number>(1);
    
    const getImageSrc = (id: number) => {
        return images[id] || defaultImg
    };

    const increaseQuant = () => {
        setProductQuant(count => count + 1);
    }

    const decreaseQuant = () => {
        if (productQuant > 0){
            setProductQuant(count => count - 1);
        }
    }

    
    return (
    <>
        <Header productQuantity={productQuant}/>
        <main className="product card">
        {product ? (
            <>
                {product.productId < 11 ? 
                (<img className="product__image" src={getImageSrc(product.productId)} alt={`Produto ${product.productId}`}/>) : (
                <img className="product__image" src={defaultImg} alt="Imagem do produto"/>
                )}
                <h3 className="product__name">{ product.name }</h3>
                <p className="product__price">Preço unitário: R${ product.price }</p>
                <p className="product__quant">Quantidade: <span className="product__quant--number">{productQuant}</span></p>
                <p className="product__total-price">Preço total: <span className="product__price-total">{ (product.price * productQuant).toFixed(2) }</span></p>
                <div className="product__btn__container">
                    <button onClick={decreaseQuant} className="product__btn remove">-</button>
                    <button onClick={increaseQuant} className="product__btn add">+</button>
                </div>
                <button className="product__btn finish">Finalizar compra</button>
            </>
        ) : (
            <p>Carregando... </p>
        )}
        </main>
        <Footer/>
    </>
    )
}

export default Cart;
